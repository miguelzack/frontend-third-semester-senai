import "./App.css";

import LogoGitHub from "./assets/icons/logoGitHub.jsx";
import AshMain from "./assets/images/ash-image-main.png";
import LogoPokemon from "./assets/images/pokedex-font.png";

import {CardAll} from "./components/Card-All/index.jsx";
import {CardGen} from "./components/Card-Gen/index.jsx";
import {CardType} from "./components/Card-Type/index.jsx";

import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [search, setSearch] = useState("");
    const [searchTrigger, setSearchTrigger] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);

    const [mode, setMode] = useState("all");
    const [generation, setGeneration] = useState(1);
    const [type, setType] = useState("water");

    const handleSearch = () => {
        setSearchTrigger(search);
    };

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1025");
                setAllPokemon(res.data.results);
            } catch (err) {
                console.error(err);
            }
        };

        fetchPokemon();
    }, []);

    const typeTranslations = {
        normal: "Normal",
        fire: "Fogo",
        water: "Água",
        grass: "Planta",
        electric: "Elétrico",
        ice: "Gelo",
        fighting: "Lutador",
        poison: "Venenoso",
        ground: "Terra",
        flying: "Voador",
        psychic: "Psíquico",
        bug: "Inseto",
        rock: "Pedra",
        ghost: "Fantasma",
        dragon: "Dragão",
        dark: "Sombrio",
        steel: "Aço",
        fairy: "Fada"
    };

    const types = Object.keys(typeTranslations);
    const generations = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
                <img src={AshMain} alt="Ash"/>

                <aside>
                    <img src={LogoPokemon} alt="Logo Pokémon"/>

                    <h1>
                        Bem-vindos ao <span>consumo de API</span> de Pokémon
                    </h1>

                    <p>
                        Explore todos os Pokémon por geração, tipo ou busca.
                    </p>

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


                <div className="search-wrapper">
                    <input
                        type="text"
                        className="poke-search"
                        value={search}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSearch(value);

                            if (value.length > 0) {
                                const filtered = allPokemon.filter(p => p.name
                                    .toLowerCase()
                                    .includes(value.toLowerCase()));

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

                    <button
                        className="button-search"
                        onClick={handleSearch}
                    >
                        Buscar
                    </button>
                </div>


                <div className="filter-buttons">
                    <button
                        className={`filter-button ${mode === "all" ? "active" : ""}`}
                        onClick={() => setMode("all")}
                    >
                        Pokédex Geral
                    </button>

                    <button
                        className={`filter-button ${mode === "gen" ? "active" : ""}`}
                        onClick={() => setMode("gen")}
                    >
                        Gerações
                    </button>

                    <button
                        className={`filter-button ${mode === "type" ? "active" : ""}`}
                        onClick={() => setMode("type")}
                    >
                        Tipos
                    </button>
                </div>


                {mode === "gen" && (<div className="filter-buttons">
                    {generations.map((gen) => (<button
                        key={gen}
                        className={`filter-button ${generation === gen ? "active" : ""}`}
                        onClick={() => setGeneration(gen)}
                    >
                        Gen {gen}
                    </button>))}
                </div>)}


                {mode === "type" && (<div className="filter-buttons">
                    {types.map((t) => (<button
                        key={t}
                        className={`filter-button ${type === t ? "active" : ""}`}
                        onClick={() => setType(t)}
                    >
                        {typeTranslations[t]}
                    </button>))}
                </div>)}

                <p>
                    Para voltar à lista, deixe vazio e clique em buscar.
                </p>

                {mode === "all" && (<CardAll search={searchTrigger}/>)}

                {mode === "gen" && (<CardGen
                    search={searchTrigger}
                    generation={generation}
                />)}

                {mode === "type" && (<CardType
                    search={searchTrigger}
                    type={type}
                />)}
            </div>
        </section>
    </>);
}

export default App;