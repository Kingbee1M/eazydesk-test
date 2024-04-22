import { MdOutlineDashboard, MdOutlineMiscellaneousServices } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from "react";
import logo from '../../assets/img/logo.svg'
import { RiAlarmWarningLine } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";


const ITSideNav = () => {
	const navigate = useNavigate();
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

	const handleLogout = () => {
		localStorage.removeItem('email');
		localStorage.removeItem('password');
		navigate("/");
	};



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

						<NavLink to="/itincidentrequest" className={({ isActive }) =>
							["nav-link_sup", isActive ? "active_sup" : null]
								.filter(Boolean)
								.join(" ")
						}>
							<div className="nav_dropdown_sub">
								<RiAlarmWarningLine size={22} />
								<span>Incident Request</span>
							</div>
							<div className="side_number_three">23</div>
						</NavLink>
						<NavLink to="/itservicerequest" className={({ isActive }) =>
							["nav-link_sup", isActive ? "active_sup" : null]
								.filter(Boolean)
								.join(" ")
						}>
							<div className="nav_dropdown_sub">
								<MdOutlineMiscellaneousServices size={22} />
								<span>Service request</span>
							</div>
							<div className="side_number_four">4</div>
						</NavLink>
						<NavLink to="/itchangerequest" className={({ isActive }) =>
							["nav-link_sup", isActive ? "active_sup" : null]
								.filter(Boolean)
								.join(" ")
						}>
							<div className="nav_dropdown_sub">
								<TbExchange size={22} />
								<span>Change request</span>
							</div>
							<div className="side_number_five">4</div>
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





