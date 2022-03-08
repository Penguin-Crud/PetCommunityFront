import "../../styles/index.css";

function AssociationCard({imgURL}) {
    return (
        <div className="cardAssociation">
            <img className="imgAssociation" src={imgURL} alt="" />
        </div>
    )
}

export default AssociationCard;