import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { GoPlusCircle } from 'react-icons/go';
import { IoCheckmarkCircle } from 'react-icons/io5';



const PricingCardsContainer = () => (

	// <div className='pricing_card_container'>
	// 	{pricingData.map((pricingItem, index) => (
	// 		<PricingCard
	// 			key={index}
	// 			title={pricingItem.title}
	// 			price={pricingItem.price}
	// 			description={pricingItem.description}
	// 			mostPopular={pricingItem.mostPopular}
	// 			supportItems={pricingItem.supportItems}
	// 			buttons={pricingItem.buttons}
	// 		/>
	// 	))}
	// </div>
	<div className='pricing_card_container'>
		{/* <div className='pricing_card'>
			<div className='pricing_card_title_main'>
				<div className='pricing_card_title'>
					<h3>Hobby</h3>
					<h2>$0</h2>
					<p>Start your next side project</p>
				</div>

				<div className='prticing_card_support'>
					<span >
						<IoCheckmarkCircle />
						<p>Support for 35+ Frameworks</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>Fast Globally (Edge Network)</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>Automatic CI/CD (Git Integration)</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>Functions (Serverless, Edge)</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>Starter Database (KV, Postgres)</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>Web Analytics</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>Community Support</p>
					</span>
				</div>
			</div>


			<div className='start_deploying'>
				<p>Start deploying</p>
				<FaArrowRight />
			</div>
		</div> */}
		<div className='pricing_card'>
			<div className='pricing_card_most_popular'>Most Popular</div>
			<div className='pricing_card_title_main'>
				<div className='pricing_card_title'>
					<h3>Pro</h3>
					<h2>$20</h2>
					<p>Everything in Hobby, plus higher limits and team features</p>
				</div>
				<div className='prticing_card_support'>
					<span >
						<IoCheckmarkCircle />
						<p>Unlimited Environments</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>More Functions (Serverless, Edge)</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>More Databases (KV, Postgres)</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>More Web Analytics Events</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>More Experimentation (Edge Config, Middleware) </p>
					</span>
					<span>
						<GoPlusCircle />
						<p>Preview/Comment/Edit Deployments</p>
					</span>
					<span>
						<GoPlusCircle />
						<p>Basic DDoS Mitigation</p>
					</span>
					<span>
						<GoPlusCircle />
						<p>Email Support</p>
					</span>
				</div>
			</div>
			<div className='start_deploying_pro'>
				<p>Start a free trial</p>
				<FaArrowRight />
			</div>
		</div>
		{/* <div className='pricing_card'>
			<div className='pricing_card_title_main'>
				<div className='pricing_card_title'>
					<h3>Enterprise</h3>
					<h2>Custom</h2>
					<p>For teams with more security, support, and performance needs.</p>
				</div>
				<div className='prticing_card_support'>
					<span >
						<IoCheckmarkCircle />
						<p>99.99% SLA</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>IP Allow & Block Rules</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>Isolated Builds & Deployments</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>Additional Role & Access Controls</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>High-Performance Edge Network</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>SAML Single-Sign-On (SSO)</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>Advanced DDoS Mitigation</p>
					</span>
					<span>
						<IoCheckmarkCircle />
						<p>Secure VPC and VPN Connectivity</p>
					</span>
				</div>
			</div>
			<div className='start_deploying_custom'>
				<div className='start_deploying_custom_btn1'>
					<p>Contact Sales</p>
					<FaArrowRight />
				</div>
				<div className='start_deploying_custom_btn2'>
					<p>Request Trial</p>
				</div>
			</div>
		</div> */}
	</div>

);

export default PricingCardsContainer;