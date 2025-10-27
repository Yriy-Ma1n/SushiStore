import styles from "./Loading.module.css"

export default function Loading() {
    return <>
        <div className={styles.loading}>
            <span className="material-symbols-outlined">
                progress_activity
            </span>
        </div>
    </>
}