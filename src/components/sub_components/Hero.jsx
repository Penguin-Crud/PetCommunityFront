import "../../styles/index.css";
import Flecha from "../../assets/img/flecha-_1_.svg";

function Hero() {
    
    return (
        <div className="hero">
            <div className="hero-info">
                <h1 className="hero-title">Don't buy, Adopt.</h1>
            </div>
            <div className="hero-gradient">
                <a href="#anchorHero" className="hero-button"><img className="hero-buttonImg" src={Flecha} alt="" /></a>
            </div>
        </div>
    )
}

export default Hero;