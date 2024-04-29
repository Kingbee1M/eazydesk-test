import { useState } from "react";
import moment from "moment";
import { OverlayTrigger, Image, Tooltip, Button } from "react-bootstrap";
import { baseUrl } from "../../shared/baseUrl";
import ViewTicketDetailsModal from "../Modals/ViewTicketDetailsModal";
import { customId, NoRecordFound, TableFetch } from "../Options";
import { ToastContainer } from "react-toastify";
import TicketStatusCell from "../../Pages/Admin/Ticket/TicketStatusCell";

const LeadTicketTableComponent = ({
	switchs,
	data,
	Requester,
	isLoading,

}: any) => {

	const [sortData, setSortData] = useState<any>([]);




	return (
		<div id="table-container">
			<ToastContainer position="top-right" containerId={"custom1"} />
			<div className="table-responsive-vertical ">
				<div className="table-container">
					<table id="table" className={switchs ? "table" : " table-hover table-mc-light-blue"}>
						<thead>
							<tr>
								<th>Ticket Type</th>
								<th>Severity</th>
								<th>Issue Description</th>
								<th>Affected Users</th>
								<th>Time Stamp</th>
								<th>
									{sortData?.status === "OPEN"
										? ""
										: "Ticket Status"}
								</th>
							</tr>
						</thead>
						<tbody>
							{isLoading ? (
								<TableFetch colSpan={6} />
							) : data?.length === 0 || data?.length === undefined ? (
								<NoRecordFound
									colSpan={6}
									children={"No Tickets record found!"}
								/>
							) : (
								data?.map((user: any) => (
									<tr key={user?._id}>
										<td data-title="ticket type">{user?.ticketType}</td>
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
										<td data-title="description">
											<ViewTicketDetailsModal text={"View"} data={user} />
										</td>
										<td data-title="affected users">
											{user?.affectedUsers === null ? 0 : user?.affectedUsers}
										</td>
										{Requester && <td data-title="Requester">
											<OverlayTrigger
												placement="bottom"
												overlay={
													<Tooltip>
														{user?.createdBy?.firstname}{" "}
														{user?.createdBy?.lastname}
													</Tooltip>
												}>
												{({ ref, ...triggerHandler }) => (
													<Button
														style={{ padding: "6px" }}
														variant="light"
														{...triggerHandler}
														className="d-inline-flex align-items-center btn_outline">
														{!user?.createdBy?.profilePic ? (
															" "
														) : (
															<Image
																key={user?._id}
																crossOrigin="anonymous"
																style={{ width: "25px", height: "25px" }}
																ref={ref}
																roundedCircle
																src={
																	baseUrl + "/" + user?.createdBy?.profilePic} />)}
														<span className="ms-1">
															{user?.createdBy?.firstname}
														</span>
													</Button>
												)}
											</OverlayTrigger>
										</td>}

										<td data-title="createdAt">
											{moment(user?.createdAt)?.format("DD-MMM-YY H:mm:ss")}
										</td>
										<td>
											<TicketStatusCell user={user} customId={user?.id} />
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>

			</div>
		</div>
	);
};

export default LeadTicketTableComponent;




