import "../../styles/index.css";
import { Link } from "react-router-dom";
import aceptar from "../../assets/aceptar.png";
import cancelar from "../../assets/cancelar.png"; 
import basurero from "../../assets/img/basurero.png"; 
import edit from "../../assets/img/edit.png";
import femenino from "../../assets/femenino.png";
import masculino from "../../assets/masculino.png";

function PetCardDashboard({id, name, age, date, specie, race, gender, size, vaccines, chip, description, deletePet}) {

    return (
        <div className="animal-container">

            <div className="animal-info">
                <div>
                    <p>Name:  <p className="value">{name}</p></p>
                    <p>Age:   <p className="value">{age}</p></p>
                    <p>Date:  <p className="value">{date}</p></p>
                    <p>Specie:<p className="value">{specie}</p></p>
                    <p>Race:  <p className="value">{race}</p></p>
                    <p>Size:  <p className="value">{size}</p></p>
                </div>
                <div className="img-genero">
                    <p>Gender:{gender == "male" ? <img src={masculino} alt="Male" />:<img src={femenino} alt="Female" />}</p>
                    <p>Chip?:{chip == "true" ? <img src={aceptar} alt="button true"/>:<img src={cancelar} alt="button false"/> }</p>
                    <p>Vaccinated?:{vaccines == "true" ? <img src={aceptar} alt="button true"/>:<img src={cancelar} alt="button false"/> }</p>
                </div>     
            </div>

            <div className="animal-description">

                <div className="button-container">

                    <Link to={`/detailPet/${id}`}><button className="info">+ Info</button></Link>

                    <div className="actionsContent">

                        <Link to={`/editPost/${id}`}> <button className="actionEdit"><img src={edit} alt="edit"/></button> </Link>                    
                        <button className="actionDelete" onClick={ () => deletePet( id )} ><img src={basurero} alt="delette"/></button>

                    </div>

                </div>

                <div className="description-container" >
                    <h3> Description:</h3>
                    <textarea disabled>{description}</textarea >
                </div>

            </div>

        </div>
    )
}
export default PetCardDashboard;