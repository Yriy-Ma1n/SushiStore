import type { Product } from "../../../Types/Product"
import PaginationMainPage from "../PaginationCount/Pagination"
import styles from "./Pagination.module.css"

export default function Pagination(props: { backupArr: Product[], setPage: () => void }) {
    return <div className={styles.pagination}>
        <span className="material-symbols-outlined">
            arrow_back_ios
        </span>


        <PaginationMainPage backupArr={props.backupArr} setPage={props.setPage} />

        <span className="material-symbols-outlined">
            arrow_forward_ios
        </span>

    </div>
}