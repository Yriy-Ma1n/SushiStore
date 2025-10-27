import styles from "./Count.module.css"

export default function Count(props: { count: number, plusBtn:()=>void, minusBtn:()=>void }) {


    return <div className={styles.buttonsCount}>

        <button className={styles.addButton} onClick={props.plusBtn}>
            <span className="material-symbols-outlined">
                add
            </span>
        </button>

        <p>{props.count}</p>

        <button className={styles.minusButton} onClick={props.minusBtn}>
            <span className="material-symbols-outlined">
                check_indeterminate_small
            </span>
        </button>

    </div>
}