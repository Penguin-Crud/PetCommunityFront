import "../../styles/index.css";

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
                <button className="actionEdit" >E</button>
                <button className="actionDelete" onClick={ () => deletePet( id )} >D</button>
            </td>
        </tr>
    )
}
export default PetCardDashboard;