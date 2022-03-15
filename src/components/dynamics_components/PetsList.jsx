import "../../styles/index.css";
import PetCard from "../cards/PetCard";
import { useEffect, useState } from "react";
import { dataPetsService } from "../../services/PetCommunityServices";

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
                                    imgURL={pet.imgURL}
                                />
                            </div>
                })
                :
                (<h2>Loading ...</h2>)
            }
        </div>
    )
}

export default PetsList;