import { useEffect, useState } from 'react'
import SideNav from '../../../components/SideNav/SideNav'
import SearchConponent from '../../../components/SearchConponent'
import { admingetTicket } from '../../../features/Ticket/ticketSlice'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import TicketTableComponent from '../../../components/Table/TicketTableComponent'
import AdminHeader from '../../../components/Headers/AdminHeader'
import AdminBottomNavigation from '../../../components/BottomNavigation/AdminBottomNavigation'
import AdminTicketHeader from '../../../components/TicketHeaders/AdminTicketHeader'




const IncidentRequest = () => {
	const dispatch = useAppDispatch();
	const { itassignisSuccess } = useAppSelector((state: any) => state.ticket);
	const { admingetticketdata, admingetticketisLoading } = useAppSelector((state: any) => state.ticket)

	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "6";
	});

	const [startDates, setStartDates] = useState([]);
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
		dispatch(admingetTicket(datas))

	}, [dispatch, endDate1, startDate1, itassignisSuccess])


	return (
		<div id="page-wrapper">
			<SideNav />
			<AdminHeader />
			<AdminBottomNavigation />
			<main>
				<div className='dashboard-first-card-boards '>
					<AdminTicketHeader text="Incident Request" />
				</div>
				<SearchConponent
					placeholder={"search ticket"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={admingetticketdata?.tickets}
					entriesPerPage={entriesPerPage}
					setEntriesPerPage={setEntriesPerPage}
					filter={true}
					setStartDates={setStartDates}
					setEndDates={setEndDates}
					setShow={setShow}
					show={show}
				// handleCustomFilters={handleCustomFilters}
				/>

				<div className='mt-4'>
					<TicketTableComponent
						TYPE={false}
						data={admingetticketdata?.tickets}
						isLoading={admingetticketisLoading}
						pagination={admingetticketdata}
						colSpan={8}
						assignto={true}
					/>
				</div>
			</main>
		</div>
	)
}

export default IncidentRequest
