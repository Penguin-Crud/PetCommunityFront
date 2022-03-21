import "../../../styles/index.css";
import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState} from "react";
import { dataPetsService, update } from "../../../services/PetCommunityServices";
import Loading from "../Loading";

function PetEditFormulario() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [dataPet, setDatapet] = useState('');
    const [dataPetExist, setDatapetExist] = useState(false);


    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');
    const [picture, setPicture] = useState('');
    // const [location, setLocation] = useState('');
    const [size, setSize] = useState('');
    const [specie, setSpecie] = useState('');
    const [race, setRace] = useState('');
    //const [description, setDescription] = useState('');
    const [vaccines, setVaccines] = useState('');
    const [chip, setChip] = useState('');


    useEffect( () =>{
        
        dataPetsService("/pets", id).then( pet => {
            setDatapet(pet);
            setDatapetExist(true);
        });
        
    }, [] )
    
    
    const editData = (e) => {
        e.preventDefault()
    
        id = parseInt(id);
        let updatedPet = {
            id:id, 
            name:name, 
            age:age, 
            date:date,
            gender:gender, 
            picture:picture, 
            /*location:location, */
            size:size, 
            specie:specie, 
            race:race, 
            /*description:description, */
            vaccines:vaccines, 
            chip:chip 
        }

        
        if (!name.trim()) updatedPet.name = dataPet.name
        if (!age.trim()) updatedPet.age = dataPet.age
        if (!gender.trim()) updatedPet.gender = dataPet.gender
        if (!date.trim()) updatedPet.date = dataPet.date
        if (!picture.trim()) updatedPet.picture = dataPet.imgURL
        // if (!location.trim()) updatedPet.location = dataPet.location
        if (!size.trim()) updatedPet.size = dataPet.size
        if (!specie.trim()) updatedPet.specie = dataPet.specie
        if (!race.trim()) updatedPet.race = dataPet.race
        // if (!description.trim()) updatedPet.description = dataPet.description
        if (!vaccines.trim()) updatedPet.vaccines = dataPet.vaccines
        if (!chip.trim()) updatedPet.chip = dataPet.chip

        console.log(updatedPet)

        update("/pets", updatedPet).then(res => navigate("/dashboard") )
        

        // cleanInputs(e)
    }

    return (
        <div> 
        {
            dataPetExist? 
            <form className="FormPet" onSubmit={ editData }> 
                <h1 className="titleFormCreate"> Edit Pet </h1>
                <input 
                    type="text"
                    required 
                    defaultValue={dataPet.name}
                    name="name"
                    onChange={ (e) => setName(e.target.value) }
                />
                <input 
                    type="text"
                    required 
                    defaultValue={dataPet.age}
                    age="age"
                    onChange={ (e) => setAge(e.target.value) }
                />
                <input 
                    type="text"
                    required 
                    defaultValue={dataPet.date}
                    date="date"
                    onChange={ (e) => setDate(e.target.value) }
                />
                <input 
                    type="text"
                    required 
                    defaultValue={dataPet.gender}
                    gender="gender"
                    onChange={ (e) => setGender(e.target.value) }
                />
                <input 
                    type="text"
                    required 
                    defaultValue={dataPet.imgURL[0].url}
                    picture="picture"
                    onChange={ (e) => setPicture(e.target.value) }
                />
                {/* <input 
                    type="text"
                    required 
                    defaultValue={dataPet.location}
                    location="location"
                    onChange={ (e) => setLocation(e.target.value) }
                /> */}
                <input 
                    type="text"
                    required 
                    defaultValue={dataPet.size}
                    size="size"
                    onChange={ (e) => setSize(e.target.value) }
                />
                <input 
                    type="text"
                    required 
                    defaultValue={dataPet.specie}
                    specie="specie"
                    onChange={ (e) => setSpecie(e.target.value) }
                />
                <input 
                    type="text"
                    required 
                    defaultValue={dataPet.race}
                    race="race"
                    onChange={ (e) => setRace(e.target.value) }
                />
                {/* <input 
                    type="text"
                    required 
                    defaultValue={dataPet.description}
                    description="description"
                    onChange={ (e) => setDescription(e.target.value) }
                /> */}
                <input 
                    type="text"
                    required 
                    defaultValue={dataPet.vaccines}
                    vaccines="vaccines"
                    onChange={ (e) => setVaccines(e.target.value) }
                />
                <input 
                    type="text"
                    required 
                    defaultValue={dataPet.chip}
                    chip="chip"
                    onChange={ (e) => setChip(e.target.value) }
                />
                
                <div className="button">
                <button>Add Img</button>
                <button type="sumbit">Update</button>
                </div>
            </form>
            :
             <Loading/>
        }        
        </div>
    )
}
export default PetEditFormulario;