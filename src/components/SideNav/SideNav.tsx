import { MdOutlineDashboard, MdOutlineMiscellaneousServices } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { MdOutlineSettings } from "react-icons/md";
import { BsFileText } from "react-icons/bs";
import { LuTag } from "react-icons/lu";
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from "react";
import { LuUsers } from "react-icons/lu";
import logo from '../../assets/img/logo.svg'
import { RiAlarmWarningLine } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";
import { getUserPrivileges } from "../../hooks/auth";
import { IoMdOpen } from "react-icons/io";


const SideNav = () => {
  const { isSuperAdmin } = getUserPrivileges();
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
        <NavLink to="/admindashboard" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <MdOutlineDashboard size={15} />
          <span>Dashboard</span>
        </NavLink>
      </nav>

      <nav>
        <div className="nav-link" onClick={toggleDropdown}>
          <div className="nav_dropdown_container">
            <div className="nav_dropdown_container_sub">
              <BsFileEarmarkCheck size={15} />
              <span>All Tickets</span>
            </div>
            {dropdownOpen ? <FiChevronDown
              size={25}
              className={'arrow open'}
            /> : <FiChevronRight size={25}
              className={'arrow open'} />}
          </div>
        </div>

        {dropdownOpen && (
          <div>
            <NavLink to="/openticket" className={({ isActive }) =>
              ["nav-link_sup", isActive ? "active_sup" : null,]
                .filter(Boolean)
                .join(" ")
            }>
              <div className="nav_dropdown_sub">
                <IoMdOpen size={21} />
                <span>In Progress </span>
              </div>
              <div className="side_number">5</div>
            </NavLink>

            <NavLink to="/closedticket" className={({ isActive }) =>
              ["nav-link_sup", isActive ? "active_sup" : null,]
                .filter(Boolean)
                .join(" ")
            }>
              <div className="nav_dropdown_sub">
                <AiOutlineCloseCircle size={21} />
                <span>Resolved Tickets</span>
              </div>
              <div className="side_number_one" >10</div>
            </NavLink>

            <NavLink to="/ticketprogress" className={({ isActive }) =>
              ["nav-link_sup", isActive ? "active_sup" : null,]
                .filter(Boolean)
                .join(" ")
            }>
              <div className="nav_dropdown_sub">
                <PiCalendarCheckDuotone size={22} />
                <span>Closed ticket</span>
              </div>
              <div className="side_number_two">4</div>
            </NavLink>

            <NavLink to="/incidentrequest" className={({ isActive }) =>
              ["nav-link_sup", isActive ? "active_sup" : null,]
                .filter(Boolean)
                .join(" ")
            }>
              <div className="nav_dropdown_sub">
                <RiAlarmWarningLine size={15} />
                <span>Incident Request</span>
              </div>
              <div className="side_number_three">34</div>
            </NavLink>
            <NavLink to="/servicerequest" className={({ isActive }) =>
              ["nav-link_sup", isActive ? "active_sup" : null,]
                .filter(Boolean)
                .join(" ")
            }>
              <div className="nav_dropdown_sub">
                <MdOutlineMiscellaneousServices size={15} />
                <span>Service request</span>
              </div>
              <div className="side_number_five">4</div>
            </NavLink>
            <NavLink to="/changerequest" className={({ isActive }) =>
              ["nav-link_sup", isActive ? "active_sup" : null,]
                .filter(Boolean)
                .join(" ")
            }>
              <div className="nav_dropdown_sub">
                <TbExchange size={15} />
                <span>Change request</span>
              </div>
              <div className="side_number_two">4</div>
            </NavLink>
          </div>
        )}
      </nav>
      {isSuperAdmin && <nav>
        <NavLink to="/company" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <LuTag size={15} />
          <span>Company</span>
        </NavLink>
      </nav>}

      <nav>
        <NavLink to="/register" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <LuUsers size={15} />
          <span>Register</span>
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/report" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <BsFileText size={15} />
          <span>Report</span>
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/settings" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <MdOutlineSettings size={15} />
          <span>Settings</span>
        </NavLink>
      </nav>

    </div>
  )
}

export default SideNav;





