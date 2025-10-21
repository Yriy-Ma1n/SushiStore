import type { attribute } from "../../../Types/ProductAttribute";
import styles from "./productAttribute.module.css"

export default function ProductAttribute(props: { attribute: attribute[] }) {
    return <div>{props.attribute ? props.attribute.map((item: attribute) => {
        return <div key={item.attribute_id} className={styles.containerDesc}>
            <p className={styles.leftDesc}>
                {item.name_of_attribute}
            </p>
            <p className={styles.rightDesc}>
                {item.value} {item.value.length === 2 ? 'Шт' : ' Грам'}
            </p>
        </div>
    }) : false}</div>
}
