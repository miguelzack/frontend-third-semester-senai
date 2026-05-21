import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home.jsx";
import {Sobre} from "./pages/Sobre/Sobre.jsx";
import {Contato} from "./pages/Contato/Contato.jsx";
import {Page404} from "./pages/Page404/Page404.jsx";

function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    </BrowserRouter>)
}

export default App