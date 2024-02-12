import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import ResetPasswordModal from "./ResetPasswordModal";
import { toast } from "react-toastify";
import ModalHeader from "./ModalHeader";
import { SVGLoader } from "../SVGLoader";


const EditRegisteredUserModal = ({ data }: any) => {


	const Edit = ["Edit User", "Reset Password"];
	const [showedit, setShowEdit] = useState(false);
	const handleCloseEdit = () => setShowEdit(false);
	const [isActive, setIsActive] = useState(data?.isEnabled);
	const [activeTab, setActiveTab] = useState(0);
	const [result, setResult] = useState("Edit User");






	const [input, setInput] = useState<any>({
		firstname: "",
		lastname: "",
		email: "",
		phoneNumber: "",
		role: "",
		supervisorId: "",
	})



	const handleCheckboxChange = () => {
		setIsActive((prevIsActive: any) => !prevIsActive);
	};

	const showInfo = (catagory: React.SetStateAction<string>) => {
		setResult(catagory);
	};


	// This handle Show always state to the current
	const handleShow = () => {
		setShowEdit(true);
	};



	const value = {
		"email": input?.email,
		"payload": {
			"role": input?.role,
			"firstName": input?.firstname,
			"LastName": input?.lastname,
			"email": input?.email,
			"phoneNumber": input?.phoneNumber,
			"supervisorId": input?.supervisorId,
			"isEnabled": isActive
		}
	}



	useEffect(() => {
		setInput((prevState: any) => {
			return ({
				...prevState,
				firstname: data?.firstName,
				lastname: data?.LastName,
				email: data?.email,
				phoneNumber: data?.phoneNumber,
				role: data?.role,
				supervisorId: data?.supervisorId,
				isEnabled: data?.isEnabled,
			});
		});
	}, [data?.LastName, data?.email, data?.firstName, data?.isEnabled, data?.phoneNumber, data?.role, data?.supervisorId, setInput]);





	const handleOnChange = (input: any, value: any) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};



	const handleUpdateUser = (e: any) => {
		e.preventDefault();
		// @ts-ignore 
		dispatch(edituser(value))
	};


	return (
		<div>
			<button id='custom-btn-two-active' onClick={handleShow} style={{ whiteSpace: "nowrap" }}>
				EDIT USER
			</button>
			<Modal
				show={showedit}
				onHide={handleCloseEdit}
				backdrop="static"
				keyboard={false}
				// @ts-ignore 
				size="md"
			>
				<ModalHeader headerTitle={"Edit User"} setShow={setShowEdit} />
				<Modal.Body>
					{/* <CssBaseline /> */}
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
										<span className="details">Lastname</span>
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
											value={input?.phoneNumber}
											onChange={(e) => handleOnChange("phoneNumber", e.target.value)}
											required />
									</div>
									<div className="input__box">
										<span className="details">Role</span>
										<select name="country" id="register-select"
											value={input.role}
											onChange={(e) => handleOnChange("role", e.target.value)}
										>
											<option value="SUPER_ADMIN">Super Admin</option>
											<option value="SUPERVISOR">Supervisor</option>
											<option value="EMPLOYEE">Employee</option>
										</select>
									</div>

									<div className="input__box">
										<span className="details">Supervisor</span>

										<select name="country" id="register-select"
											value={input.supervisorId}
											onChange={(e) => handleOnChange("supervisorId", e.target.value)}>
											<option value="">Select a supervisor</option>
											{[].map((option: any, index: any) => (
												<option key={index} value={option.id}>
													{`${option.firstName} ${option.LastName}`}
												</option>
											))}
										</select>
									</div>

									<div className="user-status mb-5" >
										<span className="user-isActive">
											{isActive ? <p> Activated :</p> : <p>De-activate:</p>}
										</span>
										<label className="toggle-switch">
											<input
												type="checkbox"
												checked={isActive}
												onChange={handleCheckboxChange}
											/>
											<span className="slider round"></span>
										</label>
									</div>

									<center>

									</center>
									<button
										id='custom-btn' className='mt-4'
										type="submit"
										value="Submit"
										disabled={false && true}>
										{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Update User"}
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

		</div >
	);
};
export default EditRegisteredUserModal;
