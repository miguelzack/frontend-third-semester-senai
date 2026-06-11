import { Card } from '../card'
import './style.css'

export const Main = () => {

    useEffect(() => {
        fetch("https://www.dragonball-api.com/api/characters")
            .then(res => res.json())
            .then(data => console.log(data))
            .then(error => console.error(error))
    }, []);

    return(
        <main>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </main>
    )
}