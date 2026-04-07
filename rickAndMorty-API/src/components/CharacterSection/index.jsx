import {Card} from "../Card/index.jsx";
import "./style.css"

export const CharacterSection = () => {
    return (
        <section>
            <div className="content-section">
                <h1>Nossos Personagens</h1>
                <div className="cards-wrapper">
                    <Card/>
                </div>
            </div>
        </section>
    )
}
