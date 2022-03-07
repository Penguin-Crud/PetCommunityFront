import "../styles/index.css";
import burger from "../assets/burger.svg";
import Searcher from "./dynamics_components/Searcher";

import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">
            <p>Logo</p>
            <Searcher />

            <header className="navbar">
                <div>
                    <img className="menu" src="../../assets/img/burger2.svg" alt="logoAssoc." />
                </div>
                <div className="dropdown">
                   
                    <img src={burger} className="burger" alt="burger" />
                    <ul>
                        <li>
                            <a href="#">My Profile</a>
                        </li>
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <Link to="/createPost">Create new post</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                        
                </div>
            </header>
        
        </nav>
    )
}

export default Nav;