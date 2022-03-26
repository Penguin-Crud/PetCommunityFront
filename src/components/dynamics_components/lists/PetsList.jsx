import "../../../styles/index.css";
import PetCard from "../../cards/PetCard";
import { useState } from "react";

function PetsList({ dataPets }) {
    
    const [isOnline, setIsOnline] = useState()

    const on = () => {
        isOnline().then(res => {
            console.log(res)
            setIsOnline(res)
        });
    }

    return (
        <div className="cardList">
            {
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
                
                

            }
        </div>
    )
}

export default PetsList;