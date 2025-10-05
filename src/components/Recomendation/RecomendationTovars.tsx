import { useState } from "react"
import styles from "./Recomendation.module.css"

export default function Recomendations() {
    const [name, setName] = useState('All')


    const changeTypeOfSection = (event: React.MouseEvent) => {
        const text = (event.target as HTMLButtonElement).textContent

        setName(text)
    }


    return <div className={styles.mainButtonSection}>
        <div className={styles.buttonSection} onClick={(event: React.MouseEvent) => changeTypeOfSection(event)}>
            <button className={name === 'All' ? styles.selected : ''}>All</button>
            <button className={name === 'Popular' ? styles.selected : ''}>Popular</button>
            <button className={name === 'New Arrivals' ? styles.selected : ''}>New Arrivals</button>
            <button className={name === 'Specials' ? styles.selected : ''}>Specials</button>
        </div>
    </div>
}