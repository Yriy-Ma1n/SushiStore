import styles from "./Footer.module.css"
export default function FooterPart() {

    return <footer className={styles.footer}>
        <div className={styles.info}>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Contact Us</p>
        </div>
        <div className={styles.rules}>
            {/* <p>2024 Sushi Express. All rights reserved</p> */}
            <p>&copy; 2025 Sushi Express. All rights reserved.</p>
        </div>
    </footer>

}