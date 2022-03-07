import "../styles/index.css";
import Searcher from "./dynamics_components/Searcher";

function Nav() {
    return (
        <nav className="nav">
            <p>Logo</p>
            <Searcher />

            <header className="navbar">
                <div>
                    <img className="menu" src="../../assets/img/burger2.svg" alt="profile" />
                </div>
                <div className="dropdown">
                   
                    <a href="#">name</a>
                    <ul>
                        <li>
                            <a href="#">My Profile</a>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                        
                </div>
            </header>
        
        </nav>
    )
}

export default Nav;