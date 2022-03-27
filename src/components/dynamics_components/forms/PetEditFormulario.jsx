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
    const [priority, setPriority] = useState('');
    const [gender, setGender] = useState('');
    const [petImg, setPetImg] = useState('');
    // const [location, setLocation] = useState('');
    const [size, setSize] = useState('');
    const [specie, setSpecie] = useState('');
    const [race, setRace] = useState('');
    const [description, setDescription] = useState('');
    const [vaccines, setVaccines] = useState('');
    const [chip, setChip] = useState('');

    let formData = new FormData();

    useEffect( () =>{
        
        dataPetsService("/pets", id).then( pet => {
            setDatapet(pet);
            setDatapetExist(true);
        });
        
    }, [] )
    
    const cleanInputs = (event) => {
        event.target.reset()
    }
    
    const editData = (e) => {
        e.preventDefault()
    
        id = parseInt(id);
        let updatedPet = {
            id:id, 
            name:name, 
            age:age, 
            priority:priority,
            gender:gender, 
            /*location:location, */
            size:size, 
            specie:specie, 
            race:race, 
            description:description,
            vaccines:vaccines, 
            chip:chip 
        }

        
        if (!name.trim()) updatedPet.name = dataPet.name
        if (!age.trim()) updatedPet.age = dataPet.age
        if (!gender.trim()) updatedPet.gender = dataPet.gender
        if (!priority.trim()) updatedPet.priority = dataPet.priority
        // if (!petImg.trim()) updatedPet.petImg = dataPet.petImg[0].url
        // if (!location.trim()) updatedPet.location = dataPet.location
        if (!size.trim()) updatedPet.size = dataPet.size
        if (!specie.trim()) updatedPet.specie = dataPet.specie
        if (!race.trim()) updatedPet.race = dataPet.race
        if (!description.trim()) updatedPet.description = dataPet.description
        if (!vaccines.trim()) updatedPet.vaccines = dataPet.vaccines
        if (!chip.trim()) updatedPet.chip = dataPet.chip
        
        console.log(updatedPet)
        let jsonUpdatedPet = [JSON.stringify(updatedPet)];

        formData.append('pet', new Blob(jsonUpdatedPet, {type : 'application/json'}))
        formData.append('image', petImg)

        update("/pets", formData).then(res =>{
            cleanInputs(e)
            navigate("/dashboard")
        })
        

    }

    return (
        <div className='container-form-create'> 
            <h1 className="title-register"> Edit Pet </h1>
        {
            dataPetExist? 
            <form className="formCreate" onSubmit={ editData }> 
            {/* <p>{console.log(list)}</p> */}
                <div>
                    <div className='form-top'>
                        <div className='name-age-description-priority'>
                            <input 
                                type="text" 
                                placeholder="Name"
                                defaultValue={dataPet.name}
                                name="name"
                                onChange={ (e) => setName(e.target.value) }
                            />
                            <input 
                                type="text" 
                                placeholder="Age" 
                                defaultValue={dataPet.age}
                                age="age"
                                onChange={ (e) => setAge(e.target.value) }
                            />
                            <select name="priority" id="priority" onChange={ (e) => setPriority(e.target.value) } >
                                <option value={dataPet.priority} >{dataPet.priority}</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                            <textarea
                                maxLength={240} 
                                placeholder="Description" 
                                defaultValue={dataPet.description}
                                description="description"
                                onChange={ (e) => setDescription(e.target.value) }
                            />
                        </div>
                        <div className='size-species-race-gender-vachip' >
                            <select  name="size" id="size" onChange={ (e) => setSize(e.target.value) } >
                                <option value={dataPet.size}  >{dataPet.size}</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                            <select  name="specie" id="specie" onChange={ (e) => setSpecie(e.target.value) } >
                                <option value={dataPet.specie} >{dataPet.specie}</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="other">Other</option>
                            </select>
                            <input 
                                type="text"  
                                placeholder="Race" 
                                defaultValue={dataPet.race}
                                race="race"
                                onChange={ (e) => setRace(e.target.value) }
                            />
                                {
                                    dataPet.gender === 'male' ?
                                        <div className='gender'>
                                            <div> 
                                                <label htmlFor='male'>Male</label>
                                                <input 
                                                defaultChecked={true}
                                                type="radio"
                                                gender="gender"
                                                name= "gender"
                                                onClick={ () => setGender("male")}     
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor='female'>Female</label>
                                                <input 
                                                defaultChecked={false}
                                                type="radio"
                                                gender="gender"
                                                name= "gender"
                                                onClick={ () => setGender("female")}
                                                />
                                            </div>
                                        </div>
                                    :
                                        <div className='gender'>
                                            <div> 
                                                <label htmlFor='male'>Male</label>
                                                <input 
                                                defaultChecked={false}
                                                type="radio"
                                                gender="gender"
                                                name= "gender"
                                                onClick={ () => setGender("male")}     
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor='female'>Female</label>
                                                <input 
                                                defaultChecked={true}
                                                type="radio"
                                                gender="gender"
                                                name= "gender"
                                                onClick={ () => setGender("female")}
                                                />
                                            </div>
                                        </div>
                                }
                            <div className='vachip'>
                                <div >
                                        <label htmlFor="vaccines">Vaccined</label>
                                        <input 
                                            type="checkbox" 
                                            defaultChecked={dataPet.vaccines} 
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
                                            defaultChecked={dataPet.chip} 
                                            id='chip'
                                            name="chip"
                                            chip="chip"
                                            onClick={ chip? () => setChip(false) : () => setChip(true) }
                                        />
                                        {/* {console.log(chip)} */}
                                </div>
                            </div>
                            <input 
                                id='input-fileImg'
                                type="file"
                                // conte
                                accept="image/*"
                                placeholder="Picture" 
                                picture="picture"
                                onChange={ (e) => setPetImg(e.target.files[0]) }
                            />
                            <label htmlFor='input-fileImg' className='button-file'>Select Image</label>
                            {
                                petImg? <p className='message-fileImg'>Image selected.</p> :  <p className='message-fileImg-error'>Image not selected to change it.</p>
                            }
                        </div>
                    </div>

                    <button type="sumbit">Submit</button>                                        
                </div>
                <div className='DogAndCat' >
                    <img className="imgDogAndCat" src={dataPet.petImg[0].url} alt="dogcat"/>
                </div>
            </form>
            // <form name='formCreate' className="formCreate-2" onSubmit={ editData }> 
            //     <div className="form-top-2">    
            //         {/* 
            //         <input 
            //             type="text"
            //             required 
            //             defaultValue={dataPet.gender}
            //             gender="gender"
            //             onChange={ (e) => setGender(e.target.value) }
            //         /> */}

            //         <div className='name-age-description-priority name-age-description-priority-2'>
            //             <input 
            //                 type="text"
            //                 required 
            //                 placeholder="Name"
            //                 defaultValue={dataPet.name}
            //                 name="name"
            //                 onChange={ (e) => setName(e.target.value) }
            //             />
            //             <input 
            //                 type="text"
            //                 required 
            //                 placeholder="Age" 
            //                 defaultValue={dataPet.age}
            //                 age="age"
            //                 onChange={ (e) => setAge(e.target.value) }
            //             />
            //             <select name="priority" id="priority" onChange={ (e) => setPriority(e.target.value) } required>
            //                 <option value="" >{dataPet.priority}</option>
            //                 <option value="low">Low</option>
            //                 <option value="medium">Medium</option>
            //                 <option value="high">High</option>
            //             </select>
            //             <textarea
            //                 maxLength={240}
            //                 required 
            //                 placeholder="Description" 
            //                 defaultValue={dataPet.description}
            //                 description="description"
            //                 onChange={ (e) => setDescription(e.target.value) }
            //             />
            //         </div>




            //         <input 
            //             type="text"
            //             required 
            //             defaultValue={dataPet.petImg[0].url}
            //             petImg="petImg"
            //             onChange={ (e) => setPetImg(e.target.value) }
            //             />
            //         {/* <input 
            //             type="text"
            //             required 
            //             defaultValue={dataPet.location}
            //             location="location"
            //             onChange={ (e) => setLocation(e.target.value) }
            //         /> */}
            //         <input 
            //             type="text"
            //             required 
            //             defaultValue={dataPet.size}
            //             size="size"
            //             onChange={ (e) => setSize(e.target.value) }
            //             />
            //         <input 
            //             type="text"
            //             required 
            //             defaultValue={dataPet.specie}
            //             specie="specie"
            //             onChange={ (e) => setSpecie(e.target.value) }
            //             />
            //         <input 
            //             type="text"
            //             required 
            //             defaultValue={dataPet.race}
            //             race="race"
            //             onChange={ (e) => setRace(e.target.value) }
            //             />
            //         {/* <input 
            //             type="text"
            //             required 
            //             defaultValue={dataPet.description}
            //             description="description"
            //             onChange={ (e) => setDescription(e.target.value) }
            //         /> */}
            //         <input 
            //             type="text"
            //             required 
            //             defaultValue={dataPet.vaccines}
            //             vaccines="vaccines"
            //             onChange={ (e) => setVaccines(e.target.value) }
            //             />
            //         <input 
            //             type="text"
            //             required 
            //             defaultValue={dataPet.chip}
            //             chip="chip"
            //             onChange={ (e) => setChip(e.target.value) }
            //             />
                
            //     </div>

            //     <div className="button">
            //         <button type="sumbit">Update</button>
            //     </div>
            // </form>
            :
             <Loading/>
        }        
        </div>
    )
}
export default PetEditFormulario;