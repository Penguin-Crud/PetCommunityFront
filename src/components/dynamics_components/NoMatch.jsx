import React from "react";
import "../../styles/index.css";


function NoMatch (){
    return(
    <div>
        <section className="page_404">
            <div className="container-noMatch">
                <div className="row">	
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">Looks like you're lost</h3>
                                <p>The page you are looking for is not avaible!</p>
                                <a href="/" className="link_404">Home</a>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </section>
    </div>   
    )
}

export default NoMatch;