import "../styles/index.css";
import AssociationsList from "./dynamics_components/AssociationsList";
import imgGithub from "../assets/img/GitHub.png";




function Footer() {
    return (
        <footer className="footer">
            <div className="associations">
                <AssociationsList />
            </div>
            <div className="copyright"> 
                <p className="copyrightText">© 2022</p>
                <a target="_blank" href="https://github.com/Penguin-Crud"> <img  className="github" src={imgGithub} alt="" /></a>
            </div>                  
        </footer>
    )
}

export default Footer;