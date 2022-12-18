import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../assets/LOGO.png";


function Header(){
    return(
        <header>
            <Link to="/" className="header--container">
                <img src={logo} alt="logo" className="header--container--img"/>
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