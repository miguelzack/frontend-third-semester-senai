import {useEffect, useState} from "react";
import "./App.css"
import {Header} from "./components/header/index.jsx";

function App() {

    // const [contador, setContador] = useState(() => {
    //     return Number(localStorage.getItem("contador")) || 0
    // })
    //
    // const incrementar = () => {
    //     setContador(contador + 1)
    //     localStorage.setItem("contador", contador)
    // }


    // const [contador, setContador] = useState(0)
    //
    // useEffect(() => {
    //     document.title = `Você clicou ${contador} vezes`
    // }, [contador]);


    return (<>

        {/*Teste do useState*/}
        {/*<h1>Contador</h1>*/}
        {/*<p>Você clicou {localStorage.getItem("contador")} vezes</p>*/}
        {/*<button onClick={incrementar}>Incrementar</button>*/}


        {/*<button onClick={() => setContador(contador + 1)}>Clique aqui</button>*/}
        <Header/>

    </>)
}

export default App
