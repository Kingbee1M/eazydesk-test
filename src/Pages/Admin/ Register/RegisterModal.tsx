import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import ModalHeader from '../../../components/Modals/ModalHeader';
import { SVGLoader } from '../../../components/SVGLoader';
import { getCompany } from '../../../features/Company/companySlice';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { reset, userRegistration } from '../../../features/Registration/registrationSlice';
import { FiPlus } from 'react-icons/fi';
import { customId } from '../../../components/Options';


const RegisterModal = () => {
	const [show, setShow] = useState(false);
	const dispatch = useAppDispatch();
	const { data } = useAppSelector((state: any) => state.company)
	const { isError, message, isLoading, isSuccess } = useAppSelector(
		(state) => state.reg)

	const [input, setInput] = useState<any>({
		firstname: "",
		lastname: "",
		email: "",
		role: "",
		password: "",
		companyId: ""
	})


	useEffect(() => {
		dispatch(getCompany());
	}, [dispatch])

	useEffect(() => {
		if (isSuccess) {
			toast.success("User Created", { toastId: customId });
			setShow(false)
			setInput({
				firstname: "",
				lastname: "",
				email: "",
				role: "",
				password: "",
				companyId: ""
			})
		}
		// setTimeout(() => {
		dispatch(reset())
		// }, 5000);
	}, [isError, message, dispatch, isSuccess])


	const onSubmitRegistration = (e: { preventDefault: () => void; }) => {
		e.preventDefault()
		// @ts-ignore 
		dispatch(userRegistration(input))
	}

	const handleOnChange = (input: string, value: string) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};


	return (
		<div>
			<ToastContainer position="top-right" />
			<button className='btn' onClick={() => setShow(true)}>
				<FiPlus size={18} /> <span>Register users</span>
			</button>

			<Modal
				size="lg"
				show={show}
				aria-labelledby="contained-modal-title-vcenter"
				centered >
				<ModalHeader setShow={setShow} headerTitle={"Registration"} />
				<Modal.Body>

					<div className="container_reg">
						<form onSubmit={onSubmitRegistration}>
							<div className="user__details">
								<div className="input__box">
									<span className="details">First Name</span>
									<input type="text" placeholder="E.g: John Smith"
										value={input?.firstname}
										onChange={(e) => handleOnChange("firstname", e.target.value)}
										required />
								</div>
								<div className="input__box">
									<span className="details">Last Name</span>
									<input type="text" placeholder="johnWC98"
										value={input?.lastname}
										onChange={(e) => handleOnChange("lastname", e.target.value)}
										required />
								</div>
								<div className="input__box">
									<span className="details">Email</span>
									<input type="email" placeholder="johnsmith@hotmail.com"
										value={input?.email}
										onChange={(e) => handleOnChange("email", e.target.value)}
										required />
								</div>
								<div className="input__box">
									<span className="details">Role</span>
									<select name="country" id="register-select"
										value={input?.role}
										onChange={(e) => handleOnChange("role", e.target.value)}
									>
										<option value="">Select Role</option>
										<option value="SUPER_ADMIN">Super Admin</option>
										<option value="ADMIN">Admin</option>
										<option value="SUPERVISOR">Supervisor</option>
										<option value="IT_SUPPORT">IT Support</option>
										<option value="TEAM_LEAD">Team Lead</option>
									</select>
								</div>
								<div className="input__box">
									<span className="details">Password</span>
									<input type="text" placeholder="123.eg"
										value={input?.password}
										onChange={(e) => handleOnChange("password", e.target.value)} required />
								</div>
								<div className="input__box">
									<span className="details">Company</span>
									<select name="country" id="register-select"
										value={input?.companyId}
										onChange={(e) => handleOnChange("companyId", e.target.value)}>
										<option value="">Select a company</option>
										{data?.companies?.map((option: any, index: any) => (
											<option key={index} value={option?.id}>
												{`${option?.name}`}
											</option>
										))}
									</select>
								</div>
							</div>
							<div className="Register-button-container">
								<button
									id='custom-btn'
									className="mt-4"
									type="submit"
								>
									{isLoading ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Register"}
								</button>
							</div>
						</form>
					</div>
				</Modal.Body>
			</Modal>

		</div>
	)
}

export default RegisterModal






