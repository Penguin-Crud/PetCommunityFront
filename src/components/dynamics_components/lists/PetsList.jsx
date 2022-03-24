import "../../../styles/index.css";
import PetCard from "../../cards/PetCard";
import { useEffect, useState } from "react";
import { dataPetsService } from "../../../services/PetCommunityServices";
import Loading from "../Loading";

function PetsList() {
    
    const [dataExist, setDataExist] = useState(false);
    const [dataPets, setDataPets] = useState()

    useEffect( () =>{

        dataPetsService("/pets", "all").then( data => {
            setDataPets(data) 
            setDataExist(true)
        });
        
    }, [] )

    return (
        <div className="cardList">
            {
                dataExist? dataPets.map(pet => {
                    return <div  key={pet.id}>
                                <PetCard 
                                    name={pet.name} 
                                    years={pet.age} 
                                    date={pet.date} 
                                    imgURL={pet.petImg[0].url}
                                    id={pet.id}
                                />
                            </div>
                })
                :
                <div className="loading-petlist">
                    <Loading/>
                </div>
            }
        </div>
    )
}

export default PetsList;