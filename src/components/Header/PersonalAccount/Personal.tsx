import { useSelector } from "react-redux"
import styles from "./Personal.module.css"
import type { RootState } from "../../../store"

export default function PersonalAccount() {
    const data = useSelector((state: RootState) => state.user)
    if (!data) {
        return <div className={styles.nfProfile}>
            <span className="material-symbols-outlined">account_circle</span>
        </div>
    } else {
        return <div>Try</div>
    }

}