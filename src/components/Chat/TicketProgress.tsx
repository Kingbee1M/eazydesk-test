import { useState, useRef, useEffect, useContext } from "react";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import ProgressChat from "./ProgressChat";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { reset } from "../../features/Comment/commentSlice";
import { updateTicket, viewTicket } from "../../features/Ticket/ticketSlice";
import { SVGLoader } from "../SVGLoader";
import { toast, ToastContainer } from "react-toastify";
import { customId } from "../Options";
import NotificationPopUp from "../Scoket/NotificationPopUp";
import { SocketContext } from "../Scoket/SocketContext";

const TicketProgress = () => {

	const { id }: any = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const form: any = useRef();
	const [notification, setNotification] = useState<any>();
	const [refresh, setRefresh] = useState(false);
	const [ticket, setTicket] = useState<any>({});
	const [inputs, setinputs] = useState("")
	const { viewdata, viewisLoading } = useAppSelector((state: any) => state.ticket)
	const { updateTicketisLoading, updateTicketisSuccess } = useAppSelector((state: any) => state.ticket)
	const { createisSuccess } = useAppSelector((state: any) => state.comment)
	const [input, setInputs] = useState({
		comment: "",
		images: [],
	});




	useEffect(() => {
		if (updateTicketisSuccess) {
			toast.success("Ticket Updated!", { toastId: customId });
		}
	}, [updateTicketisSuccess])

	useEffect(() => {
		// @ts-ignore 
		dispatch(viewTicket(id))
		if (createisSuccess || updateTicketisSuccess) {
			// @ts-ignore 
			dispatch(viewTicket(id))
			setInputs({
				comment: "",
				images: [],
			})
		}
		// @ts-ignore 
		dispatch(reset())

	}, [dispatch, id, createisSuccess, updateTicketisSuccess, refresh])


	const handleUpdateTicketStatus = (e: any) => {
		const datas = { id, inputs }
		e.preventDefault();
		if (inputs) {
			// @ts-ignore 
			dispatch(updateTicket(datas));
		}
	};



	return (
		<div>
			<NotificationPopUp setNotification={setNotification} setRefresh={setRefresh} />
			<ToastContainer position="top-right" containerId={"custom1"} />
			<header className="ChatProgressView-header">
				<div>
					<span className="in-progresss-header">
						{viewdata?.ticketType === "INCIDENT"
							? "INCIDENT"
							: viewdata?.ticketType === "SERVICE"
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
						{/* <h5 className="page-title">STATUS</h5> */}
						<div className="tp-status-area">
							{[viewdata]?.map((item: any, i: any) => (
								<p key={i}>
									Request status changed to <strong>{item?.status}</strong> on{" "}
									<span>{moment(item?.createdAt).format("MMM Do YYYY, h:mm A")}</span>
								</p>
							))}
						</div>
						<ProgressChat id={id} ticket={ticket} viewdata={viewdata} setInputs={setInputs} input={input} />

					</div>
					<div className="tp-shared-section">
						<div className="tp-shared-container">
							<div>
								{[viewdata]?.map((item: any, i: any) => (
									item?.status === "INPROGRESS" ? (
										<div className="finalStatus-assigned">
											IN PROGRESS</div>
									) : item?.status === "REOPENED" ? (
										<div className="finalStatus-reopned">
											{item?.status}
										</div>
									) : item?.status === "COMPLETED" ? (
										<div className="finalStatus-Resolved">
											{item?.status}
										</div>
									) : item?.status === "OPEN" ? (
										<div className="status-reopned">
											{item?.status}
										</div>
									) : (
										<div className="finalStatus-Closed">
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

								{viewdata?.status === "CLOSED" ? (
									""
								) : (
									<form className="tp-update" ref={form}>
										<select
											id="js-select"
											value={inputs}
											onChange={(e) => setinputs(e.target.value)}>
											<option value=""> </option>
											{ticket?.status === "COMPLETED" ? (
												""
											) : (
												<option value="COMPLETED">Resolved</option>
											)}
											<option value="CLOSED">Closed</option>
											<option value="REOPENED">Reopen</option>
										</select>
										<button type="submit" id="custom-btn" disabled={false} onClick={handleUpdateTicketStatus}>
											{updateTicketisLoading ? <SVGLoader width={"35px"} height={"35px"} color={"#fff"} /> : "Update"}
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
