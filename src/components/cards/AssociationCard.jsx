import { Link } from "react-router-dom";
import "../../styles/index.css";

function AssociationCard({imgURL, id}) {


    return (
        <div className="cardAssociation">
            {/* {console.log(imgURL)} */}
            <Link to={`/detailAssociation/${id}`}> <img className="imgAssociation" src={imgURL?imgURL:"https://d1kvlp4er3agpe.cloudfront.net/resources/images/groups/3/6/3/2/1/53fzpnfuwu.jpg"} alt="imgAssociation" /> </Link>
        </div>
    )
}

export default AssociationCard;