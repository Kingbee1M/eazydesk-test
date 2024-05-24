import { BiInfoCircle } from 'react-icons/bi';
import { BsFileText } from 'react-icons/bs';
import { SetStateAction } from 'react';

const SettingsIcon = ({ setActiveIndex, activeIndex }: any) => {





	const handleItemClick = (index: number | SetStateAction<null>) => {
		setActiveIndex(index);
	};

	const settingsItems = [
		{ icon: <BiInfoCircle size={20} />, text: "Personal Information" },
		{ icon: <BsFileText size={20} />, text: "Plans" },
	];

	return (
		<div className='settings_main_for'>
			{settingsItems.map((item, index) => (
				<div key={index} className={`settings_main_for_text ${index === activeIndex ? 'settings_main_for_text_active' : ''}`} onClick={() => handleItemClick(index)}>
					{item.icon}
					<p>{item.text}</p>
				</div>
			))}
		</div>
	)
}

export default SettingsIcon
