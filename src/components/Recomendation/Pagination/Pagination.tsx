import { useState } from 'react'
import type { Product } from '../../../Types/Product'
import styles from './Pagination.module.css'

export default function PaginationMainPage(props: { backupArr: Product[], setPage: (i: number) => void }) {
    const [current, setCurrent] = useState(1)

    const nextPrevPage = (i: number) => {
        props.setPage(i + 1);
        setCurrent(curr => curr = i + 1)
    }

    return <div className={styles.paginationCount}>
        {
            Array.from({ length: Math.ceil(props.backupArr.length / 8) }, (_, i) => (
                <button key={i} onClick={() => { nextPrevPage(i) }} className={i + 1 === current ? styles.selected : ''}>
                    {i + 1}
                </button>
            ))
        }

    </div>
}