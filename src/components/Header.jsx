// Header.jsx
import React from "react"
import logoImg from "../assets/favicon.png"

// Header for the App, displaying its title

function Header() {
    return (
        <header className="logo">
            <img
                className="logo--img"
                src={logoImg}
                alt="A logo of a red dragon head in a diamond frame"
            />
            <h1 className="logo--txt">PF2e Encounter Calculator</h1>
        </header>
    )
}

export default Header;

