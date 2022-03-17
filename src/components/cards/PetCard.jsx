import "../../styles/index.css";
import { Link } from "react-router-dom";

function PetCard({name, years, date, imgURL, id}) {
    return (
        <div className="cardPet">
            <Link to={`/detailPet/${id}`} >
            <img className="imgPet" src={imgURL} alt="joto" />
            <div className="infoPet">    
                <div>
                    <p>{name}</p>
                    <p>{years}</p>
                </div>
                <p className="datePet">{date}</p>
            </div>
            </Link>
        </div>
    )
}

export default PetCard;