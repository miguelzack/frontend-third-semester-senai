import axios from 'axios'
import {useEffect, useState} from "react";
import "./style.css"
import AlienIco from "../../assets/icons/alienIco.jsx";
import LiveIco from "../../assets/icons/liveIco.jsx";
import PlanetIco from "../../assets/icons/planetIco.jsx";

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
            {Perso.map(personagem => (<div className="card-character" key={personagem.id}>
                <img src={personagem.image} alt=""/>
                <h6>{personagem.name}</h6>
                <div className="text-wrapper">
                    <AlienIco/>
                    <p>{personagem.species}</p>
                </div>
                <div className="text-wrapper">
                    <LiveIco/>
                    <p>{personagem.status}</p>
                </div>
                <div className="text-wrapper">
                    <PlanetIco/>
                    <p>{personagem.origin.name}</p>
                </div>
            </div>))}
        </div>)
}