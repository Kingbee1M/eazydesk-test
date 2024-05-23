import { MdOutlineDashboard, MdOutlineSettings } from 'react-icons/md'
import { NavLink, useLocation } from 'react-router-dom';
import { BsFileEarmarkCheck } from 'react-icons/bs';




const ITBottomNavigation = () => {



  const { pathname } = useLocation();

  return (
    <div className="footer">
      <div className="footer_container">

        <div className={pathname === "/itdashboard" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/itdashboard" className={({ isActive }) =>
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
        <div className={pathname === "/itticketprogress" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/itticketprogress" className={({ isActive }) =>
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

        <div className={pathname === "/itsettings" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/itsettings" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <MdOutlineSettings size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">Settings</h4>
        </div>

      </div>
    </div>
  )
}

export default ITBottomNavigation