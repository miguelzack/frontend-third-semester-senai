import axios from 'axios'
import {useEffect, useState} from "react";

export const Card = () => {
    const [Perso, setPerso] = useState([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => {
                setPerso((res.data.results))
            })
            .catch(err => console.error(err))
    }, []);

    useEffect(() => {
        console.log(Perso)
    }, [Perso]);


    return (//     <div>
        //     <img src={Perso[0]?.image} alt=""/>
        //     <h1>
        //         {Perso[0]?.name}
        //     </h1>
        //     <p>{Perso[0]?.species}</p>
        //     <p>{Perso[0]?.status}</p>
        //     <p>{Perso[0]?.origin.name}</p>
        // </div>

        <div className="wrapper-cards">
            {Perso.map(personagem => (<div className="card-perso" key={personagem.id}>
                <img src={personagem.image} alt=""/>
                <h1>{personagem.name}</h1>
                <p>{personagem.species}</p>
                <p>{personagem.status}</p>
                <p>{personagem.origin.name}</p>
            </div>))}
        </div>)
}