import "../../styles/index.css";
import { Link } from "react-router-dom"

function PetCardDashboard({id, name, age, date, specie, race, gender, size, vaccines, chip, deletePet}) {

    return (
        <tr>
            <td>+ {id}</td>
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
                <Link to={`/editPost/${id}`}> <button className="actionEdit" >E</button> </Link>
                <button className="actionDelete" onClick={ () => deletePet( id )} >D</button>
            </td>
        </tr>
    )
}
export default PetCardDashboard;

//onClick={ () => props.deleteUser(user.id) }