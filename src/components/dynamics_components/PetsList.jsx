import "../../styles/index.css";
import PetCard from "../cards/PetCard";
import { useEffect, useState } from "react";
import { dataPetsService } from "../../services/PetCommunityServices";

function PetsList() {
    
    const [dataExist, setDataExist] = useState(false);
    const [dataPets, setDataPets] = useState()

    useEffect( () =>{

        dataPetsService().then( data => {
            setDataPets(data) 
            setDataExist(true)
        });
        
    }, [] )

    return (
        <div>
            {
                dataExist? dataPets.map(pet => {
                    <PetCard 
                        name={pet.name} 
                        years={pet.years} 
                        date={pet.date} 
                        imgURL={pet.imgURL}
                    />
                })
                :
                (<h2>Loading ...</h2>)
            }
        </div>
    )
}

export default PetsList;