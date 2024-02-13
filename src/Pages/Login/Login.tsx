/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

const Login = () => {

	// document.addEventListener('DOMContentLoaded', function () {
	// 	const signUpButton: any = document.getElementById('signUp');
	// 	const signInButton: any = document.getElementById('signIn');
	// 	const container: any = document.getElementById('container');

	// 	signUpButton.addEventListener('click', () => {
	// 		container.classList.add('right-panel-active');
	// 	});

	// 	signInButton.addEventListener('click', () => {
	// 		container.classList.remove('right-panel-active');
	// 	});
	// });

	const [isSignUpActive, setIsSignUpActive] = useState(false);

	const handleSignUpClick = () => {
		setIsSignUpActive(true);
	};

	const handleSignInClick = () => {
		setIsSignUpActive(false);
	};

	return (
		<div className='body'>
			<div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`} id="container">
				<div className="form-container sign-up-container">
					<form action="#">
						<h1>Create Account</h1>
						<div className="social-container">
							<a href="#" className="social"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
							<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
						</div>
						<span>or use your email for registration</span>
						<input type="text" name="name" placeholder="Name" />
						<input type="email" name="email" placeholder="Email" />
						<input type="password" name="password" placeholder="Password" />
						<button>Sign Up</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form method="POST" action="">
						<h1>Sign in</h1>
						<div className="social-container">
							<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
							<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
						</div>
						<span>or use your account</span>
						<input type="email" name="email" placeholder="Email" />
						<input type="password" name="password" placeholder="Password" />
						<a href="#">Forgot your password?</a>
						<button onClick={handleSignInClick}>Sign In</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className={`overlay-panel overlay-left ${!isSignUpActive ? 'hidden' : ''}`}>
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
						</div>
						<div className={`overlay-panel overlay-right ${isSignUpActive ? 'hidden' : ''}`}>
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
