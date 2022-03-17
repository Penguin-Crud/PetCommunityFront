import "../../styles/componets_styles/Main.css";
import Load from "../../assets/img/logo.svg"; 

function Loading() {
    
    return (
        <div className="img">
             <img className="loading" src={Load} alt="Loading"/>    
        </div>
    )
}

export default Loading;