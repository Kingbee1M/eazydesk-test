import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import LoginHeader from "../../components/LoginHeader";
import Copyright from "../../components/Copyright";
import Carousels from "../../components/Carousels";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { login, reset } from "../../features/Auth/authSlice";
import * as yup from 'yup'
import { Formik } from 'formik';
import DataService from "../../features/Auth/dataService";


const dataService = DataService();
const Login = () => {
	const token = dataService.getToken()
	const dispatch = useAppDispatch()
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState<any>(false);
	const [email, setEmail] = useState<any>(false);

	const { isError, message, isLoading, isSuccess } = useAppSelector(
		(state: { auth: any; }) => state.auth)




	const onSubmitFormlogin = (values: any) => {
		const value = { ...values };
		setEmail(values.email)
		// @ts-ignore
		dispatch(login(value))
	}
	useEffect(() => {
		if (token) {
			navigate('/dashboard')
		}
	}, [token, dispatch, navigate])




	useEffect(() => {
		if (isError && message === "Account not verified!🙁 Verification link has been resent to your mail") {
			navigate(`/successpage/${email}`)
		} else if (isError) {
			toast.error(message);
		} else if (isSuccess) {
			toast.success(message);
		}
		dispatch(reset())
	}, [isError, message, dispatch, isSuccess, navigate, email])



	const loginValidationSchema = yup.object().shape({
		email: yup
			.string()
			.email("Please enter valid email")
			.required('Email Address is Required'),
		password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
			.required('Password is required'),
	})




	return (
		<div id="login-wrapper">
			<Carousels />
			<div className="login-container">
				<ToastContainer position="top-right" />
				<div className="login-content-layout">
					{/* Login Header */}
					<LoginHeader />
					<div className="login-content-grid">
						<div className="logo-section">
							<div className="copyright_login_container">
								<div className="login-form-container">
									<p >Sign in</p>
									{<Formik
										validationSchema={loginValidationSchema}
										initialValues={{
											email: '',
											password: ''
										}}
										onSubmit={onSubmitFormlogin} >
										{({ handleChange, handleSubmit, errors, values,
										}) => (
											<form className="form" onSubmit={handleSubmit} >
												<div className="form-ctrl">
													<label>Agent ID</label>
													<input
														type="text"
														placeholder="Enter your Agent ID"
														value={values.email}
														onChange={handleChange('email')}
													/>
													{errors.email && <p className="formik-errors">{errors.email}</p>}
												</div>
												<div className="form-ctrl">
													<label>Password</label>
													<input
														type={showPassword ? "text" : "password"}
														placeholder="Enter your password"
														value={values.password}
														onChange={handleChange('password')}
													/>

													<span id="i-FaEye" onClick={() => setShowPassword(!showPassword)}>
														{showPassword ? <FaEye /> : <FaEyeSlash />}
													</span>
													{errors.password && <p className="formik-errors" id="password">{errors.password}</p>}
												</div>
												<button
													type="submit"
													disabled={isLoading}
												>
													{isLoading ? <Spinner size="sm" /> : "Sign-in"}
												</button>
												<div className="forgot_password_container" onClick={() => navigate("/forgotpassword")}>
													<h6>Forgot password?</h6>
												</div>
											</form>
										)}
									</Formik>}
								</div>
								<Copyright />
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;