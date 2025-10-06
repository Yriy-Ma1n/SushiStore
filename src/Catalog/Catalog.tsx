import "./Catalog.css";
import { CatalogProductCard } from "./CatalogProductCard/CatalogProductCard";
import { FilterCatalog } from "./FilterCatalog/FilterCatalog";


export function Catalog(){


    return (<div className="CatalogSection">
        <div className="filterZone">
            <h1>Sushi</h1>
            <FilterCatalog/>
        </div>
        <div className="ProductZone">
            <CatalogProductCard/>
        </div>
    </div>);
}