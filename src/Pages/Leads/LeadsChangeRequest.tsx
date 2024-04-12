import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaExchangeAlt } from "react-icons/fa";
import { Modal } from "react-bootstrap";
// import TicketForm from "../components/TicketForm";
import { useNavigate } from "react-router-dom";
import LeadsHeader from "../../components/LeadsHeader";
import { EntriesPerPage } from "../../components/Options";
import { data } from "../../components/StateData";
import TicketTableComponent from "../../components/Table/TicketTableComponent";
import ChangeRequestModal from "../../components/TicketModals/ChangeRequestModal";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { getTicket } from "../../features/Ticket/ticketSlice";



const LeadsChangeRequest = () => {
	const dispatch = useAppDispatch();
	const { data: ticket, isLoading } = useAppSelector((state: any) => state.ticket)
	const { createisSuccess } = useAppSelector((state: any) => state.ticket)
	const data = ticket?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("CHANGE REQUEST"));

	useEffect(() => {
		dispatch(getTicket())
		if (createisSuccess) {
			dispatch(getTicket())
		}
	}, [dispatch, createisSuccess])

	const [result, setResult] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "5";
	});

	useEffect(() => {
		// setDisplayData(data?.slice(pagesVisited, pagesVisited + usersPerPage));
		localStorage.setItem("rowsPerPage", entriesPerPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [entriesPerPage]);

	return (
		<div id="dashboard">
			<div className="hero-section4">
				<LeadsHeader />
				<div className="hero-search container">
					<div className="hero-search-container">
						<input
							type="text"
							value={result}
							onChange={(e) => setResult(e.target.value)}
						/>
						<span>
							<HiOutlineSearch size={30} color="#fff" />
						</span>
					</div>
				</div>
			</div>
			<main  >
				<div className='request-container'>
					<div className="container-items">
						<h5 className='dashboard-first-card-h'>Incident Request</h5>
						<div className="entries-perpage">
							{data && (
								<EntriesPerPage
									data={data}
									entriesPerPage={entriesPerPage}
									setEntriesPerPage={setEntriesPerPage}
								/>
							)}
						</div>
						<ChangeRequestModal headerTitle={"Raise a Ticket - Change Reques"} />

					</div>
					<div  >
						<TicketTableComponent
							pageheader={"Incident Request"}
							Request={"Incident Request"}
							TYPE={"CHANGE REQUEST"}
							data={data}
							isLoading={isLoading} />
					</div>
				</div>
			</main>


		</div>
	);
};

export default LeadsChangeRequest;

