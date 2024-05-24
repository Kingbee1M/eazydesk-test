import { useEffect, useRef, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import ModalHeader from '../Modals/ModalHeader';
import { HiMenuAlt3 } from 'react-icons/hi';
import { SVGLoader } from '../SVGLoader';
import moment from 'moment';
import { customId } from '../Options';
import { reset } from '../../features/Comment/commentSlice';
import { updateLeadTicket, updateTicket } from '../../features/Ticket/ticketSlice';


const StatusModal = ({ viewdata, id, isTeamLead }: any) => {
	const dispatch = useAppDispatch();
	const [show, setShow] = useState(false);
	const form: any = useRef();
	const [ticket] = useState<any>({});
	const [inputs, setinputs] = useState("")
	const { updateTicketisLoading, updateTicketisSuccess, updateTicketisError, updateTicketmessage } = useAppSelector((state: any) => state.ticket)
	const { updateLeadTicketisLoading, updateLeadTicketisSuccess, updateLeadTicketisError, updateLeadTicketmessage } = useAppSelector((state: any) => state.ticket)


	useEffect(() => {
		if (updateTicketisSuccess || updateLeadTicketisSuccess) {
			toast.success("Ticket Updated!", { toastId: customId });
		} else if (updateLeadTicketisError) {
			toast.error(updateLeadTicketmessage, { toastId: customId });
		} else if (updateTicketisError) {
			toast.error(updateTicketmessage, { toastId: customId });
		}
		dispatch(reset())
	}, [dispatch, updateLeadTicketisError, updateLeadTicketisSuccess, updateLeadTicketmessage, updateTicketisError, updateTicketisSuccess, updateTicketmessage])




	const handleUpdateTicketStatus = (e: any) => {
		const datas = { id, inputs }
		e.preventDefault();
		if (inputs === "CLOSED" || inputs === "REOPENED") {
			// @ts-ignore 
			dispatch(updateLeadTicket(datas));
		} else {
			// @ts-ignore 
			dispatch(updateTicket(datas));
		}
	};





	return (
		<div>
			<ToastContainer position="top-right" containerId={"custom123"} />

			<div className="chat_update_container">
				<div className='mobile_login_text_container' onClick={() => setShow(true)}>
					<HiMenuAlt3 />
				</div>
			</div>
			<Modal
				size="lg"
				show={show}
				aria-labelledby="contained-modal-title-vcenter"
				centered >
				<ModalHeader setShow={setShow} headerTitle={"Change Status"} />
				<Modal.Body>
					<div className="tp-shared-container1">
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
								<p>{viewdata?.createdBy?.firstname} {viewdata?.createdBy?.lastname} </p>
							</div>
							<div className="affectedUsers_chat">
								<h4>Assigned to:</h4>
								<p>{viewdata?.assignedUser?.assignedTo?.firstname}
									{viewdata?.assignedUser?.assignedTo?.lastname} </p>
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
							) : (isTeamLead ?
								<form className="tp-update" ref={form}>
									<select
										id="js-select"
										value={inputs}
										onChange={(e) => setinputs(e.target.value)}>
										<option value=""> </option>
										<option value="CLOSED">Closed</option>
										{viewdata?.status === "COMPLETED" && <option value="REOPENED">Reopen</option>}

									</select>
									<button type="submit" id="custom-btn" disabled={false} onClick={handleUpdateTicketStatus}>
										{updateTicketisLoading ? <SVGLoader width={"35px"} height={"35px"} color={"#fff"} /> : "Update"}
									</button>
								</form> : <form className="tp-update" ref={form}>
									<select
										id="js-select"
										value={inputs}
										onChange={(e) => setinputs(e.target.value)}>
										<option value="">
										</option>
										{ticket?.status === "COMPLETED" ? (
											""
										) : (
											<option value="COMPLETED">Resolved</option>
										)}
									</select>
									<button type="submit" id="custom-btn" disabled={false}
										onClick={handleUpdateTicketStatus}>
										{updateTicketisLoading || updateLeadTicketisLoading ?
											<SVGLoader width={"35px"} height={"35px"} color={"#fff"} /> :
											"Update"}
									</button>
								</form>
							)}
						</div>
					</div>

				</Modal.Body>
			</Modal>

		</div>
	)
}

export default StatusModal






