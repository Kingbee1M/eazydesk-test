import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SVGLoader } from "../SVGLoader";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { customId } from "../Options";
import { logout, reset } from "../../features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { logoutUserAction } from "../../features/Auth/authService";
import axios from "axios";
import { io } from "socket.io-client";
import DataService from "../../features/Auth/dataService";
import { baseUrl } from "../../shared/baseUrl";


const SuperProfileDropDown = () => {
	const socket = io(baseUrl);

	const {
		isLoadinglogout,
		isErrorlogout,
		messagelogout,
		isSuccesslogout
	} = useAppSelector((state: { auth: any; }) => state.auth)


	// @ts-ignore  
	const userInfo = JSON.parse(localStorage.getItem("service_desk"));
	// Create an instance of DataService
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

	useEffect(() => {
		if (!userInfo || userInfo == null) {
			navigate("/");
			socket.disconnect()
			dispatch(reset());
			socket.disconnect()
		}
	}, [dataService, dispatch, navigate, socket, userInfo]);

	useEffect(() => {
		if (isSuccesslogout) {
			// localStorage.removeItem("service_desk");
			delete axios.defaults.headers.common['Authorization'];
			dispatch(logoutUserAction());
			socket.disconnect()
			dataService.clearData()
		} else if (isErrorlogout) {
			toast.error(messagelogout, {
				toastId: customId
			});
			dispatch(logoutUserAction());
			dataService.clearData()
			navigate("/");
			dispatch(reset());
			socket.disconnect()
		}
		dispatch(reset());
	}, [dataService, dispatch, isErrorlogout, isSuccesslogout, messagelogout, navigate, socket])



	return (
		<div className='notification-profile'>
			<div className='notification-card' onClick={() => navigate("/supersettings")}>
				<div className='notification-icon-profile'>
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
		</div>
	)
}

export default SuperProfileDropDown