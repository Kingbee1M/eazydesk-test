import React from 'react';
import { FaBell } from 'react-icons/fa';


const Badge = () => {

	return (
		<div className="badge_bell">
			<FaBell size={25} />
			<span className="badge-count">5</span>
		</div>
	);
}

export default Badge;
{/* <span className='FaPlus-bell' onMouseEnter={() => setNotification(true)} onMouseLeave={() => setNotification(false)}>
            <BsBell size={18} />
          </span> */}