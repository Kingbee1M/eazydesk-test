

import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginHeader from "../../components/LoginHeader";
import Copyright from "../../components/Copyright";
import Carousels from "../../components/Carousels";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { reset, resetPassword } from "../../features/Auth/authSlice";
import * as yup from 'yup'
import { Formik } from 'formik';
import VerifyLoader from "../../components/Toast/VerifyLoader";
import { svgPaths } from "../../components/Options";

const ResetPassword = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch()
	const navigate = useNavigate();
	const { resetisLoading, resetisError, resetmessage, resetisSuccess } = useAppSelector((state: { auth: any; }) => state.auth)
	const [spinning, setSpinning] = useState<number | null>(0);
	const [state, setState] = useState<boolean | null>(null);



	useEffect(() => {
		if (resetisError) {
			falseIt()
		} else if (resetisSuccess) {
			trueIt()
		}

	}, [resetisError, resetmessage, dispatch, resetisSuccess, navigate])



	const passwordValidationSchema = yup.object().shape({
		password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
			.required('Password is required'),
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

	const handleResetPassword = (values: any) => {
		resetIt();
		const input = { ...values };
		const value = { input, id }
		// @ts-ignore
		dispatch(resetPassword(value))
	}


	const handleReset = async () => {
		dispatch(reset())
	};





	return (
		<div id="login-wrapper">
			<Carousels />
			<div className="login-container">
				<ToastContainer position="top-right" containerId={"custom1"} />
				<div className="login-content-layout">
					<LoginHeader />
					<div className="login-content-grid">
						<div className="logo-section">
							<div className="copyright_login_container">
								<div className="login-form-container">
									<p>Reset Password!</p>
									{resetisLoading || resetisSuccess || resetisError ? <VerifyLoader spinning={spinning} setSpinning={setSpinning} setState={setState} svgPaths={svgPaths} state={state} /> :
										<Formik
											validationSchema={passwordValidationSchema}
											initialValues={{ password: '' }}
											onSubmit={handleResetPassword} >
											{({ handleChange, handleSubmit, errors, values,
											}) => (

												<form className="form" onSubmit={handleSubmit} >
													<div className="form-ctrl">
														<label>Reset Password</label>
														<input
															type="text"
															placeholder="Enter password"
															value={values.password}
															onChange={handleChange('password')}
														/>
														{errors.password && <p className="formik-errors">{errors.password}</p>}
													</div>

													<button
														type="submit"
														disabled={resetisLoading}
													>
														{resetisLoading ? <Spinner size="sm" /> : "Sign-in"}
													</button>
												</form>

											)}
										</Formik>}
									{resetisSuccess && <button type="submit" onClick={() => navigate("/")}>
										Login
									</button>}
									{resetisError && <button type="submit" onClick={handleReset}>
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

export default ResetPassword;
