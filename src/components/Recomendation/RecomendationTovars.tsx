import { useEffect, useState } from "react"
import styles from "./Recomendation.module.css"
import ProductTile from "../ProductTile/ProductTile"
import type { Product } from "../../Types/Product"
let backupArr: Product[] = []

export default function Recomendations() {
    const [name, setName] = useState('All')
    const [products, setProducts] = useState<Product[]>([])



    const changeTypeOfSection = (event: React.MouseEvent) => {

        const text = (event.target as HTMLButtonElement).textContent
        if (text === 'Popular') {
            setProducts(products.filter(item => item.popular))
        } else if (text === 'All') {

            setProducts(backupArr)

        } else if (text === 'New Arrivals') {
            const now = new Date();

            const newdata = backupArr.filter(item => {
                const DataBasedate = new Date(item.created_at);
                const differentMs = now.getTime() - DataBasedate.getTime()
                const diffDays = differentMs / (1000 * 60 * 60 * 24);
                return diffDays < 7 ? item : false

            })
            
            setProducts(newdata)
        }

        setName(text)


    }

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                backupArr = data

            })
    }, [])


    return <div className={styles.mainButtonSection}>
        <div className={styles.buttonSection} onClick={(event: React.MouseEvent) => changeTypeOfSection(event)}>
            <button className={name === 'All' ? styles.selected : ''}>All</button>
            <button className={name === 'Popular' ? styles.selected : ''}>Popular</button>
            <button className={name === 'New Arrivals' ? styles.selected : ''}>New Arrivals</button>
            <button className={name === 'Specials' ? styles.selected : ''}>Specials</button>
        </div>
        <div className={styles.gridTiles}>
            {products.map(item => {
                return <ProductTile
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    shortDesc={item.description.slice(0, 30)} />
            })}
        </div>
    </div>
}