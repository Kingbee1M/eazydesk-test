import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ActionPanel = ({ signIn, slide }: any) => {
	const heading = signIn ? 'Hello friend!' : 'Welcome back!';
	const paragraph = signIn ? 'Enter your personal details and start your journey with us' : 'To keep connected with us please login with your personal info';
	const button = signIn ? 'Sign up!' : 'Sign in!';

	return (
		<div className="Panel ActionPanel">
			<h2>{heading}</h2>
			<p>{paragraph}</p>
			<button onClick={slide}>{button}</button>
		</div>
	);
};

const FormPanel = ({ signIn }: any) => {
	const navigate = useNavigate();
	const [forgotIn, setForgotIn] = useState(false);
	const heading = signIn ? 'Sign in' : 'Create account';



	const social = [
		{ href: '#', icon: 'f' },
		{ href: '#', icon: 't' },
		{ href: '#', icon: 'in' }
	];

	const paragraph = 'Or use your email account';

	const inputs = [
		{ type: 'text', placeholder: 'Email' },
		{ type: 'password', placeholder: 'Password' },
	];
	const inputSignup = [
		{ type: 'text', placeholder: 'First Name' },
		{ type: 'text', placeholder: 'Last Name' },
		{ type: 'text', placeholder: 'Phone Number' },
		{ type: 'text', placeholder: 'Email' },
		{ type: 'password', placeholder: 'Password' },
		{ type: 'password', placeholder: 'Password' }
	];
	const forgot = [
		{ type: 'text', placeholder: 'Email' },
	];

	const link = signIn && !forgotIn ? { href: '#', text: 'Forgot your password?' } : { href: '#', text: 'Back to Login?' };



	return (
		<div className="Panel FormPanel">
			<h2>{heading}</h2>
			<div className="Social">
				{social.map(({ href, icon }) => <a href={href} key={icon}>{icon}</a>)}
			</div>
			<p>{paragraph}</p>
			<form>
				{forgotIn && signIn ? (
					forgot.map(({ type, placeholder }) => (
						<input type={type} key={placeholder} placeholder={placeholder} />
					))
				) : (
					signIn ? (
						inputs.map(({ type, placeholder }) => (
							<input type={type} key={placeholder} placeholder={placeholder} />
						))
					) : (
						inputSignup.map(({ type, placeholder }) => (
							<input type={type} key={placeholder} placeholder={placeholder} />
						))
					))
				}
			</form>
			{signIn ? (<a href={link.href} onClick={() => setForgotIn(!forgotIn)}>{link.text}</a>) : ''}
			{signIn ? (<button onClick={() => navigate("/admindashboard")}>Sign in</button>) : (<button>Sign up</button>)}

		</div>
	);
};

const Login = () => {
	const [signIn, setSignIn] = useState(true);
	const [transition, setTransition] = useState(false);



	const slide = () => {
		if (transition) return;

		const formPanel: any = document.querySelector('.FormPanel');
		const actionPanel: any = document.querySelector('.ActionPanel');
		const actionPanelChildren = actionPanel.children;

		const formBoundingRect = formPanel.getBoundingClientRect();
		const actionBoundingRect = actionPanel.getBoundingClientRect();

		formPanel.style.transition = 'all 0.7s cubic-bezier(.63,.39,.54,.91)';
		actionPanel.style.transition = 'all 0.7s cubic-bezier(.63,.39,.54,.91)';
		[...actionPanelChildren].forEach(child => child.style.transition = 'all 0.35s cubic-bezier(.63,.39,.54,.91)');

		setTransition(true);

		if (signIn) {
			formPanel.style.transform = `translateX(${actionBoundingRect.width}px)`;
			actionPanel.style.transform = `translateX(${-formBoundingRect.width}px)`;

			[...actionPanelChildren].forEach(child => {
				child.style.transform = `translateX(${actionBoundingRect.width / 2}px)`;
				child.style.opacity = 0;
				child.style.visibility = 'hidden';
			});
		} else {
			formPanel.style.transform = `translateX(${-actionBoundingRect.width}px)`;
			actionPanel.style.transform = `translateX(${formBoundingRect.width}px)`;

			[...actionPanelChildren].forEach(child => {
				child.style.transform = `translateX(${-actionBoundingRect.width / 2}px)`;
				child.style.opacity = 0;
				child.style.visibility = 'hidden';
			});
		}

		const timeoutState = setTimeout(() => {
			[...actionPanelChildren].forEach(child => {
				child.style.transition = 'none';
				child.style.transform = `translateX(${signIn ? (-actionBoundingRect.width / 3) : (actionBoundingRect.width / 3)}%)`;
			});

			setSignIn(!signIn);

			clearTimeout(timeoutState);
		}, 350);

		const timeoutChildren = setTimeout(() => {
			[...actionPanelChildren].forEach(child => {
				child.style.transition = 'all 0.35s cubic-bezier(.63,.39,.54,.91)';
				child.style.transform = 'translateX(0)';
				child.style.opacity = 1;
				child.style.visibility = 'visible';
			});

			clearTimeout(timeoutChildren);
		}, 400);

		const timeoutTransition = setTimeout(() => {
			formPanel.style.transition = 'none';
			actionPanel.style.transition = 'none';
			formPanel.style.transform = 'translate(0)';
			actionPanel.style.transform = 'translate(0)';
			actionPanel.style.order = signIn ? -1 : 1;

			setTransition(false);

			clearTimeout(timeoutTransition);
		}, 700);
	};

	return (
		<div className="login_container">
			<FormPanel signIn={signIn} />
			<ActionPanel signIn={signIn} slide={slide} />
		</div>
	);
};

export default Login;
