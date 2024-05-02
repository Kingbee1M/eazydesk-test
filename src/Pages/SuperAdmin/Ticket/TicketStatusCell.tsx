import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



const TicketStatusCell = ({ user, customId }: any) => {

	return (
		<td>
			{user?.status === "INPROGRESS" && (
				<Link
					to={`/ticket-progress/${user?.id}`}
					className="admin-btn-progresss">
					IN-PROGRESS
				</Link>
			)}
			{(user?.status === "PENDING" && user?.needsApproval === false) && (
				<button
					className="admin-btn-Unassigned"
					onClick={() => toast.warning("The tickek is yet to be assigned - PENDING", { toastId: customId })}>
					PENDING
				</button>
			)}
			{(user?.status === "PENDING" && user?.needsApproval === true) && (
				<button
					className="admin-btn-Unassigned"
					onClick={() => toast.warning("Ticket needs - APPROVAL", { toastId: customId })}>
					PENDING
				</button>
			)}
			{user?.status === "APPROVED" && (
				<button
					onClick={() => toast.info("Ticket have not been  - ASSIGNED", { toastId: customId })}
					className="admin-btn-reopen">
					APPROVED
				</button>
			)}
			{user?.status === "DISAPPROVED" && (
				<button
					className="admin-btn-Disapproved"
					onClick={() => toast.warning("Ticket have been  - DISAPPROVED", { toastId: customId })}>
					DISAPPROVED
				</button>
			)}
			{user?.status === "OPEN" && (
				<Link
					to={`/ticket-progress/${user?.id}`}
					className="admin-btn-reopen">
					OPEN
				</Link>
			)}
			{user?.status === "COMPLETED" && (
				<Link
					to={`/ticket-progress/${user?.id}`}
					className="admin-btn-resolved">
					COMPLETED
				</Link>
			)}
			{user?.status === "CLOSED" && (
				<Link
					to={`/ticket-progress/${user?.id}`}
					className="admin-btn-closed">
					CLOSED
				</Link>
			)}
			{user?.status === "REOPEN" && (
				<Link
					to={`/ticket-progress/${user?.id}`}
					className="admin-btn-reopen">
					REOPENED
				</Link>
			)}
			{user?.status === "INVALID" && (
				<button
					className="admin-btn-Unassigned" >
					INVALID
				</button>
			)}
		</td>
	);
};

export default TicketStatusCell;
