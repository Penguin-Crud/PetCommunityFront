import "../styles/index.css";
import imgGit from "../assets/GitHub-Logo1 1.svg";
import AssociationsList from "./dynamics_components/AssociationsList.jsx";

function Footer() {
    return (
        <footer className="Footer">
            <div className="associations">
                <AssociationsList />
            </div>

            <div className="information">
                <p>2022 Penguin-Crud ©️</p>
                <a target="_blank" href="https://github.com/Penguin-Crud"> 
                    <img src={imgGit} alt="github" />
                </a>
            </div>  
         </footer>
    )
}

export default Footer;