import styles from "./modal.modules.css"
import {useState} from "react";

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false)

    return (<>
        <button onClick={openModal}>Abrir Modal</button>

        {isOpen && (<div className="overlay" onClick={closeModal}>
            <div className="card" onClick={(e) => e.stopPropagation()}>
                <p>Este é o conteúdo do card!</p>
                <button onClick={closeModal}>Fechar</button>
            </div>
        </div>)}
    </>)
}