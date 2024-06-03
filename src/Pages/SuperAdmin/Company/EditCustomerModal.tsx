import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import ResetPasswordModal from "../ Register/ResetPasswordModal";
import ModalHeader from "../../../components/Modals/ModalHeader";
import { SVGLoader } from "../../../components/SVGLoader";
import { customId } from "../../../components/Options";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../store/useStore";
import { edituser, reset } from "../../../features/Registration/registrationSlice";


const EditCustomerModal = ({ data, id }: any) => {
	const { edituserisSuccess, edituserisLoading } = useAppSelector((state: any) => state.reg);
	const { resetPasswordisSuccess } = useAppSelector((state: any) => state.reg);
	const dispatch = useAppDispatch();
	const Edit = ["Edit User", "Reset Password"];
	const [showedit, setShowEdit] = useState(false);
	const handleCloseEdit = () => setShowEdit(false);
	const [activeTab, setActiveTab] = useState(0);
	const [result, setResult] = useState("Edit User");


	const [input, setInput] = useState<any>({
		firstname: "",
		lastname: "",
		email: "",
		mobileNumber: "",
		role: "",
		activated: "",
	})



	const showInfo = (catagory: React.SetStateAction<string>) => {
		setResult(catagory);
	};

	// This handle Show always state to the current
	const handleShow = () => {
		setShowEdit(true);
	};


	useEffect(() => {
		setInput((prevState: any) => {
			return ({
				...prevState,
				firstname: data?.firstname,
				lastname: data?.lastname,
				email: data?.email,
				mobileNumber: data?.mobileNumber,
				role: data?.role,
				activated: data?.activated,
			});
		});
	}, [data?.lastname, data?.email, data?.firstname, data?.activated, data?.mobileNumber, data?.role, setInput]);


	const handleOnChange = (input: any, value: any) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};


	const handleUpdateUser = (e: { preventDefault: () => void; }) => {
		const value = { id, input }
		e.preventDefault()
		// @ts-ignore 
		dispatch(edituser(value))
	}
	useEffect(() => {
		if (edituserisSuccess) {
			toast.success("User Edited!", { toastId: customId });
			setShowEdit(false);
		} else if (resetPasswordisSuccess) {
			setShowEdit(false);
		}
		setTimeout(() => {
			dispatch(reset())
		}, 5000);
	}, [edituserisSuccess, dispatch, resetPasswordisSuccess]);

	return (
		<>
			<button id='custom-btn-two-active' onClick={handleShow} style={{ whiteSpace: "nowrap" }}>
				EDIT USER
			</button>
			<Modal
				show={showedit}
				onHide={handleCloseEdit}
				backdrop="static"
				keyboard={false}
			>
				<ModalHeader headerTitle={"Edit User"} setShow={setShowEdit} />
				<Modal.Body>
					<div className="page-btn-title">
						{Edit?.map((catagory, i) => (
							<button
								id={activeTab === i ? "custom-btn-two-active" : "custom-btn-two"}
								onClick={() => {
									showInfo(catagory);
									setActiveTab(i);
								}}
								key={i}>
								{catagory}
							</button>
						))}
					</div>

					{result === "Edit User" && (
						<div>
							<form onSubmit={handleUpdateUser} >
								<div className="user__details-long">
									<div className="input__box">
										<span className="details">First Name</span>
										<input type="text" placeholder="100"
											value={input?.firstname}
											onChange={(e) => handleOnChange("firstname", e.target.value)}
											required />
									</div>
									<div className="input__box">
										<span className="details">lastname</span>
										<input type="text" placeholder="Last Name"
											value={input?.lastname}
											onChange={(e) => handleOnChange("lastname", e.target.value)}
											required />
									</div>
									<div className="input__box">
										<span className="details">Email</span>
										<input type="text" placeholder="Email"
											value={input?.email}
											onChange={(e) => handleOnChange("email", e.target.value)}
											required />
									</div>
									<div className="input__box">
										<span className="details">Phone Number</span>
										<input type="text" placeholder="Phone Number"
											value={input?.mobileNumber}
											onChange={(e) => handleOnChange("mobileNumber", e.target.value)}
											required />
									</div>
									<div className="input__box">
										<span className="details">Role</span>
										<select name="country" id="register-select"
											value={input?.role}
											onChange={(e) => handleOnChange("role", e.target.value)}
										>
											<option value="SUPER_ADMIN">Super Admin</option>
											<option value="ADMIN">Admin</option>
											<option value="SUPERVISOR">Supervisor</option>
											<option value="TEAM_LEAD">Lead</option>
											<option value="IT_SUPPORT">IT Support</option>
										</select>
									</div>


									<div className="user-status mb-5" >
										<span className="user-isActive">
											{input?.activated ? <p> Activated :</p> : <p>De-activate:</p>}
										</span>
										<label className="toggle-switch">
											<input
												type="checkbox"
												checked={input?.activated}
												onChange={(e) => handleOnChange("activated", e.target.checked)}
											/>
											<span className="slider round"></span>
										</label>
									</div>


									<button
										id='custom-btn' className='mt-4'
										type="submit"
										value="Submit"
										disabled={edituserisLoading}>
										{edituserisLoading ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Update User"}
									</button>
								</div>
							</form>
						</div>
					)}
					{result === "Reset Password" && (

						< ResetPasswordModal id={data?.id} />
					)}
				</Modal.Body>
			</Modal>

		</ >
	);
};
export default EditCustomerModal;

