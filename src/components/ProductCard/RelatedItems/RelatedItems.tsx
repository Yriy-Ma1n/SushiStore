import { useSelector } from "react-redux"
import type { RootState } from "../../../store"
import { useEffect } from "react"
import ProductTile from "../../ProductTile/ProductTile"
import style from "./RelatedItems.module.css"

export function RelatedItems() {
    const data = useSelector((state: RootState) => state.product)
    useEffect(() => {

    }, [])
    return <div className={style.container}>
        <h1 className={style.related}>Related items</h1>
        <div className={style.tile}>
            {data.slice(0, 5).map(item =>
                <ProductTile img={item.img} name={item.name} shortDesc={item.description.slice(0, 40)} />
            )}
        </div>

    </div>

}