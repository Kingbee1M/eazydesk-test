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
import LeadOptionsHeader from "./TicketHeaders/LeadOptionsHeader";
import { useIsMobile } from "../hooks/resize";
import dashboard from '../assets/img/dashboard.svg'
import { CiGrid42 } from "react-icons/ci";
import { PiTicketBold } from "react-icons/pi";



// Create an instance of DataService
const dataService = DataService();
const LeadsHeader = ({ incident, service, change }: any) => {
  
  // ------NEW CODE-----
  const [isTicketsOpen, setIsTicketsOpen] = useState(true);
  const [activeSubScreen, setActiveSubScreen] = useState("Incident");
  const Incident = incident;
  const Service = service;
  const Change = change;
  
  const screens = [
    { title: 'Change', path: 'change', count: Change },
    { title: 'Service', path: 'service', count: Service },
    { title: 'Incident', path: 'incident', count: Incident },
  ];
  
  

  
  
  // -----OLD CODE------
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [dropdown, setDropdown] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);



  const { isLoadinglogout, isErrorlogout, messagelogout, isSuccesslogout } =
    useAppSelector((state: { auth: any }) => state.auth);

  // @ts-ignore
  const userInfo = JSON.parse(localStorage.getItem("service_desk"));
  const userId = userInfo?.id;


  useEffect(() => {
    if (!isMobile) {
      setToggleMenu(false);
    } else if (isMobile) {
      setDropdown(false);
    }
  }, [isMobile]);


  const handleLogout = () => {
    dispatch(logout());
    toast.dismiss();
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
      toast.dismiss();
      delete axios.defaults.headers.common["Authorization"];
      dispatch(logoutUserAction());
      dataService.clearData();
    } else if (isErrorlogout) {
      toast.error(messagelogout, { toastId: customId });
      dispatch(logoutUserAction());
      dataService.clearData();
    }
    dispatch(reset());
  }, [dispatch, isErrorlogout, isSuccesslogout, messagelogout, navigate]);

  //profile modal
  const [lgShow, setLgShow] = useState(false);

  const handleClick = () => {
    setLgShow(true);
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
    <header className='client-header'>
      <div className="title">
        <img src={Logo} alt='logo' className='new-logo' />
        <h1 style={{fontSize: 18,}}>EAZYDESK</h1>
      </div>
      
      <nav className="navbar" style={{ flexDirection: 'column', gap: '5px' }}>
        {/* Dashboard Link */}
        <NavLink 
          to={'/leadsdashboard'}
          end
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          <CiGrid42 className="icons" /> Dashboard
        </NavLink>

        {/* ALL TICKETS */}
        <div className="nav-group-container">
  {/* ALL TICKETS - Parent Link */}
  <NavLink
    to="all-tickets"
    end
    className={({ isActive }) => {
      const isSubRoute = screens.some(screen => window.location.pathname.includes(screen.path));
      return `parent-link ${isActive || isSubRoute ? "selected" : ""}`;
    }}
    onClick={() => {
      // Clicking the link itself should open the menu and navigate
      setToggleMenu(true);
    }}
  >
    <PiTicketBold className="icons" />
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
      <span>ALL TICKETS</span>
      
      <div 
        className={`arrow-container ${toggleMenu ? 'open' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setToggleMenu(!toggleMenu);
        }}
        style={{ padding: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        <MdKeyboardArrowDown className={`arrow ${toggleMenu ? 'open' : ''}`} />
      </div>
    </div>
  </NavLink>

  {/* The Sub-Menu List */}
  {toggleMenu && (
    <div className="sub-menu-list" style={{display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '5px' }}>
      {screens.map((screen) => (
        <NavLink
          key={screen.title}
          to={screen.path}
          className={({ isActive }) => `sub-nav-item ${isActive ? "sub-selected" : ""}`}
        >
          <span className="sub-title" style={{ fontSize: '14px' }}>{screen.title}</span>
          <span className="sub-count" style={{ fontSize: '12px', opacity: 0.8 }}>{screen.count}</span>
        </NavLink>
      ))}
    </div>
  )}
</div>
      </nav>
    </header>
  );
};

export default LeadsHeader;


