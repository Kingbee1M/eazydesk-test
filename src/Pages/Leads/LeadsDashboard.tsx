import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExchangeAlt } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import LeadsHeader from "../../components/LeadsHeader";
import { GoDotFill } from "react-icons/go";
import DoughnutChat from "../../components/DoughnutChat";
import ThreeinOneBarChart from "../../components/ThreeinOneBarChart";
import { getTicket } from "../../features/Ticket/ticketSlice";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import LeadsThreeinOneBarChart from "../../components/Charts/LeadsThreeinOneBarChart";
import { getMonth } from "../../components/Options";


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
				<div className="service-cards container">
					<div className="service-card">
						<Link to="/incident-request">
							<div className="card-top">
								<div className="card-icon un">
									<RiAlarmWarningFill size={25} />
								</div>
								<h4>
									{incident?.length}
								</h4>
							</div>
							<h5>Incident Request</h5>
						</Link>
					</div>

					<div className="service-card">
						<Link to="/service-request">
							<div className="card-top">
								<div className="card-icon duo">
									<AiTwotoneSetting size={25} />
								</div>
								<h4>
									{service?.length}
								</h4>
							</div>
							<h5>Service Request</h5>
						</Link>
					</div>

					<div className="service-card">
						<Link to="/change-request">
							<div className="card-top">
								<div className="card-icon trio">
									<FaExchangeAlt size={25} />
								</div>
								<h4>
									{change?.length}
								</h4>
							</div>
							<h5>Change Request</h5>
						</Link>
					</div>
				</div>
			</div>
			<main  >
				<div className='dash_statistics_container'>
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
									<GoDotFill color='#883DCF' />
									<small>New</small>
								</div>
								<div className='sta_color_container'>
									<GoDotFill color='#F2994A' />
									<small>Inprogress</small>
								</div>
								<div className='sta_color_container'>
									<GoDotFill color='#22CAAD' />
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
	);
};

export default LeadsDashboard;
