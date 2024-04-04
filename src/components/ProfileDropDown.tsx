import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SVGLoader } from "./SVGLoader";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { customId } from "./TableOptions";
import { logout, reset } from "../features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { logoutUserAction } from "../features/Auth/authService";
import axios from "axios";

const ProfileDropDown = () => {
	const { isLoadinglogout, isErrorlogout, messagelogout, isSuccesslogout } = useAppSelector((state: { auth: any; }) => state.auth)
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	// @ts-ignore  
	const userInfo = JSON.parse(localStorage.getItem("service_desk"));

	const handleLogout = () => {
		dispatch(logout());
	};

	useEffect(() => {
		if (!userInfo || userInfo == null) {
			navigate("/");
			dispatch(reset());
		}
	}, [dispatch, navigate, userInfo]);

	useEffect(() => {
		if (isSuccesslogout) {
			localStorage.removeItem("service_desk");
			delete axios.defaults.headers.common['Authorization'];
			logoutUserAction()
		} else if (isErrorlogout) {
			toast.error(messagelogout, {
				toastId: customId
			});
			logoutUserAction()
		}
		dispatch(reset());
	}, [dispatch, isErrorlogout, isSuccesslogout, messagelogout, navigate])



	return (
		<div className='notification-profile'>
			<div className='notification-card' onClick={() => navigate("/settings")}>
				<div className='notification-icon-profile'>
					{userInfo?.user?.firstName?.charAt(0)}
				</div>
				<div>
					<p className='notification-text-profile'>My profile</p>
				</div>
			</div>
			<div className='notification-card' onClick={() => navigate("/support")}>
				<div className='notification-icon-profile-sup'>
					<BiHelpCircle size={25} />
				</div>
				<div>
					<p className='notification-text-profile'>Help and Support</p>
				</div>
			</div>
			{/* <div className='notification-card'>
				<div className='notification-icon-profile-sup'>
					<TiUserAddOutline size={25} />
				</div>
				<div>
					<p className='notification-text-profile'>Invite Friends</p>
				</div>
			</div> */}
			<div className='notification-card' onClick={handleLogout} >
				<div className='notification-icon-profile-sup'>
					<MdLogout size={25} />
				</div>
				<div>
					{isLoadinglogout ? <SVGLoader width={"30px"} height={"30px"} color={"#000"} /> : <p className='notification-text-profile'>Logout</p>}

				</div>
			</div>
		</div>
	)
}

export default ProfileDropDown