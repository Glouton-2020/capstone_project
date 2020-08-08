import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

function Interiors ( props ) {
    return ( 
		<Fragment>
        <div className="app">
        			<h1 className="h1R">Services for Architects and Interior Designers </h1>
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
												<h2>Storage</h2>
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
											<h2> Shipping </h2>
									<div className="content">
								<p>Our owned and operated fleet provides domestic transport throughout most major cities in the US and Europe. </p>
								<p>Skilled crews for white-glove handling and delivery to residential or commercial locations.</p>
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
						
					</section>
					</div>
			</Fragment>
    ) 

}

export default withRouter (Interiors)