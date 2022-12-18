import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../assets/LOGO.png";


function Header(){
    return(
        <header>
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <nav>
                <NavLink to="/" className="nav--Links">
                    Accueil
                </NavLink>
                <NavLink to="/about" className="nav--Links">
                    About
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;