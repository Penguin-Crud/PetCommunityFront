import "../../styles/index.css";
import { useParams } from "react-router-dom";

function PetEditFormulario() {
    let { id } = useParams();

    return <p>hola edit id: {id} </p>
}
export default PetEditFormulario;