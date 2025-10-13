import { useState } from 'react'
import type { Product } from '../../../Types/Product'
import styles from './Pagination.module.css'

export default function PaginationMainPage(props: { backupArr: Product[], setPage: (i: number) => void }) {
    const [current, setCurrent] = useState(1)
    const pages = Math.ceil(props.backupArr.length / 8)

    const nextPrevPage = (i: number) => {
        props.setPage(i);
        setCurrent(() => i)
    }

    const turnLeft = () => {
        const currentPage = current - 1
        if(1 === current) return
        nextPrevPage(currentPage)
    }

    const turnRight = () => {
        const currentPage = current + 1
        if(pages === current) return
        nextPrevPage(currentPage)
       
    }


    return <div className={styles.paginationCount}>
        <span className="material-symbols-outlined" onClick={turnLeft}>
            arrow_back_ios
        </span>
        {
            Array.from({ length: Math.ceil(props.backupArr.length / 8) }, (_, i) => (
                <button key={i} onClick={() => { nextPrevPage(i) }} className={i + 1 === current ? styles.selected : ''}>
                    {i + 1}
                </button>
            ))
        }

        <span className="material-symbols-outlined" onClick={turnRight}>
            arrow_forward_ios
        </span>

    </div>
}