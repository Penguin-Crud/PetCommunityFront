import "../../styles/index.css";
import { Link } from "react-router-dom";
import aceptar from "../../assets/aceptar.png";
import cancelar from "../../assets/cancelar.png";

/*  function PetCardDashboard({id, name, age, date, specie, race, gender, size, vaccines, chip, deletePet}) {

    return (
        <tr>
            <td> <Link to={`/detailPet/${id}`} > + </Link> </td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{date}</td>
            <td>{specie}</td>
            <td>{race}</td>
            <td>{gender}</td>
            <td>{size}</td>
            <td>{vaccines}</td>
            <td>{chip}</td> 
            <td className="dashboardActions">
                <div className="actionsContent">
                    <div className="leftBorder"></div>
                    <Link to={`/editPost/${id}`}> <button className="actionEdit" >E</button> </Link>
                    <button className="actionDelete" onClick={ () => deletePet( id )} >D</button>
                </div>
            </td>
        </tr>
        
    )
}
export default PetCardDashboard;  */


function PetCardDashboard({id, name, age, date, specie, race, gender, size, vaccines, chip, deletePet}) {

    return (
        <div className="dashboard-container">
             <Link to={`/detailPet/${id}`} > +Info </Link> 
            
            <div className="animal">
                <h5>Name: {name}</h5>
                <p> Age: {age}</p>
                <p>Date: {date}</p>
                <p>Specie: {specie}</p>
            </div>

            <div>
                <p>Race: {race}</p>
                <p>Gender: {gender}</p>
                <p>Size: {size}</p>
            </div>

            <div className="dashboard-img-container">
                <p>{vaccines == "true" ? <img src={aceptar} alt="button true"/>:<img src={cancelar} alt="button false"/> }</p>

                <p>{chip == "true" ? <img src={aceptar} alt="button true"/>:<img src={cancelar} alt="button false"/> }</p>
            </div>

             
                <div className="actionsContent">
                    <Link to={`/editPost/${id}`}> <button className="actionEdit" >E</button> </Link>
                    <button className="actionDelete" onClick={ () => deletePet( id )} >D</button>
                </div>
        
        </div>
    )
}
export default PetCardDashboard;