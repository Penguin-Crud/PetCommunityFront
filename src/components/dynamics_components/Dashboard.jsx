import "../../styles/index.css";
import PetCardDashboard from "../cards/PetCardDashboard";
import { useEffect, useState } from "react";
import { dataPetsService } from "../../services/PetCommunityServices";

function Dashboard() {

    const [dataExist, setDataExist] = useState(false);
    const [dataPets, setDataPets] = useState()

    useEffect( () =>{

        dataPetsService().then( data => {
            setDataPets(data) 
            setDataExist(true)
        });
        
    }, [] )

    return (
    <div className="containerDashboard">
        <h1 className="titleSlider marginTitle">Dashboard</h1>
        
        <div className="tableContainer">
            <table >
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Date</th>
                        <th>Species</th>
                        <th>Race</th>
                        <th>Gender</th>
                        <th>Size</th>
                        <th>Vaccines</th>
                        <th>Chip</th>
                        <th className="dashboardActions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    dataExist? dataPets.map(pet => {
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
                               />
                    })
                    :
                    (<tr><td> Loading ...</td></tr>)
                }
                </tbody>
            </table>
        </div>

    </div>
    
    )
}

export default Dashboard;