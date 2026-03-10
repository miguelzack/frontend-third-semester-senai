import TextButton from "./components/textButton";
import React from "react";
import Header from "./components/header";


export default function App() {

    return (
        <React.Fragment>
            <Header/>
            <h1>React.Component</h1>
            <TextButton label="Call to Action"/>
        </React.Fragment>

    );
}

