import "../../styles/index.css";

function PetCard({name, years, date, imgURL}) {
    return (
        <div className="cardPet">
            <div className="slider-img-container">
               <img className="imgPet" src={imgURL} alt="joto" />
            </div>
            <div className="infoPet">    
                <div>
                    <p>{name}</p>
                    <p>{years}</p>
                </div>
                <p className="datePet">{date}</p>
            </div>
        </div>
    )
}

export default PetCard;