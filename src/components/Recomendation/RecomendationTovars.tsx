import { useEffect, useState } from "react"
import styles from "./Recomendation.module.css"
import ProductTile from "../ProductTile/ProductTile"
import type { Product } from "../../Types/Product"

export default function Recomendations() {
    const [name, setName] = useState('All')
    const [products, setProducts] = useState<Product[]>([])


    const changeTypeOfSection = (event: React.MouseEvent) => {
        const text = (event.target as HTMLButtonElement).textContent

        setName(text)
    }

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
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
                    img={item.img}
                    name={item.name}
                    shortDesc={item.description.slice(0, 30)} />
            })}
            {/* <ProductTile img="https://www.kindernetz.de/sendungen/schmecksplosion/1712332657170%2Cimage-knet-4154~_v-1x1@2dL_-029cdd853d61a51824ed2ee643deeae504b065c1.jpg" name="Arrials sushi" shortDesc="lorem ipsum dolor what the img" />
            <ProductTile img="https://www.kindernetz.de/sendungen/schmecksplosion/1712332657170%2Cimage-knet-4154~_v-1x1@2dL_-029cdd853d61a51824ed2ee643deeae504b065c1.jpg" name="Arrials sushi" shortDesc="lorem ipsum dolor what the img" />
            <ProductTile img="https://www.kindernetz.de/sendungen/schmecksplosion/1712332657170%2Cimage-knet-4154~_v-1x1@2dL_-029cdd853d61a51824ed2ee643deeae504b065c1.jpg" name="Arrials sushi" shortDesc="lorem ipsum dolor what the img" />
            <ProductTile img="https://www.kindernetz.de/sendungen/schmecksplosion/1712332657170%2Cimage-knet-4154~_v-1x1@2dL_-029cdd853d61a51824ed2ee643deeae504b065c1.jpg" name="Arrials sushi" shortDesc="lorem ipsum dolor what the img" />
            <ProductTile img="https://www.kindernetz.de/sendungen/schmecksplosion/1712332657170%2Cimage-knet-4154~_v-1x1@2dL_-029cdd853d61a51824ed2ee643deeae504b065c1.jpg" name="Arrials sushi" shortDesc="lorem ipsum dolor what the img" />
            <ProductTile img="https://www.kindernetz.de/sendungen/schmecksplosion/1712332657170%2Cimage-knet-4154~_v-1x1@2dL_-029cdd853d61a51824ed2ee643deeae504b065c1.jpg" name="Arrials sushi" shortDesc="lorem ipsum dolor what the img" />
            <ProductTile img="https://www.kindernetz.de/sendungen/schmecksplosion/1712332657170%2Cimage-knet-4154~_v-1x1@2dL_-029cdd853d61a51824ed2ee643deeae504b065c1.jpg" name="Arrials sushi" shortDesc="lorem ipsum dolor what the img" /> */}
        </div>
    </div>
}