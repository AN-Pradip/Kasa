import React from "react";
import { NavLink, Link } from "react-router-dom";
import logoFooter from "../assets/LOGO-FOOTER.png"

function Footer(){
    return(
        <footer>
            <Link to="/">
                <img src={logoFooter} alt="logo" />
            </Link>
            <p> &copy; 2020 Kasa. All rights reserved</p>
            
        </footer>
    )
}
export default Footer;