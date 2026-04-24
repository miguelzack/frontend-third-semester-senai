import "./App.css"

import LogoGitHub from "./assets/icons/logoGitHub.jsx";
import AshMain from "./assets/images/ash-image-main.png"
import LogoPokemon from "./assets/images/pokedex-font.png"
import {Card} from "./components/Card/index.jsx";
import {useState} from "react";

function App() {
    const [search, setSearch] = useState("");
    const [searchTrigger, setSearchTrigger] = useState("");

    const handleSearch = () => {
        setSearchTrigger(search);
    };

    return (<>
        <header>
            <div className="header-wrapper">
                <a href="https://github.com/miguelzack" target={"_blank"}>
                    <span>MiguelZack</span>
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
                        <a href="#" className="btn-primary">Veja agora</a>
                        <a href="#" className="btn-secondary">Saiba mais</a>
                    </div>
                </aside>
            </div>
        </main>

        <section className="section-character">
            <div className="content-section-cards">
                <h2>Veja os <span>Pokémon</span></h2>
                <div className="search-wrapper">

                    <input
                        type="text"
                        className="poke-search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Digite o nome ou número do Pokémon na Pokedéx."
                    />

                    <button className="button-search" onClick={handleSearch}>
                        Buscar
                    </button>
                </div>

                <p>Para retornar ao modo de lista, deixe o input vazio e aperte "Buscar".</p>
                <div className="wrapper-cards">

                    <Card search={searchTrigger}/>
                </div>
            </div>
        </section>
    </>)
}

export default App;