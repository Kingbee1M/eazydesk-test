import { MdOutlineDashboard, MdOutlineMiscellaneousServices } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from "react";
import logo from '../../assets/img/logo.svg'
import { RiAlarmWarningLine } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";
import { IoMdOpen } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { PiCalendarCheckDuotone } from "react-icons/pi";


const ITSideNav = () => {
	const [dashBoardInfodata, setDashboardData] = useState<any>(null);

	// Load data from local storage on component mount
	useEffect(() => {
		const storedData = localStorage.getItem('dashBoardInfo');
		if (storedData) {
			setDashboardData(JSON.parse(storedData));
		}
	}, []);




	const changeRequest = dashBoardInfodata?.totals?.ticketType?.changeRequest
	const incidentRequest = dashBoardInfodata?.totals?.ticketType?.incidentRequest
	const serviceRequest = dashBoardInfodata?.totals?.ticketType?.serviceRequest
	const closed = dashBoardInfodata?.totals?.status?.closed
	const inprogress = dashBoardInfodata?.totals?.status?.inprogress
	const open = dashBoardInfodata?.totals?.status?.open


	const [dropdownOpen, setDropdownOpen] = useState(
		localStorage.getItem('dropdownOpen') === 'true'
	);

	const toggleDropdown = () => {
		const newState: any = !dropdownOpen;
		setDropdownOpen(newState);
		localStorage.setItem('dropdownOpen', newState);
	};

	useEffect(() => {
		const storedState = localStorage.getItem('dropdownOpen') === 'true';
		if (dropdownOpen !== storedState) {
			setDropdownOpen(storedState);
		}
	}, [dropdownOpen]);




	return (
		<div id="side-nav">
			<div className="logo-area">
				<img src={logo} alt='logo' crossOrigin="anonymous" className="logo-area-img" />
				<h2>Eazy Desk</h2>
			</div>
			<nav  >
				<NavLink to="/itdashboard" className={({ isActive }) =>
					[
						"nav-link",
						isActive ? "active" : null,
					]
						.filter(Boolean)
						.join(" ")
				}>
					<MdOutlineDashboard size={25} />
					<span>Dashboard</span>
				</NavLink>
			</nav>

			<nav>
				<div className="nav-link" onClick={toggleDropdown}>
					<div className="nav_dropdown_container">
						<div className="nav_dropdown_container_sub">
							<BsFileEarmarkCheck size={21} />
							<span>All Tickets</span>
						</div>
						{dropdownOpen ? <FiChevronDown
							size={25}
							className={'arrow'}
						/> : <FiChevronRight size={25}
							className={'arrow'} />}
					</div>
				</div>

				{dropdownOpen && (
					<div>
						<NavLink to="/itticketprogress" className={({ isActive }) =>
							["nav-link_sup", isActive ? "active_sup" : null,]
								.filter(Boolean)
								.join(" ")
						}>
							<div className="nav_dropdown_sub">
								<IoMdOpen size={21} />
								<span>In Progress</span>
							</div>
							<div className="side_number">{!inprogress ? 0 : inprogress}</div>
						</NavLink>

						<NavLink to="/itopenticket" className={({ isActive }) =>
							["nav-link_sup", isActive ? "active_sup" : null,]
								.filter(Boolean)
								.join(" ")
						}>
							<div className="nav_dropdown_sub">
								<AiOutlineCloseCircle size={21} />
								<span>Completed </span>
							</div>
							<div className="side_number_one" >{!open ? 0 : open}</div>
						</NavLink>

						<NavLink to="/itclosedticket" className={({ isActive }) =>
							["nav-link_sup", isActive ? "active_sup" : null,]
								.filter(Boolean)
								.join(" ")
						}>
							<div className="nav_dropdown_sub">
								<PiCalendarCheckDuotone size={22} />
								<span>Closed</span>
							</div>
							<div className="side_number_two">{!closed ? 0 : closed}</div>
						</NavLink>

						<NavLink to="/itincidentrequest" className={({ isActive }) =>
							["nav-link_sup", isActive ? "active_sup" : null,]
								.filter(Boolean)
								.join(" ")
						}>
							<div className="nav_dropdown_sub">
								<RiAlarmWarningLine size={15} />
								<span>Incident Request</span>
							</div>
							<div className="side_number_three">{!incidentRequest ? 0 : incidentRequest}</div>
						</NavLink>
						<NavLink to="/itservicerequest" className={({ isActive }) =>
							["nav-link_sup", isActive ? "active_sup" : null,]
								.filter(Boolean)
								.join(" ")
						}>
							<div className="nav_dropdown_sub">
								<MdOutlineMiscellaneousServices size={15} />
								<span>Service Request</span>
							</div>
							<div className="side_number_five">{!serviceRequest ? 0 : serviceRequest}</div>
						</NavLink>
						<NavLink to="/itchangerequest" className={({ isActive }) =>
							["nav-link_sup", isActive ? "active_sup" : null,]
								.filter(Boolean)
								.join(" ")
						}>
							<div className="nav_dropdown_sub">
								<TbExchange size={15} />
								<span>Change Request</span>
							</div>
							<div className="side_number_two">{!changeRequest ? 0 : changeRequest}</div>
						</NavLink>
					</div>
				)}
			</nav>


			<nav>
				<NavLink to="/itsettings" className={({ isActive }) =>
					[
						"nav-link",
						isActive ? "active" : null,
					]
						.filter(Boolean)
						.join(" ")
				}>
					<MdOutlineSettings size={22} />
					<span>Settings</span>
				</NavLink>
			</nav>

		</div>
	)
}

export default ITSideNav;





