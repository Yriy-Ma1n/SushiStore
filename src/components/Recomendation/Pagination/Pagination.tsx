import type { Product } from "../../../Types/Product"
import PaginationMainPage from "../PaginationCount/Pagination"
import styles from "./Pagination.module.css"

export default function Pagination(props: { backupArr: Product[], setPage: (i: number) => void }) {



    return <div className={styles.pagination}>
        <PaginationMainPage backupArr={props.backupArr} setPage={props.setPage} />

    </div>
}