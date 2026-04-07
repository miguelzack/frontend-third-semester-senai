import LogoGitHub from "../../assets/icons/logoGitHub.jsx";
import "./style.css"

export const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <a href="https://github.com/miguelzack" target={"_blank"}><span>MiguelZack</span>
                    <LogoGitHub/>
                </a>
            </div>
        </header>)
}