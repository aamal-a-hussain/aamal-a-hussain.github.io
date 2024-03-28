import React from "react";
import "../styles/Footer.css"
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className="container container__footer">
            <p className="txt"> &copy; aamal-a-hussain.github.io by Cristina Nogales</p>
            <a  href="https://github.com/CristinaNogRod" 
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon">
                <FaGithub size={15}/>
            </a>
        </div>
    );
}

export default Footer;