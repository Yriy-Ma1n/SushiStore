import styles from "./Header.module.css"
import PersonalAccount from "./PersonalAccount/Personal"
import sushiImage from "../../assets/sushi.png"

export default function Header() {

    return <div className={styles.header}>
        <div className={styles.icon}>
            <img src={sushiImage} alt="sushiIcon" />
            <h1 className={styles.WebSiteName}>Sushi Express</h1>
        </div>
        <div className={styles.nav}>
            <ul className={styles.navItem}>
                <li>Menu</li>
                <li>Catalog</li>
                <li>About</li>
            </ul>
        </div>
        <div className={styles.leftSide}>
            <div className={styles.inputField}>
                <span className="material-symbols-outlined">
                    search
                </span>
                <input
                    type="text"
                    placeholder="Search"
                    className={styles.searchInput}
                />

            </div>
            <button className={styles.buttonOrder}>Order Now</button>
            <PersonalAccount />
        </div>
    </div>
}