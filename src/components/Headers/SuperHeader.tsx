import { useEffect, useState } from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi2";
import { pageTitles } from '../StateData';
import HeaderDate from '../HeaderDate';
import NotificationPopUp from '../Scoket/NotificationPopUp';
import NetworkConnetion from '../NetworkConnetion';
import Badge from '../Badge/Badge';
import Notification from '../Notification/Notification';
import SuperProfileDropDown from './SuperProfileDropDown';


const SuperHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [profile, setProfile] = useState(false)
  // @ts-ignore  
  const userInfo = JSON.parse(localStorage.getItem("service_desk"));


  useEffect(() => {
    const path = window.location.pathname;
    const title = pageTitles[path] ? `Eazy Desk | ${pageTitles[path]}` : "Eazy Desk | Page";
    document.title = title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <div id="header">
      <NetworkConnetion />
      <NotificationPopUp />
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

            <span className='FaPlus-name' onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)}>
              <HiUserCircle size={40} />
              {profile && <SuperProfileDropDown />}
            </span>
          </div>
          <Notification isOpen={isDrawerOpen} onClose={setIsDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        </div>
      </div>
    </div>
  )
}

export default SuperHeader;





