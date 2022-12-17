import * as React from "react";
import { Link } from "react-router-dom";


function Error(){
    return(
        <div className="Error">
            <h1 className="Error--mainHeader"> 404 </h1>
            <h3 className="Error--secondaryHeader"> Oups! La page que vous demandez n'existe pas.</h3>
            <div>
                <Link to="/"> 
                    Retournez sur la page d'accueil
                </Link>
            </div>
        </div>
    )
}

export default Error;