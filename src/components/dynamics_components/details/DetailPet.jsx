import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataPetsService } from "../../../services/PetCommunityServices";
import "../../../styles/index.css";
import Loading from "../Loading";
import PetCard from "../../cards/PetCard";

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
                            <PetCard 
                                name={petDetail.name} 
                                years={petDetail.age} 
                                date={petDetail.date} 
                                imgURL={petDetail.imgURL[0].url}
                                id={petDetail.id}
                            />
                        </div>

                            <div className="pet-details-more-container"> 
                                <h2 className="pet-details-more">More details</h2> 
                                <div className="pet-details-more-texts">
                                    <p>Race: <span>{petDetail.race}</span></p>
                                    <p>Chip: <span>{petDetail.chip}</span></p>
                                    <p>Specie : <span>{petDetail.specie}</span></p>
                                    <p>Gender : <span>{petDetail.gender}</span></p>
                                    <p>Size: <span>{petDetail.size}</span></p>
                                    <p>Vaccines : <span>{petDetail.vaccines}</span></p>
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
    )

}
export default DetailPet;

