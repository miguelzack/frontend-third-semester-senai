import "./style.scss"
import logo from "../../assets/images/404image.png"
import {Link} from "react-router-dom";

export const Page404 = () => {
    return (<main className="page404">
        <div className="content-wrapper">
            <img src={logo} alt="Imagem do astronauta 404"/>
            <div className="error-link-wrapper">
                <div className="text-wrapper">
                    <h1 className="h1-404">OOPS!</h1>
                    <h2>PAGE NOT FOUND</h2>
                </div>
                <Link to="/">GO HOME</Link>
            </div>
        </div>
    </main>)
}