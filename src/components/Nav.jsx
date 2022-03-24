import "../styles/index.css";
import Searcher from "./dynamics_components/Searcher";
//import Usuario from "../assets/usuario.png";

import Logo from "../assets/logo3.png";

import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { useState} from "react";
import { dataPetsService } from "../services/PetCommunityServices";

function Nav() {

    const [id,setId] = useState(localStorage.getItem("authUserID"))
    const [userLogo,setUserLogo] = useState(null)

    
    useEffect(()=>{
        if(id!=null){dataPetsService('/associations', id).then(data=>{
            localStorage.setItem("logo",data.logo)
            localStorage.setItem("adress".data.adress)
            localStorage.setItem("capacity",data.capacity)
            
            setUserLogo(localStorage.getItem("logo"))
        })}
    },[])
    
    const logOut = () => {
        localStorage.clear()
        console.log(localStorage.getItem("authToken"))
        console.log("GoodBye")
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
                    id==null? <div>
                            <div className="btnAddPet">
                                <Link to="/signIn"> <button> <p>Sign In</p> </button> </Link>
                            </div>
                            <div className="btnAddPet">
                                <Link to="/signUp"> <button> <p>Sign Up</p> </button> </Link>
                            </div>
                        </div>
                        :
                        <div className="dropdown"> 
                            <div className="container-usuario">
                                <img src={id?userLogo:"https://d1kvlp4er3agpe.cloudfront.net/resources/images/groups/3/6/3/2/1/53fzpnfuwu.jpg"} className="burger" alt="burger" />
                            </div>
                            <ul>
                                <li>
                                    <Link to={`/detailAssociation/${id}`}>My Profile</Link>
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