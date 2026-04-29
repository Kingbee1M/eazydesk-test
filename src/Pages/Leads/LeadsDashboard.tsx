import { useEffect, useState } from "react";
import LeadsHeader from "../../components/LeadsHeader";
import { GoDotFill } from "react-icons/go";
import DoughnutChat from "../../components/DoughnutChat";
import { getTicket } from "../../features/Ticket/ticketSlice";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import LeadsThreeinOneBarChart from "../../components/Charts/LeadsThreeinOneBarChart";

import ServiceCards from "./ServiceCards";
import { ToastContainer } from "react-toastify";
import MainDisplay from "src/components/NewUI/mainDIsplay";


import TopBar from "src/components/NewUI/topbar";

export interface TicketProps {
    ticketId: string;
    severity: 'LOW' | 'CRITICAL' | 'MEDIUM';
    ticketType: 'Incident' | 'Service' | 'Change';
    subject: string;
    status: 'Pending' | 'In Progress' | 'Resolved'
}

export interface TicketsData {
	month: string;
	service: number;
	incident: number;
	change: number;
}

const LeadsDashboard = () => {
	const [limit, setLimit] = useState<any>(10);
	const dispatch = useAppDispatch();
	const { data: ticket, isSuccess } = useAppSelector((state: any) => state.ticket)

	useEffect(() => {
		const datas = { limit: limit };
		// @ts-ignore 
		dispatch(getTicket(datas))
		if (isSuccess) {
			const datas = { limit: limit };
			// @ts-ignore 
			dispatch(getTicket(datas))
		}
	}, [dispatch, isSuccess, limit])


	// Count the number of tickets with status "COMPLETED" and "INPROGRESS"
	const completed = ticket?.tickets?.filter((ticket: { status: string; }) => ticket?.status === 'COMPLETED').length;
	const inProgress = ticket?.tickets?.filter((ticket: { status: string; }) => ticket?.status === 'INPROGRESS').length;
	const pending = ticket?.tickets?.filter((ticket: { status: string; }) => ticket?.status === 'PENDING')?.length;


	const incident = !ticket ? [] : ticket?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("INCIDENT"));
	const service = !ticket ? [] : ticket?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("SERVICE"));
	const change = !ticket ? [] : ticket?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("CHANGE"));



			// NEW CODE
	const myTickets: TicketProps[]= [
		{ ticketId: '1001', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
		{ ticketId: '1002', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'In Progress' },
		{ ticketId: '1003', severity: 'MEDIUM', ticketType: 'Incident', subject: 'Server Down', status: 'Resolved' },
		{ ticketId: '1004', severity: 'MEDIUM', ticketType: 'Service', subject: 'Password Reset', status: 'Resolved' },
		{ ticketId: '1005', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Resolved' },
		{ ticketId: '1006', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'Pending' },
		{ ticketId: '1007', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
		{ ticketId: '1008', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'Pending' },
		{ ticketId: '1009', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Resolved' },
		{ ticketId: '10010', severity: 'MEDIUM', ticketType: 'Service', subject: 'Password Reset', status: 'Pending' },
		{ ticketId: '10012', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
		{ ticketId: '10012', severity: 'MEDIUM', ticketType: 'Service', subject: 'Password Reset', status: 'Pending' },
		{ ticketId: '10013', severity: 'MEDIUM', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
		{ ticketId: '10014', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'In Progress' },
		{ ticketId: '10015', severity: 'MEDIUM', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
		{ ticketId: '10016', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'Resolved' },
		{ ticketId: '10017', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Resolved' },
		{ ticketId: '10018', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'Resolved' },
		{ ticketId: '10019', severity: 'MEDIUM', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
		{ ticketId: '10020', severity: 'MEDIUM', ticketType: 'Service', subject: 'Password Reset', status: 'Pending' },
	];

	const ticketsData: TicketsData[] = [
	  { month: "Jan", service: 40, incident: 24, change: 10 },
	  { month: "Feb", service: 30, incident: 13, change: 22 },
	  { month: "Mar", service: 20, incident: 58, change: 15 },
	  { month: "Apr", service: 27, incident: 39, change: 20 },
	  { month: "May", service: 18, incident: 48, change: 25 },
	  { month: "Jun", service: 80, incident: 33, change: 45 },
	  { month: "Jul", service: 55, incident: 48, change: 19 },
	  { month: "Aug", service: 72, incident: 18, change: 25 },
	  { month: "Sep", service: 13, incident: 73, change: 44 },
	  { month: "Oct", service: 6, incident: 48, change: 68 },
	  { month: "Nov", service: 44, incident: 78, change: 68 },
	  { month: "Dec", service: 45, incident: 88, change: 68 },
	];
	
	return (
		<div id="dashboard">
			<div className="hero-section1">
				<LeadsHeader />
				{/* <ServiceCards incident={incident} service={service} change={change} /> */}
				<ToastContainer />
			</div>

			
			<main className='main' >
				<TopBar/>
				<MainDisplay totalTicket={124} 
				pendingAssign={12} 
				resolvedToday={45}
				Service={23}
				Change={7}
				Incident={33}
				tickets={myTickets}
				ticketChart={ticketsData}
				/>

				{/* <div className='dash_statistics_container1'>
					<div className='dash_statistics_sub1'>
						<div>
							<h3>Ticket</h3>
						</div>
						<div>
							<DoughnutChat
								ticketTotal={ticket?.tickets?.length}
								inprogress={inProgress}
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
				</div> */}
			</main>
		</div>
	);
};

export default LeadsDashboard;
