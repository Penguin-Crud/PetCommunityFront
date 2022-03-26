import "../../styles/index.css";
import PetsList from "../dynamics_components/lists/PetsList";
import { useEffect, useState } from "react";
import { dataPetsService } from "../../services/PetCommunityServices";
import Loading from "../dynamics_components/Loading";
import { isOnline } from "../../services/PetCommunityServices";

function Pets() {

    const [dataExist, setDataExist] = useState(false);
    const [dataPets, setDataPets] = useState();
    const [isOnlinee, setIsOnlinee] = useState(true);

    isOnline()
        .then(res => {
            // console.log("before: ", isOnlinee)
            setIsOnlinee(res)
            // console.log("after: ", isOnlinee)
        }
    )
    

    useEffect( () =>{
        dataPetsService("/pets", "all").then( data => {
            setDataPets(data) 
            setDataExist(true)
        });
    }, [] )

    return (
        <section className="container-list-pets">
            <h1 className="titleSlider">Pets for adoptation</h1>
                {
                    dataExist? 
                        isOnlinee?
                            <div className="pets">
                                <PetsList dataPets={dataPets}/>
                            </div>
                        :
                            <div className="container-img-data-auxiliar"> 
                                <img src={"https://i.pinimg.com/236x/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"} alt="img data auxiliar" />
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