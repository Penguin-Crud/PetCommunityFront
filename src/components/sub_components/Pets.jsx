import "../../styles/index.css";
import PetsList from "../dynamics_components/lists/PetsList";
import { useEffect, useState } from "react";
import { dataPetsService } from "../../services/PetCommunityServices";
import Loading from "../dynamics_components/Loading";

function Pets() {

    const [dataExist, setDataExist] = useState(false);
    const [dataPets, setDataPets] = useState()

    useEffect( () =>{

        dataPetsService("/pets", "all").then( data => {
            setDataPets(data) 
            setDataExist(true)
        });
        
    }, [] )

    return (
        <section className="Slider">
            <h1 className="titleSlider">Pets for adoptation</h1>
                {
                    dataExist? 
                        <div className="pets">
                            <PetsList dataPets={dataPets} />
                        </div>  
                        :
                        <div className="pets-loading">
                            <Loading/>
                        </div>
                }
        </section>
    )
}

export default Pets;