import { useState } from 'react'
import SideNav from '../../../components/SideNav/SideNav'
import SettingsIcon from './SettingsIcon';

import Plans from './SettingsGeneral/Plans';
import AdminHeader from '../../../components/Headers/AdminHeader';
import AdminBottomNavigation from '../../../components/BottomNavigation/AdminBottomNavigation';
import GeneralInformation from '../../../components/GeneralInformation';

const Settings = () => {
	const [activeIndex, setActiveIndex] = useState<any>(0);



	return (
		<div id="page-wrapper">
			<SideNav />
			<AdminHeader />
			<AdminBottomNavigation />
			<main>
				<div className='settings_container_title'>
					<div>
						<h3>Settings</h3>
						<p>Manage your account settings</p>
					</div>
					<div className='settings_container_title_btn'>
						<button className='btn'>Save change</button>
					</div>
				</div>

				<div className='settings_container_main'>
					{/* Settings Icon */}
					<SettingsIcon activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
					{/* General Information */}
					{activeIndex === 0 && <GeneralInformation />}
					{activeIndex === 1 && <Plans />}


				</div>
			</main>

		</div>
	)
}

export default Settings