import { MdOutlineDashboard } from 'react-icons/md'
import { NavLink, useLocation } from 'react-router-dom';
import { LuUsers } from 'react-icons/lu';
import { BsFileEarmarkCheck, BsFileText } from 'react-icons/bs';




const AdminBottomNavigation = () => {



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
        <div className={pathname === "/ticketprogress" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/ticketprogress" className={({ isActive }) =>
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
        <div className={pathname === "/register" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/register" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <LuUsers size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">Register</h4>
        </div>
        <div className={pathname === "/report" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/report" className={({ isActive }) =>
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

export default AdminBottomNavigation