import type { attribute } from "./ProductAttribute";

export interface Product {
    id: string,
    name: string,
    price: number,
    img: string,
    description: string,
    created_at: string,
    products_attributes: attribute[],
    popular:boolean
}