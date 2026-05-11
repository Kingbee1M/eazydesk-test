import wave from '../../assets/img/wave.svg'
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import DataService from "../../features/Auth/dataService";
import { baseUrl } from "../../shared/baseUrl";
import { logout, reset } from "../../features/Auth/authSlice";
import { io } from "socket.io-client";
import { MdLogout } from "react-icons/md";
import { SVGLoader } from "../SVGLoader";



export default function TopBar () {
    const [isOpen, setIsOpen] = useState (false)
    const [isSearchActive, setIsSearchActive] = useState(false)

    const socket = io(baseUrl);
    const {
            isLoadinglogout,
            isErrorlogout,
            messagelogout,
            isSuccesslogout
        } = useAppSelector((state: { auth: any; }) => state.auth)
    const userInfo = JSON.parse(localStorage.getItem("service_desk") || "{}");
    console.log(userInfo)
    const notification = []
    const role_modifier = (role: string) => {
        if (role === 'TEAM_LEAD') {
            return 'Team Lead'
        }
        return role
    }

    	const dataService = DataService();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

        const handleLogout = () => {
            dispatch(logout());
            navigate("/");
            dataService.clearData()
            dispatch(reset());
            socket.disconnect()
        };
    return (
        <header className='topbar'>
            <section className='left-section'>
                <span className='greetings'>welcome {userInfo?.firstname} {userInfo?.lastname}</span>
                <img src={wave} alt='waving hand' className='waving' />
            </section>



            <section className='right-section'>
                <div className={`top-botton-1 ${isSearchActive ? 'searchactive' : ''}`}
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

                    <button className='chev' onClick={()=>setIsOpen(!isOpen)}>
                        <FaChevronDown/>
                        {isOpen && (<div className='mini-menu'>
                            <div className='notification-card' onClick={() => navigate("settings")}>
                                <div className='notification-icon-profile' style={{textTransform: 'capitalize'}}>
                                    {userInfo?.firstname?.charAt(0)}
                                </div>
                                <div>
                                    <p className='notification-text-profile'>My profile</p>
                                </div>
                            </div>
                            <div className='notification-card' onClick={handleLogout} >
                                <div className='notification-icon-profile-sup'>
                                    <MdLogout size={25} />
                                </div>
                                <div>
                                    {isLoadinglogout ? <SVGLoader width={"30px"} height={"30px"} color={"#000"} /> :
                                        <p className='notification-text-profile'>Logout</p>}
                                </div>
                            </div>
                        </div>)}
                    </button>
                </div>

                
            </section>
        </header>
    )
}