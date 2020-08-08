import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Calendar from 'react-calendar'


function Schedule ( props ) {
    return ( 
        <Fragment>
        <div className="app">
        <h1 className="h1R">Trailer Schedule</h1>
        <Calendar />
        </div>
        </Fragment>
    ) 

}

export default withRouter (Schedule)