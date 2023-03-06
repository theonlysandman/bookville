import React from "react";
import { useParams } from "react-router-dom"
import "./Header.css";
import logo from '../assets/bookville_logo.png'


export default function Header() {
    const { id } = useParams()
    console.log("Know id?")
    console.log(id)

    return (
            <header className="App-header">
                    <img src={logo} alt="logo" class="logo" />
                    {id && <p>{id} choose your books! </p>}
            </header>

        )
}


/*
 *         <header className="Header">
            <img src={require("../assets/bookville_logo.png")} className="Logo" alt="Bookville Logo" />
            <nav className="Nav">
                <a href="/">Home</a>
                <a href="/publishers">Publishers </a>
                <a href="/about">About</a>
            </nav>
        </header>
*/