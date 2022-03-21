import { Link } from "react-router-dom";
import "../../styles/index.css";

function AssociationCard({imgURL, id}) {
    return (
        <div className="cardAssociation">
            {console.log(imgURL)}
            <Link to={`/detailAssociation/${id}`}> <img className="imgAssociation" src={imgURL} alt="imgAssociation" /> </Link>
        </div>
    )
}

export default AssociationCard;