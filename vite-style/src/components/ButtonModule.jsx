import styles from "./ButtonModule.module.css"

export default function ButtonModule({text, destaque}) {
    return (
        <button type="button" className={`
        ${styles.btn}
        ${destaque ? styles.destaque : ""}
        `}>
            {text}
        </button>
    )
}