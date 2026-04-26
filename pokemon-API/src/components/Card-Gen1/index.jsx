import "./style.css";
import {useEffect, useState} from "react";
import axios from "axios";

export const CardGen1 = ({search}) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [typeIcons, setTypeIcons] = useState({});

    useEffect(() => {
        const fetchTypeIcons = async () => {
            try {
                const res = await axios.get("https://pokeapi.co/api/v2/type");

                const responses = await Promise.all(
                    res.data.results.map(t => axios.get(t.url))
                );

                const icons = {};

                responses.forEach(res => {
                    const name = res.data.name;
                    const icon =
                        res.data.sprites?.["generation-viii"]?.["sword-shield"]?.name_icon;

                    icons[name] = icon;
                });

                setTypeIcons(icons);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTypeIcons();
    }, []);

    useEffect(() => {
        const fetchGen1 = async () => {
            try {
                setLoading(true);

                const res = await axios.get("https://pokeapi.co/api/v2/generation/1");

                const ids = res.data.pokemon_species
                    .map(p => p.url.split("/").filter(Boolean).pop())
                    .sort((a, b) => a - b);

                const responses = await Promise.all(
                    ids.map(id => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
                );

                setPokemons(responses.map(r => r.data));
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchGen1();
    }, []);

    const filtered = search
        ? pokemons.filter(p => {
            const searchLower = search.toLowerCase();

            return (
                p.name.toLowerCase().includes(searchLower) ||
                String(p.id) === search ||
                String(p.id).padStart(3, "0") === search ||
                `#${p.id}` === search
            );
        })
        : pokemons;

    return (
        <div className="wrapper-cards">
            {filtered.map(pokemon => (
                <div className="card-character" key={pokemon.id}>
                    <img
                        src={
                            pokemon.sprites?.other?.["official-artwork"]?.front_default ||
                            pokemon.sprites?.front_default
                        }
                        alt={pokemon.name}
                    />

                    <h3>
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </h3>

                    <p>#{String(pokemon.id).padStart(3, "0")}</p>

                    <div className="types">
                        {pokemon.types?.map(t => (
                            <img
                                key={t.type.name}
                                src={typeIcons[t.type.name]}
                                alt={t.type.name}
                            />
                        ))}
                    </div>
                </div>
            ))}

            {loading && <p>Carregando...</p>}
        </div>
    );
};