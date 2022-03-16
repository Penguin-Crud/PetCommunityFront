import React from "react";
import "../../styles/index.css";


function NoMatch (){
    return(
    
    <div className="noMatch-title">
        <h1>HTTP​ Error 404</h1>
        <p> Not Found </p>
        <a href="/" className="noMatch-button">Back to Main Page</a>
    </div>
    )
}

export default NoMatch;