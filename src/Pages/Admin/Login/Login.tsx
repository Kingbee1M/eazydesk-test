import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import LoginHeader from "../../../components/LoginHeader";
import Copyright from "../../../components/Copyright";
import Carousels from "../../../components/Carousels";


const Login = () => {

	const navigate = useNavigate();
	const [email, setEmail] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');
	const [showPassword, setShowPassword] = useState<any>(false);
	const [isLoading, setIsLoading] = useState<any>(false);


	const handleSubmit = (e: any) => {
		e.preventDefault();
		setIsLoading(true);

		const roles: any = {
			'admin@example.com': '/admindashboard',
			'it@example.com': '/itdashboard',
			'supervisor@example.com': '/supervisordashboard',
			'lead@example.com': '/leadsdashboard'
		};

		if (roles.hasOwnProperty(email)) {
			localStorage.setItem('email', email);
			localStorage.setItem('password', password);
			setTimeout(() => {
				navigate(roles[email]);
			}, 2000);
		} else {
			toast.error('Please fill all the fields');
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	};




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
								<div className="login-form-container">
									<p >Sign in</p>
									<form onSubmit={handleSubmit}>
										<div className="form-ctrl">
											<label>Agent ID</label>
											<input
												type="text"
												placeholder="Enter your Agent ID"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>
										<div className="form-ctrl">
											<label>Password</label>
											<input
												type={showPassword ? "text" : "password"}
												placeholder="Enter your password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>

											<span id="i-FaEye" onClick={() => setShowPassword(!showPassword)}>
												{showPassword ? <FaEye /> : <FaEyeSlash />}
											</span>
										</div>

										<button
											type="submit"
											disabled={isLoading && true}
										>
											{isLoading ? <Spinner size="sm" /> : "			Sign-in"}

										</button>
									</form>
								</div>
								<Copyright />
							</div>
						</div>


					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;