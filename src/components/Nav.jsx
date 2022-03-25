import "../styles/index.css";
import Searcher from "./dynamics_components/Searcher";
import bars from "../assets/icons/bars-solid.svg"; 
import logoDefault from "../assets/usuario.png";
import Logo from "../assets/logo3.png";

import React, { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useState} from "react";
import { dataPetsService } from "../services/PetCommunityServices";

function Nav() {

    let id= localStorage.getItem("authUserID")
    let logoUpdated = useState(localStorage.getItem("authLogo"))
    const [userLogo,setUserLogo] = useState(localStorage.getItem("authLogo"))
    const navigate = useNavigate()

    
    useEffect(()=>{
        dataPetsService('/associations', id).then(data=>{
            localStorage.setItem("authLogo",data.logo)
            localStorage.setItem("authAdress",data.adress)
            localStorage.setItem("authCapacity",data.capacity)
            
            setUserLogo(localStorage.getItem("authLogo"))
            
        })
    },[id,logoUpdated])
    
    const logOut = () => {
        localStorage.clear()
        console.log(localStorage.getItem("authUserID"))
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
                    id===null? 
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
                                {console.log(typeof userLogo)}
                                {
                                    !typeof userLogo === "string"? 
                                        (<img src={logoDefault} className="burger" alt="logoDefault" />)
                                        :
                                        (<img src={userLogo} className="burger" alt="userLogo" />)
                                }
                                {/* <img src={logoDefault} className="burger" alt="logoDefault" /> */}

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