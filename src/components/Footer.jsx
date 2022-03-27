import "../styles/index.css";
import imgGit from "../assets/GitHub-Logo1 1.svg";
import AssociationsList from "./dynamics_components/lists/AssociationsList.jsx";
import { useState } from "react";
import { dataPetsService } from "../services/PetCommunityServices";
import { useEffect } from "react";
import Loading from "./dynamics_components/Loading";

function Footer() {

    const logoUpdated = localStorage.getItem("authLogo")
    const [dataExist, setDataExist] = useState(false);
    const [dataAssociations, setDataAssociations] = useState();
    
    useEffect( () =>{
        console.log("se actualiza el footer")
        dataPetsService("/associations", "all").then( data => {

            setDataAssociations(data)
            setDataExist(true)
        });
        
    },[logoUpdated])

    return (
        <footer className="Footer">
            {/* {setAuthLogo(localStorage.getItem("authLogo"))} */}
            {dataExist?
            <div className="associations">
                <AssociationsList dataAssociations={dataAssociations}/>
            </div>
            :<Loading/>
            }
            <div className="information">
                <p>©️ 2022 Penguin-Crud </p>
                <a target="_blank" href="https://github.com/Penguin-Crud"> 
                    <img src={imgGit} alt="github" />
                </a>
            </div>  
         </footer>
    )
}

export default Footer;