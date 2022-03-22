import "../styles/index.css";
import Hero from "./sub_components/Hero";
import Slider from "./sub_components/Slider";
import Pets from "./sub_components/Pets";
import Loading from "./dynamics_components/Loading";

function Main() {

    return(
        <main>
            <Hero />
            <Slider />
            <Pets />
           {/*  <Loading/> */}
        </main>
    )
}

export default Main;