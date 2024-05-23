import { useState } from 'react'
import { MdInsights, MdOutlineDashboard, MdOutlineSubscriptions } from 'react-icons/md'
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineCalendar } from 'react-icons/hi';
import { BiHome } from 'react-icons/bi';
import { LuTag, LuUsers } from 'react-icons/lu';
import { HiOutlineRectangleStack } from 'react-icons/hi2';
import { BsFileEarmarkCheck, BsFileText } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';



const BottomNavigation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  const { pathname } = useLocation();

  return (
    <div className="footer">
      <div className="footer_container">

        <div className={pathname === "/admindashboard" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/admindashboard" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <MdOutlineDashboard size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">Dashboard</h4>
        </div>
        <div className={pathname === "/superticketprogress" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/superticketprogress" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <BsFileEarmarkCheck size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">All Ticket</h4>
        </div>
        <div className={pathname === "/supercompany" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/supercompany" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <LuTag size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">Company</h4>
        </div>
        {/* <div className={pathname === "/superregister" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/superregister" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <BiHome size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">Register</h4>
        </div> */}
        <div className={pathname === "/supersubscription" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/supersubscription" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <MdOutlineSubscriptions size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">Subscription</h4>
        </div>
        <div className={pathname === "/superticketreport" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/superticketreport" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <BsFileText size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">Report</h4>
        </div>



      </div>
    </div>
  )
}

export default BottomNavigation