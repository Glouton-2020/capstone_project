import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

function Request ( props ) {
    return ( 
        <Fragment>
        <div className="app">
        <h1>Request a Quote</h1>
        {/* Look into implementing a Wizard form https://redux-form.com/8.2.2/examples/wizard/ */}
        </div>
        </Fragment>
        
    ) 

}

export default withRouter (Request)