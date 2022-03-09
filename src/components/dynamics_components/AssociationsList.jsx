import "../../styles/index.css";
import AssociationCard from "../cards/AssociationCard";
import { useEffect, useState } from "react";
import { dataPetsService } from "../../services/PetCommunityServices";

function AssociationsList() {

    const [dataExist, setDataExist] = useState(false);
    const [dataAssociations, setDataAssociations] = useState()

    useEffect( () =>{

        dataPetsService("/associations").then( data => {
            setDataAssociations(data)
            setDataExist(true)
        });
        
    }, [] )

    return (
        <div className="cardListAssociation">
            {
                dataExist ? dataAssociations.map(association => {
                    return <div key={association.id}>
                                <AssociationCard 
                                    imgURL={association.imgURL}
                                />
                           </div>
                })
                :
                (<h2>Loading ...</h2>)
            }
        </div>
    )
}

export default AssociationsList;