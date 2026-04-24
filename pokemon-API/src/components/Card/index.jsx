import axios from 'axios'
import './style.css'
import {useEffect, useState} from "react";

export const Card = ({search}) => {

    const [poke, setPoke] = useState([]);
    const [dataPoke, setDataPoke] = useState([]);
    const [searchResult, setSearchResult] = useState(null);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    let pokemonsToShow = search ? (searchResult ? [searchResult] : []) : dataPoke;

    useEffect(() => {
        const fetchList = async () => {
            try {
                setLoading(true);

                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);

                setPoke(prev => [...prev, ...res.data.results]);

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };


        if (!search) {
            fetchList();
        }

    }, [offset, search]);


    useEffect(() => {
        const handleScroll = () => {
            if (!search && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
                setOffset(prev => prev + 20);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, search]);


    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const newPokes = poke.slice(dataPoke.length);

                if (newPokes.length === 0) return;

                const responses = await Promise.all(newPokes.map(p => axios.get(p.url)));

                const data = responses.map(res => res.data);

                setDataPoke(prev => {
                    const ids = new Set(prev.map(p => p.id));
                    const filtered = data.filter(p => !ids.has(p.id));
                    return [...prev, ...filtered];
                });

            } catch (err) {
                console.error(err);
            }
        };

        fetchDetails();
    }, [poke]);


    useEffect(() => {
        const fetchSearch = async () => {
            if (!search) {
                setSearchResult(null);
                return;
            }

            try {
                setLoading(true);

                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);

                setSearchResult(res.data);

            } catch (err) {
                console.error("Pokémon não encontrado");
                setSearchResult(null);
            } finally {
                setLoading(false);
            }
        };

        fetchSearch();
    }, [search]);


    return (<>
        {pokemonsToShow.map(pokemon => (<div className="card-character" key={pokemon.id}>
            <img
                src={pokemon.sprites?.other?.['official-artwork']?.front_default || pokemon.sprites?.front_default}
                alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
            <p>#{String(pokemon.id).padStart(3, '0')}</p>
            <p>
                Type: {pokemon.types.map(t => t.type.name).join(', ')}
            </p>
        </div>))}

        {loading && <p>Carregando...</p>}
    </>)
}