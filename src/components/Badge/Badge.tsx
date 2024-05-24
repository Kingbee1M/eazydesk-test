import { FaBell } from 'react-icons/fa';


const Badge = ({ setIsDrawerOpen, isDrawerOpen }: any) => {

	return (
		<div className="badge_bell" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
			<FaBell size={25} />
			<span className="badge-count"></span>
		</div>
	);
}

export default Badge;
