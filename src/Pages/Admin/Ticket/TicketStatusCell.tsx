import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



const TicketStatusCell = ({ user, customId }: any) => {
	const [Unassigned, setUnassigned] = useState(false);

	return (
		<td>
			{user?.status === "INPROGRESS" && (
				<Link
					to={`/ticket-progress/${user?.id}`}
					className="admin-btn-progresss">
					IN-PROGRESS
				</Link>
			)}
			{user?.status === "PENDING" && (
				<button
					className="admin-btn-Unassigned"
					onClick={() => toast.warning("The tickek is yet to be assigned - PENDING", { toastId: customId })}>
					PENDING
				</button>
			)}
			{user?.status === "APPROVED" && (
				<Link
					to={`/ticket-progress/${user?._id}`}
					className="admin-btn-reopen">
					APPROVED
				</Link>
			)}
			{user?.status === "DISAPPROVED" && (
				<button
					className="admin-btn-Unassigned"
					onClick={() => {
						setUnassigned(true);
					}}>
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
					className="admin-btn-Unassigned"
					onClick={() => { setUnassigned(true) }}>
					INVALID
				</button>
			)}
		</td>
	);
};

export default TicketStatusCell;
