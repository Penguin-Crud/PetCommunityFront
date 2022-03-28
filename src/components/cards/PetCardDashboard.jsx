import "../../styles/index.css";
import { Link } from "react-router-dom";
import aceptar from "../../assets/aceptar.png";
import cancelar from "../../assets/cancelar.png"; 
import basurero from "../../assets/img/basurero.png"; 
import edit from "../../assets/img/edit.png";
import femenino from "../../assets/femenino.png";
import masculino from "../../assets/masculino.png";

function PetCardDashboard({id, name, age, priority, specie, race, gender, size, vaccines, chip, description, deletePet}) {

    return (
        <div className="animal-container">

            <div className="animal-info">
                <div className="titleValue">
                    <div>
                        <p>Name:</p><p className="value">{name}</p>
                    </div>
                    <div>
                        <p>Age:</p><p className="value">{age}</p>
                    </div>
                    <div>
                        <p>Priority:</p><p className="value">{priority}</p>
                    </div>
                    <div>
                        <p>Specie:</p><p className="value">{specie}</p>
                    </div>
                    <div>
                        <p>Race:</p><p className="value">{race}</p>
                    </div>
                    <div>
                        <p>Size:</p><p className="value">{size}</p>

                    </div>

                </div>
                <div className="img-genero">
                    <p>Gender:{gender === "male" ? <img src={masculino} alt="Male" />:<img src={femenino} alt="Female" />}</p>
                    <p>Chip:{chip ? <img src={aceptar} alt="button true"/>:<img src={cancelar} alt="button false"/> }</p>
                    <p>Vaccinated:{vaccines ? <img src={aceptar} alt="button true"/>:<img src={cancelar} alt="button false"/> }</p>
                </div>     
            </div>

            <div className="animal-description">
                <div className="button-container">
                    <Link to={`/detailPet/${id}`}><button className="info">+Info</button></Link>

                    <div className="actionsContent">
                        <Link to={`/editPost/${id}`}> <button className="actionEdit"><img src={edit} alt="edit"/></button> </Link>                    
                        <button className="actionDelete" onClick={ () => deletePet( id )} ><img src={basurero} alt="delette"/></button>
                    </div>
                </div>

                <div className="description-container" >
                    <h3> Description:</h3>
                    <textarea defaultValue={description} disabled></textarea >
                </div>
            </div>
        </div>
    )
}
export default PetCardDashboard;