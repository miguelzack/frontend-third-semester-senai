import LogoRickAndMorty from "../../assets/icons/logoRickAndMorty.jsx";
import RickImage from "../../assets/images/rickImage.webp"
import "./style.css"

export const Main = () => {
    return (
        <main>
            <div className="content-main">
                <img src={RickImage} alt="Foto do Rick"/>
                <aside>
                    <LogoRickAndMorty/>
                    <h1>Bem-vindos ao <span>consumo de API</span> do Rick and Morty</h1>
                    <p>Aqui você encontra informações sobre os personagens  de Rick and Morty.</p>
                    <div className="button-wrapper">
                        <a href="#" className="btn-primary">Veja agora</a>
                        <a href="#" className="btn-secondary">Saiba mais</a>
                    </div>
                </aside>
            </div>
        </main>
    )
}