import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import ProductTile from "../../ProductTile/ProductTile";
import style from "./RelatedItems.module.css";
import { useEffect, useState } from "react";
import type { Product } from "../../../Types/Product";

export function RelatedItems(props: { name: string }) {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/related/${props.name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(props.name);
        setData(data);
      });
  }, [props.name ? props.name : null]);

  return (
    <div className={style.container}>
      <h1 className={style.related}>Related items</h1>
      <div className={style.tile}>
        {data
          ? data.map((item) => (
              <ProductTile
                key={item.id}
                img={item.img}
                name={item.name}
                shortDesc={item.description.slice(0, 40)}
              />
            ))
          : false}
      </div>
    </div>
  );
}
