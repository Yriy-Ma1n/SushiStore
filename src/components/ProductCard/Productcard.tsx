import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../Types/Product";
import styles from "./Productcart.module.css";
import ProductAttribute from "./productAttribute/productAttribute";
import { RelatedItems } from "./RelatedItems/RelatedItems";

export default function ProductCart() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  const productRequest = async () => {
    const res = await fetch(`http://localhost:3000/products/${id}`);
    const data = await res.json();
    setProduct((prod) => (prod = data[0]));
  };

  useEffect(() => {
    productRequest();
  }, []);

  if (product && Object.keys(product).length === 0) {
    return <div>Tovar not found</div>;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.upperContent}>
          <div className={styles.imageSide}>
            <img src={product?.img} alt="Tovar Image" />
          </div>
          <div className={styles.contentSide}>
            <h1 className={styles.name}>{product?.name}</h1>
            <p className={styles.description}>{product?.description}</p>
            <div className={styles.largeDesc}>
              <ProductAttribute attribute={product?.products_attributes!} />
            </div>
            <div className={styles.costBuy}>
              <h1>{product?.price} Грн</h1>
              <button className={styles.buy}>
                <span className="material-symbols-outlined">
                  shopping_cart_checkout
                </span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className={styles.lowerContent}>
          <RelatedItems name={product?.name ? product.name : "asd"} />
        </div>
      </div>
    );
  }
}
