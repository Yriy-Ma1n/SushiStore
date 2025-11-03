import { useSelector } from "react-redux"
import styles from "./Personal.module.css"
import type { RootState } from "../../../store"
import { Link } from "react-router-dom"

export default function PersonalAccount() {
    const data = useSelector((state: RootState) => state.user)
    if (!data) {
        return <Link to={"SignIn"}> <div className={styles.nfProfile}>
            <span className="material-symbols-outlined">account_circle</span>
        </div> </Link>
    } else {
        return <div>Try</div>
    }

}