import {Link} from "react-router-dom";
import "./style.scss"

export const Page404 = () => {
    return (
        <main className="page404">
            <h1>Página 404!</h1>
            <Link to="/">Voltar para home.</Link>
        </main>
    )
}