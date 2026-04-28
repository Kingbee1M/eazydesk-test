import wave from '../../assets/img/wave.svg'
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";


export default function TopBar () {
    const [isSearchActive, setIsSearchActive] = useState(false)
    const userInfo = JSON.parse(localStorage.getItem("service_desk") || "{}");
    console.log(userInfo)
    const notification = []
    const role_modifier = (role: string) => {
        if (role === 'TEAM_LEAD') {
            return 'Team Lead'
        }
        return role
    }
    return (
        <header className='topbar'>
            <section className='left-section'>
                <span className='greetings'>welcome {userInfo?.firstname} {userInfo?.lastname}</span>
                <img src={wave} alt='waving hand' className='waving' />
            </section>



            <section className='right-section'>
                <div className={`top-botton-1 ${isSearchActive ? 'active' : ''}`}
                style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                    onClick={() => !isSearchActive && setIsSearchActive(true)}>
                    <BiSearchAlt className="search-icon"/>
                    <input
                    type='search'
                    className='search-input' placeholder="Search tickets..."
                    autoFocus={isSearchActive}
                    />
                    <button 
                    className="close-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsSearchActive(false);
                    }}
                    >
                        <IoIosClose size={25} />
                    </button>
                </div>

                <button className='top-botton-2'>
                    <span className='notification-count'>{notification.length}</span>
                    <IoIosNotificationsOutline/>
                </button>

                

                <div className='profile-id'>
                    <span><BsPersonCircle/></span>
                    <span>
                        {role_modifier(userInfo?.role)}
                    </span>

                    <button className='chev'>
                        <FaChevronDown/>
                    </button>
                </div>

                
            </section>
        </header>
    )
}