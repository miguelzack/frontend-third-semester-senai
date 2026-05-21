import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Sobre} from "./pages/Sobre.jsx";
import {Contato} from "./pages/Contato.jsx";

function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
        </Routes>
    </BrowserRouter>)
}

export default App