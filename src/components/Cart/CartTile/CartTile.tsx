import { useState } from "react"
import styles from "./CartTile.module.css"
import Count from "./Count/Count"

export default function CartTile(props: { src: string, name: string, cost: string, amount: number, allamount: number }) {
    const [cost, setCost] = useState(props.cost)
    const [count, setCount] = useState(props.amount)
    const [defaultCost] = useState(props.cost)

    const plusButton = () => {
        setCount(curr => curr + 1)
        setCost((curr) => curr = String(+defaultCost + +cost) + '.00')
    }

    const minusButton = () => {
        if(count === 1) return
        setCount(curr => curr - 1)
        setCost((curr) => curr = String(+curr - +defaultCost) + '.00')
       
    }

    return <div className={styles.TileContainer}>
        <div className={styles.leftSide}>
            <img src={props.src} alt="img" />
            <div className={styles.info}>
                <h2>{props.name}</h2>
                <p>{props.allamount} pieces</p>
                <h3>${cost}</h3>
            </div>
        </div>
        <div className={styles.rightSide}>
            <Count count={count} plusBtn={plusButton} minusBtn={minusButton} />
        </div>
    </div>
}