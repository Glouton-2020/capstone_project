import React, { Component } from "react";
import { withRouter } from "react-router-dom";

function Interiors ( props ) {
    return ( 
        <div className="app">
        <h1>Interiors Page</h1>
        <section>
        <article>
        <p>Our most needed service for projects requiring time to build before installation with secure facilities located in 10 major cities to accommodate small to large items.</p>
							<div className="bullets">
																	<ul>
																					<li>Receiving purchases and inspection of items with personalized coding for each project’s items with the ability to apply sidemarks and room allocations.</li>
																					<li>Processing item(s) upon arrival with photography, inventory description and tagging with unique identification codes.</li>
																					<li>Condition reporting that gives you the advantage of knowing an item(s) condition upon arrival and allowing you to respond to mishaps accordingly.</li>
																					<li>In-house crating shop and custom packing for unique and delicate objects.</li>
																			</ul>
															</div>
						</article>						
						
					</section>
								<section id="storage">		
						<article>
							<h3>Storage</h3>
							<div class="content">
								<p>Organized and clean storage facilities with state-of-the-art security systems for short or long-term storage.</p>
							</div>
							<div class="bullets">
																	<ul>
																					<li>Concierge service available that can assist with every step of transporting, packing and servicing your collection.</li>
																					<li>Secure spaces requiring approval for access and 24-hour, high-level security.</li>
																					<li>Spacious, well-lit viewing areas.</li>
																					<li>In-depth, digital inventory.</li>
																					<li>Appropriate environments for artworks, antiques and valuable objects.</li>
																					<li>Inventory managements with digital item details including descriptions, locations, conditions and images.</li>
																			</ul>
															</div>
						</article>						
						
					</section>
								<section id="shipping">		
							
						<article>
							<h3>Shipping </h3>
							<div className="content">
								<p>AirSea&#8217;s owned and operated fleet provides domestic transport throughout most major cities in the US and Europe. Offering timely and cost-effective shipping options, skilled crew for white-glove handling and delivery to residential or commercial locations.</p>
							</div>
							<div class="bullets">
																	<ul>
																					<li>Service includes unpacking, placement and removal of packing debris. </li>
																					<li>Door-to-door service to (nearly) everywhere. </li>
																					<li>Proof of collection / delivery confirmations upon request.</li>
																			</ul>
															</div>
						</article>						
						
					</section>
								<section id="installation">		
						
						<article>
							<h3>Installation</h3>
							<div className="content">
								<p>Managed crews can plan and execute an entire project with effective time-saving solutions.</p>
							</div>
							<div className="bullets">
																	<ul>
																					<li>Site assessment and pre-planning for organized and efficient execution.</li>
																					<li>Local collections and deliveries with unpacking, placement and removal of packing debris.</li>
																					<li>Dedicated project managers to plan and initiate any size project. Assisting with all inquiries from receiving, assessment to final installation.</li>
																					<li>Skilled teams of art handlers for careful packing, transport and final installation of artwork.</li>
																			</ul>
															</div>
						</article>						
						
					</section>
								<section id="buying">		
						
						<article>
							<h3>Buying Trips</h3>
							<div class="content">
								<p>Since 1966, AirSea Packing has been a preeminent leader in assisting the industry with purchasing, whether antiquing, picking or purchasing for clients. Offering personalized solutions in every capacity from single items, trailer loads or container loads, regional and international.</p>
							</div>
							<div class="bullets">
																	<ul>
																					<li>Reliable fleet of local and domestic shuttle routes with skilled crews to collect, pack, ship with white-glove delivery.</li>
																					<li>Air and sea freight shipping options, consolidated, dedicated or expedited.</li>
																					<li>Managing all import and export documentation and customs coordination. <br /> 
                                                                                    </li>
																			</ul>
															</div>
						</article>						
						
					</section>
					</div>
    ) 

}

export default withRouter (Interiors)