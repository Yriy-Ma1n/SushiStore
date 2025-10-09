import { useEffect, useState } from "react";
import "./Catalog.css";
import { CatalogProductCard } from "./CatalogProductCard/CatalogProductCard";
import { FilterCatalog } from "./FilterCatalog/FilterCatalog";
import type { Product } from "../Types/Product";


export function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);

    async function requestCatalogProducts(){
        try{
            const res = await fetch("http://localhost:3000/products",{method:"GET"});
            if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            setProducts(data);
            console.log(data);
        }
        catch(err){
            console.error(`Fetch reqest has problems:`, err);
        }
    }

    useEffect(()=>{
        requestCatalogProducts();
    }, []);


    return (<div className="CatalogSection">
        <div className="filterZone">
            <h1>Sushi</h1>
            <FilterCatalog/>
        </div>
        <div className="productZone">
            {products.map(item => <div className="item" key={item.id}> <CatalogProductCard {...item}/> </div>)}
        </div>
    </div>);
}