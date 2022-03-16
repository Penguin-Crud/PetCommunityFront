import "../styles/index.css";
import Searcher from "./dynamics_components/Searcher";
import Usuario from "../assets/usuario.png";
import Logo from "../assets/logo2.svg";

import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">
            <div className="logo-container">
                <img className="logo" src={Logo} alt="logo" />
            </div>
            <div className="container-searcher">
                <Searcher />
            </div>

            <header className="navbar">
                <div className="dropdown"> 
                    <div className="container-usuario">
                        <img src={Usuario} className="burger" alt="burger" />
                    </div>
                    <ul>
                        <li>
                            <Link to="/associtionDetail">My Profile</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/createPost">Create new post</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/exit">Logout</Link>
                        </li>
                    </ul>         
                </div>
            </header>
        
        </nav>
    )
}

export default Nav;