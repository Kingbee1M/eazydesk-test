import { useState, useRef, useEffect } from "react";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import ProgressChat from "./ProgressChat";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { getComment } from "../../features/Comment/commentSlice";
import { viewTicket } from "../../features/Ticket/ticketSlice";
import { SVGLoader } from "../SVGLoader";

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
						<ProgressChat id={id} ticket={ticket} viewdata={viewdata} />
						<h5 className="page-title">STATUS</h5>
						<div className="tp-status-area">
							{[viewdata]?.map((item: any, i: any) => (
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
								{[viewdata]?.map((item: any, i: any) => (
									item?.status === "INPROGRESS" ? (
										<div className="finalStatus-assigned">IN PROGRESS</div>
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
								<div className="affectedUsers_chat">
									<h4>Created By:</h4>
									<p> 	{viewdata?.createdBy?.firstname} {viewdata?.createdBy?.lastname} </p>
								</div>
								<div className="affectedUsers_chat">
									<h4>Assigned to:</h4>
									<p> 	{viewdata?.assignedUser?.assignedTo?.firstname} {viewdata?.assignedUser?.assignedTo?.lastname} </p>
								</div>
								<div className="affectedUsers_chat">
									<h4>Ticke Type:</h4>
									<p>{viewdata?.ticketType}</p>
								</div>
								<div className="affectedUsers_chat2">
									<h4>Email to:</h4>

									{viewdata?.emails?.map((data: any, i: any) => (
										<p key={i}>{data}</p>
									))}

								</div>
								<div className="affectedUsers_chat">
									<h4>Affected Users:</h4>
									<p>{viewdata?.affectedUsers}</p>
								</div>
								<div className="affectedUsers_chat">
									<h4>Created At:</h4>
									<p>	{moment(viewdata?.createdAt).format("MMM Do YYYY, h:mm A")}</p>
								</div>

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
										<button type="submit" id="custom-btn" disabled={false} onClick={handleUpdateTicketStatus}>
											{false ? <SVGLoader width={"35px"} height={"35px"} color={"#fff"} /> : "Update"}
										</button>
									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</main >
		</div >
	);
};

export default TicketProgress;
