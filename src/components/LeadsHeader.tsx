import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import NetworkConnetion from "./NetworkConnetion";
import { customId, menu } from "./Options";
import DataService from "../features/Auth/dataService";
import axios from "axios";
import { toast } from "react-toastify";
import { logoutUserAction } from "../features/Auth/authService";
import { logout, reset } from "../features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import UserProfile from "../Pages/Leads/UserProfile";

// Create an instance of DataService
const dataService = DataService();
const LeadsHeader = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [dropdown, setDropdown] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [client, setClient] = useState("");
	const [roleName, setRoleName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const { isLoadinglogout, isErrorlogout, messagelogout, isSuccesslogout } = useAppSelector((state: { auth: any; }) => state.auth)

	// @ts-ignore  
	const userInfo = JSON.parse(localStorage.getItem("service_desk"));

	const handleLogout = () => {
		dispatch(logout());
	};

	useEffect(() => {
		if (!userInfo || userInfo == null) {
			navigate("/");
			dispatch(reset());
		}
	}, [dispatch, navigate, userInfo]);

	useEffect(() => {
		if (isSuccesslogout) {
			// localStorage.removeItem("service_desk");
			delete axios.defaults.headers.common['Authorization'];
			dispatch(logoutUserAction());
			dataService.clearData()
		} else if (isErrorlogout) {
			toast.error(messagelogout, {
				toastId: customId
			});
			dispatch(logoutUserAction());
			dataService.clearData()
		}
		dispatch(reset());
	}, [dispatch, isErrorlogout, isSuccesslogout, messagelogout, navigate])



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
				<p>{userInfo?.firstname}</p>
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
						onClick={handleLogout}>
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

						{/* <div onClick={handleClick}>
							<FiUser size={25} className="dropdown-a" />
							<span>Profile</span>
						</div> */}
						<div
							onClick={handleLogout}>
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
				{/* <UserProfile lgShow={lgShow} setLgShow={setLgShow} /> */}
			</div>
		</header>
	);
};

export default LeadsHeader;
