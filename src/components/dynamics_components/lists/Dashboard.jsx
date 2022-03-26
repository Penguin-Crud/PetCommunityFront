import "../../../styles/index.css";
import PetCardDashboard from "../../cards/PetCardDashboard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataPetsService, deleteById } from "../../../services/PetCommunityServices";
import Loading from "../Loading";

function Dashboard() {

    const [dataExist, setDataExist] = useState(false);
    const [dataPets, setDataPets] = useState([])


    useEffect( () =>{
       /*  setInterval( */
        dataPetsService("/pets", "all").then( data => {
            setDataPets(data) 
            setDataExist(true)
        })/* ,5000) */;
        
    }, [] )

    const deletePet = (id) => {
        const arrayFiltrado = dataPets.filter(pet => pet.id !== id )
            
        // console.log(arrayFiltrado)
        setDataPets(arrayFiltrado)
        deleteById("/pets", id);
    }

    return (
        <div className="container-dashboard">
            <h1 className="title-dashboard">Dashboard</h1>
                <div className="table-dashboard">
                {
                    dataExist ?   
                        <main>
                            {
                                dataPets.map(pet => {
                                    return <PetCardDashboard 
                                                key={pet.id}
                                                id={pet.id}
                                                name={pet.name}
                                                age={pet.age}
                                                date={pet.date}
                                                specie={pet.specie}
                                                race={pet.race}
                                                gender={pet.gender}
                                                size={pet.size}
                                                vaccines={pet.vaccines}
                                                chip={pet.chip}
                                                description={pet.description}
                                                deletePet={deletePet}
                                            />  
                                    })      
                            }
                        </main>
                        :
                        <Loading />
                } 
                </div>
            <div className="btnAddPet">
                <Link to="/createPost"> <button> <p>Add Pet</p> </button> </Link>
            </div>
        </div>
    )
}

export default Dashboard; 