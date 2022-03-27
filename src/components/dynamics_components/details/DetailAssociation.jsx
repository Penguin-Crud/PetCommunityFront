import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { dataPetsService } from "../../../services/PetCommunityServices";
import "../../../styles/index.css";
import AssociationCard from "../../cards/AssociationCard";
import Loading from "../Loading";

function DetailAssociation() {
    let { id } = useParams();
    const [userData,setUserData] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        dataPetsService('/associations', id).then(data=>{
            setUserData(data)
            setIsLoading(true)
            localStorage.setItem('authUsername', data.username)
            localStorage.setItem('authUserID',data.id)
            localStorage.setItem('authAdress',data.adress)
            localStorage.setItem('authCapacity',data.capacity)
            // localStorage.setItem('authLogo',data.logo)
            // Global.authUserLogo = localStorage.getItem("authLogo")
        })
    },[])

    return (
        <div className="pet-details-container">
            {isLoading? 
                <div className="logo-info">
                    
                    <img src={userData.logo} alt="logoUserImg" />

                    <div >
                        <p>Name: <span>{userData.username}</span></p>
                        <p>Adress: <span>{userData.adress}</span></p>
                        <p>Capacity : <span>{userData.capacity}</span></p>
                        {/* <p>Web : <span>{userData.website}</span></p> */}
                    </div>
                     
                </div>
            :
                <Loading/>
            }       
        </div>
    );
}

export default DetailAssociation;