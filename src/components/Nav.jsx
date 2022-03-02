import "../styles/index.css";
import Searcher from "./dynamics_components/Searcher";

function Nav() {
    return (
        <nav className="nav">
            <p>Logo</p>
            <Searcher />
        </nav>
    )
}

export default Nav;