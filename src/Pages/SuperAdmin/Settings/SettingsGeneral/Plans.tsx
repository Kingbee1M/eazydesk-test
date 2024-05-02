import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";
import PricingCardsContainer from '../../../../components/PricingCardsContainer';

const Plans = () => {

	const [selectedOption, setSelectedOption] = useState('Yearly');


	const handleToggle = (option: React.SetStateAction<string>) => {
		// setSelectedOption(selectedOption === 'Yearly' ? 'Monthly' : 'Yearly');
		if (selectedOption !== option) {
			setSelectedOption(option);
		}
	};
	return (
		<div className='settings_main_after'>
			<div className='settings_main_after_sup'>
				<h3>Plans</h3>
				<p>Lorem ipsum dolor sit amet consectetur</p>
			</div>
			{/* <div className='plans_toggle_container_main'>
				<div className='plans_toggle_container'>
					<div className={`plans_toggle ${selectedOption === 'Yearly' ? 'selected' : 'plans_toggle_inactive'}`} onClick={() => handleToggle('Yearly')}>
						<div>Yearly</div>
					</div>
					<div className={`plans_toggle ${selectedOption === 'Monthly' ? 'selected' : 'plans_toggle_inactive'}`} onClick={() => handleToggle('Monthly')}>
						Monthly
					</div>
				</div>
			</div> */}

			{/* */}
			<PricingCardsContainer />
		</div>
	)
}
export default Plans
