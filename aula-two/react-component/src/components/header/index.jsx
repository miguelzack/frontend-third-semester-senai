import React from "react";
import "./styles.css";

export default function Header() {
    return (
        <header className="header">
            <p className="logo">Miguel <span>Codiginhos</span></p>

            <nav className="nav">
                <a href="#" className="active">Home</a>
                <a href="#">Explore</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}
