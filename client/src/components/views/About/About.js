import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./about.css";



function About ( props ) {
        return (
        <Fragment>
            
            <div className="app">
                <section>
                    <h1 className="h1R"> COMPANY VALUES </h1>
                                    <article>
                                        <blockquote>
                                                <p className="quote"><strong>AirSea is a global leader in white glove shipping and logistics. </strong></p>
                                                <p className="quote">The three pillars to our organization are care, handling and expertise.</p>
                                                </blockquote>
                        </article>
                        <img className="about" src="" alt=""/>
        
                <section id="history">
                    <h2> EST. 1966</h2>
                                    <article>
                                        <div className="content">
                                            <h4>Knowledge Passed Down Over Five Decades</h4>
                                                    <p><strong>We are dedicated to serving our clients and passionate about building strong lasting relationships. </strong></p>
                                                    <p>The AirSea Packing Group remains a family-run business and has grown to become a leading force in the white-glove shipping industry.</p>
                                                    <p>AirSea is proud to have offices in Atlanta, London, Paris, New York, Miami, Dallas, Washington D.C, Chicago, Phoenix, and Los Angeles.</p>
                                                    <p>A trusted network of fine art agents around the globe allows us to offer a worldwide, white-glove shipping service.</p>
                                        </div>
                                                <img className="about" width="200" height="200" src="" alt="" />		
                                    </article>
                    <div className="services">
                    <h2>Services</h2>
                                                <br/>
                                                <p>Need help on your next project? 
                                                    <br/>
                                                    <a href="/Request">Request a Quote</a>
                                                </p>

                                                    <p><strong>
                                                    Client consultation, Unpacking, Inspection, Tracking</strong>
                                                    </p>
                                                    <p><strong>
                                                    Storage, Removal/Disposal of Packing Materials, Transporting Your Order and Installation</strong>
                                                    </p>
                                                    <p>Please <a href="/Request">contact us</a> to experience all the elements that add up to our white-glove service.</p>
                                        </div>
                            </section>
                    </section>
                </div>
        </Fragment>
        );
    }

    export default withRouter (About)