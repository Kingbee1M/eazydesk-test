import { FaBell } from 'react-icons/fa';


const Badge = ({ setIsDrawerOpen, isDrawerOpen, itdata }: any) => {

	return (
		<div className="badge_bell" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
			<FaBell size={25} />
			<span className="badge-count">{!itdata?.tickets ? 0 : itdata?.tickets?.length}</span>
		</div>
	);
}

export default Badge;
