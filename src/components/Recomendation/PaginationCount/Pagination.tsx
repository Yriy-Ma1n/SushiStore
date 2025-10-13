import { useState } from 'react'
import type { Product } from '../../../Types/Product'
import styles from './Pagination.module.css'

export default function PaginationMainPage(props: { backupArr: Product[], setPage: (i: number) => void }) {
    const [current, setCurrent] = useState(1)
    const pages = Math.ceil(props.backupArr.length / 8)

    const nextPrevPage = (i: number) => {
        const nextPage = i + 1
        props.setPage(nextPage);
        setCurrent(() => nextPage)
    }

    const turnLeft = () => {
       
        if (1 === current) return
        nextPrevPage(current - 2)

    }

    const turnRight = () => {

        if (pages === current) return
        nextPrevPage(current)

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