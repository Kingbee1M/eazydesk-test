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
import { getUserPrivileges } from '../../../hooks/auth';


const SubscriptionModal = () => {
	const {
		isSuperAdmin,
		isAdmin
	} = getUserPrivileges();
	// @ts-ignore  
	const userInfo = JSON.parse(localStorage.getItem("service_desk"));



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
		if (isAdmin) {
			setInput((prevState: any) => {
				return ({
					...prevState,
					companyId: userInfo?.companyId,
				});
			});
		}

	}, [isAdmin, userInfo?.companyId]);


	useEffect(() => {
		if (isSuperAdmin) {
			dispatch(getCompany());
		}
	}, [dispatch, isSuperAdmin])

	useEffect(() => {
		if (isSuccess) {
			toast.success("User Created", { toastId: customId });
			setShow(false)
			setInput({
				subscriptiontype: "",
				subscriptionprice: "",
				subcribedusers: "",
				subscriptionConfirmed: "",
				subscriptionstartdate: "",
				subscriptionenddate: ""
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
			<ToastContainer position="top-right" containerId={"custom1"} />
			<button className='btn' onClick={() => setShow(true)}>
				<FiPlus size={18} /> <span>Create Subscription</span>
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
									<span className="subscriptiontype">Subscription Type</span>
									<select name="subscriptiontype" id="register-select"
										value={input?.subscriptiontype}
										onChange={(e) => handleOnChange("subscriptiontype", e.target.value)}
									>
										<option value="">Subscription Type</option>
										<option value="Basic">Basic</option>
										<option value="Standard">Standard</option>
										<option value="Premium">Premium</option>
									
									</select>
                                </div>
                                <div className="input__box">
									<span className="subscriptionprice">Subscription Price</span>
									<select name="subscriptionprice" id="register-select"
										value={input?.role}
										onChange={(e) => handleOnChange("subscriptionprice", e.target.value)}
									>
										<option value="">Subscription Price</option>
										<option value="1000">$1000</option>
										<option value="5000">$5000</option>
										<option value="10000">$10000</option>
									
									</select>
                                </div>
                                <div className="input__box">
									<span className="subcribedusers">Number of Users</span>
									<input type="text" placeholder="johnWC98"
										value={input?.subcribedusers}
										onChange={(e) => handleOnChange("subcribedusers", e.target.value)}
										required />
								</div>
								<div className="input__box">
									<span className="subscriptionstartdate">Start date</span>
									<input type="text" placeholder="123.eg"
										value={input?.subscriptionstartdate}
										onChange={(e) => handleOnChange("subscriptionstartdate", e.target.value)} required />
								</div>
								<div className="input__box">
									<span className="subscriptionendtdate">End date</span>
									<input type="subscriptionendtdate" placeholder="123.eg"
										value={input?.subscriptionendtdate}
										onChange={(e) => handleOnChange("subscriptionendtdate", e.target.value)} required />
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

export default SubscriptionModal






