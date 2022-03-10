import "../../styles/index.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dataPetsService } from "../../services/PetCommunityServices";

function PetEditFormulario() {
    let { id } = useParams();

    const [dataPet, setDatapet] = useState('');
    const [dataPetExist, setDatapetExist] = useState(false);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [picture, setPicture] = useState('');
    const [location, setLocation] = useState('');
    const [size, setSize] = useState('');
    const [specie, setSpecie] = useState('');
    const [race, setRace] = useState('');
    const [description, setDescription] = useState('');
    const [vaccines, setVaccines] = useState('');
    const [chip, setChip] = useState('');

    let petToEdit = {
        name: name, 
        age: age, 
        gender: gender,
        picture: picture,
        location: location, 
        size: size, 
        specie: specie, 
        race: race,
        description: description, 
        vaccines: vaccines, 
        chip: chip
    };

    useEffect( () =>{

        dataPetsService("/pets", id).then( pet => {
            // console.log(pet);
            setDatapet(pet);
            setDatapetExist(true);
        });
        
    }, [] )

    return (
        <div> 
            {
                dataPetExist? 
                <form className="FormPet" /*onSubmit={ addData }*/> 
                    <h1 className="titleFormCreate"> Edit Pet </h1>
                    <input 
                        type="text"
                        required 
                        placeholder="Name"
                        defaultValue={dataPet.name}
                        name="name"
                        onChange={ (e) => setName(e.target.value) }
                    />
                    <input 
                        type="text"
                        required 
                        placeholder="Age" 
                        defaultValue={dataPet.age}
                        age="age"
                        onChange={ (e) => setAge(e.target.value) }
                    />
                    <input 
                        type="text"
                        required 
                        placeholder="Gender" 
                        defaultValue={dataPet.gender}
                        gender="gender"
                        onChange={ (e) => setGender(e.target.value) }
                    />
                    <input 
                        type="text"
                        required 
                        placeholder="Picture" 
                        defaultValue={dataPet.imgURL}
                        picture="picture"
                        onChange={ (e) => setPicture(e.target.value) }
                    />
                    <input 
                        type="text"
                        required 
                        placeholder="Location" 
                        defaultValue={dataPet.location}
                        location="location"
                        onChange={ (e) => setLocation(e.target.value) }
                    />
                    <input 
                        type="text"
                        required 
                        placeholder="Size(mall,medium,tall)" 
                        defaultValue={dataPet.size}
                        size="size"
                        onChange={ (e) => setSize(e.target.value) }
                    />
                    <input 
                        type="text"
                        required 
                        placeholder="Species(Dog-Cat)" 
                        defaultValue={dataPet.specie}
                        specie="specie"
                        onChange={ (e) => setSpecie(e.target.value) }
                    />
                    <input 
                        type="text"
                        required 
                        placeholder="Race" 
                        defaultValue={dataPet.race}
                        race="race"
                        onChange={ (e) => setRace(e.target.value) }
                    />
                    <input 
                        type="text"
                        required 
                        placeholder="Descrption" 
                        defaultValue={dataPet.description}
                        description="description"
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                    <input 
                        type="text"
                        required 
                        placeholder="Vaccies"
                        defaultValue={dataPet.vaccines}
                        vaccines="vaccines"
                        onChange={ (e) => setVaccines(e.target.value) }
                    />
                    <input 
                        type="text"
                        required 
                        placeholder="Chip"
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
                <p>Loading ...</p>
            }
            

            {/* <img className="imgDogAndCat" src={dogcat}/> */}
            
        </div>
    )
}
export default PetEditFormulario;