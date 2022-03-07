import "../../styles/index.css";
import PetsList from "../dynamics_components/PetsList";

function Pets() {
    return (
        <section className="Slider">
            <h1 className="titleSlider">Pets for adoptation</h1>
            <div className="pets">
                <PetsList />
            </div>
        </section>
    )
}

export default Pets;