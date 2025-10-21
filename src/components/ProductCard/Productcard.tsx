import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Product } from "../../Types/Product"
import styles from "./Productcart.module.css"
import ProductAttribute from "./productAttribute/productAttribute"

export default function ProductCart() {
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data[0])
                console.log(data[0])
            })
    }, [])
    if (product && Object.keys(product).length === 0) {
        return <div>Tovar not found</div>
    } else {
        return <div className={styles.container}>
            <div className={styles.upperContent}>
                <div className={styles.imageSide}>
                    <img src={product?.img} alt="Tovar Image" />
                </div>
                <div className={styles.contentSide}>
                    <h1 className={styles.name}>{product?.name}</h1>
                    <p className={styles.description}>{product?.description}</p>
                    <div className={styles.largeDesc}>
                        <ProductAttribute attribute={product?.products_attributes!}/>
                        {/* {product?.products_attributes.map(item => {
                            return <div key={item.attribute_id} className={styles.containerDesc}>
                                <p className={styles.leftDesc}>
                                    {item.name_of_attribute}
                                </p>
                                <p className={styles.rightDesc}>
                                    {item.value} {item.value.length === 2 ? 'Шт' : 'Грам'}
                                </p>
                            </div>
                        })} */}
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
            <div className={styles.lowerContent}></div>
        </div>
    }


}  