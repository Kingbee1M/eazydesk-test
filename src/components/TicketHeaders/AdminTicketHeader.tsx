import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdOpen } from "react-icons/io";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PiCalendarCheckDuotone } from 'react-icons/pi';
import { RiAlarmWarningLine } from 'react-icons/ri';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { TbExchange } from 'react-icons/tb';


const AdminTicketHeader = ({ text }: any) => {
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
			onClick: () => navigate('/ticketprogress'),
		},
		{
			icon: <AiOutlineCloseCircle size={18} />,
			label: 'Completed ',
			onClick: () => navigate('/openticket'),
		},
		{
			icon: <PiCalendarCheckDuotone size={18} />,
			label: 'Closed ',
			onClick: () => navigate('/closedticket'),
		},
		{
			icon: <RiAlarmWarningLine size={18} />,
			label: 'Incident ',
			onClick: () => navigate('/incidentrequest'),
		},
		{
			icon: <MdOutlineMiscellaneousServices size={18} />,
			label: 'Service ',
			onClick: () => navigate('/servicerequest'),
		},
		{
			icon: <TbExchange size={18} />,
			label: 'Change  ',
			onClick: () => navigate('/changerequest'),
		},
	];


	return (
		<div className="login-container-inner">
			<h5 className='dashboard-first-card-h'>{text}</h5>


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

export default AdminTicketHeader
