import "./App.css";

import LogoGitHub from "./assets/icons/logoGitHub.jsx";
import AshMain from "./assets/images/ash-image-main.png";
import LogoPokemon from "./assets/images/pokedex-font.png";
import {CardAll} from "./components/Card-All/index.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {CardGen1} from "./components/Card-Gen1/index.jsx";

function App() {
    const [search, setSearch] = useState("");
    const [searchTrigger, setSearchTrigger] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);
    const [mode, setMode] = useState("all");

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
                <a href="https://github.com/miguelzack" target="_blank">
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
                    <h1>
                        Bem-vindos ao <span>consumo de API</span> de Pokémon
                    </h1>
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
                <h2>
                    Veja os <span>Pokémon</span>
                </h2>

                <div className="search-wrapper">
                    <input
                        type="text"
                        className="poke-search"
                        value={search}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSearch(value);

                            if (value.length > 0) {
                                const filtered = allPokemon.filter(poke => poke.name.toLowerCase().includes(value.toLowerCase()));
                                setSuggestions(filtered);
                            } else {
                                setSuggestions([]);
                            }
                        }}
                        placeholder="Digite nome ou número (ex: pikachu ou 25)"
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

                <div className="filter-buttons">
                    <button
                        className={`btn-primary ${mode === "all" ? "active" : ""}`}
                        onClick={() => setMode("all")}
                    >
                        Pokédex Geral
                    </button>

                    <button
                        className={`btn-secondary ${mode === "gen1" ? "active" : ""}`}
                        onClick={() => setMode("gen1")}
                    >
                        Gen 1
                    </button>
                </div>

                <p>Para voltar à lista, deixe vazio e clique em buscar.</p>

                {mode === "all" && <CardAll search={searchTrigger}/>}
                {mode === "gen1" && <CardGen1 search={searchTrigger}/>}
            </div>
        </section>
    </>);
}

export default App;