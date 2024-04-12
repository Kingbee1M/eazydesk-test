import React, { useEffect, useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import Carousels from "../../components/Carousels";
import LoginHeader from "../../components/LoginHeader";
import SignupSuccessPage from "../../components/SuccessPage/SignupSuccessPage";
import { Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { customId } from "../../components/Options";
import { createCompany, reset } from "../../features/Company/companySlice";
import { signUp, reset as resetReg } from "../../features/Registration/registrationSlice";


function getSteps() {
	return [
		<b>
			Create Company
		</b>,
		<b>
			Enter User Details
		</b>
	];
}

function getStepContent(step: number, createisLoading: boolean, dispatch: any, signUpisLoading: boolean, input: any, setInput: any, id: string, inputs: any, setInputs: any) {



	const handleCreate = (e: any) => {
		e.preventDefault();
		if (step === 0) {
			// @ts-ignore
			dispatch(createCompany(input));
		} else if (step === 1) {
			// @ts-ignore
			dispatch(signUp(inputs));
		}
	}
	const handleOnChange = (input: string, value: string) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};
	const handleOnChanges = (inputs: string, value: string) => {
		setInputs((prevState: any) => ({
			...prevState,
			[inputs]: value,
		}));
	};

	switch (step) {
		case 0:
			return (
				<div className="user__details">
					<form className="  mt-2" onSubmit={handleCreate}>
						<div className="input__box">
							<span className="details">Create Company</span>
							<input
								type="text"
								placeholder="Enter company name"
								value={input?.name}
								onChange={(e) => handleOnChange("name", e.target.value)} />
						</div>

						<div className="signup_submit_next_btn">
							<button
								onClick={handleCreate}
								className="btn" >
								{createisLoading ? <Spinner size="sm" /> : "	Create"}
							</button>
						</div>
					</form>
				</div>
			);
		case 1:
			return (
				<form className="form" onSubmit={handleCreate}>
					<div className="input__box">
						<label className="details">First Name</label>
						<input
							type="text"
							placeholder="first name"
							value={inputs?.firstname}
							onChange={(e) => handleOnChanges("firstname", e.target.value)} />
					</div>
					<div className="input__box">
						<label>Last Name</label>
						<input
							type="text"
							placeholder="last name"
							value={inputs?.lastname}
							onChange={(e) => handleOnChanges("lastname", e.target.value)}
						/>
					</div>
					<div className="input__box">
						<label>Email</label>
						<input
							type="email"
							placeholder="email"
							value={inputs?.email}
							onChange={(e) => handleOnChanges("email", e.target.value)}
						/>
					</div>

					<div className="input__box">
						<label>Password</label>
						<input
							type="text"
							placeholder="password"
							value={inputs?.password}
							onChange={(e) => handleOnChanges("password", e.target.value)}
						/>
					</div>
					<div className="signup_submit_next_btn">

						<button
							onClick={handleCreate}
							className="btn" >
							{signUpisLoading ? <Spinner size="sm" /> : "	Sign-Up"}
						</button>
					</div>
				</form>
			);

		default:
			return "Unknown step";
	}
}

export default function GeekStepper() {
	const [input, setInput] = useState<any>({ name: "" })
	const [inputs, setInputs] = useState<any>({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		companyId: ""
	})
	const dispatch = useAppDispatch()
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();
	const { createdata: { id }, createisLoading, createisSuccess } = useAppSelector((state: any) => state.company)
	const { signUpisLoading, signUpisSuccess } = useAppSelector((state: any) => state.reg)

	useEffect(() => {
		setInputs((prevState: any) => {
			return ({
				...prevState,
				companyId: id,
			});
		});
	}, [id]);




	useEffect(() => {
		if (createisSuccess) {
			toast.success("Company Created!", { toastId: customId });
			setTimeout(() => {
				setActiveStep(1)
				dispatch(reset())
			}, 2000);

		} else if (signUpisSuccess) {
			setActiveStep(2)
			setTimeout(() => {
				dispatch(resetReg())
			}, 2000);
		}

	}, [dispatch, createisSuccess, signUpisSuccess]);





	return (
		<>
			<ToastContainer position="top-right" />
			{activeStep === 2 ? <SignupSuccessPage /> :
				<div id="login-wrapper">
					<Carousels />
					<div className="login-container">
						<LoginHeader />
						<div className='addemployeecontainer_main'>
							<div className="addemployeecontainer">
								<Stepper
									activeStep={activeStep}
									orientation="vertical"
								>
									{steps.map((label, index) => (
										<Step key={index}>
											<StepLabel>{label}</StepLabel>
											<StepContent>
												<Typography>
													{getStepContent(index, createisLoading, dispatch, signUpisLoading, input, setInput, id, inputs, setInputs,)}
												</Typography>
											</StepContent>
										</Step>
									))}
								</Stepper>
							</div>
						</div>
					</div>
				</div>}
		</>
	);
}


