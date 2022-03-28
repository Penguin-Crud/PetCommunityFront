import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataPetsService } from "../../../services/PetCommunityServices";
import "../../../styles/index.css";
import Loading from "../Loading";
import aceptar from "../../../assets/aceptar.png";
import cancelar from "../../../assets/cancelar.png"; 
import femenino from "../../../assets/femenino.png";
import masculino from "../../../assets/masculino.png";

 function DetailPet() {
    let { id } = useParams();
    const [petDetail, setPetDetails] = useState();
    const [dataExist, setDataExist] = useState(false);

    useEffect(()=>{
        dataPetsService('/pets', id).then(data=>{
            setPetDetails(data)
            console.log(data)
            setDataExist(true)
        })
    },[])

    return (
        <div className="pet-details-container">
            {dataExist? 
            <div className="pet-details-and-description">
                    <div className="pet-details" key={petDetail.id}>
                        <div className="pet-name-and-image">
                            <h2 className="pet-detail-name">Hi, my name is {petDetail.name}</h2>
                            <img src={petDetail.petImg[0].url} alt="imgPetId" />
                        </div>
                        {console.log(petDetail.chip)}
                            <div className="pet-details-more-container"> 
                                <h2 className="pet-details-more">More details</h2> 
                                <div className="pet-details-more-texts">
                                    <p>Race: <span>{petDetail.race}</span></p>
                                    <p>Size: <span>{petDetail.size}</span></p>
                                    <p>Specie : <span>{petDetail.specie}</span></p>
                                    <div className="gender-chip-vaccines">
                                        <p>Gender:{petDetail.gender === "male" ? <img src={masculino} alt="Male" />:<img src={femenino} alt="Female" />}</p>
                                        <p>Chip:{petDetail.chip ? <img src={aceptar} alt="button true"/>:<img src={cancelar} alt="button false"/> }</p>
                                        <p>Vaccinated:{petDetail.vaccines ? <img src={aceptar} alt="button true"/>:<img src={cancelar} alt="button false"/> }</p>
                                    </div>   
                                </div>
                            </div>
                                <img className="pet-and-logo" src={petDetail.userRespDTO.logo} alt="logoAso" />
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
    )

}
export default DetailPet;

