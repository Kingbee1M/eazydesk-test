import React, { useState } from 'react'
import { states } from '../../../components/Data';
import pro_img from '../../../assets/img/Rectangle.png'

const GeneralInformation = () => {
	const [input, setInput] = useState({
		username: "",
		phonenumber: "",
		emailaddress: "",
		State: "",
		fax: "",
		address: "",
		City: "",
	})


	const handleChange = (input: any, value: any) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};

	return (
		<div className='settings_main_after'>
			<div className='settings_main_after_sup'>
				<h3>General Information</h3>
				<p>Manage your account settings</p>
			</div>
			<h5 className='settings_main_profile_title'>Profile Picture</h5>

			{/* settings  profile */}
			<div className='settings_profile_title_container'>
				<div className='settings_profile_title'>
					<img src={pro_img} alt='logo' crossOrigin="anonymous" className="profile_img" />
				</div>
				<div className='settings_profile_title_text'>
					<h6>Mark Collins</h6>
					<p>Role/Title</p>
					<p>Location</p>
				</div>
				<div className='settings_container_title_btn'>
					<button className='btn'>Change</button>
					<button className='btn_outline'>Delete</button>
				</div>
			</div>

			{/* form */}
			<div className="container_reg  settings_container_form">
				<form>
					<div className="user__details">
						<div className="input__box">
							<span className="details">Username</span>
							<input type="text" placeholder="E.g: John Smith"
								value={input.username}
								onChange={(e) => handleChange("username", e.target.value)}
								required />
						</div>
						<div className="input__box">
							<span className="details">Email address</span>
							<input type="text" placeholder="xyz@gmail.com"
								value={input.emailaddress}
								onChange={(e) => handleChange("emailaddress", e.target.value)}
								required />
						</div>
						<div className="input__box">
							<span className="details">Phone Number</span>
							<input type="phonenumber" placeholder="123-098-345-09"
								value={input.phonenumber}
								onChange={(e) => handleChange("phonenumber", e.target.value)}
								required />
						</div>
						<div className="input__box">
							<span className="details">Fax</span>
							<input type="fax" placeholder="012-345-6789"
								value={input.fax}
								onChange={(e) => handleChange("fax", e.target.value)}
								required />
						</div>
						<div className="input__box">
							<span className="details">Address</span>
							<input type="address" placeholder="012-345-6789"
								value={input.address}
								onChange={(e) => handleChange("address", e.target.value)}
								required />
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
								onChange={(e) => handleChange("firstName", e.target.value)}
								value={""}
							>
								<option value="" disabled hidden>State</option>
								{states.map((state, i) => (
									<option value={state} key={i}>{state}</option>
								))}
							</select>

						</div>

						<div className="input__box">
							<span className="details">Address</span>
							<input type="text" placeholder="Address"
								onChange={(e) => handleChange("firstName", e.target.value)}
								required />
						</div>


						<div className="input__box">
							<span className="details">Location</span>
							<input type="State" placeholder="123.eg"
								value={input.State}
								onChange={(e) => handleChange("State", e.target.value)} required />
						</div>
					</div>
				</form>
			</div>

		</div>
	)
}

export default GeneralInformation