import { useState, useEffect } from "react";
import moment from "moment";
import { EntriesPerPage, NoRecordFound, TableFetch } from "../../../components/TableOptions";
import Pagination from "../../../components/Pagination";
import { data } from "../../../components/StateData";
import SideNav from "../../../components/SideNav/SideNav";
import Header from "../../../components/Header";
import SearchConponent from "../../../components/SearchConponent";
import ImageLightbox from "../../../components/ImageLightbox";
import ViewTicketDetailsModal from "../../../components/Modals/ViewTicketDetailsModal";

const TicketReport = ({ switchs }: any) => {
	const [startDates, setStartDates] = useState([]);
	const [endDates, setEndDates] = useState([]);
	const [show, setShow] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [datas, setDatas] = useState([]);







	useEffect(() => {
		const result: any = data?.filter(
			(data: any) =>
				data?.ticketId?.toLowerCase().includes(searchItem) ||
				data?.location?.toLowerCase().includes(searchItem) ||
				data?.ticketType?.toLowerCase().includes(searchItem) ||
				data?.severity?.toLowerCase().includes(searchItem) ||
				data?.createdBy?.email?.toLowerCase().includes(searchItem) ||
				data?.createdBy?.firstname?.toLowerCase().includes(searchItem)
		);
		setDatas(result);
	}, [data, searchItem]);

	const [displayData, setDisplayData] = useState([]);

	console.log('displayData', displayData)

	const handleCustomFilters = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		const datas = { startDates, endDates }
		setShow(false)
	}
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "6";
	});

	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<main>
				<div className='dashboard-first-card-boards  mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>Report</h5>
						<p className='dashboard-first-card-p'>102 Total Report are added</p>
					</div>
				</div>
				<SearchConponent
					placeholder={"search ticket report"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={datas}
					entriesPerPage={entriesPerPage}
					setEntriesPerPage={setEntriesPerPage}
					filter={true}
					setStartDates={setStartDates}
					setEndDates={setEndDates}
					setShow={setShow}
					show={show}
					handleCustomFilters={handleCustomFilters}
				/>

				<div id="table-container">
					<div className="table-responsive-vertical ">
						<div className="table-container">
							<table id="table" className={switchs ? "table" : " table-hover table-mc-light-blue"}>
								<thead>
									<tr>
										<th>Reference</th>
										<th>Affected Users</th>
										<th>Location</th>
										<th>Created By</th>
										<th className="red_effect">
											Created At
										</th>
										<th className="green_effect">
											Closed At
										</th>
										<th>Email</th>
										<th>Phone Number</th>
										<th>Issue Description</th>
										<th>Issue Category</th>
										<th>Severity</th>
										<th>Ticket Type</th>
									</tr>
								</thead>
								<tbody>
									{false && data?.length === 0 ? (
										<TableFetch colSpan={20} />
									) : displayData?.length === 0 ? (
										<NoRecordFound
											colSpan={20}
											children={"No Tickets record found!"}
										/>
									) : (
										displayData?.map((user: any, i) => (
											<tr key={i}>
												<td data-title="Reference">
													{user?.ticketType === "INCIDENT"
														? "INC - " + user?.ticketId
														: user?.ticketType === "SERVICE"
															? "SRV - " + user?.ticketId
															: "CHG - " + user?.ticketId}
												</td>
												<td data-title="affected Users">
													{!user?.affectedUsers ? (
														<span className="blue_effect" >
															ALL
														</span>
													) : (
														user?.affectedUsers
													)}
												</td>
												<td data-title="firstName">{user?.location}</td>
												<td data-title="firstName">
													{user?.createdBy?.firstname}
													{user?.createdBy?.lastname}
												</td>
												<td
													data-title="created at"
													className="red_effect">
													{moment(user?.createdAt).format(
														"YYYY-MM-DD HH:mm:ss"
													)}
												</td>
												<td
													data-title="created at"
													className="green_effect">
													{!user?.closedAt ? (
														<span
															className="blue_effect">
															Not Yet Closed
														</span>
													) : (
														moment(user?.closedAt).format("YYYY-MM-DD HH:mm:ss")
													)}
												</td>
												<td data-title="email">{user?.createdBy?.email}</td>
												<td data-title="phone number">
													{user?.createdBy?.phoneNumber}
												</td>
												<td data-title="issue description">
													<ViewTicketDetailsModal text={"View"} data={user} />
												</td>
												<td data-title="issue Category">
													{user?.issueCategory}
												</td>
												<td data-title="severity">
													{user?.severity === "High" ? (
														<button className="severity-high">
															{user?.severity}
														</button>
													) : user?.severity === "Medium" ? (
														<button className="severity-medium">
															{user?.severity}
														</button>
													) : user?.severity === "Critical" ? (
														<button className="severity-Critical">
															{user?.severity}
														</button>
													) : user?.severity === "Low" ? (
														<button className="severity-low">
															{user?.severity}
														</button>
													) : (
														<button className="severity-low">Low</button>
													)}
												</td>
												<td data-title="ticket type">{user?.ticketType}</td>
											</tr>
										))
									)}
								</tbody>
							</table>
						</div>
						<Pagination
							setDisplayData={setDisplayData}
							data={datas}
							entriesPerPage={entriesPerPage}
							Total={"Ticket Report"}
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default TicketReport;




