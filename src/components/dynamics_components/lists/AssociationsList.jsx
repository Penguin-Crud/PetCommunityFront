import "../../../styles/index.css";
import AssociationCard from "../../cards/AssociationCard";
import { useEffect, useState } from "react";
import { dataPetsService } from "../../../services/PetCommunityServices";
import Loading from "../Loading";
import { isOnline } from "../../../services/PetCommunityServices";

function AssociationsList({dataAssociations}) {

    const [dataExist, setDataExist] = useState(false);
    // const [dataAssociations, setDataAssociations] = useState()
    const [isOnlinee, setIsOnlinee] = useState(true);

    isOnline()
        .then(res => {
            // console.log("before: ", isOnlinee)
            setIsOnlinee(res)
            // console.log("after: ", isOnlinee)
        }
    )

    // useEffect( () =>{
    //     dataPetsService("/associations", "all").then( data => {
    //         setDataAssociations(data)
    //         setDataExist(true)
    //     });
    // }, [] )
      
    return (
        <div className="cardListAssociation">
            {/* {
                dataExist ?
                    isOnlinee ?
                        dataAssociations.map(association => {
                            return <div className="containerBars" key={association.id}>
                                        <div className="bars"></div>
                                        <AssociationCard 
                                            imgURL={association.logo}
                                            id={association.id}
                                        />
                                        <div className="bars"></div>
                                    </div>
                }):
                                    <div className="container-img-data-auxiliar-aso"> 
                                        <img src={"https://i.pinimg.com/236x/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"} alt="img data auxiliar" />
                                    </div> 
                :
                <Loading/> */}


            {
                dataAssociations.map(association => {
                    return <div className="containerBars" key={association.id}>
                                <div className="bars"></div>
                                <AssociationCard 
                                    imgURL={association.logo}
                                    id={association.id}
                                />
                                <div className="bars"></div>
                           </div>
                })
            }
        </div>
    )
}

export default AssociationsList;