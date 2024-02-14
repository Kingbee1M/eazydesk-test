import { useState } from "react"; 
import { ToastContainer, toast } from "react-toastify";
import { SVGLoader } from "../SVGLoader";



const ResetPasswordModal = ({ id }: any) => {
	 


	//  Update Current Password State
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const value = { id, newPassword }


	const passwordhandelSubmit = (e: any) => {
		e.preventDefault();
		if (newPassword !== confirmNewPassword) {
			toast.error("Password do not match");
		} else {
			// @ts-ignore 
			dispatch(resetPassword(value));
		}
	};





	return (
		<div>
			<ToastContainer position="top-right" />
			<form onSubmit={passwordhandelSubmit}>
				<div className="user__details-long">
					<div className="input__box mt-5">
						<span className="details">New Password</span>
						<input type="text" placeholder="New Password"
							value={newPassword}
							onChange={(e) => {
								setNewPassword(e.target.value);
							}}
							required />
					</div>
					<div className="input__box">
						<span className="details">Confirm New Password</span>
						<input type="text" placeholder="Confirm New Password"
							value={confirmNewPassword}
							onChange={(e) => {
								setConfirmNewPassword(e.target.value);
							}}
							required />
					</div>

					<button
						id='custom-btn'
						className='mt-4'
						type="submit"
						value="Submit"
						disabled={false && true}>
						{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Submit"}

					</button>
				</div>
			</form>
		</div>
	);
};

export default ResetPasswordModal;
