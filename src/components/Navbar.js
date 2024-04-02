import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import { MdMenu } from "react-icons/md";
import pdf from "../assets/Aamal_CV.pdf";
import logo from "../assets/logo.png";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => { setExpandNavbar(false) }, [location]);

    return (
        <nav className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="container__navbar">
                <a href="/" className="navbar-name"> Aamal Hussain </a> 
                
                <div className="toggleButton">
                    <button onClick={() => setExpandNavbar((prev) => !prev)}> 
                        <MdMenu className="toggle-icon"/>
                    </button>
                </div>

                <div className="menu">
                    <Link className="menuItem" to="/"> Home </Link>
                    <Link className="menuItem" to="/research"> Publications </Link>
                    <Link className="menuItem" to="/talks"> Talks </Link>
                    <a href={pdf} target="_blank" className="menuItem"> CV </a>
                </div>  
            </div>
            
        </nav>
    );
}

export default Navbar;