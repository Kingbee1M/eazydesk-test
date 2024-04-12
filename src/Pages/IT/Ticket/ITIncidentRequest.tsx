import { useEffect, useState } from 'react'
import BottomNavigation from '../../../components/BottomNavigation'
import Header from '../../../components/Header'
import SearchConponent from '../../../components/SearchConponent'
import TicketTableComponent from '../../../components/Table/TicketTableComponent'
import ITSideNav from '../../../components/SideNav/ITSideNav'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import { getItTicket } from '../../../features/Ticket/ticketSlice'

const ITIncidentRequest = () => {
	const dispatch = useAppDispatch();
	const { itdata: ticket, itisLoading } = useAppSelector((state: any) => state.ticket)
	const data = ticket?.filter((ticket: any) => ticket?.ticketType?.includes("INCIDENT REQUEST"));

	useEffect(() => {
		dispatch(getItTicket())
	}, [dispatch])


	const [startDates, setStartDates] = useState([]);
	const [endDates, setEndDates] = useState([]);
	const [show, setShow] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [datas, setDatas] = useState([]);

	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "6";
	});


	return (
		<div id="page-wrapper">
			<ITSideNav />
			<Header />
			<BottomNavigation />
			<main>
				<div className='dashboard-first-card-boards '>
					<div>
						<h5 className='dashboard-first-card-h'>Incident Request</h5>
						{/* <p className='dashboard-first-card-p'>15 incident request ticket</p> */}
					</div>
				</div>
				<SearchConponent
					placeholder={"search ticket"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={data}
					entriesPerPage={entriesPerPage}
					setEntriesPerPage={setEntriesPerPage}
					filter={true}
					setStartDates={setStartDates}
					setEndDates={setEndDates}
					setShow={setShow}
					show={show}
				// handleCustomFilters={handleCustomFilters}
				/>

				<div  >
					<TicketTableComponent
						pageheader={"Incident Request"}
						Request={"Incident Request"}
						TYPE={"INCIDENT"}
						data={data}
						isLoading={itisLoading} />
				</div>
			</main>
		</div>
	)
}

export default ITIncidentRequest
