import "../../styles/index.css";
import Logo from "../../assets/logoLoading.svg";
import React from "react";


function NoMatchNav() {
    return (
        <nav className="nav">
            <div className="logo-container">
                <img className="logo" src={Logo} alt="logo" />
            </div>
        </nav>
    )
}

export default NoMatchNav;