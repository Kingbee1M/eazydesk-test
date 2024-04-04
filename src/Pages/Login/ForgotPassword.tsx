import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginHeader from "../../components/LoginHeader";
import Copyright from "../../components/Copyright";
import Carousels from "../../components/Carousels";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { forgetPassword, reset } from "../../features/Auth/authSlice";
import * as yup from 'yup'
import { Formik } from 'formik';
import VerifyLoader from "../../components/Toast/VerifyLoader";
import { svgPaths } from "../../components/TableOptions";

const ForgotPassword = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate();
	const { forgetisLoading, forgetisError, forgetmessage, forgetisSuccess } = useAppSelector((state: { auth: any; }) => state.auth)
	const [spinning, setSpinning] = useState<number | null>(0);
	const [state, setState] = useState<boolean | null>(null);



	useEffect(() => {
		if (forgetisError) {
			falseIt()
			toast.error(forgetmessage);
		} else if (forgetisSuccess) {
			trueIt()
		}

	}, [forgetisError, forgetmessage, dispatch, forgetisSuccess, navigate])



	const loginValidationSchema = yup.object().shape({
		email: yup
			.string()
			.email("Please enter valid email")
			.required('Email Address is Required'),
	})

	const resetIt = () => {
		setState(null);
		setSpinning(0);
	};

	const trueIt = () => {
		setState(true);
		setSpinning(1);
	};

	const falseIt = () => {
		setState(false);
		setSpinning(1);
	};

	const handleForgotEmail = (values: any) => {
		resetIt();
		const value = { ...values };
		// @ts-ignore
		dispatch(forgetPassword(value))
	}



	const handleReset = async () => {
		dispatch(reset())
	};





	return (
		<div id="login-wrapper">
			<Carousels />
			<div className="login-container">
				<ToastContainer position="top-right" />
				<div className="login-content-layout">
					<LoginHeader />
					<div className="login-content-grid">
						<div className="logo-section">
							<div className="copyright_login_container">
								<div className="login-form-container">
									<p >Forgot Password!</p>
									{forgetisLoading || forgetisSuccess || forgetisError ? <VerifyLoader spinning={spinning} setSpinning={setSpinning} setState={setState} svgPaths={svgPaths} state={state} /> :
										<Formik
											validationSchema={loginValidationSchema}
											initialValues={{ email: '' }}
											onSubmit={handleForgotEmail} >
											{({ handleChange, handleSubmit, errors, values,
											}) => (

												<form className="form" onSubmit={handleSubmit} >
													<div className="form-ctrl">
														<label>Enter email</label>
														<input
															type="text"
															placeholder="Enter email address"
															value={values.email}
															onChange={handleChange('email')}
														/>
														{errors.email && <p className="formik-errors">{errors.email}</p>}
													</div>

													<button
														type="submit"
														disabled={forgetisLoading}
													>
														{forgetisLoading ? <Spinner size="sm" /> : "Sign-in"}
													</button>

												</form>

											)}
										</Formik>}
									{forgetisSuccess && <button type="submit" onClick={() => navigate("/")}>
										Login
									</button>}
									{forgetisError && <button type="submit" onClick={handleReset}>
										Retry
									</button>}
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

export default ForgotPassword;