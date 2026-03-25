import styles from "./modal.module.css";
import {useState} from "react";

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (<>
        <button onClick={openModal}>Abrir Modal</button>

        {isOpen && (<div className={styles.overlay} onClick={closeModal}>
            <div className={styles.card} onClick={(e) => e.stopPropagation()}>
                <p>Este é o conteúdo do card!</p>
                <button onClick={closeModal}>Fechar</button>
            </div>
        </div>)}
    </>);
}