import React, { useState } from 'react'
import LoginHeader from '../../../components/LoginHeader'
import Carousels from '../../../components/Carousels'
import AddEmployeeTitle from '../../../components/employeeInputs/AddEmployeeTitle';
import AddEmployeeNav from '../../../components/employeeInputs/AddEmployeeNav';
import Essentials from '../../../components/employeeInputs/Essentials';
import Information from '../../../components/employeeInputs/Information';

const SignUp = () => {
	const [finish, setFinish] = useState<boolean>(false);
	let [active, setActive] = useState<number>(1);

	console.log('active', active)
	const [employee, setEmployee] = useState({
		first_name: "",
		middle_name: "",
		last_name: "",
		personal_email: "",
		email: "",
		phone: "",
		gender: "",
		institution_attended: "",
		visa_type: "",
		course_studied: "",
		qualification: "",
		department: "",
		role: "",
		is_expatriate: false,
		passport_number: "",
		visa_duration: "",

		bank_name: "",
		bank_account_number: "",
		bank_account_name: "",


		date_of_birth: "",
		next_of_kin: "",
		next_of_kin_phone: "",
		next_of_kin_email: "",
		next_of_kin_address: "",
		referee_name: "",
		referee_phone: "",
		emergency_contact_name: "",
		emergency_contact_phone: "",
		has_disability: false,
		disability: "",
		has_work_location_objection: false,
		work_location_objection: "",
		employment_date: "",
		employment_duration: "",
		employment_type: "",
		employee_id: "",
		category: "",

		tally_number: "",
		address: "",
		city: "",
		zip_code: "",
		state_of_origin: "",
		country: "",
		nin: "",
		marital_status: "",
	});






	// Function to increment count by 1
	const incrementCountCancel = () => {
		// Update state with incremented value
		setActive((active = 1));
	};
	// Function to increment count by 1
	const incrementCount = () => {
		// Update state with incremented value
		if (active !== 6) {
			setActive(active + 1);
		}
	};
	// Function to decrementCount count by 1
	const decrementCount = () => {
		// Update state with incremented value
		if (active !== 1) {
			setActive(active - 1);
		}
	};
	const submitMyFormRef: any = React.useRef(null);

	const handleSubmitMyForm = (e: Event) => {
		if (submitMyFormRef.current) {
			submitMyFormRef.current(e);
		}
	};

	const bindSubmitForm = React.useCallback((submitForm: any) => {
		submitMyFormRef.current = submitForm;
	}, []);






	return (
		<div id="login-wrapper">
			<Carousels />
			<div className="login-container">
				<LoginHeader />
				<div className='addemployeecontainer_main'>
					<div className="addemployeecontainer">

						{active === 6 ? (
							""
						) : (
							<AddEmployeeNav active={active} setActive={setActive} />
						)}
						<div className="all-inputs-container">
							<div className='all-inputs-container_sup'>
								<Essentials
									active={active}
									employee={employee}
									setEmployee={setEmployee}
									setActive={setActive}
									bindSubmitForm={bindSubmitForm}
								/>
								<Information
									active={active}
									employee={employee}
									setEmployee={setEmployee}
									setActive={setActive}
									bindSubmitForm={bindSubmitForm}
								/>
							</div>
							<AddEmployeeTitle
								incrementCountCancel={incrementCountCancel}
								incrementCount={incrementCount}
								decrementCount={decrementCount}
								setActive={setActive}
								active={active}
								click={handleSubmitMyForm}
								setFinish={setFinish}
								finish={finish}
							/>


							{/* {active === 6 || active === 5 ? " " :
								<div className="contained-push-btn">
									<div className="addemployee-sup">

										<button
											id={"push-btn-decrementCount"}

											className="back-to-employee-button"
											onClick={decrementCount}
										>
											BACK
										</button>

										<div>
											{finish ? (
												<button
													className="back-to-employee-button2"
													onClick={incrementCount} >
													FINISH
												</button>
											) : (
												// @ts-ignore 
												<button className="back-to-employee-button2" onClick={handleSubmitMyForm}
													type="submit" >
													CONTINUE
												</button>
											)}
										</div>
									</div>
								</div>
							} */}

						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default SignUp