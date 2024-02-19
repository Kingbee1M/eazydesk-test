import { useEffect, useState } from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import SearchInput from './SearchInput';
import Badge from './Badge/Badge';
import pro_img from '../assets/img/pro_img.svg'
import { pageTitles } from './StateData';
import NetworkConnetion from './NetworkConnetion';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification/Notification';
import HeaderDate from './HeaderDate';



const Header = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  useEffect(() => {
    const path = window.location.pathname;
    const title = pageTitles[path] ? `Eazy Desk | ${pageTitles[path]}` : "Eazy Desk | Page";
    document.title = title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div id="header">
      <SearchInput />
      <NetworkConnetion />

      <div className='FaPlus-icon-container' >
        <div className='FaPlus-icon-container_sup'>
          <IoCalendarOutline size={16} />
          <HeaderDate />
        </div>
        <div className='faplus-bell_container'>
          <Badge setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
          <div className='profiledropdown_container'>
            <div>
              <h5 className='profiledropdown_container_h5'>Mark Collins</h5>
              <p className='profiledropdown_container_p'>Business man</p>
            </div>
            <span className='FaPlus-name' onClick={() => navigate("/settings")}>
              <img src={pro_img} alt='logo' crossOrigin="anonymous" className="profile_img" />
            </span>
            {/* <span className='FaPlus-name' onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)}>
              <img src={pro_img} alt='logo' crossOrigin="anonymous" className="profile_img" />
              {profile && <ProfileDropDown />}
            </span> */}
          </div>
          <Notification isOpen={isDrawerOpen} onClose={setIsDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
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