import { useEffect } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup'
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import ModalHeader from './ModalHeader';
import { states } from '../Data';
import { SVGLoader } from '../SVGLoader';


const RegisterModal = ({ showTask, setShowTask }: any) => {








	const onSubmitRegistration = (values: any) => {
		const value: any = values;
		// @ts-ignore 
		dispatch(userRegistration(value))
	}



	const loginValidationSchema = yup.object().shape({
		firstName: yup.string().required('First Name is Required'),
		LastName: yup.string().required('Last Name is Required'),
		email: yup.string().email("Please enter valid email").required('Email Address is Required'),
		role: yup.string().required('Please select role'),
		phoneNumber: yup.string().min(9, ({ min }) => `Password must be at least ${min} characters`)
			.required('Phone Number is required'),
		password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`).required('Password is required'),
		location: yup.string().required('Location is Required'),
		address: yup.string().required('Address is Required'),
	})



	return (
		<div>
			<ToastContainer position="top-right" />
			{showTask && (
				<Modal
					size="lg"
					show={showTask}
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<ModalHeader setShow={setShowTask} headerTitle={"Registration"} />
					<Modal.Body>
						<div className="pop_box">
							<div className="modal_container">
								<div className="modal_header">
									<div className="close_button">
									</div>
								</div>
								<Formik
									validationSchema={loginValidationSchema}
									initialValues={{
										firstName: '',
										LastName: '',
										email: '',
										phoneNumber: '',
										role: '',
										location: '',
										address: '',
										password: '123456',
										supervisorId: '',
									}}
									onSubmit={onSubmitRegistration}>

									{({ handleChange, handleSubmit, errors, values }) => (
										<div>
											<div className="container_reg">
												<form onSubmit={handleSubmit}>
													<div className="user__details">
														<div className="input__box">
															<span className="details">First Name</span>
															<input type="text" placeholder="E.g: John Smith"
																value={values.firstName}
																onChange={handleChange("firstName")}
																required />
															{errors.firstName && <p className="formik-errors">{errors.firstName}</p>}
														</div>
														<div className="input__box">
															<span className="details">Last Name</span>
															<input type="text" placeholder="johnWC98"
																value={values.LastName}
																onChange={handleChange("LastName")}
																required />
															{errors.LastName && <p className="formik-errors">{errors.LastName}</p>}
														</div>
														<div className="input__box">
															<span className="details">Email</span>
															<input type="email" placeholder="johnsmith@hotmail.com"
																value={values.email}
																onChange={handleChange('email')}
																required />
															{errors.email && <p className="formik-errors">{errors.email}</p>}
														</div>
														<div className="input__box">
															<span className="details">Phone Number</span>
															<input type="text" placeholder="012-345-6789"
																value={values.phoneNumber}
																onChange={handleChange("phoneNumber")}
																required />
															{errors.phoneNumber && <p className="formik-errors">{errors.phoneNumber}</p>}
														</div>

														<div className="input__box">
															<span className="details">Location</span>
															{/* <select name="country" id="register-select"
																onChange={handleChange("location")} placeholder="Location">
																{states.map((state, i) => (
																	<option value={state} key={i}>{state}</option>
																))}
															</select> */}
															<select
																name="country"
																id="register-select"
																onChange={(e) => handleChange("location")(e.target.value)}
																value={""}
															>
																<option value="" disabled hidden>Location</option>
																{states.map((state, i) => (
																	<option value={state} key={i}>{state}</option>
																))}
															</select>

															{errors.location && <p className="formik-errors">{errors.location}</p>}
														</div>

														<div className="input__box">
															<span className="details">Address</span>
															<input type="text" placeholder="Address"
																value={values.address}
																onChange={handleChange("address")} required />
															{errors.address && <p className="formik-errors">{errors.address}</p>}
														</div>

														<div className="input__box">
															<span className="details">Role</span>
															<select name="country" id="register-select"
																value={values.role}
																onChange={handleChange("role")}>
																<option value="">Select Role</option>
																<option value="SUPER_ADMIN">Super Admin</option>
																<option value="SUPERVISOR">Supervisor</option>
																<option value="EMPLOYEE">Employee</option>
															</select>
															{errors.role && <p className="formik-errors">{errors.role}</p>}
														</div>
														<div className="input__box">
															<span className="details">Password</span>
															<input type="text" placeholder="123.eg"
																value={values.password}
																onChange={handleChange("password")} required />
															{errors.password && <p className="formik-errors">{errors.password}</p>}
														</div>
														<div className="input__box">
															<span className="details">Supervisor</span>

															<select name="country" id="register-select"
																value={values.supervisorId}
																onChange={handleChange("supervisorId")}>
																<option value="">Select a supervisor</option>
																{[].map((option: any, index: any) => (
																	<option key={index} value={option.id}>
																		{`${option.firstName} ${option.LastName}`}
																	</option>
																))}
															</select>
														</div>
													</div>
													<div className="Register-button-container">
														<button
															id='custom-btn'
															className=" mt-4"
															type="submit"
														>
															{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Register"}
														</button>

													</div>
												</form>
											</div>
										</div>
									)}
								</Formik>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			)}
		</div>
	)
}

export default RegisterModal






