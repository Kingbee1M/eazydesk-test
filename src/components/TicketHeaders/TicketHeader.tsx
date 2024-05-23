import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.svg'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoPricetag, IoHelpCircle, IoLogIn } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import { IoIosLock, IoMdOpen } from "react-icons/io";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PiCalendarCheckDuotone } from 'react-icons/pi';
import { RiAlarmWarningLine } from 'react-icons/ri';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { TbExchange } from 'react-icons/tb';


const TicketHeader = ({ text }: any) => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};



	// Define dropdown options
	const dropdownOptions = [
		{
			icon: <IoMdOpen size={18} />,
			label: 'In Progress ',
			onClick: () => navigate('/superticketprogress'),
		},
		{
			icon: <AiOutlineCloseCircle size={18} />,
			label: 'Completed ',
			onClick: () => navigate('/superopenticket'),
		},
		{
			icon: <PiCalendarCheckDuotone size={18} />,
			label: 'Closed ',
			onClick: () => navigate('/superclosedticket'),
		},
		{
			icon: <RiAlarmWarningLine size={18} />,
			label: 'Incident ',
			onClick: () => navigate('/superincidentrequest'),
		},
		{
			icon: <MdOutlineMiscellaneousServices size={18} />,
			label: 'Service ',
			onClick: () => navigate('/superservicerequest'),
		},
		{
			icon: <TbExchange size={18} />,
			label: 'Change  ',
			onClick: () => navigate('/superchangerequest'),
		},
	];


	return (
		<div className="login-container-inner">

			<h5 className='dashboard-first-card-h'>{text}</h5>

			{/* <div className="login-logo-container">
				<img src={logo} alt='logo' crossOrigin="anonymous" className="logo-area-img" />
				<h2>Eazy Desk</h2>
			</div> */}

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
		</div>
	)
}

export default TicketHeader
