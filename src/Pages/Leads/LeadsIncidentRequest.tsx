import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Table from '../components/Table';
import { HiOutlineSearch } from 'react-icons/hi';
import { RiAlarmWarningFill } from 'react-icons/ri';
import { Modal } from 'react-bootstrap';
// import TicketForm from '../components/TicketForm';
import { useNavigate } from "react-router-dom";
import LeadsHeader from '../../components/LeadsHeader';
import SearchConponent from '../../components/SearchConponent';
import TicketTableComponent from '../../components/Table/TicketTableComponent';
import { data } from '../../components/StateData';
import { EntriesPerPage } from '../../components/Options';
import IncidentRequestModal from '../../components/TicketModals/IncidentRequestModal';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getTicket } from '../../features/Ticket/ticketSlice';


const LeadsIncidentRequest = () => {
	const dispatch = useAppDispatch();
	const { data: ticket, isLoading } = useAppSelector((state: any) => state.ticket)
	const { createisSuccess } = useAppSelector((state: any) => state.ticket)
	const data = ticket?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("INCIDENT REQUEST"));

	console.log('data', data)

	useEffect(() => {
		dispatch(getTicket())
		if (createisSuccess) {
			dispatch(getTicket())
		}
	}, [dispatch, createisSuccess])


	const [startDates, setStartDates] = useState([]);
	const [endDates, setEndDates] = useState([]);

	// --- End Modal 
	const [result, setResult] = useState("")
	const [searchItem, setSearchItem] = useState("");
	const [datas, setDatas] = useState([]);
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "6";
	});






	useEffect(() => {
		// setDisplayData(data?.slice(pagesVisited, pagesVisited + usersPerPage));
		localStorage.setItem("rowsPerPage", entriesPerPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [entriesPerPage]);

	return (
		<div id="dashboard">
			<div className="hero-section2">
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
						<IncidentRequestModal headerTitle={"Raise a Ticket - Incident Request"} />
					</div>
					<div  >
						<TicketTableComponent
							pageheader={"Incident Request"}
							Request={"Incident Request"}
							TYPE={"INCIDENT REQUEST"}
							data={data}
							isLoading={isLoading} />
					</div>
				</div>
			</main>

		</div>
	)
}

export default LeadsIncidentRequest;




