import { useParams } from "react-router-dom";
import "../../../styles/index.css";

function DetailPet() {

    let { id } = useParams();

    return "soy un detalle mirame: " + id;
}

export default DetailPet;