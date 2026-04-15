import "./App.css"

import LogoGitHub from "./assets/icons/logoGitHub.jsx";
import AshMain from "./assets/images/ash-image-main.png"
import LogoPokemon from "./assets/images/pokedex-font.png"
import {Card} from "./components/Card/index.jsx";

function App() {


    return (<>
        <header>
            <div className="header-wrapper">
                <a href="https://github.com/miguelzack" target={"_blank"}><span>MiguelZack</span>
                    <LogoGitHub/>
                </a>
            </div>
        </header>
        <main>
            <div className="content-main">
                <img src={AshMain} alt="Imagem do ASH"/>
                <aside>
                    <img src={LogoPokemon} alt="Logo de Pokémon"/>
                    <h1>Bem-vindos ao <span>consumo de API</span> de Pokémon</h1>
                    <p>Aqui você encontra informações sobre os pokémon.</p>
                    <div className="button-wrapper">
                        {/*Componentizar essa joça*/}
                        <a href="#" className="btn-primary">Veja agora</a>
                        <a href="#" className="btn-secondary">Saiba mais</a>
                    </div>
                </aside>
            </div>
        </main>
        <section className="section-character">
            <div className="content-section-cards">
                <h2>Veja os <span>Pokémon</span></h2>
                <div className="wrapper-cards">
                    <Card/>
                </div>
            </div>
        </section>
    </>)
}

export default App
