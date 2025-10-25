import { useEffect, useState } from "react"
import styles from "./Recomendation.module.css"
import ProductTile from "../ProductTile/ProductTile"
import type { Product } from "../../Types/Product"
import PaginationMainPage from "./PaginationCount/Pagination"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setItems } from "../../features/product/productSlice"
import Loading from "../Loading/Loading"
let backupArr: Product[] = []
let currCategoryBackUp: Product[] = []

export default function Recomendations() {
    const [name, setName] = useState('All')
    const [products, setProducts] = useState<Product[]>([])
    const dispatch = useDispatch()


    const changeTypeOfSection = (event: React.MouseEvent) => {

        const text = (event.target as HTMLButtonElement).textContent

        if (text === 'Popular') {

            setProducts(products.filter(item => item.popular))

        } else if (text === 'All') {

            setProducts(currCategoryBackUp)

        } else if (text === 'New Arrivals') {
            // const now = new Date();

            // const newdata = currCategoryBackUp.filter(item => {
            //     const DataBasedate = new Date(item.created_at);
            //     const differentMs = now.getTime() - DataBasedate.getTime()
            //     const diffDays = differentMs / (1000 * 60 * 60 * 24);
            //     return diffDays < 7 ? item : false

            // })

            // setProducts(newdata)
            return
        }else{
            return
        }

        setName(text)


    }

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then(res => res.json())
            .then(data => {
                const firstItem = data.slice(0, 8)
                setProducts(firstItem)
                backupArr = data
                currCategoryBackUp = firstItem
                dispatch(setItems(data))
            })

    }, [])


    const setPage = (i: number) => {
        const arr = backupArr.slice(8 * i - 8, 8 * i)
        setProducts(arr)
        currCategoryBackUp = arr
    }
    if (products.length === 0) {
        return <Loading />
    } else {
        return <div className={styles.mainButtonSection}>
            <div className={styles.buttonSection} onClick={(event: React.MouseEvent) => changeTypeOfSection(event)}>
                <button className={name === 'All' ? styles.selected : ''}>All</button>
                <button className={name === 'Popular' ? styles.selected : ''}>Popular</button>
                <button className={name === 'New Arrivals' ? styles.selected : styles.notwork}>New Arrivals</button>
                <button className={name === 'Specials' ? styles.selected : styles.notwork}>Specials</button>
            </div>
            <div className={styles.gridTiles}>
                {products.map(item => {
                    return <Link to={`/product/${item.id}`} key={item.id}>
                        <ProductTile
                            img={item.img}
                            name={item.name}
                            shortDesc={item.description.slice(0, 30)}
                        />
                    </Link>
                })}
            </div>
            {
                backupArr.length < 8
                    ? null
                    : <PaginationMainPage backupArr={backupArr} setPage={setPage} />
            }

        </div>
    }



}