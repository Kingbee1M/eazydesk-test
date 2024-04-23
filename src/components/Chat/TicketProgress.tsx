import { useState, useRef, useEffect } from "react";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import ProgressChat from "./ProgressChat";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { getComment } from "../../features/Comment/commentSlice";
import { viewTicket } from "../../features/Ticket/ticketSlice";

const TicketProgress = () => {
	const { id }: any = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const form: any = useRef();

	const [ticket, setTicket] = useState<any>({});
	const [ticketStatus, setTicketStatus] = useState("")
	const { data, isLoading, isSuccess, getTicketID } = useAppSelector((state: any) => state.comment)
	const { viewdata, viewisLoading, viewisSuccess } = useAppSelector((state: any) => state.ticket)



	useEffect(() => {
		// @ts-ignore 
		dispatch(viewTicket(id))
		if (isSuccess) {
			// @ts-ignore 
			dispatch(viewTicket(id))
		}
	}, [dispatch, id, isSuccess])




	console.log('data-data-@ts-ignore', viewdata)

	useEffect(() => {
		// if (deleteisSuccess || updateisSuccess) {
		// 	dispatch(getCompany());
		// }

		// If success is true, fetch data again
		// @ts-ignore  
		dispatch(getComment(id));
	}, [isSuccess, dispatch, id]);


	// useEffect(() => {
	// 	// dispatch(getTicketByIDAction(id));
	// 	if (successUpdateTicketStatus) {
	// 		setTicketStatus("");
	// 	}
	// }, [dispatch, id, successUpdateTicketStatus]);

	// useEffect(() => {
	// 	if (data?.ticket) {
	// 		setTicket(data?.ticket);
	// 	}
	// }, [data]);

	const handleUpdateTicketStatus = (e: any) => {
		e.preventDefault();
		if (ticketStatus) {
			// dispatch(updateTicketAction(id, ticketStatus));
		}
	};

	console.log('tickeidt', id)




	return (
		<div>
			<header className="ChatProgressView-header">
				<div>
					<span className="in-progresss">
						{ticket?.ticketType === "INCIDENT"
							? "INCIDENT"
							: ticket?.ticketType === "SERVICE"
								? "SERVICE"
								: "CHANGE"}
					</span>
				</div>
				<div className="ChatProgressView-close" >
					<div onClick={() => navigate(-1)}>
						<MdOutlineClose
							size={25}
							style={{ color: "white", backgroundColor: "" }}
							className="ChatProgressView-close-icon"
						/>
					</div>
				</div>
			</header>
			<div id="tp-header"></div>
			<main className="container">
				<div className="tp-main-grid">
					<div className="tp-activity-section">
						<ProgressChat id={id} ticket={ticket} />
						<h5 className="page-title">STATUS</h5>
						<div className="tp-status-area">
							{viewdata?.data?.map((item: any, i: any) => (
								<p key={i}>
									Request status changed to <strong>{item?.status}</strong> on{" "}
									<span>
										{moment(item?.createdAt).format("MMM Do YYYY, h:mm A")}

									</span>
								</p>
							))}
						</div>
					</div>
					<div className="tp-shared-section">
						<div className="tp-shared-container">
							<div>
								{viewdata?.data?.map((item: any, i: any) => (
									item?.status === "INPROGRESS" ? (
										<div className="status-assigned">IN PROGRESS</div>
									) : item?.status === "DISAPPROVED" ? (
										<div className="admin-btn-unassigned ">
											{item?.status}
										</div>
									) : item?.status === "INVALID" ? (
										<div className="status-Resolved">
											{item?.status}</div>
									) : item?.status === "REOPENED" ? (
										<div className="status-reopned">
											{item?.status}
										</div>
									) : item?.status === "COMPLETED" ? (
										<div className="status-reopned">
											{item?.status}
										</div>
									) : item?.status === "OPEN" ? (
										<div className="status-reopned">
											{item?.status}
										</div>
									) : (
										<div className="status-Closed">
											{item?.status}
										</div>
									)))}


							</div>
							<div className="tp-shared-with">
								<h6>Created By:</h6>
								<strong>
									{viewdata?.data?.user?.firstname} {viewdata?.adata?.user?.lastname}
								</strong>
								<h6>Assigned to:</h6>
								<strong>
									{viewdata?.assignedTo?.firstname} {viewdata?.assignedTo?.lastname}
								</strong>
								<p>{viewdata?.assignedTo?.email}</p>
								{viewdata?.finalStatus === "Closed" ? (
									""
								) : (
									<form className="tp-update" ref={form}>
										<select
											id="js-select"
											onChange={(e) => setTicketStatus(e.target.value)}>
											<option value=" "> </option>
											{ticket?.finalStatus === "Completed" ? (
												""
											) : (
												<option value="Completed">Resolved</option>
											)}
											<option value="Closed">Closed</option>
											<option value="Reopen">Reopen</option>
										</select>
										{/* <button
											type="button"
											disabled={false}
											onClick={handleUpdateTicketStatus}>
											{false ? "Updating.." : "Update"}
										</button> */}


									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default TicketProgress;
