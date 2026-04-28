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
    resolvedToday={45}/>

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
