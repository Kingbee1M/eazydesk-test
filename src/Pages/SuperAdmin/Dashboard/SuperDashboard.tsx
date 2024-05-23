import Header from '../../../components/Header'
import BottomNavigation from '../../../components/BottomNavigation';
import dIcon1 from "../../../assets/DashboardIcons/Dicon1.svg"
import dIcon2 from "../../../assets/DashboardIcons/Dicon2.svg"
import dIcon3 from "../../../assets/DashboardIcons/Dicon3.svg"
import dIcon4 from "../../../assets/DashboardIcons/Dicon4.svg"
import { GoDotFill } from "react-icons/go";
import ThreeinOneBarChart from '../../../components/ThreeinOneBarChart';
import DoughnutChat from '../../../components/DoughnutChat';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import LinePerformanceChart from '../../../components/Charts/LinePerformanceChart';
import { SetStateAction, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { superAdminDashboard } from '../../../features/Ticket/ticketSlice';
import SuperSideNav from '../../../components/SideNav/SuperSideNav';
import SuperHeader from '../../../components/Headers/SuperHeader';


const SuperDashboard = () => {
	const dispatch = useAppDispatch()
	const [activeIndex, setActiveIndex] = useState<any>('OUTCESS SOLUTION'); // Initially set the first item as active

	const { superAdminDashboarddata } = useAppSelector((state: any) => state.ticket);

	const type = !superAdminDashboarddata ? [] :
		superAdminDashboarddata?.filter((company: any) => {
			return company?.companyInfo?.company_name === activeIndex?.toUpperCase()
		}) || [];

	const types = !superAdminDashboarddata
		? []
		: superAdminDashboarddata
			.filter((company: any) => company?.companyInfo?.company_name === activeIndex?.toUpperCase())
			.map((company: any) => company?.companyInfo?.tickets) || [];
	const flattenedTypes = types?.flat();


	useEffect(() => {
		dispatch(superAdminDashboard())
	}, [dispatch])


	const ticketTotal = type.length > 0 ? type[0].companyInfo.ticketsInfo.totalTickets : 0;
	const approved = type.length > 0 ? type[0].companyInfo.ticketsInfo.totals.status.approved : 0; // corrected spelling of "dissapproved"
	const closed = type.length > 0 ? type[0].companyInfo.ticketsInfo.totals.status.closed : 0;
	const completed = type.length > 0 ? type[0].companyInfo.ticketsInfo.totals.status.completed : 0;
	const dissapproved = type.length > 0 ? type[0].companyInfo.ticketsInfo.totals.status.dissapproved : 0;
	const inprogress = type.length > 0 ? type[0].companyInfo.ticketsInfo.totals.status.inprogress : 0;
	// const invalid = type.length > 0 ? type[0].companyInfo.ticketsInfo.totals.status.invalid : 0;
	const pending = type.length > 0 ? type[0].companyInfo.ticketsInfo.totals.status.pending : 0;
	const reopen = type.length > 0 ? type[0].companyInfo.ticketsInfo.totals.status.reopen : 0;

	const incident = !flattenedTypes ? [] : flattenedTypes?.filter((ticket: any) => ticket?.ticketType?.includes("INCIDENT"));
	const service = !flattenedTypes ? [] : flattenedTypes?.filter((ticket: any) => ticket?.ticketType?.includes("SERVICE"));
	const change = !flattenedTypes ? [] : flattenedTypes?.filter((ticket: any) => ticket?.ticketType?.includes("CHANGE"));



	const TeamsPerformanceUL = () => {
		const handleClick = (index: SetStateAction<string>) => {
			setActiveIndex(index);
		};

		const statusList = superAdminDashboarddata?.map((company: { companyInfo: { company_name: any; }; }) => company?.companyInfo?.company_name);
		return (
			<ul className='TeamsPerformanceUL'>
				{statusList?.map((status: string, index: any) => (
					<li key={index} onClick={() => handleClick(status)} className={status === activeIndex ? 'TeamsPerformanceUL_active' : ''}>
						{status}
					</li>
				))}
			</ul>
		);
	};


	return (
		<div id="page-wrapper">
			<SuperSideNav />
			<SuperHeader />
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
								<div className='total_card_ArrowUpSFill'>	<p>Dissapproved</p></div>
								<h3>{!dissapproved ? 0 : dissapproved}</h3>
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
							{/* <p>Summary</p> */}
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
						<ThreeinOneBarChart
							threeinone={"threeinone"}
							incident={incident}
							service={service}
							change={change}
						/>
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
							<TeamsPerformanceUL />
						</div>
						<LinePerformanceChart
							types={flattenedTypes}
						/>
					</div>
				</div>
			</main>
		</div>
	)
}

export default SuperDashboard












