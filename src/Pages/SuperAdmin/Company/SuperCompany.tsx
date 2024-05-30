import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header';
import { SVGLoader } from '../../../components/SVGLoader';
import { BsThreeDots } from 'react-icons/bs'
import { TiUserOutline } from "react-icons/ti";
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { getCompany } from '../../../features/Company/companySlice';
import DeleteCompanyModal from './DeleteCompanyModal';
import EditCompany from './EditCompany';
import SuperSideNav from '../../../components/SideNav/SuperSideNav';
import BottomNavigation from '../../../components/BottomNavigation';
import SuperHeader from '../../../components/Headers/SuperHeader';



const SuperCompany = () => {
	const dispatch = useAppDispatch();
	const { data, isLoading, updateisSuccess, deleteisSuccess } = useAppSelector((state: any) => state.company)


	const navigate = useNavigate();
	const [selectedTeam, setSelectedTeam] = useState(null);
	const handleTeamOptionsClick = (teamId: any) => {
		setSelectedTeam(teamId);
	};

	const closeTeamOptions = () => {
		setSelectedTeam(null);
	};


	useEffect(() => {
		if (deleteisSuccess || updateisSuccess) {
			dispatch(getCompany());
		}
		// If success is true, fetch data again
		dispatch(getCompany());
	}, [deleteisSuccess, dispatch, updateisSuccess]);




	return (
		<div id="page-wrapper">
			<SuperSideNav />
			<BottomNavigation />
			<SuperHeader />
			<main >
				<div className='dashboard-first-card-boards mb-2 mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>My Company</h5>
						<p className='dashboard-first-card-p'>{data?.companies?.length} Total Company</p>
					</div>
				</div>
				<div >
					{isLoading ? <div className='spinner_container'>
						<SVGLoader width={"40px"} height={"40px"} color={"#0240BC"} />
					</div> : data?.companies?.length === 0 || data?.companies === undefined || data?.companies === null ? (
						<div className='loading-center-container'>
							<div className='Home_Empty_State-container'>
								<HiOutlineBuildingOffice2 />
								<div>
									<h5 className='dashboard-first-card-h'>No company users avialable</h5>
								</div>
							</div>
						</div>
					) :
						<div className='team-card-main-container'>
							{data?.companies?.map((item: any) => (
								<div key={item?.id} className='team-card-container'>
									<div className='team-card-container-sup'>
										<div className='team-card-container-sup-image' onClick={() => navigate(`/supercompanymembers/${item?.id}`)}>
											<HiOutlineBuildingOffice2 size={30} />
										</div>
										<div>
											<h5>{item?.name}</h5>
											<div className='team-card-container-sup-ptext'>
												<TiUserOutline size={20} /> <p>{`${item?.User?.length} User`}</p>
											</div>
										</div>
									</div>
									<div className='team-card-options' onMouseLeave={closeTeamOptions}>
										<BsThreeDots size={18} onClick={() => handleTeamOptionsClick(item?.id)} onMouseEnter={handleTeamOptionsClick} />
										{selectedTeam === item?.id && (
											<div className='team-card-dropdown'>
												<EditCompany id={item?.id} name={item?.name} />
												<DeleteCompanyModal id={item?.id} />
											</div>
										)}
									</div>
								</div>
							))}
						</div>}
				</div>
			</main>
		</div>
	)
}

export default SuperCompany




