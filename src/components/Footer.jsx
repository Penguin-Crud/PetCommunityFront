import "../styles/index.css";
import AssociationsList from "./dynamics_components/AssociationsList";
import imgGithub from "../assets/img/GitHub.png";



function Footer() {
    return (
        <footer className="Footer">
            <div className="associations">
                <AssociationsList />
            </div>
            <div className="Copyright">
                <h1> © 2022</h1> 
                <a target="_blank" href="https://github.com/Penguin-Crud"> <img  className="github"src={imgGithub} alt="" /></a>
               {/*  <button type="reset" onClick="location " className="button-github"><img className="github" src={imgGithub} text="hello"/></button> */}
            </div>                  
        </footer>
    )
}

export default Footer;