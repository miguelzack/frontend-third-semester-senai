import "./App.css"

import LogoGitHub from "./assets/icons/logoGitHub.jsx";
import AshMain from "./assets/images/ash-image-main.png"
import LogoPokemon from "./assets/images/pokedex-font.png"
import {Card} from "./components/Card/index.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [search, setSearch] = useState("");
    const [searchTrigger, setSearchTrigger] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);

    const handleSearch = () => {
        setSearchTrigger(search);
    };

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1025");
            setAllPokemon(response.data.results);
        };

        fetchPokemon();
    }, []);

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
                        onChange={(e) => {
                            const value = e.target.value;
                            setSearch(value);

                            if (value.length > 0) {
                                const filtered = allPokemon
                                    .filter(poke => poke.name.toLowerCase().includes(value.toLowerCase()))
                                    .slice(0, 10);

                                setSuggestions(filtered);
                            } else {
                                setSuggestions([]);
                            }
                        }}
                        placeholder="Digite o nome ou número do Pokémon na Pokedéx."
                    />
                    {suggestions.length > 0 && (<ul className="suggestions-list">
                        {suggestions.map((poke, index) => (<li
                            key={index}
                            onClick={() => {
                                setSearch(poke.name);
                                setSuggestions([]);
                            }}
                        >
                            {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                        </li>))}
                    </ul>)}
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