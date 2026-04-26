import "./App.css";

import LogoGitHub from "./assets/icons/logoGitHub.jsx";
import AshMain from "./assets/images/ash-image-main.png";
import LogoPokemon from "./assets/images/pokedex-font.png";
import {CardAll} from "./components/Card-All/index.jsx";
import {CardGen} from "./components/Card-Gen/index.jsx";

import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [search, setSearch] = useState("");
    const [searchTrigger, setSearchTrigger] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);

    const [mode, setMode] = useState("all");
    const [generation, setGeneration] = useState(1);

    const handleSearch = () => {
        setSearchTrigger(search);
    };

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1025");
                setAllPokemon(response.data.results);
            } catch (err) {
                console.error(err);
            }
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
                        <a href="#section-pokemon" className="btn-primary">
                            Veja agora
                        </a>
                        <a
                            href="https://pokeapi.co/"
                            className="btn-secondary"
                            target="_blank"
                        >
                            Saiba mais
                        </a>
                    </div>
                </aside>
            </div>
        </main>

        <section className="section-character" id="section-pokemon">
            <div className="content-section-cards">
                <h2>
                    Veja os <span>Pokémon</span>
                </h2>

                {/* 🔎 BUSCA */}
                <div className="search-wrapper">
                    <input
                        type="text"
                        className="poke-search"
                        value={search}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSearch(value);

                            if (value.length > 0) {
                                const filtered = allPokemon.filter((poke) => poke.name
                                    .toLowerCase()
                                    .includes(value.toLowerCase()));
                                setSuggestions(filtered.slice(0, 10)); // limita sugestões
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

                    <button
                        className="button-search"
                        onClick={handleSearch}
                    >
                        Buscar
                    </button>
                </div>

                {/* 🎮 FILTROS */}
                <div className="filter-buttons">
                    <button
                        className={`filter-button ${mode === "all" ? "active" : ""}`}
                        onClick={() => setMode("all")}
                    >
                        Pokédex Geral
                    </button>

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((gen) => (<button
                        key={gen}
                        className={`filter-button ${mode === gen ? "active" : ""}`}
                        onClick={() => {
                            setMode(gen);
                            setGeneration(gen);
                        }}
                    >
                        Gen {gen}
                    </button>))}
                </div>

                <p>Para voltar à lista, deixe vazio e clique em buscar.</p>

                {/* 🧠 RENDER */}
                {mode === "all" && (<CardAll search={searchTrigger}/>)}

                {mode !== "all" && (<CardGen
                    search={searchTrigger}
                    generation={generation}
                />)}
            </div>
        </section>
    </>);
}

export default App;