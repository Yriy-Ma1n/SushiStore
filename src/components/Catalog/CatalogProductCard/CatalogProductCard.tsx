import type { Product } from "../../../Types/Product"
import "./CatalogProductCard.css";

export function CatalogProductCard(props:Product){

    
    return(<div className="productCardBlock">
        <img src={props.img} alt="Product image" />
        <div className="information">
            <p className="title">{props.name}</p>
            <p className="subtitle">{props.description.slice(0,60)}...</p>
        </div>
    </div>)
}