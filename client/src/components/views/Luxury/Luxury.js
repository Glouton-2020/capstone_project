import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import './Luxury.css';

function Luxury ( props ) {
    return ( 
		<Fragment>
        <div className="app">
        <h1>Luxury Page</h1>
        <section>
        <article>
        <p>Planning and finalizing of interior changeovers, new store setup, pop-up, visual décor, including prop placement and window display.</p>
							<div className="bullets">
																	<ul>
																					<li>Dedicated support for assessment and pre-planning, to ensure organized and efficient execution.</li>
																					<li>Skilled crews for art hanging and installation.</li>
																					<li>Full white-glove service with unpacking, placement and removal of packing debris.</li>
																			</ul>
															</div>
						</article>						
						
					</section>
								<section id="storage">		
						
						<figure>
							<div className="block">
								<img src="" alt="" />
							</div>
						</figure>
							
						<article>
							<h3>Storage and Warehousing</h3>
							<div class="content">
								<p>We provide the most needed service for managing merchandising, props and accessories for multiple sites.</p>
							</div>
							<div class="bullets">
																	<ul>
																					<li>Warehousing of items with personalized coding, images, inventory description and tagging with unique identification codes.</li>
																					<li>In-house crating and custom packing.</li>
																					<li>Secure spaces requiring approval for access and 24-hour, high-level security.</li>
																					<li>Suitable environments for artworks, antiques and unique objects.</li>
																			</ul>
															</div>
						</article>						
						
					</section>
								<section id="3rd">		
						
						<figure>
							<div className="block">
								<img src="" alt="" />
													</div>
						</figure>
							
						<article>
							<h3>3rd Party Logistics </h3>
							<div className="content">
								<p>AirSea customizes a streamlined process for timely distribution of fine furnishings, accessories, lighting, and artworks through our strategic locations. We manage your logistic operations offering the highest standards of handling, packing and transport to meet the integrity and reputation of your brand.</p>
							</div>
							<div className="bullets">
																	<ul>
																					<li>Full logistics management. </li>
																					<li>Climate-controlled and can accommodate specialized requirements. </li>
																					<li>Handling of documentation and customs requirements.</li>
																					<li>Exclusive membership in global logistics organizations and a worldwide network of providers. <br /> 
                                                                                    </li>
																			</ul>
															</div>
						</article>						
						
					</section>
					
        </div>
	</Fragment>
    ) 

}

export default withRouter (Luxury)