import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

function Art ( props ) {
    return ( 
		<Fragment>
        <div className="app">
        		<h1 className="h1R">ASP Fine Art Services</h1>
        
<p>Modern storage facilities with state-of-the-art security systems. Providing short unique inventory coding and digital tracking for short and long-term storage.</p>
                    <section>
                    <article>
							
							<div class="bullets">
																	<ul>
																					<li>Suitable environments for antiques, artworks and delicate items.</li>
																					<li>In-house crating and custom packing.</li>
																					<li>Secure spaces requiring approval for access and 24-hour, high-level security.</li>
																					<li>Spacious, well-lit viewing areas.</li>
																					<li>Concierge service for selecting and directing specific items as needed.</li>
																					<li>Inventory managements with digital item details including descriptions, locations, conditions and images.</li>
																			</ul>
															</div>
						</article>						
						
						</section>
								<section id="transport">		
						
						<figure>
							<div className="block">
								<img src="" alt="" />
															</div>
												</figure>
							
						<article>
								<h2>Transport, Import and Export Shipping</h2>
								<p>Planning and execution of packing, transport, and installation. </p>
								<p>Utilization of AirSea owned and operated fleet for timely and cost-effective shipping options, local and domestic.</p>
							<div className="bullets">
																	<ul>
																					<li>Inside delivery with unpacking, placement of product and removal of packing debris.</li>
																					<li>Real-time updates on delivery status with air-rides trucks that are GPS tracked.</li>
																					<li>Expert assistance for all import and export advising, shipping quotations, documentation and customs coordination.</li>
																					<li>In-house crating and custom packing to export standards.</li>
																			</ul>
															</div>
						</article>						
						
					</section>
								<section id="installation">		
						
						<figure>
								<img src="" alt="" />
															
						</figure>
							
						<article>
                            <h2>Installation</h2>
								<p>Placement and set up of fine art objects is an ASP FAS specialty. A trained team can plan and execute an entire project with effective time-saving solutions.</p>
							<div className="bullets">
																	<ul>
																					<li>Site assessment and pre-planning for organized and efficient execution.</li>
																					<li>Local collections and deliveries with unpacking, placement and removal of packing debris.</li>
																					<li>Dedicated project managers to plan and initiate any size project; Assisting with all inquiries from receiving, assessment to final installation.</li>
																					<li>Experience working with custom wall treatments.<br /> 
                                                                                    </li>
																			</ul>
															</div>
						</article>						
						
					</section>
        </div>
	</Fragment>
    ) 

}

export default withRouter (Art)