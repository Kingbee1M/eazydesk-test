import { useContext, useEffect, useState } from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi2";
import { pageTitles } from '../StateData';
import { SocketContext } from '../Scoket/SocketContext';
import ProfileDropDown from '../ProfileDropDown';
import HeaderDate from '../HeaderDate';
import NotificationPopUp from '../Scoket/NotificationPopUp';
import NetworkConnetion from '../NetworkConnetion';
import Badge from '../Badge/Badge';
import Notification from '../Notification/Notification';


const ITHeader = () => {
  const socket = useContext(SocketContext);
  const [notification, setNotification] = useState<any>();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [profile, setProfile] = useState(false)
  // @ts-ignore  
  const userInfo = JSON.parse(localStorage.getItem("service_desk"));
  // const socket = io("https://arkland-erp-b4872258abbf.herokuapp.com");


  useEffect(() => {
    const path = window.location.pathname;
    const title = pageTitles[path] ? `Eazy Desk | ${pageTitles[path]}` : "Eazy Desk | Page";
    document.title = title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <div id="header">
      <NetworkConnetion />
      <NotificationPopUp setNotification={setNotification} socket={socket} setRefresh={setRefresh} />
      <div className='FaPlus-icon-container' >
        <div className='FaPlus-icon-container_sup'>
          <IoCalendarOutline size={16} />
          <HeaderDate />
        </div>
        <div className='faplus-bell_container'>
          <Badge setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
          <div className='profiledropdown_container'>
            <div>
              <h5 className='profiledropdown_container_h5'>{userInfo?.firstname}</h5>
              <p className='profiledropdown_container_p'>{userInfo?.role}</p>
            </div>
            {/* <span className='FaPlus-name' onClick={() => navigate("/settings")}>
              <img src={pro_img} alt='logo' crossOrigin="anonymous" className="profile_img" />
            </span> */}
            <span className='FaPlus-name' onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)}>
              <HiUserCircle size={40} />
              {/* <img src={pro_img} alt='logo' crossOrigin="anonymous" className="profile_img" /> */}
              {profile && <ProfileDropDown />}
            </span>
          </div>
          <Notification isOpen={isDrawerOpen} onClose={setIsDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        </div>
      </div>
    </div>
  )
}

export default ITHeader;





