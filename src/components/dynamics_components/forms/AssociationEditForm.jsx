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
        console.log(data)
        let jsonUserToUpdate = [JSON.stringify(data)];
        
        
        formData.append('user', new Blob(jsonUserToUpdate, {type : 'application/json'}));
        formData.append('image', logo);
        setIsLoading(true)
        updateUser("/associations", formData).then(res =>{
            setIsLoading(false)
            cleanInputs(e)
            navigate(`/detailAssociation/${id}`) 
        })
    }

    return (
        <div className='container-form-create'> 
        
        { isLoading? 
                <Loading />
            : 
                <div className="container-editUser"> 
                    <h1 className="title-register"> Edit Association </h1>
                    <form className="formCreate" onSubmit={ editData }> 
                        <div>
                            <div className='form-top-2'>
                                <div className="username-adress-capacity-fileImg">
                                    <input 
                                        type="text"
                                        required
                                        placeholder="Username"
                                        defaultValue={username}
                                        name="username"
                                        onChange={ (e) => setUsername(e.target.value) }
                                        />
                                    <input 
                                        type="text"
                                        required 
                                        placeholder="Adress"
                                        defaultValue={adress}
                                        age="age"
                                        onChange={ (e) => setAdress(e.target.value) }
                                        />
                                    <input 
                                        type="text"
                                        required 
                                        placeholder="Capacity"
                                        defaultValue={capacity}
                                        capacity="capacity"
                                        onChange={ (e) => setCapacity(e.target.value) }
                                        />
                                    <input 
                                        id='input-fileImg'
                                        type="file"
                                        accept="image/*"
                                        // required 
                                        defaultValue=""
                                        logo="logo"
                                        onChange={ (e) => setLogo(e.target.files[0]) }
                                        />
                                    <label htmlFor='input-fileImg' className='button-file'>Select Image</label>
                                    {
                                        logo? <p className='message-fileImg'>Image selected.</p> :  <p className='message-fileImg-error'>Image not selected to change it.</p>
                                    }
                                </div>
                            </div>

                            {/* <div className="button"> */}
                                <button type="submit">Update</button>
                            {/* </div> */}
                        </div>

                    </form>
                </div>
        }     
        </div>
    )
}
export default AssociationEditForm;