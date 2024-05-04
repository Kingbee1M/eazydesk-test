import Header from '../../../components/Header'
import BottomNavigation from '../../../components/BottomNavigation';
import { RiArrowUpSFill } from "react-icons/ri";
import dIcon1 from "../../../assets/DashboardIcons/Dicon1.svg"
import dIcon2 from "../../../assets/DashboardIcons/Dicon2.svg"
import dIcon3 from "../../../assets/DashboardIcons/Dicon3.svg"
import dIcon4 from "../../../assets/DashboardIcons/Dicon4.svg"
import ITSideNav from '../../../components/SideNav/ITSideNav';
import { AiOutlineEye } from 'react-icons/ai';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { VscCloudDownload } from 'react-icons/vsc';
import AssignTask from '../../../components/Modals/AssignTask';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { dashBoardInfo, getItTicket } from '../../../features/Ticket/ticketSlice'
import { useEffect, useState } from 'react';
import TicketStatusCell from '../../Admin/Ticket/TicketStatusCell';
import { NoRecordFound, TableFetch } from '../../../components/Options';
import ITHeader from '../../../components/Headers/ITHeader';


const ITDashboard = () => {
	const dispatch = useAppDispatch();
	const { dashBoardInfodata } = useAppSelector((state: any) => state.ticket);
	const { itdata, itisLoading } = useAppSelector((state: any) => state.ticket)
	const { itassignisSuccess } = useAppSelector((state: any) => state.ticket);

	useEffect(() => {
		const datas = ""
		// @ts-ignore
		dispatch(getItTicket(datas))
		dispatch(dashBoardInfo())
		if (itassignisSuccess) {
			dispatch(getItTicket())
			dispatch(dashBoardInfo())
		}
	}, [dispatch, itassignisSuccess])




	const [result] = useState(itdata?.tickets)


	// const result = itdata?.filter((data: any) =>
	// 	data?.assignedTo?._id?.toString()?.includes(ID)
	// );

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
			<ITSideNav />
			<ITHeader />
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
					{/* <div className='dash_statistics_sub1'>
						<div>
							<h3>Ticket</h3>
							<p>Summary</p>
						</div>
						<div>
							<DoughnutChat />
						</div>
					</div> */}
					<div className='dash_statistics_sub_it'>
						<div className='dash_statistics_sub2_text'>
							<div>
								<h3>Pending Tickets</h3>

							</div>
						</div>
						<div className='statistics_sub2_table_container'>
							<table id="table" className="table">
								<thead>
									<tr>
										<th>Reference</th>
										<th>Ticket Type</th>
										<th>Severity</th>
										<th>Affected Users</th>
										<th>Time Stamp</th>
										<th>Assign To</th>
										<th>Ticket Status</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{itisLoading ? (
										<TableFetch colSpan={8} />
									) : result?.length === undefined ? (
										<NoRecordFound
											colSpan={8}
											children={"No record found!"}
										/>
									) : (
										result?.map((item: any) => (
											<tr key={item?.id}>

												<td data-title="Reference">
													{item.ticketType === "INCIDENT"
														? "INC"
														: item.ticketType === "SERVICE"
															? "SRV"
															: "CHG"}
												</td>
												<td data-title="ticket type">{item?.ticketType}</td>
												<td data-title="severity">
													{item?.severity === "High" ? (
														<span className="severity-high">{item?.severity}</span>
													) : item?.severity === "Medium" ? (
														<span className="severity-medium">
															{item?.severity}
														</span>
													) : (
														<span className="severity-low">{item?.severity}</span>
													)}
												</td>
												<td data-title="affected users">{item?.affectedUsers}</td>
												<td data-title="Assign To">
													{item?.finalStatus === "Closed" ? (
														<button className="ticket-Closed">Closed</button>
													) : (
														<AssignTask id={item?.id} />
													)}
												</td>
												<td data-title="affected users">{item?.affectedUsers}</td>
												<td data-title="progresss">
													<TicketStatusCell user={item} customId={item?.id} />
												</td>
												<td data-title="View">
													{item?.ticketType === "INCIDENT" ? (
														<NavLink
															to={`/itincidentrequest`}
															className="admin-btn-View">
															<AiOutlineEye size={20} />
														</NavLink>
													) : item?.ticketType === "SERVICE" ? (
														<NavLink
															to={`/itservicerequest`}
															className="admin-btn-View">
															<AiOutlineEye size={20} />
														</NavLink>
													) : (
														<NavLink
															to={`/itchangerequest`}
															className="admin-btn-View">
															<AiOutlineEye size={20} />
														</NavLink>
													)}
												</td>
											</tr>
										))
									)}
								</tbody>
							</table>
						</div>
						{/* <ThreeinOneBarChart /> */}
					</div>
				</div>

			</main>
		</div>
	)
}

export default ITDashboard












