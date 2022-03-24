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
            console.log(data)
            setUserData(data)
            console.log(data)
            setIsLoading(true)
        })
    },[])

    return (
        <div className="pet-details-container">
            {isLoading? 
            <div className="pet-details-and-description">
                    <div className="pet-details" key={userData.id}>
                        <div className="pet-name-and-image">
                            <h2 className="pet-detail-name"> {userData.username}</h2>
                            <AssociationCard
                                imgURL={userData.logo}
                                id={userData.id}
                            />
                        </div>

                            <div className="pet-details-more-container"> 
                                <h2 className="pet-details-more">More details</h2> 
                                <div className="pet-details-more-texts">
                                    <p>Name: <span>{userData.username}</span></p>
                                    <p>Adress: <span>{userData.adress}</span></p>
                                    <p>Capacity : <span>{userData.capacity}</span></p>
                                </div>
                            </div>
                    </div>
                    <div className="pet-description">
                            <h2 className="pet-description-header">Description</h2> 
                            <p className="description">Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Iste officia quod<br/>
                            soluta consequuntur officiis corrupti, pariatur quasi enim.<br/>
                            Deleniti enim aliquid magni dolore eius laborum natus ullam quam rem unde.
                            </p>
                    </div>
             </div>
            :
            <Loading/>
            }       
        </div>
        
    );
}

export default DetailAssociation;