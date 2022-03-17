import { useParams } from "react-router-dom";
import "../../../styles/index.css";

function DetailAssociation() {

    let { id } = useParams();

    return "soy un detalle de un perfil mirame: " + id;
}

export default DetailAssociation;