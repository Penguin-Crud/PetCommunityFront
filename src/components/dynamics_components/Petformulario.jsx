import react from "react";
import "../../styles/componets_styles/PetFormulario.css"

function Petformulario() {
    return (
        <div> 
            <h1></h1>
             <form>
                 <div>
                    <label> name:</label> 
                    <input value="Name" />
                 </div>
                 <div>
                   <label> Pasword:</label>
                   <input value="Password" />
                 </div>
                 <button>Login</button>
                 

             </form>
            
        </div>
    )
}

export default Petformulario;
