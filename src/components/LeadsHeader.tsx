import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import NetworkConnetion from "./NetworkConnetion";


const LeadsHeader = () => {
	const navigate = useNavigate();
	const [dropdown, setDropdown] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [client, setClient] = useState("");
	const [roleName, setRoleName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");



	const menu = [
		{
			name: "Home",
			path: "/leadsdashboard",
		},
		{
			name: "Incident",
			path: "/incident-request",
		},
		{
			name: "Service",
			path: "/service-request",
		},
		{
			name: "Change",
			path: "/change-request",
		},
	];

	//profile modal
	const [lgShow, setLgShow] = useState(false);

	const handleClick = () => {
		setLgShow(true);
		// setFirstName(UserDetails?.firstname);
		// setLastName(UserDetails?.lastname);
		// setEmail(UserDetails?.email);
		// setPhoneNumber(UserDetails?.phoneNumber);
		// setClient(UserDetails?.client?.client);
		// setRoleName(UserDetails?.role?.roleName);
	};

	const [title, setTitle] = useState("eazyDesk | Dashboard");
	document.title = title;
	useEffect(() => {
		// This will run when the page first loads and whenever the title changes
		if (window.location.pathname === "/dashboard") {
			setTitle("eazyDesk | Dashboard");
		} else if (window.location.pathname === "/incident-desk") {
			setTitle("eazyDesk | Incident-Request");
		} else if (window.location.pathname === "/service-request") {
			setTitle("eazyDesk | Service-Request");
		} else if (window.location.pathname === "/change-request") {
			setTitle("eazyDesk | Change-Request");
		}
	}, [title]);

	return (
		<header className="client-header">
			{/* <NetworkConnetion /> */}
			<Link to="/dashboard" className="logo">
				<div className="logo_area_leads">
					<img src={Logo} alt='logo' crossOrigin="anonymous" className="logo-leads-img" />
					<h2>Eazy Desk</h2>
				</div>
				{/* <img src={Logo} alt="Outcess Logo" className="adon-logo" style={{ width: "40px" }} /> */}
			</Link>
			<nav>
				{menu?.map((item, i) => (
					<NavLink
						key={i}
						to={item.path}
						className={({ isActive }) => (isActive ? "selected" : "")}>
						{item.name}
					</NavLink>
				))}
			</nav>
			<div className="user-info" onClick={() => setDropdown(!dropdown)}>
				<FaRegUserCircle size={30} color={"rgba(0,0,0,.5)"} />
				<p>firstname</p>
				<MdKeyboardArrowDown size={25} color={"rgba(0,0,0,.5)"} />
			</div>
			<div className={dropdown ? "dropdown display" : "dropdown"}>
				<div className="dropdown-container">
					<div className="drop-item" onClick={handleClick}>
						<FiUser size={23} />
						<span>Profile</span>
					</div>
					<button
						className="drop-item"
						onClick={() => {
							navigate("/");
						}}>
						<RiLogoutCircleRLine size={23} />
						<span>Sign Out</span>
					</button>
				</div>
			</div>
			<div
				className={toggleMenu ? "menu-btn close" : "menu-btn"}
				onClick={() => setToggleMenu(!toggleMenu)}>
				<div className="btn-line" />
				<div className="btn-line" />
				<div className="btn-line" />
			</div>
			<div className={[toggleMenu ? "open" : "", "mobile-nav"].join(" ")}>
				<div>
					{menu?.map((item, i) => (
						<NavLink
							key={i}
							to={item?.path}
							onClick={() => setToggleMenu(!toggleMenu)}
							className={({ isActive }) => (isActive ? "selected" : "")}>
							{item?.name}
						</NavLink>
					))}
					<div className="dropdown-container2">
						<div onClick={handleClick}>
							<FiUser size={25} className="dropdown-a" />
							<span>Profile</span>
						</div>
						<div
							onClick={() => {
								navigate("/");
							}}>
							<RiLogoutCircleRLine size={25} className="dropdown-a" />
							<span>Logout</span>
						</div>
					</div>
				</div>
				{/* <UserProfile
          setLgShow={setLgShow}
          lgShow={lgShow}
          setFirstName={setFirstName}
          firstname={firstname}
          setLastName={setLastName}
          lastname={lastname}
          setEmail={setEmail}
          email={email}
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
          setClient={setClient}
          client={client}
          setRoleName={setRoleName}
          roleName={roleName}
        /> */}
			</div>
		</header>
	);
};

export default LeadsHeader;
