import Carousels from '../../components/Carousels'
import { ToastContainer } from 'react-toastify'
import LoginHeader from '../../components/LoginHeader'
import PricingCardsContainer from '../../components/PricingCardsContainer'

const Pricing = () => {
	return (
		<div id="login-wrapper">
			<Carousels />
			<div className="login-container">
				<ToastContainer position="top-right" />
				<div className="login-content-layout">
					{/* Login Header */}
					<LoginHeader />
					<div className="login-content-grid">
						<div className="logo-section">
							<div className="copyright_login_container">
								<div className='settings_main_after_login'>
									<div>
										<div className='settings_main_after_sup'>
											<h3>Plans</h3>
											<p>Lorem ipsum dolor sit amet consectetur</p>
										</div>
										{/* */}
										<section className="pricing-plans">
											<div className="pricing-card basic">
												<div className="heading">
													<h4>BASIC</h4>
													<p>for small websites or blogs</p>
												</div>
												<p className="price">
													$2
													<sub>/month</sub>
												</p>
												<ul className="features">
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>1 domain</strong> name
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>10 GB</strong> of disk space
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>100GB </strong>of bandwidth
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>1 MySQL</strong> database
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>5 email</strong> accounts
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>cPanel</strong> control panel
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>Free SSL</strong> certificate
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>24/7</strong> support
													</li>
												</ul>
												<button className="cta-btn">SELECT</button>
											</div>
											<div className="pricing-card standard">
												<div className="heading">
													<h4>STANDARD</h4>
													<p>for medium-sized businesses</p>
												</div>
												<p className="price">
													$5
													<sub>/month</sub>
												</p>
												<ul className="features">
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>Unlimited</strong> domain name
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>50 GB</strong> of disk space
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>500GB </strong>of bandwidth
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>10 MySQL</strong> database
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>50 email</strong> accounts
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>cPanel</strong> control panel
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>Free SSL</strong> certificate
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>24/7</strong> support
													</li>
												</ul>
												<button className="cta-btn">SELECT</button>
											</div>
											<div className="pricing-card premium">
												<div className="heading">
													<h4>PREMIUM</h4>
													<p>for small businesses</p>
												</div>
												<p className="price">
													$10
													<sub>/month</sub>
												</p>
												<ul className="features">
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>Unlimited</strong> domain name
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>100 GB</strong> of disk space
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>1TB </strong>of bandwidth
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>Unlimited MySQL</strong> database
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>Unlimited email</strong> accounts
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>cPanel</strong> control panel
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>Free SSL</strong> certificate
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>24/7 priority</strong> support
													</li>
													<li>
														<i className="fa-solid fa-check"></i>
														<strong>Advanced</strong> security features
													</li>
												</ul>
												<button className="cta-btn">SELECT</button>
											</div>
										</section>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Pricing