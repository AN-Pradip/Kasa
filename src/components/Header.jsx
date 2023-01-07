import React from "react";
import { NavLink, Link, useLocation  } from "react-router-dom";

import logo from "../assets/LOGO.png";


function Header(){
    const { pathname } = useLocation();

    return(
        <header>
            <Link to="/" className="header--container">
                <img src={logo} alt="logo" className="header--container--img"/>
            </Link>
            <nav>
                <NavLink to="/" className="nav--Links" style={{textDecoration: pathname === '/' ? 'underline' : 'none'}}>
                    Accueil
                </NavLink>
                <NavLink to="/about" className="nav--Links" style={{textDecoration: pathname === '/about' ? 'underline' : 'none'}}>
                    About
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;