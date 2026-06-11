import {Card} from '../card'
import './style.css'
import {useEffect, useState} from "react";
import axios from "axios";

export const Main = () => {

    const [personagens, setPersonagens] = useState([])

    // useEffect(() => {
    //     fetch("https://dragonball-api.com/api/characters?limit=58")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.items)
    //             setPersonagens(data.items)
    //         })
    //         .then(error => console.error(error))
    // }, []);


    useEffect(() => {
        axios.get("https://dragonball-api.com/api/characters?limit=58")
            .then(data => setPersonagens(data.data.items))
            .catch(err => console.log(err))
    }, []);

    return (<main>
        {personagens.map((elemento) => (
            <Card image={elemento.image} title={elemento.name} description={elemento.description}/>

        ))}
    </main>)
}