import SettingsIcon from './SettingsIcon';
import Plans from './SettingsGeneral/Plans';
import ITSideNav from '../../../components/SideNav/ITSideNav';
import ITHeader from '../../../components/Headers/ITHeader';
import ITBottomNavigation from '../../../components/BottomNavigation/ITBottomNavigation';
import GeneralInformation from '../../../components/GeneralInformation';

const Settings = () => {



	return (
			<main>
				<div className='settings_container_title'>
					<div>
						<h3>Settings</h3>
						<p>Manage your account settings</p>
					</div>
				</div>

				<div className='settings_container_main'>
					<GeneralInformation />
				</div>
			</main>


	)
}

export default Settings