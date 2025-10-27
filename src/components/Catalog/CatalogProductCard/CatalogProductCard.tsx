import type { Product } from "../../../Types/Product"
import "./CatalogProductCard.css";
import { memo } from "react";
export default memo(function CatalogProductCard(props: Product) {


    return (<div className="productCardBlock">
        <img src={props.img} alt="Product image" />
        <div className="information">
            <p className="title">{props.name}</p>
            <p className="subtitle">{props.description.slice(0, 60)}...</p>
        </div>
    </div>)
})