import "../../styles/index.css";
import { Link } from "react-router-dom";

function PetCardDashboard({id, name, age, date, specie, race, gender, size, vaccines, chip, deletePet}) {

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
export default PetCardDashboard;