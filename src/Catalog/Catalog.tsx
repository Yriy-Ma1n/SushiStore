import "./Catalog.css";
import { FilterCatalog } from "./FilterCatalog/FilterCatalog";


export function Catalog(){


    return (<div className="CatalogSection">
        <FilterCatalog/>
    </div>);
}