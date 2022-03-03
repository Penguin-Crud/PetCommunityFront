import "../../styles/index.css";
import PetCard from "../cards/PetCard";
import { useEffect } from "react";
import { dataPetsService } from "../../services/PetCommunityServices";

function PetsList() {
    
    useEffect( () =>{
        console.log(dataPetsService())
    }, [] )

    return (
        <div>
            <PetCard />
            
            <header className="App-header">
                <p> Edit <code>src/App.js</code> and save to reload. </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default PetsList;