import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoginHeader from "../../components/LoginHeader";
import Copyright from "../../components/Copyright";
import Carousels from "../../components/Carousels";
import { useAppDispatch, useAppSelector } from "../../store/useStore";


import createHttpService from "../../helpers/HttpService";
import VerifyLoader from "../../components/Toast/VerifyLoader";
import { svgPaths } from "../../components/TableOptions";

const VerifyEmail = () => {
	// Get the id and token from the URL parameters
	const { id, token } = useParams();
	const dispatch = useAppDispatch()
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isSuccess, setiIsSuccessr] = useState(false);
	const [message, setMessage] = useState("");
	const [spinning, setSpinning] = useState<number | null>(0);
	const [state, setState] = useState<boolean | null>(null);

	const [input, setInput] = useState<any>(
		{
			"token": "",
			"userId": ""
		}
	);

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

	useEffect(() => {
		setInput((prevState: any) => {
			return ({
				...prevState,
				userId: id,
				token: token,
			});
		});
	}, [id, setInput, token]);






	useEffect(() => {
		if (isError) {
			toast.error(message);
		} else if (isSuccess) {
			toast.success(message);
		}
	}, [isError, message, dispatch, isSuccess, navigate])



	const handleResetEmail = async () => {
		setIsLoading(true);
		resetIt();
		try {
			const HttpService = createHttpService(); // Instantiate your HTTP service
			const { data } = await HttpService.post('/api/v2/auth/verify-email', input);
			trueIt()
			setiIsSuccessr(true)
			console.log(data); // Handle success response
		} catch (error: any) {
			console.log('error', error)
			falseIt()
			setIsError(true)  // Handle error
			setMessage(error.response && error.response.data.message
				? error.response.data.message
				: error?.response?.data?.errors?.map((error: { message: any; }) => error?.message ?? '').join(', '))
			falseIt()
		} finally {
			setIsLoading(false);
		}
	};

	const handleReset = async () => {
		setIsLoading(false);
		setiIsSuccessr(false)
		setIsError(false)

	};


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
									<p>
										{isLoading ? "Verifying..." : isSuccess ? "Verified!" : isError ? "Verification Failed!" : "Verify Email!"}
									</p>

									{isLoading || isSuccess || isError ? <VerifyLoader spinning={spinning} setSpinning={setSpinning} setState={setState} svgPaths={svgPaths} state={state} /> :
										<form className="form" onSubmit={handleResetEmail} >
											<div className="form-ctrl">
												<label>User ID</label>
												<input
													disabled
													type="text"
													placeholder="user ID"
													value={input.userId}
												/>
											</div>
											<div className="form-ctrl">
												<label>Token</label>
												<input
													disabled
													type="text"
													placeholder="token"
													value={input.token}
												/>
											</div>
											<button
												type="submit"
												disabled={isLoading}
											>
												{isLoading ? <Spinner size="sm" /> : "Verify"}
											</button>
										</form>
									}
									{isError && <button type="submit" onClick={handleReset}>
										Try Again
									</button>}
									{isSuccess && <button type="submit" onClick={() => navigate("/")}>
										Login
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

export default VerifyEmail;
