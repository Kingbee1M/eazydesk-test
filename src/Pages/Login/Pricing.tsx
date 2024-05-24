import Carousels from '../../components/Carousels'
import { ToastContainer } from 'react-toastify'
import LoginHeader from '../../components/LoginHeader'

const Pricing = () => {
	return (
		<div id="login-wrapper">
			<Carousels />
			<div className="login-container">
				<ToastContainer position="top-right" containerId={"custom1"} />
				<div className="login-content-layout">
					{/* Login Header */}
					<LoginHeader />
					<div className="login-content-grid">
						<div className="logo-section">
							<div className="copyright_login_container">
								<div className='settings_main_after_login'>
									<div>
										<div className='settings_main_after_sup'>

										</div>
										<section className="pricing-plans">

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