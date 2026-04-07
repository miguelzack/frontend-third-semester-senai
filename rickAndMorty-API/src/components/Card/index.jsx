import axios from 'axios'

export const Card = () => {

    axios.get("https://rickandmortyapi.com/api/character")
        .then(res => console.log(res.data.results))
        .catch(err => console.error(err))

    return (
    <h1>Card</h1>
    )
}