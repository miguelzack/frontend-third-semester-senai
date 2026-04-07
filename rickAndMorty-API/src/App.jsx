// import React from 'react'
import './App.css'
import {Header} from "./components/Header/";
import {Main} from "./components/Main/index.jsx";
import {Card} from "./components/Card/index.jsx";
import {CharacterSection} from "./components/CharacterSection/index.jsx";

function App() {
    return (<>
        <Header/>
        <Main/>
        <CharacterSection/>
    </>)
}

export default App
