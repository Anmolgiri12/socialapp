import React from "react";
import Frontendfooter from "../../layouts/frontendfooter.jsx";
import Frontendheader from "../../layouts/frontendheader.jsx";
import Frontendmain from "../../layouts/frontendmain.jsx";

function Aboutcomponent(){
    return(
        <React.Fragment>
        <Frontendheader/>
        <Frontendmain/>
        <Frontendfooter/>
        </React.Fragment>
    )
}
export default Aboutcomponent;