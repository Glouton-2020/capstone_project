import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

function Art ( props ) {
    return ( 
		<Fragment>
        <div className="app">
        <h1>Art Page</h1>
        <p><a href="https://aspfas.com/">Visit ASP Fine Art Services</a></p>
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
								<img src="https://airseapacking.com/wp-content/uploads/2019/01/20160302_ASPFAS_handling-020.jpg" alt="art handler shipping" />
															</div>
												</figure>
							
						<article>
							<h3>Transport, Import and Export Shipping</h3>
							<div className="app">
								<p>Planning and execution of packing, transport, and installation. Utilization of AirSea owned and operated fleet for timely and cost-effective shipping options, local and domestic. Professional, skilled crews for white-glove delivery and installation of your product(s) to reflect the highest integrity of your business.</p>
							</div>
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
							<div className="expand">
								<img src="https://airseapacking.com/wp-content/uploads/2019/01/ASPFAS_handling-and-install_014.jpg" alt="art handling and installation" />
															</div>
												</figure>
							
						<article>

							<div class="app">
                            <h3>Installation</h3>
								<p>Placement and set up of fine art objects is an ASP FAS specialty. A trained team can plan and execute an entire project with effective time-saving solutions.</p>
							</div>
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