import React from "react";
import { useParams } from "react-router-dom";
function Delete(){
    let {id} = useParams()
    return(
        <React.Fragment>
            <p className="h1 text-center text-primary">Delete - {id}</p>
        </React.Fragment>
    )
}
export default Delete;