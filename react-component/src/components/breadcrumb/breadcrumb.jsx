import "./breadcrumb.css"
// css puro
import {useState} from "react"

export default function Breadcrumb() {
    const [page, setPage] = useState("Settings")

    const handleClick = (e, newPage) => {
        e.preventDefault()
        setPage(newPage)
    }

    return (<>
        <nav>
            <ol>
                <li>
                    <a
                        href="#"
                        onClick={(e) => handleClick(e, "Home")}
                        className={page === "Home" ? "active" : ""}
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        onClick={(e) => handleClick(e, "Profile")}
                        className={page === "Profile" ? "active" : ""}
                    >
                        Profile
                    </a>
                </li>

                <li
                    c
                >
                    <a
                        href="#"
                        className={page === "Settings" ? "active" : ""}
                        onClick={() => setPage("Settings")}
                    >
                        Settings
                    </a>
                </li>
            </ol>
        </nav>

        <div>
            <h1>{page} page</h1>
        </div>
    </>)
}