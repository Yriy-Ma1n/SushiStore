import styles from "./ProductTile.module.css"

export default function ProductTile(props: { img: string, name: string, shortDesc: string}) {
    return <div className={styles.productContainer}>
        <img src={props.img} alt="Sushi Image" className={styles.img} />
        <h1 className={styles.name}>{props.name}</h1>
        <p className={styles.shortDesc}>{props.shortDesc}</p>
    </div>
}