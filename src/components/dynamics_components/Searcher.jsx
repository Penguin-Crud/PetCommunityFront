import "../../styles/index.css";
import Lupa from "../../assets/Lupa.svg";

function Searcher() {
    return (
        <div className="searcher">
            <input className="input-searcher" type="text" placeholder="Search..." />
            <img className="lupa-searcher" src={Lupa} alt="" />
        </div>
    )
}

export default Searcher;