import { MdOutlineDashboard, MdOutlineMiscellaneousServices } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { AiOutlineCloseCircle, AiOutlinePieChart } from "react-icons/ai";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { MdOutlineSettings } from "react-icons/md";
import { BsFileText } from "react-icons/bs";
import { LuTag } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
import { FiChevronDown } from 'react-icons/fi';
import { useEffect, useState } from "react";
import { LuUsers } from "react-icons/lu";
import logo from '../../assets/img/Clip path group.svg'
import { RiAlarmWarningLine } from "react-icons/ri";
import { FaExchangeAlt } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";


const SideNav = () => {

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
            <FiChevronDown
              size={25}
              className={dropdownOpen ? 'arrow open' : 'arrow'} // Apply open class when dropdown is open
            />
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
                <span>Open Tickets </span>
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
                <span>Closed Tickets</span>
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
                <span>Inprogress</span>
              </div>
              <div className="side_number_two">4</div>
            </NavLink>
            <NavLink to="/incidentrequest" className={({ isActive }) =>
              ["nav-link_sup", isActive ? "active_sup" : null,]
                .filter(Boolean)
                .join(" ")
            }>
              <div className="nav_dropdown_sub">
                <RiAlarmWarningLine size={22} />
                <span>Incident Request</span>
              </div>
              <div className="side_number_two">4</div>
            </NavLink>
            <NavLink to="/servicerequest" className={({ isActive }) =>
              ["nav-link_sup", isActive ? "active_sup" : null,]
                .filter(Boolean)
                .join(" ")
            }>
              <div className="nav_dropdown_sub">
                <MdOutlineMiscellaneousServices size={22} />
                <span>Service request</span>
              </div>
              <div className="side_number_two">4</div>
            </NavLink>
            <NavLink to="/changerequest" className={({ isActive }) =>
              ["nav-link_sup", isActive ? "active_sup" : null,]
                .filter(Boolean)
                .join(" ")
            }>
              <div className="nav_dropdown_sub">
                <TbExchange size={22} />
                <span>Change request</span>
              </div>
              <div className="side_number_two">4</div>
            </NavLink>
          </div>
        )}
      </nav>

      <nav>
        <NavLink to="/vendors" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <LuTag size={22} />
          <span>Vendors</span>
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/register" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <LuUsers size={22} />
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
          <BsFileText size={22} />
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
          <MdOutlineSettings size={22} />
          <span>Settings</span>
        </NavLink>
      </nav>
      <nav>
        <div className="nav-link">
          <FiLogOut size={22} />
          <span>Log out</span>
        </div>
      </nav>
    </div>
  )
}

export default SideNav;





