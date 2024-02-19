import React, { useState } from 'react'
import SideNav from '../../../components/SideNav/SideNav'
import Header from '../../../components/Header'
import BottomNavigation from '../../../components/BottomNavigation';
import SettingsIcon from './SettingsIcon';
import GeneralInformation from './SettingsGeneral/GeneralInformation';
import BillingandTax from './SettingsGeneral/BillingandTax';
import LinkedShops from './SettingsGeneral/LinkedShops';
import Plans from './SettingsGeneral/Plans';
import Security from './SettingsGeneral/Security';

const Settings = () => {
	const [activeIndex, setActiveIndex] = useState<any>(0);



	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<BottomNavigation />
			<main>
				<div className='settings_container_title'>
					<div>
						<h3>Settings</h3>
						<p>Manage your account settings</p>
					</div>

					<div className='settings_container_title_btn'>
						<button className='btn'>Save change</button>
						<button className='btn_outline'>Cancel</button>
					</div>
				</div>

				<div className='settings_container_main'>
					{/* Settings Icon */}
					<SettingsIcon activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

					{/* General Information */}
					{activeIndex === 0 && <GeneralInformation />}
					{activeIndex === 1 && <Security />}
					{activeIndex === 2 && <BillingandTax />}
					{activeIndex === 3 && <Plans />}
					{activeIndex === 4 && <LinkedShops />}


				</div>
			</main>

		</div>
	)
}

export default Settings