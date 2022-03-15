import "../../styles/index.css"
import RecentPetsList from "../dynamics_components/RecentPetsList";

function Slider() {
    return (
        <section id="anchorHero" className="Slider">
            <h2>Recent pets put up for adoptation</h2>
            <RecentPetsList />
        </section>
    )
}

export default Slider;