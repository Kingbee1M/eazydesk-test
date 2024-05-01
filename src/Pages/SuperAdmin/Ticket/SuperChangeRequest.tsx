import { useEffect, useState } from 'react'
import BottomNavigation from '../../../components/BottomNavigation'
import Header from '../../../components/Header'
import SearchConponent from '../../../components/SearchConponent'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import { admingetTicket } from '../../../features/Ticket/ticketSlice'
import TicketTableComponent from '../../../components/Table/TicketTableComponent'
import SuperSideNav from '../../../components/SideNav/SuperSideNav'

const SuperChangeRequest = () => {
	const dispatch = useAppDispatch();
	const { giveApprovalisSuccess } = useAppSelector((state: any) => state.ticket);
	const { admingetticketdata, admingetticketisLoading } = useAppSelector((state: any) => state.ticket)
	const [entriesPerPage, setEntriesPerPage] = useState(() => { return "6" });
	const [startDates, setStartDates] = useState([]);
	let [endDates, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [limit, setLimit] = useState<any>(10);
	endDates = new Date();
	const formattedEndDate = endDates.toISOString().split('T')[0]; // Extracting date part and removing time
	const [startDate1] = useState(formattedEndDate);
	const [endDate1] = useState(formattedEndDate);




	useEffect(() => {
		const datas = { ticketType: "CHANGE" };
		// @ts-ignore 
		dispatch(admingetTicket(datas))
		if (giveApprovalisSuccess) {
			// @ts-ignore 
			dispatch(admingetTicket(datas))
		}
	}, [dispatch, endDate1, giveApprovalisSuccess, startDate1])

	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
		switch (type) {
			// @ts-ignore
			case 'prev': dispatch(admingetTicket({ page: pagination?.page - 1, limit: limit }));
				break;
			// @ts-ignore
			case 'next': dispatch(admingetTicket({ page: pagination?.page + 1, limit: limit }));
				break;
			case 'limit':
				if (data) {
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(admingetTicket({ limit: data.target.value }));
				}
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// @ts-ignore
					dispatch(admingetTicket({ page: pageNumber, limit: limit }));
				}
				break;
		}
	}



	return (
		<div id="page-wrapper">
			<SuperSideNav />
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
					data={admingetticketdata?.tickets}
					entriesPerPage={entriesPerPage}
					setEntriesPerPage={setEntriesPerPage}
					filter={true}
					setStartDates={setStartDates}
					setEndDates={setEndDates}
					setShow={setShow}
					show={show}
					handlePagination={handlePagination}
				// handleCustomFilters={handleCustomFilters}
				/>

				<div  >
					<TicketTableComponent
						TYPE={true}
						pagination={admingetticketdata}
						data={admingetticketdata?.tickets}
						isLoading={admingetticketisLoading}
						handlePagination={handlePagination}
					/>
				</div>
			</main>
		</div>
	)
}

export default SuperChangeRequest
