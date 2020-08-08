import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import MyForm from "./myform.js";

function Request ( props ) {
    return ( 
        <Fragment>
        <div className="app">
        <h1 className="h1R">Request a Quote</h1>
        <MyForm/>
        {/* Look into implementing a Wizard form https://redux-form.com/8.2.2/examples/wizard/ */}
        </div>
        </Fragment>
        
    ) 

}

export default withRouter (Request)