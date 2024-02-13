import { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { BsBell } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import ProfileDropDown from './ProfileDropDown';
import SearchInput from './SearchInput';
import Badge from './Badge/Badge';
import pro_img from '../assets/img/pro_img.svg'



const Header = () => {
  const [notification, setNotification] = useState(false)

  const [profile, setProfile] = useState(false)





  const [title, setTitle] = useState("Super | Task Manager");
  document.title = title;

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    if (window.location.pathname === "/home") {
      setTitle("eazyDesk | Dashboard");
    } else if (window.location.pathname === "/admindashboard") {
      setTitle("eazyDesk | Dashboard");
    }
  }, [title]);

  return (
    <div id="header">
      <SearchInput />
      <div className='FaPlus-icon-container' >
        <div className='FaPlus-icon-container_sup'>
          <IoCalendarOutline size={16} />
          <h6>Monday, 4th September</h6>
        </div>

        <div className='faplus-bell_container'>
          <Badge />
          <div className='profiledropdown_container'>
            <div>
              <h5 className='profiledropdown_container_h5'>Mark Collins</h5>
              <p className='profiledropdown_container_p'>Business man</p>
            </div>
            <span className='FaPlus-name' onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)}>
              <img src={pro_img} alt='logo' crossOrigin="anonymous" className="profile_img" />
              {profile && <ProfileDropDown />}
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header;





// {/* <NetworkConnetion /> */ }
//       <ToastContainer position="top-right" />
//       <div style={{ position: "relative" }}>
//         {/* <Button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
//           <div className="user_avatar" >
//             {userInfo.user.firstName.charAt(0)}{userInfo.user.LastName.charAt(0)}
//           </div>
//         </Button> */}
//         {/* <DrawerComponent isOpen={isDrawerOpen} onClose={toggleDrawer} /> */}

//       </div>