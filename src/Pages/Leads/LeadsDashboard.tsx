import { useState } from "react";
import { Link } from "react-router-dom";
import { FaExchangeAlt } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import LeadsHeader from "../../components/LeadsHeader";
import LinePerformanceChart from "../../components/LinePerformanceChart";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import LeadsThreeinOneBarChart from "../../components/Charts/LeadsThreeinOneBarChart";
import { GoDotFill } from "react-icons/go";
import DoughnutChat from "../../components/DoughnutChat";
import ThreeinOneBarChart from "../../components/ThreeinOneBarChart";


const LeadsDashboard = () => {
	const [data, setData] = useState<any>([]);
	const [result, setResult] = useState("");



	// @ts-ignore
	// const loginSuccess = JSON.parse(localStorage.getItem("loginToast"));

	// useEffect(() => {
	// 	if (loginSuccess) {
	// 		// toast.success("Login Successfully!");
	// 		setTimeout(() => {
	// 			localStorage.setItem("loginToast", JSON.stringify(false));
	// 		}, 1000);
	// 	}
	// }, [dispatch, loginSuccess]);
	// const [entriesPerPage, setEntriesPerPage] = useState<any>(5);

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
									{
										data?.filter((item: any) => item?.ticketType === "INCIDENT")
											?.length
									}
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
									{
										data?.filter((item: any) => item?.ticketType === "SERVICE")
											?.length
									}
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
									{
										data?.filter((item: any) => item?.ticketType === "CHANGE")
											?.length
									}
								</h4>
							</div>
							<h5>Change Request</h5>
						</Link>
					</div>
				</div>
			</div>

			<main  >
				{/* <div className="container-items">
					<div>
						<h5 className="page-title">Requests</h5>
					</div>
					<div>
						<div className="dashboard-search">
							<input
								type="text"
								value={result}
								onChange={(e) => setResult(e.target.value)}
							/>
							<span>
								<HiOutlineSearch size={20} color="#9b9b9b" />
							</span>
						</div>
					</div>
					<div>
						<div className="entries-perpage">
							{data?.length > 1 && (
								<>
									Show
									<select
										value={entriesPerPage}
										onChange={(e) => setEntriesPerPage(e.target.value)}>
										<option value="5">5</option>
										<option value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
										<option value="100">100</option>
									</select>
									entries
								</>
							)}
						</div>
					</div>
				</div> */}

				{/* <Table
					ticketType="HOME"
					setData={setData}
					result={result}
					entriesPerPage={entriesPerPage}
				/> */}
				{/* My Teams Performance */}
				{/* <div className='dashboard-bottom-item-container2'>
					<div className='dashboard-first-card2  '>
						<div>
							<h5 className='dashboard-first-card-h'>Tickets</h5>
						</div>
						<div className='dashboard-first-card-second-icon'>
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
							</div>	<PiDotsSixVerticalBold size={20} />
						</div>
					</div>
					<div  >

						<LeadsThreeinOneBarChart />
					</div>
				</div> */}
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
						<ThreeinOneBarChart />
					</div>
				</div>
			</main>
		</div>
	);
};

export default LeadsDashboard;
