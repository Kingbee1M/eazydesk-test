import React from 'react';
import { FaBell } from 'react-icons/fa';
import './Badge.css';

const BadgeIcon = () => {

	return (
		<div className="badge">
			<FaBell size={25} />
			<span className="badge-count">5</span>
		</div>
	);
}

export default BadgeIcon;
