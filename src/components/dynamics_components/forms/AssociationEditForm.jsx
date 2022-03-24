import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../services/PetCommunityServices";


function AssociationEditForm() {
    let navigate = useNavigate();
    
    let  id  = localStorage.getItem('authUserID');
    const [logo,setLogo] = useState(localStorage.getItem('authLogo'))
    const [username, setUsername] = useState(localStorage.getItem('authUsername'));
    const [adress, setAdress] = useState(localStorage.getItem('authAdress'));
    const [capacity, setCapacity] = useState(localStorage.getItem('authCapacity'));
    
    
    let formData = new FormData();
  
    // useEffect( () =>{
        
        
        
    // }, [] )
    
    const cleanInputs = (event) => {
        event.target.reset()
    }

    const editData = (e) => {
        e.preventDefault()
    
        id = parseInt(id);
        let updatedUser = {
            id:id, 
            username:username, 
            adress: adress, 
            capacity: capacity,
            
            
        }

        
        // if (!username.trim()) updatedUser.username = dataPet.name
        // if (!adress.trim()) updatedPet.age = dataPet.age
        // if (!capacity.trim()) updatedPet.petImg = dataPet.petImg[0].url
        

        console.log(updatedUser)
        let jsonUserToUpdate = [JSON.stringify(updatedUser)];
        let stringUserToUpdate = updateUser.toString()
        console.log(jsonUserToUpdate);
        console.log(stringUserToUpdate);
        formData.append('user', new Blob(jsonUserToUpdate, {type : 'application/json'}));
        formData.append('image', logo);

        updateUser("/associations", formData).then(res =>{
            cleanInputs(e)
            navigate(`/detailAssociation/${id}`) 
        })
    }

    return (
        <div> 
        
            
            <form className="FormPet" onSubmit={ editData }> 
                <h1 className="titleFormCreate"> Edit Association </h1>
                <label >Username<input 
                            type="text"
                            required 
                            defaultValue={username}
                            name="username"
                            onChange={ (e) => setUsername(e.target.value) }
                        /></label> 
                <label>Adress<input 
                    type="text"
                    required 
                    defaultValue={adress}
                    age="age"
                    onChange={ (e) => setAdress(e.target.value) }
                /></label>
             
                <label>Capacity<input 
                    type="text"
                    required 
                    defaultValue={capacity}
                    capacity="capacity"
                    onChange={ (e) => setCapacity(e.target.value) }
                /></label>

                <input 
                    type="file"
                    accept="image/*"
                    // required 
                    placeholder="Logo" 
                    defaultValue=""
                    logo="logo"
                    onChange={ (e) => setLogo(e.target.files[0]) }
                />
                
                <div className="button">
                {/* <button>Add New Logo</button> */}
                <button type="submit">Update</button>
                </div>
            </form>
              
        </div>
    )
}
export default AssociationEditForm;