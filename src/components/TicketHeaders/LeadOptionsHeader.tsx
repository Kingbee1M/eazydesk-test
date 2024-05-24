import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { AiTwotoneSetting } from 'react-icons/ai';
import { RiAlarmWarningFill, RiDashboard2Fill, RiLogoutCircleRLine } from 'react-icons/ri';
import { FaExchangeAlt } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';




const LeadOptionsHeader = ({ handleLogout, handleClick }: any) => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};



	// Define dropdown options
	const dropdownOptions = [
		{
			icon: <RiDashboard2Fill size={18} />,
			label: 'Home ',
			onClick: () => navigate('/leadsdashboard'),
		},
		{
			icon: <RiAlarmWarningFill size={18} />,
			label: 'Incident ',
			onClick: () => navigate('/incident-request'),
		},
		{
			icon: <AiTwotoneSetting size={18} />,
			label: 'Service ',
			onClick: () => navigate('/service-request'),
		},
		{
			icon: <FaExchangeAlt size={15} />,
			label: 'Change ',
			onClick: () => navigate('/change-request'),
		},
		{
			icon: <FiUser size={15} />,
			label: 'Profile ',
			onClick: handleClick,
		},
		{
			icon: <RiLogoutCircleRLine size={15} />,
			label: 'Logout ',
			onClick: handleLogout,
		},


	];


	return (

		<div className='mobile_login_text_container' onClick={toggleDropdown}>
			<HiMenuAlt3 />
			{isOpen && (
				<div className='mobile-card-dropdown'>
					{dropdownOptions.map((option, index) => (
						<div key={index} className={`mobile-card-option ${index !== dropdownOptions.length - 1 ? 'mobile-card-option-border' : ''}`} onClick={option.onClick}>
							{option.icon}
							<span>{option.label}</span>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default LeadOptionsHeader
