import { useEffect, useState } from 'react'
import BottomNavigation from '../../../components/BottomNavigation'
import Header from '../../../components/Header'
import SearchConponent from '../../../components/SearchConponent'
import ITSideNav from '../../../components/SideNav/ITSideNav'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import { getItTicketParameter } from '../../../features/Ticket/ticketSlice'
import ITTicketTable from './ITTicketTable'


const ITIncidentRequest = () => {
	const dispatch = useAppDispatch();
	const { itdata, itisLoading, itticketparameterdata } = useAppSelector((state: any) => state.ticket)


	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "6";
	});


	let [endDates, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);
	const [searchItem, setSearchItem] = useState("");




	endDates = new Date();
	const formattedEndDate = endDates.toISOString().split('T')[0]; // Extracting date part and removing time
	const [startDate1] = useState(formattedEndDate);
	const [endDate1] = useState(formattedEndDate);



	useEffect(() => {
		const datas = { ticketType: "INCIDENT" };

		// @ts-ignore 
		dispatch(getItTicketParameter(datas))

	}, [dispatch, endDate1, startDate1])



	return (
		<div id="page-wrapper">
			<ITSideNav />
			<Header />
			<BottomNavigation />
			<main>
				<div className='dashboard-first-card-boards '>
					<div>
						<h5 className='dashboard-first-card-h'>Incident Request</h5>
					</div>
				</div>
				<SearchConponent
					placeholder={"search ticket"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={itdata?.tickets}
					entriesPerPage={entriesPerPage}
					setEntriesPerPage={setEntriesPerPage}
					filter={true}
					// setStartDates={setStartDates}
					setEndDates={setEndDates}
					setShow={setShow}
					show={show}
				// handleCustomFilters={handleCustomFilters}
				/>

				<div  >
					<ITTicketTable
						pageheader={"Incident Request"}
						Request={"Incident Request"}
						TYPE={"INCIDENT"}
						data={itticketparameterdata?.tickets}
						isLoading={itisLoading} />
				</div>
			</main>
		</div>
	)
}

export default ITIncidentRequest
