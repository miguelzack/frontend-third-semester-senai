import axios from 'axios'
import {useState} from "react";

export const Card = () => {

    const [Perso, setPerso] = useState([])

    axios.get("https://rickandmortyapi.com/api/character")
        .then(res => {
            setPerso((res.data.results))
            console.log(Perso)
        })
        .catch(err => console.error(err))

    return (
        <h1>
           card
        </h1>
    )
}