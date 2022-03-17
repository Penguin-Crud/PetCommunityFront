import { Link } from "react-router-dom";
import "../../styles/index.css";

function AssociationCard({imgURL, id}) {
    return (
        <div className="cardAssociation">
            <Link to={`/detailAssociation/${id}`}> <img className="imgAssociation" src={imgURL} alt="imgAssociation" /> </Link>
        </div>
    )
}

export default AssociationCard;