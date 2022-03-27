import "../../../styles/index.css";
import AssociationCard from "../../cards/AssociationCard";
import { useEffect, useState } from "react";
import { dataPetsService } from "../../../services/PetCommunityServices";
import Loading from "../Loading";
import Global from "../../../Global";

function AssociationsList({dataAssociations}) {

      
    return (
        <div className="cardListAssociation">
           {dataAssociations.map(association => {
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