import "../styles/index.css";
import Searcher from "./dynamics_components/Searcher";
import bars from "../assets/icons/bars-solid.svg"; 

import Logo from "../assets/logo3.png";

import React, { useEffect } from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import { useState} from "react";
import { dataPetsService } from "../services/PetCommunityServices";

function Nav() {

    let id= localStorage.getItem("authUserID")
    const [userLogo,setUserLogo] = useState(null)
    const navigate = useNavigate()

    
    useEffect(()=>{
        if(id!=null){dataPetsService('/associations', id).then(data=>{
            localStorage.setItem("authLogo",data.logo)
            localStorage.setItem("authAdress",data.adress)
            localStorage.setItem("authCapacity",data.capacity)
            
            setUserLogo(localStorage.getItem("logo"))
        })}
    },[id])
    
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
                    id==null? 
                        <div className="dropdown"> 
                            <div className="container-usuario">
                                <img src={bars} className="burger" alt="burger" />
                            </div>
                            <ul>
                                <li>
                                    <Link to="/signIn"> <button> <p>Sign In</p> </button> </Link>
                                </li>
                                <li>
                                    <Link to="/signUp"> <button> <p>Sign Up</p> </button> </Link>
                                </li>
                            </ul>
                        </div>         
                        :
                        <div className="dropdown"> 
                            <div className="container-usuario">
                                <img src={userLogo} className="burger" alt="burger" />
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