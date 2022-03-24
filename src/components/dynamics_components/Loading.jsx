import "../../styles/componets_styles/Loading.css";
import Load from "../../assets/logoLoading.svg"; 

function Loading() {
    
    return (
        <div className="img">
             <img className="loading" src={Load} alt="Loading"/>    
        </div>
    )
}

export default Loading;