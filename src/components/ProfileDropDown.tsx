import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { SVGLoader } from "./SVGLoader";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { customId } from "./TableOptions";

const ProfileDropDown = () => {
	const navigate = useNavigate();






	return (
		<div className='notification-profile'>
			<div className='notification-card' onClick={() => navigate("/setting")}>
				<div className='notification-icon-profile'>

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
			<div className='notification-card'  >
				<div className='notification-icon-profile-sup'>
					<MdLogout size={25} />
				</div>
				<div>
					{/* {false ? <SVGLoader width={"30px"} height={"30px"} color={"#000"} /> : <p className='notification-text-profile'>Logout</p>} */}

				</div>
			</div>
		</div>
	)
}

export default ProfileDropDown