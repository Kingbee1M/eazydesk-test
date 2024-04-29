import Header from '../../../components/Header'
import SideNav from '../../../components/SideNav/SideNav'
import BottomNavigation from '../../../components/BottomNavigation';
import { RiArrowUpSFill } from "react-icons/ri";
import dIcon1 from "../../../assets/DashboardIcons/Dicon1.svg"
import dIcon2 from "../../../assets/DashboardIcons/Dicon2.svg"
import dIcon3 from "../../../assets/DashboardIcons/Dicon3.svg"
import dIcon4 from "../../../assets/DashboardIcons/Dicon4.svg"
import { GoDotFill } from "react-icons/go";
import ThreeinOneBarChart from '../../../components/ThreeinOneBarChart';
import DoughnutChat from '../../../components/DoughnutChat';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import LinePerformanceChart from '../../../components/LinePerformanceChart';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { dashBoardInfo } from '../../../features/Ticket/ticketSlice';


const AdminDashboard = () => {
	const dispatch = useAppDispatch()
	const { dashBoardInfodata } = useAppSelector((state: any) => state.ticket);

	useEffect(() => {
		dispatch(dashBoardInfo())
	}, [dispatch])

 
	const ticketTotal = dashBoardInfodata?.pagination?.totalTickets
	const changeRequest = dashBoardInfodata?.totals?.ticketType?.changeRequest
	const incidentRequest = dashBoardInfodata?.totals?.ticketType?.incidentRequest
	const serviceRequest = dashBoardInfodata?.totals?.ticketType?.serviceRequest
	const approved = dashBoardInfodata?.ticketType?.approved
	const closed = dashBoardInfodata?.totals?.status?.closed
	const completed = dashBoardInfodata?.totals?.status?.completed
	const dissaproved = dashBoardInfodata?.totals?.status?.dissaproved
	const inprogress = dashBoardInfodata?.totals?.status?.inprogress
	const invalid = dashBoardInfodata?.totals?.status?.invalid
	const open = dashBoardInfodata?.totals?.status?.open
	const pending = dashBoardInfodata?.totals?.status?.pending
	const reopen = dashBoardInfodata?.totals?.status?.reopen


	return (
		<div id="page-wrapper">
			<SideNav
			/>
			<Header />
			<BottomNavigation />
			<main>
				<div className='dashboard_container_grid'>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Total Total</h6>
							<div className='total_card_flex_icon1'>
								<img src={dIcon1} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>{!ticketTotal ? 0 : ticketTotal}</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>10%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>+$150 today</h3>
							</div>
						</div>
					</div>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Inprogress</h6>
							<div className='total_card_flex_icon2'>
								<img src={dIcon2} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>{!inprogress ? 0 : inprogress}</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>50%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>View orders</h3>
							</div>
						</div>
					</div>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Completed Tickets</h6>
							<div className='total_card_flex_icon3'>
								<img src={dIcon3} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>{!completed ? 0 : completed}</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>30%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>In last week</h3>
							</div>
						</div>
					</div>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Unassigned Tickets</h6>
							<div className='total_card_flex_icon4'>
								<img src={dIcon4} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>{!pending ? 0 : pending}</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>70%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>2477 tickets automated</h3>
							</div>
						</div>
					</div>
				</div>

				<div className='dash_statistics_container'>
					<div className='dash_statistics_sub1'>
						<div>
							<h3>Ticket</h3>
							{/* <p>Summary</p> */}
						</div>
						<div>
							<DoughnutChat />
						</div>
					</div>
					<div className='dash_statistics_sub2'>
						<div className='dash_statistics_sub2_text'>
							<div>
								<h3>Statistics</h3>
								{/* <p>Revenue and Sales</p> */}
							</div>
							<div className='sta_color_container_main'>
								<div className='sta_color_container'>
									<GoDotFill color='#E5ECFB' />
									<small>New</small>
								</div>
								<div className='sta_color_container'>
									<GoDotFill color='#0240bc90' />
									<small>Inprogress</small>
								</div>
								<div className='sta_color_container'>
									<GoDotFill color='#0240BC' />
									<small>Completed</small>
								</div>
							</div>
						</div>
						<ThreeinOneBarChart threeinone={"threeinone"} />
					</div>
				</div>
				{/* My Teams Performance */}
				<div className='dashboard-bottom-item-container'>
					<div className='dashboard-first-card2 mb-2'>
						<div>
							<h5 className='dashboard-first-card-h'>Vendor Tickets</h5>
							{/* <p className='dashboard-first-card-p'>Teams with leads graph analysis</p> */}
						</div>
						<div className='dashboard-first-card-second-icon'>	<PiDotsSixVerticalBold size={20} /></div>
					</div>
					<div className='TeamsPerformancechart'>
						<div className='TeamsPerformancechartsub1'>
							<ul className='TeamsPerformanceUL'>
								<li className='TeamsPerformanceUL_active'>Vodacom</li>
								<li>Branch</li>
								<li>UBA</li>
								<li>Fair Money</li>
							</ul>
						</div>
						<LinePerformanceChart />
					</div>
				</div>
			</main>
		</div>
	)
}

export default AdminDashboard












