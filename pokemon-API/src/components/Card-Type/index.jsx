import {useEffect, useState} from "react";
import axios from "axios";


let typeCache = {};
let globalTypeIcons = null;

export const CardType = ({search, type}) => {
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


    useEffect(() => {
        const fetchType = async () => {
            try {
                if (typeCache[type]) {
                    setPokemons(typeCache[type]);
                    return;
                }

                setLoading(true);

                const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

                const list = res.data.pokemon;

                const responses = await Promise.all(list.map(p => axios.get(p.pokemon.url)));

                const data = responses.map(r => r.data);

                setPokemons(data);
                typeCache[type] = data;
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchType();
    }, [type]);


    useEffect(() => {
        setVisible(20);
    }, [type, search]);


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