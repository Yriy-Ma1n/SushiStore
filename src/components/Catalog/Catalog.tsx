import { memo, useEffect, useState } from "react";
import "./Catalog.css";
import CatalogProductCard from "./CatalogProductCard/CatalogProductCard";
import { FilterCatalog } from "./FilterCatalog/FilterCatalog";
import type { Product } from "../../Types/Product";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setItems } from "../../features/product/productSlice";
import type { RootState } from "../../store";

export const Catalog = memo(() => {
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.product);
  let [renderProducts, setRenderProducts] = useState<Product[]>([]);
  const [propData, setPropData] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const limit: number = 12;
  const total: number = products.length;

  async function requestCatalogProducts() {
    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "GET",
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setPropData(data);
      dispatch(setItems(data));
      setRenderProducts(products.slice(0, limit));
    } catch (err) {
      console.error(`Fetch reqest has problems:`, err);
    }
  }

  useEffect(() => {
    requestCatalogProducts();
  }, []);

  function changePage() {
    setRenderProducts(products.slice(limit * page - limit, limit * page));
  }

  useEffect(() => {
    changePage();
  }, [page, products]);

  if(products.length === 0){
    return <Loading />
  }else {

  return (
    <div className="CatalogSection">
      <div className="filterZone">
        <h1>Sushi</h1>
        <FilterCatalog {...propData} />
      </div>
      <div className="productZone">
        {renderProducts.map((item) => (
          <Link to={`/product/${item.id}`}>
            <div className="item" key={item.id}>
            <CatalogProductCard {...item} />
          </div>
          </Link>
        ))}
      </div>

      <div className="catalogPagination">
        <button
          disabled={page === 1}
          onClick={() => {
            setPage((current) => current - 1);
          }}
          className="arrowLeft"
        >
          Prev
        </button>
        {Array.from({ length: Math.ceil(total / limit) }, (_, i) => (
          <button
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active" : "disable"}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={page === Math.ceil(total / limit)}
          onClick={() => setPage((current) => current + 1)}
          className="arrowRight"
        >
          Next
        </button>
      </div>
    </div>
  );
}
})
