import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { MdOutlineSettings } from "react-icons/md";
import { BsFileText } from "react-icons/bs";
import { LuTag } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
import { FiChevronDown } from 'react-icons/fi';
import { useEffect, useState } from "react";


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
        {/* <img src={logo} alt='logo' crossOrigin="anonymous" className="logo-area-img" /> */}
        <h2>Supertask</h2>
      </div>
      <nav>
        <NavLink to="/admindashboard" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <MdOutlineDashboard size={25} />
          <span>Home</span>
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
          </div>
        )}
      </nav>

      <nav>
        <NavLink to="/customers" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <LuTag size={22} />
          <span>Customers</span>
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
        <div className="nav-link">
          <FiLogOut size={22} />
          <span>Log out</span>
        </div>
      </nav>
    </div>
  )
}

export default SideNav;





