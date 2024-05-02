import { BiInfoCircle } from 'react-icons/bi';
import { MdOutlineSecurity } from 'react-icons/md';
import { HiOutlineReceiptTax } from 'react-icons/hi';
import { BsFileText } from 'react-icons/bs';
import { SetStateAction } from 'react';

const SettingsIcon = ({ setActiveIndex, activeIndex }: any) => {





	const handleItemClick = (index: number | SetStateAction<null>) => {
		setActiveIndex(index);
	};

	const settingsItems = [
		{ icon: <BiInfoCircle size={20} />, text: "Personal Information" },
		{ icon: <MdOutlineSecurity size={20} />, text: "Security" },
		{ icon: <HiOutlineReceiptTax size={20} />, text: "Billing & Tax" },
		{ icon: <BsFileText size={20} />, text: "Plans" },
		// { icon: <MdOutlineShoppingBag size={20} />, text: "Linked Shops" }
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
