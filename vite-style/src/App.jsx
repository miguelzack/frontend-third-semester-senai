import React from "react";
import "./index.css"
import Welcome from "./components/Welcome.jsx";
import ButtonCss from "./components/ButtonCss.jsx";
import ButtonModule from "./components/ButtonModule.jsx";
import ButtonStyled from "./components/ButtonStyled.jsx";

export default function App() {
    return (
        <React.Fragment>
            <Welcome name="Miguel Zack"/>
            {/*<ButtonCss bgColor={"purple"} label={"button css"} color={"black"}/>*/}
            {/*<ButtonModule*/}
            {/*    text={"Button Module"}*/}
            {/*    destaque*/}
            {/*></ButtonModule>*/}
            <ButtonStyled
                text={"Bonitinho"}
                secondary
            ></ButtonStyled>
        </React.Fragment>
    )
}