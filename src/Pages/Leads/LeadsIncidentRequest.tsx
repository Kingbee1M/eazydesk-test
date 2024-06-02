import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
// import TicketForm from '../components/TicketForm';
import LeadsHeader from '../../components/LeadsHeader';
import TicketTableComponent from '../../components/Table/TicketTableComponent';
import { EntriesPerPage } from '../../components/Options';
import IncidentRequestModal from '../../components/TicketModals/IncidentRequestModal';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getTicket } from '../../features/Ticket/ticketSlice';
import { ToastContainer } from 'react-toastify';


const LeadsIncidentRequest = () => {
	const [limit, setLimit] = useState<any>(10);
	const dispatch = useAppDispatch();
	const { data: ticket, isLoading } = useAppSelector((state: any) => state.ticket)
	const { createisSuccess } = useAppSelector((state: any) => state.ticket)
	const data = ticket?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("INCIDENT"));



	useEffect(() => {
		const datas = { limit: limit, ticketType: "INCIDENT" };
		// @ts-ignore 
		dispatch(getTicket(datas))
		if (createisSuccess) {
			const datas = { limit: limit, ticketType: "INCIDENT" };
			// @ts-ignore 
			dispatch(getTicket(datas))
		}
	}, [dispatch, createisSuccess, limit])




	// --- End Modal 
	const [result, setResult] = useState("")
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "6";
	});


	// console.log('data', data)



	useEffect(() => {
		// setDisplayData(data?.slice(pagesVisited, pagesVisited + usersPerPage));
		localStorage.setItem("rowsPerPage", entriesPerPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [entriesPerPage]);

	return (
		<div id="dashboard">
			<div className="hero-section2">
				<LeadsHeader />
				<ToastContainer />
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
				<div className='request-container table_margin'>
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
							TYPE={false}
							data={data}
							isLoading={isLoading}
							colSpan={8}
							assignto={false}
						/>
					</div>
				</div>
			</main>

		</div>
	)
}

export default LeadsIncidentRequest;




