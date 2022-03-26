import "../../../styles/index.css";
import PetCard from "../../cards/PetCard";
import { isOnline } from "../../../services/PetCommunityServices";
import { useState } from "react";

function PetsList({ dataPets, dataExist}) {
    
    const [isOnline, setIsOnline] = useState(false)

    const on = () => {
        isOnline().then(res => {
            console.log(res)
            setIsOnline(res)
        });
    }

    return (
        <div className="cardList">
            {
                isOnline?
                dataPets.map(pet => {
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
                <div className="container-img-data-auxiliar"> 
                    <img src={dataPets[0].petImg[0].url} alt="img data auxiliar" />
                </div>

            }
        </div>
    )
}

export default PetsList;