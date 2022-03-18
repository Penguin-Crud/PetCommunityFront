import React, { useState } from 'react';
import "../../../styles/componets_styles/PetFormulario.css";
import dogcat from "../../../assets/img/dogcat.jpeg"; 
import { create } from '../../../services/PetCommunityServices';

function Petformulario() {

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

    let newPet = {
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

    const cleanInputs = (event) => {
        event.target.reset()
    }

    const addData = (e) => {
        e.preventDefault()

        console.log(newPet)

        create("/pets", newPet)
        //props.addUser({name: name, username: username});
        
        cleanInputs(e)
    }

    return (
        <div> 
            <form className="FormPet" onSubmit={ addData }> 
               <h1 className="titleFormCreate"> New Pet</h1>
               <input 
                    type="text"
                    required 
                    placeholder="Name"
                    defaultValue=""
                    name="name"
                    onChange={ (e) => setName(e.target.value) }
               />
               <input 
                    type="text"
                    required 
                    placeholder="Age" 
                    defaultValue=""
                    age="age"
                    onChange={ (e) => setAge(e.target.value) }
               />
               <input 
                    type="text"
                    required 
                    placeholder="Gender" 
                    defaultValue=""
                    gender="gender"
                    onChange={ (e) => setGender(e.target.value) }
               />
               <input 
                    type="text"
                    required 
                    placeholder="Picture" 
                    defaultValue=""
                    picture="picture"
                    onChange={ (e) => setPicture(e.target.value) }
               />
               <input 
                    type="text"
                    required 
                    placeholder="Location" 
                    defaultValue=""
                    location="location"
                    onChange={ (e) => setLocation(e.target.value) }
               />
               <input 
                    type="text"
                    required 
                    placeholder="Size(mall,medium,tall)" 
                    defaultValue=""
                    size="size"
                    onChange={ (e) => setSize(e.target.value) }
               />
               <input 
                    type="text"
                    required 
                    placeholder="Species(Dog-Cat)" 
                    defaultValue=""
                    specie="specie"
                    onChange={ (e) => setSpecie(e.target.value) }
               />
               <input 
                    type="text"
                    required 
                    placeholder="Race" 
                    defaultValue=""
                    race="race"
                    onChange={ (e) => setRace(e.target.value) }
               />
               <input 
                    type="text"
                    required 
                    placeholder="Descrption" 
                    defaultValue=""
                    description="description"
                    onChange={ (e) => setDescription(e.target.value) }
               />
               <input 
                    type="text"
                    required 
                    placeholder="Vaccies"
                    defaultValue=""
                    vaccines="vaccines"
                    onChange={ (e) => setVaccines(e.target.value) }
               />
               <input 
                    type="text"
                    required 
                    placeholder="Chip"
                    defaultValue=""
                    chip="chip"
                    onChange={ (e) => setChip(e.target.value) }
               />
                
               <div className="button">
                 <button>Add Img</button>
                 <button type="sumbit">Submit</button>
               </div>
            </form>

            <img className="imgDogAndCat" src={dogcat} alt="dogcat"/>
            
        </div>
    )
}

export default Petformulario;
