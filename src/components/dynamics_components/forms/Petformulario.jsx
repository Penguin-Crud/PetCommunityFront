import React, { useState } from 'react';
import "../../../styles/componets_styles/PetFormulario.css";
import dogcat from "../../../assets/img/dogcat.jpeg"; 
import { create } from '../../../services/PetCommunityServices';

function Petformulario() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [femaleCheck, setFemaleCheck]=useState(false);
    const [maleCheck, setMaleCheck]=useState(false);
    const [picture, setPicture] = useState('');
//     const [location, setLocation] = useState('');
    const [size, setSize] = useState('');
    const [specie, setSpecie] = useState('');
    const [race, setRace] = useState('');
    const [description, setDescription] = useState('');
    const [vaccines, setVaccines] = useState(false);
    const [chip, setChip] = useState(false);
    const [priority, setPriority] = useState('');
    
    let list = [name, age, gender, /*location,*/ size, specie, race, description, vaccines, chip, priority]
    let formData = new FormData();
    
    const cleanInputs = (event) => {
        event.target.reset()
    }

    const addData = (e) => {
     e.preventDefault()
     
     // let data = [
     //      '{\n    "name": "jorge"',
     //      ',\n    "age": "1 años"',
     //      ',\n    "gender": "male"',
     //      ',\n    "size": "mediano"',
     //      ',\n    "specie": "canino"',
     //      ',\n    "race": "pastor aleman"',
     //      ',\n    "description": "muy cariñoso y bueno"',
     //      ',\n    "vaccines": true',
     //      ',\n    "chip": true',
     //      ',\n    "priority": "15/02/2020"',
     //      '\n   }\n'
     // ]
     let datas = [
          '{\n    "name": ',
          ',\n    "age": ',
          ',\n    "gender": ',
          ',\n    "size": ',
          ',\n    "specie": ',
          ',\n    "race": ',
          ',\n    "description": ',
          ',\n    "vaccines": ',
          ',\n    "chip": ',
          ',\n    "priority": ',
          '\n   }\n'
     ]
    
     for (let i = 0; i < list.length; i++) {

          typeof list[i] === "boolean" ? 
               datas[i] += `${list[i]}` 
               :
               datas[i] += `"${list[i]}"` 
     }
     // console.log(data)
     console.log(datas)


     formData.append('pet', new Blob(datas, {type : 'application/json'}));
     formData.append('image', picture);

     create("/pets", formData)
     
     cleanInputs(e)
    }

    return (
        <div className='container-form-create'> 
          <h1 className="title-register">New Pet</h1>
          <form name='formCreate' className="formCreate" onSubmit={ addData }> 
               <div>
                    <div className='form-top'>
                         <div className='name-age-description-priority'>
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
                                   placeholder="Description" 
                                   defaultValue=""
                                   description="description"
                                   onChange={ (e) => setDescription(e.target.value) }
                                   />
                              <input 
                                   type="text"
                                   required 
                                   placeholder="Priority for adoptation" 
                                   defaultValue=""
                                   priority="priority"
                                   onChange={ (e) => setPriority(e.target.value) }
                              />

                              <input 
                                   id='input-fileImg'
                                   type="file"
                                   conte
                                   accept="image/*"
                                   required 
                                   placeholder="Picture" 
                                   defaultValue=""
                                   picture="picture"
                                   onChange={ (e) => setPicture(e.target.files[0]) }
                              />
                              <label htmlFor='input-fileImg' className='button-file'>Select Image</label>
                         </div>
                         <div className='size-species-race-gender-vachip' >
                              <input 
                                   type="text"
                                   required 
                                   placeholder="Size(small,medium,tall)" 
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
                              <div className='gender'>
                                   <div> 
                                        <label htmlFor='male'>Male</label>
                                        <input 
                                        type="radio"
                                        gender="gender"
                                        name= "gender"
                                        onClick={ () => setGender("male")}     
                                        />
                                   </div>
                                   <div>
                                        <label htmlFor='female'>Female</label>
                                        <input 
                                        type="radio"
                                        gender="gender"
                                        name= "gender"
                                        onClick={ () => setGender("female")}
                                        />
                                   </div>
                              </div>
                              <div className='vachip'>
                                   <div >
                                        <label htmlFor="vaccines">Vaccined</label>
                                        <input 
                                             type="checkbox" 
                                             defaultChecked={vaccines} 
                                             id='vaccines'
                                             name="vaccines"
                                             vaccines="vaccines"
                                             onClick={ vaccines? () => setVaccines(false) : () => setVaccines(true) }
                                        />
                                        {/* {console.log(vaccines)} */}
                                   </div>    
                                   <div >
                                        <label htmlFor="chip">Chip</label>
                                        <input 
                                             type="checkbox" 
                                             defaultChecked={chip} 
                                             id='chip'
                                             name="chip"
                                             chip="chip"
                                             onClick={ chip? () => setChip(false) : () => setChip(true) }
                                        />
                                        {/* {console.log(chip)} */}
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* <input 
                         type="text"
                         required 
                         placeholder="Location" 
                         defaultValue=""
                         location="location"
                         onChange={ (e) => setLocation(e.target.value) }
                    /> */}
                    
                   
                    <button type="sumbit">Submit</button>
                 
               </div>
               <div className='DogAndCat' >
                    <img className="imgDogAndCat" src={dogcat} alt="dogcat"/>
               </div>
          </form>

            
        </div>
    )
}

export default Petformulario;
