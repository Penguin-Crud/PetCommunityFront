import "../../styles/index.css";
import PetsList from "../dynamics_components/PetsList";

function Pets() {
    return (
        <section className="Slider">
            <h2>Pets for adoptation</h2>
            <div className="pets">
                <PetsList />
            </div>
        </section>
    )
}

export default Pets;