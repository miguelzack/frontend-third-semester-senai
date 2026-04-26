import "./style.css";
import {useEffect, useState} from "react";
import axios from "axios";

let generationCache = {};
let globalTypeIcons = null;

export const CardGen = ({search, generation}) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [typeIcons, setTypeIcons] = useState({});
    const [visible, setVisible] = useState(20);


    useEffect(() => {
        const fetchTypeIcons = async () => {
            if (globalTypeIcons) {
                setTypeIcons(globalTypeIcons);
                return;
            }

            try {
                const res = await axios.get("https://pokeapi.co/api/v2/type");

                const responses = await Promise.all(res.data.results.map(t => axios.get(t.url)));

                const icons = {};

                responses.forEach(res => {
                    const name = res.data.name;
                    const icon = res.data.sprites?.["generation-viii"]?.["sword-shield"]?.name_icon;

                    icons[name] = icon;
                });

                globalTypeIcons = icons;
                setTypeIcons(icons);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTypeIcons();
    }, []);

    const fetchBatch = async (ids, batchSize = 20) => {
        let results = [];

        for (let i = 0; i < ids.length; i += batchSize) {
            const batch = ids.slice(i, i + batchSize);

            const res = await Promise.all(batch.map(id => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)));

            results = [...results, ...res.map(r => r.data)];
        }

        return results;
    };


    useEffect(() => {
        const fetchGen = async () => {
            try {
                if (generationCache[generation]) {
                    setPokemons(generationCache[generation]);
                    return;
                }

                setLoading(true);

                const res = await axios.get(`https://pokeapi.co/api/v2/generation/${generation}`);

                const ids = res.data.pokemon_species
                    .map(p => p.url.split("/").filter(Boolean).pop())
                    .sort((a, b) => a - b);

                const data = await fetchBatch(ids);

                setPokemons(data);

                generationCache[generation] = data;
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchGen();
    }, [generation]);


    useEffect(() => {
        setVisible(20);
    }, [generation, search]);


    const filtered = search ? pokemons.filter(p => {
        const s = search.toLowerCase();

        return (p.name.toLowerCase().includes(s) || String(p.id) === search || String(p.id).padStart(3, "0") === search || `#${p.id}` === search);
    }) : pokemons;


    useEffect(() => {
        let timeout;

        const handleScroll = () => {
            clearTimeout(timeout);

            timeout = setTimeout(() => {
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading && visible < filtered.length) {
                    setVisible(v => v + 20);
                }
            }, 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, visible, filtered.length]);

    return (<div className="wrapper-cards">
        {filtered.slice(0, visible).map(pokemon => (<div className="card-character" key={pokemon.id}>
            <img
                src={pokemon.sprites?.other?.["official-artwork"]?.front_default || pokemon.sprites?.front_default}
                alt={pokemon.name}
            />

            <h3>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h3>

            <p>#{String(pokemon.id).padStart(3, "0")}</p>

            <div className="types">
                {pokemon.types?.map(t => (<img
                    key={t.type.name}
                    src={typeIcons[t.type.name]}
                    alt={t.type.name}
                />))}
            </div>
        </div>))}

        {loading && <p>Carregando...</p>}
    </div>);
};