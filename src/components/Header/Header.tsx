import styles from "./Header.module.css"
import PersonalAccount from "./PersonalAccount/Personal"
import sushiImage from "../../assets/sushi.png"
import { Link } from "react-router-dom"

export default function Header() {

    return <div className={styles.header}>
        <div className={styles.icon}>
            <img src={sushiImage} alt="sushiIcon" />
            <h1 className={styles.WebSiteName}>Sushi Express</h1>
        </div>
        <div className={styles.nav}>
            <ul className={styles.navItem}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/Catalog">Catalog</Link></li>
                <li><Link to='/About'>About</Link></li>
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