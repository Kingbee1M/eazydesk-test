import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.svg'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const LoginHeader = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const dropdownItems = [
		'Incident Request',
		'Change Request',
		'Service Request',
	];

	return (
		<div className="login-container-inner">
			<div className="login-logo-container">
				<img src={logo} alt='logo' crossOrigin="anonymous" className="logo-area-img" />
				<h2>Eazy Desk</h2>
			</div>
			<div className="login-text-container">
				<span onClick={() => navigate("/pricing")}>Pricing</span>
				{/* <a className='login-text-contain_dropdown'> */}
				{/* <span onClick={toggleDropdown} className="dropdown-toggles">
					Features
					{isOpen ? <FaChevronUp size={13} /> : <FaChevronDown size={13} />}
				</span>
				{isOpen && (
					<ul className='login_text_ui'>
						{dropdownItems.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				)} */}
				{/* </a> */}

				<span onClick={() => window.open("https://outcess.com", "_blank")}>Company</span>
				<span onClick={() => navigate("/help")}>help</span>
				<span onClick={() => navigate("/signup")}>Sign Up</span>
				<span onClick={() => navigate("/")}>Log in</span>
			</div>
		</div>
	)
}

export default LoginHeader
