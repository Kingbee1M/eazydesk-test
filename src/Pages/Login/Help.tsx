import React from 'react'
import Carousels from '../../components/Carousels'
import { ToastContainer } from 'react-toastify'
import LoginHeader from '../../components/LoginHeader'

const Help = () => {
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
								Help
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Help