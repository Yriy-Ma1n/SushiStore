import styles from "./Cart.module.css"
import CartTile from "./CartTile/CartTile"
let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrk-OAZ1ZyxOEvkumbEnrKunDHrbCKFP9sg&s"
export default function Cart() {
    return <div className={styles.container}>
        <div className={styles.titleInfo}>
            <div className={styles.title}>
                Your Cart
            </div>
            <div className={styles.info}>
                <CartTile name="Salmon Nigiri" cost="10.00" src={img} amount={1} allamount={50}/>
            </div>
        </div>
        <div className={styles.infoAboutOrder}>
            <h1 className={styles.OrderTitle}>Order Summary</h1>
            <div className={styles.OrderInfo}>
                <p>Subtotal</p>
                <p>$25.00</p>
            </div>
            <div className={styles.OrderInfo}>
                <p>Delivery Free</p>
                <p>$0.00</p>
            </div>
            <div className={styles.Hr}/>
            <div className={styles.total}>
                <div className={styles.totalCost}>
                    <h2>Total</h2>
                    <p>$30.00</p>
                </div>
                <button className={styles.Buy}>Buy</button>
            </div>
        </div>
    </div>
}