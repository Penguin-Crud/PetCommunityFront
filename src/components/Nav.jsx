import "../styles/index.css";
import Searcher from "./dynamics_components/Searcher";
import bars from "../assets/icons/bars-solid.svg"; 
import logoDefault from "../assets/userDefaultLogo/usuario.png";
import Logo from "../assets/logo3.png";

import React, { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import { dataPetsService } from "../services/PetCommunityServices";

function Nav() {

    let id= localStorage.getItem("authUserID")
    let token = localStorage.getItem("authToken")
    let logoUpdated = localStorage.getItem("authLogo")
    const navigate = useNavigate()

    
    useEffect(()=>{
        if(token!=null){dataPetsService('/associations', id).then(data=>{
            localStorage.setItem("authAdress",data.adress)
            localStorage.setItem("authCapacity",data.capacity)
            
           
        })}
    },[token,logoUpdated])
    
    const logOut = () => {
        localStorage.clear()
        id = null;
        navigate("/")
    }

    return (
        <nav className="nav">
            <div className="logo-container">
                <Link to="/"> <img className="logo" src={Logo} alt="logo" /> </Link>
            </div>
            <div className="container-searcher">
                <Searcher />
            </div>

            <header className="navbar">
                {  
                    token===null? 
                        <div className="dropdown"> 
                            <div className="container-usuario">
                                <img src={bars} className="burger" alt="burger" />
                            </div>
                            <ul>
                                <li>
                                    <Link to="/signin">  Sign In  </Link>
                                </li>
                                <li>
                                    <Link to="/signup">  Sign Up  </Link>
                                </li>
                            </ul>
                        </div>         
                        :
                        <div className="dropdown"> 
                            <div className="container-usuario">
                                {
                                    logoUpdated===null? 
                                    <img src={logoDefault} className="burger" alt="logoDefault" />
                                    :
                                    <img src={logoUpdated} className="burger" alt="userLogo" />
                                }
                                

                            </div>
                            <ul>
                                <li>
                                    <Link to={`/detailAssociation/${id}`}>My Profile</Link>
                                </li>
                                <li>
                                    <Link to={`/editAssociation`}>Edit My Profile</Link>
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
                                <li className="logout">
                                    <p onClick={() => { logOut() }} >Logout</p>
                                </li>
                            </ul>
                        </div>         
                }
            </header>
        </nav>
    )
}

export default Nav;