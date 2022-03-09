import React from "react";
import "../../styles/componets_styles/PetFormulario.css";
import dogcat from "../../assets/img/dogcat.jpeg"; 

function Petformulario() {
    return (
        <div> 
           
       
            <form className="FormPet"> 
               <h1 className="titleFormCreate"> New Pet</h1>
               <input placeholder="Name" />
               <input placeholder="Age" />
               <input placeholder="Gender" />
               <input placeholder="Picture" />
               <input placeholder="Location" />
               <input placeholder="Size(Small,medium,tall)" />
               <input placeholder="Especimen(Dog-Cat)" />
               <input placeholder="Description" />
               <input placeholder="Vaccines" />
               <input placeholder="Dog Pound" />
                
               <div className="button">
                 <button>Add Img.</button>
                 <button> Submit</button>
               </div>
            </form>

            <img className="imgDogAndCat" src={dogcat}/>
            
        </div>
    )
}

export default Petformulario;
