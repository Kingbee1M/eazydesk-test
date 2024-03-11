import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import HomeEmpty from '../../assets/img/Home_Empty_State.png'
import { useNavigate } from 'react-router-dom'
import SideNav from '../../../components/SideNav/SideNav';
import Header from '../../../components/Header';
import { SVGLoader } from '../../../components/SVGLoader';
import { BsPencil, BsThreeDots, BsTrash } from 'react-icons/bs'

import { TiUserOutline } from "react-icons/ti";
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';


const Vendors = () => {
	const navigate = useNavigate();
	const [selectedTeam, setSelectedTeam] = useState(null);
	const handleTeamOptionsClick = (teamId: any) => {
		setSelectedTeam(teamId);
	};

	const closeTeamOptions = () => {
		setSelectedTeam(null);
	};







	const teamsData = [
		{
			id: 1,
			teamName: 'UI/UX Design Lead',
			members: 36,
		},
		{
			id: 2,
			teamName: 'Development Lead',
			members: 48,
		},
		{
			id: 3,
			teamName: 'Marketing Lead',
			members: 25,
		},
		{
			id: 4,
			teamName: 'Quality Assurance Lead',
			members: 30,
		},
		{
			id: 5,
			teamName: 'Product Management Lead',
			members: 22,
		},
		{
			id: 6,
			teamName: 'Customer Support Lead',
			members: 15,
		},
		{
			id: 7,
			teamName: 'Sales Lead',
			members: 40,
		},
		{
			id: 8,
			teamName: 'Research and Development Lead',
			members: 28,
		},
		// Add more teams as needed
	];


	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<main >
				<div className='dashboard-first-card-boards mb-2 mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>My Vendos</h5>
						<p className='dashboard-first-card-p'>32 Total Vendos are added</p>
					</div>
				</div>
				<div >

					<div className='team-card-main-container'>
						{teamsData.map((team) => (
							<div key={team.id} className='team-card-container'>
								<div className='team-card-container-sup'>
									<div className='team-card-container-sup-image' onClick={() => navigate(`/vendorsmembers`)}>
										<HiOutlineBuildingOffice2 size={30} />
									</div>
									<div>
										<h5>{team.teamName}</h5>
										<div className='team-card-container-sup-ptext'>
											<TiUserOutline size={20} /> <p>{`${team.members} Members`}</p>
										</div>
									</div>
								</div>
								<div className='team-card-options' onMouseLeave={closeTeamOptions}>
									<BsThreeDots size={18} onClick={() => handleTeamOptionsClick(team.id)} onMouseEnter={handleTeamOptionsClick} />
									{selectedTeam === team.id && (
										<div className='team-card-dropdown'>
											<div className='team-card-option' onClick={() => setSelectedTeam}>
												<BsPencil size={16} />
												<span>Edit Team</span>
											</div>
											<div className='team-card-option' onClick={() => console.log('Delete team clicked')}>
												<BsTrash size={16} />
												<span>Delete Team</span>
											</div>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

			</main>

		</div>
	)
}

export default Vendors




