import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./about.css";


function About ( props ) {
        return (
            <div className="app">
            <h1> About </h1>
            <section>
            <img src="" />
            <article>
        <blockquote>
    <p styleName="text-align: center;"><strong>AirSea is a global leader in white glove shipping and logistics. </strong></p>
    <p styleName="text-align: center;">The three pillars to our great organization are care, handling and expertise.</p>
    </blockquote>
                        </article>	
        <section id="history">
            <h2>Est. 1966</h2>
            <article>
                <div className="content">
                    <h4>Knowledge Passed Down Over Five Decades</h4>
    <p><strong>We are dedicated to serving our clients and passionate about building strong lasting relationships. </strong></p>
    <p>This pushes us to go above and beyond on our clients’ behalf. Our expertise is our main asset in addition to our on-site and in-office teams who are the best in their fields. The AirSea Packing Group remains a family-run business and has grown to become a leading force in the white-glove shipping industry.</p>
    <p>AirSea is proud to have offices in Atlanta, London, Paris, New York, Miami, Dallas, Washington D.C, Chicago, Phoenix, and Los Angeles.</p>
    <p>A trusted network of fine art agents around the globe allows us to offer a worldwide, white-glove shipping service.</p>
                </div>
                    <img width="1019" height="643" src="https://airseapacking.com/wp-content/uploads/2019/03/World-Map-with-locations-1.jpg" className="attachment-full size-full" sizes="(max-width: 1019px) 100vw, 1019px" />		</article>
                    
                <h2>FAQ</h2>
                <p>Still need answers? <a href="/Request">Contact Us</a></p>

                                        <p><strong>Yes.</strong> It&#8217;s all about the respect, expertise and involvement you will receive throughout the process leaving you with a fantastic delivery experience. White-glove service includes client consultation, unpacking, inspection, tracking, storage, removal/disposal of packing materials, transporting your order and setting it up in the room of your choice.</p>
    <p>Please <a href="/Request">contact us</a> to experience all the elements that add up to our white-glove service.</p>
                                    
                            </section>
                    </section>
        </div>
        );
    }

    export default withRouter (About)