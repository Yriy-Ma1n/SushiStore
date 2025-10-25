import { useState } from "react"
import styles from "./CartTile.module.css"

export default function CartTile(props: { src: string, name: string, cost: string, amount: number, allamount:number }) {
    const [cost, setConst] = useState(props.cost)
    const [count, setCount] = useState(props.amount)

    return <div className={styles.TileContainer}> {/*flex space-between*/}
        <div className={styles.leftSide}>
            <img src={props.src} alt="img" />
            <div className={styles.info}>
                <h2>{props.name}</h2>
                <p>{props.allamount} pieces</p>
                <h3>${cost}</h3>
            </div>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.buttonsCount}>

                <button className={styles.addButton}>
                    <span className="material-symbols-outlined">
                        add
                    </span>
                </button>

                <p>{count}</p>

                <button className={styles.minusButton}>
                    <span className="material-symbols-outlined">
                        check_indeterminate_small
                    </span>
                </button>

            </div>
        </div>
    </div>
}