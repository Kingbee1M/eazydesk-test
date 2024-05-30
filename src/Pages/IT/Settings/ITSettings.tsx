import { useState } from 'react'
import SettingsIcon from './SettingsIcon';
import Plans from './SettingsGeneral/Plans';
import ITSideNav from '../../../components/SideNav/ITSideNav';
import ITHeader from '../../../components/Headers/ITHeader';
import ITBottomNavigation from '../../../components/BottomNavigation/ITBottomNavigation';
import GeneralInformation from '../../../components/GeneralInformation';

const Settings = () => {
	const [activeIndex, setActiveIndex] = useState<any>(0);



	return (
		<div id="page-wrapper">
			<ITSideNav />
			<ITHeader />
			<ITBottomNavigation />
			<main>
				<div className='settings_container_title'>
					<div>
						<h3>Settings</h3>
						<p>Manage your account settings</p>
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