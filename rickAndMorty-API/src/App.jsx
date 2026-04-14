// import React from 'react'
import './App.css'
import {Header} from "./components/Header/";
import {Main} from "./components/Main/index.jsx";
import {CharacterSection} from "./components/CharacterSection/index.jsx";
import {Footer} from "./components/Footer/index.jsx";

function App() {
    return (<>
        <Header/>
        <Main/>
        <CharacterSection/>
        <Footer/>
    </>)
}

export default App
