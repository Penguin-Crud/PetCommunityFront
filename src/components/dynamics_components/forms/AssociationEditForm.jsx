import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../services/PetCommunityServices";
import Loading from "../Loading";


function AssociationEditForm() {
    let navigate = useNavigate();
    
    let  id  = localStorage.getItem('authUserID');
    const [logo,setLogo] = useState(localStorage.getItem('authLogo'))
    const [username, setUsername] = useState(localStorage.getItem('authUsername'));
    const [adress, setAdress] = useState(localStorage.getItem('authAdress'));
    const [capacity, setCapacity] = useState(localStorage.getItem('authCapacity'));
    const [isLoading,setIsLoading] = useState(false);
    
    let formData = new FormData();

    const cleanInputs = (event) => {
        event.target.reset()
    }

    const editData = (e) => {
        e.preventDefault()
        
        id = parseInt(id);
        let data = {
            id:id, 
            username:username, 
            adress: adress, 
            capacity: capacity,
        }

        let jsonUserToUpdate = [JSON.stringify(data)];
        
        
        formData.append('user', new Blob(jsonUserToUpdate, {type : 'application/json'}));
        formData.append('image', logo);
        setIsLoading(true)
        updateUser("/associations", formData).then(res =>{
            
            localStorage.setItem("authLogo",res.data.logo)
            setIsLoading(false)
            cleanInputs(e)
            navigate(`/detailAssociation/${id}`) 
        })
    }

    return (
        <div> 
        
          { isLoading? <Loading />
          :
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
        }     
        </div>
    )
}
export default AssociationEditForm;