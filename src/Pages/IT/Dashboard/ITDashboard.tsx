import dIcon1 from "../../../assets/DashboardIcons/Dicon1.svg"
import dIcon2 from "../../../assets/DashboardIcons/Dicon2.svg"
import dIcon3 from "../../../assets/DashboardIcons/Dicon3.svg"
import dIcon4 from "../../../assets/DashboardIcons/Dicon4.svg"
import ITSideNav from '../../../components/SideNav/ITSideNav';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { dashBoardInfo } from '../../../features/Ticket/ticketSlice'
import { useEffect } from 'react';
import ITHeader from '../../../components/Headers/ITHeader';
import LeadsThreeinOneBarChart from '../../../components/Charts/LeadsThreeinOneBarChart';
import { GoDotFill } from 'react-icons/go';
import DoughnutChat from '../../../components/DoughnutChat';
import ITBottomNavigation from '../../../components/BottomNavigation/ITBottomNavigation';


const ITDashboard = () => {
	const dispatch = useAppDispatch();
	const { dashBoardInfodata, itassignisSuccess } = useAppSelector((state: any) => state.ticket);




	useEffect(() => {
		dispatch(dashBoardInfo())
		if (dashBoardInfodata) {
			localStorage.setItem('dashBoardInfo', JSON.stringify(dashBoardInfodata));
		}
		if (itassignisSuccess) {
			dispatch(dashBoardInfo())
			localStorage.setItem('dashBoardInfo', JSON.stringify(dashBoardInfodata));
		}
	}, [dispatch, itassignisSuccess])




	const ticketTotal = dashBoardInfodata?.totalTickets
	const approved = dashBoardInfodata?.ticketType?.approved
	const closed = dashBoardInfodata?.totals?.status?.closed
	const completed = dashBoardInfodata?.totals?.status?.completed
	const disapproved = dashBoardInfodata?.totals?.status?.dissaproved
	const inprogress = dashBoardInfodata?.totals?.status?.inprogress
	const pending = dashBoardInfodata?.totals?.status?.pending
	const reopen = dashBoardInfodata?.totals?.status?.reopen


	const incident = !dashBoardInfodata ? [] : dashBoardInfodata?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("INCIDENT"));
	const service = !dashBoardInfodata ? [] : dashBoardInfodata?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("SERVICE"));
	const change = !dashBoardInfodata ? [] : dashBoardInfodata?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("CHANGE"));




	return (
		<div id="page-wrapper">
			<ITSideNav />
			<ITHeader />
			<ITBottomNavigation />
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
								<div className='total_card_ArrowUpSFill'>	<p>Approved</p> </div>
								<h3>{!approved ? 0 : approved}</h3>
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
								<div className='total_card_ArrowUpSFill'>	<p>Disapproved</p></div>
								<h3>{!disapproved ? 0 : disapproved}</h3>
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
								<div className='total_card_ArrowUpSFill'>	<p>Reopen</p>  </div>
								<h3>{!reopen ? 0 : reopen}</h3>
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
								<div className='total_card_ArrowUpSFill'>	<p>Closed</p>  </div>
								<h3>{!closed ? 0 : closed}</h3>
							</div>
						</div>
					</div>
				</div>


				<div className='dash_statistics_container'>
					<div className='dash_statistics_sub1'>
						<div>
							<h3>Ticket</h3>
						</div>
						<div>
							<DoughnutChat
								ticketTotal={ticketTotal}
								inprogress={inprogress}
								completed={completed}
								pending={pending}
							/>
						</div>
					</div>
					<div className='dash_statistics_sub2'>
						<div className='dash_statistics_sub2_text'>
							<div>
								<h3>Ticket per month</h3>
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
						<LeadsThreeinOneBarChart
							threeinone={"threeinone"}
							incident={incident}
							service={service}
							change={change}
							assignto={false}
						/>
					</div>
				</div>

			</main>
		</div>
	)
}

export default ITDashboard












