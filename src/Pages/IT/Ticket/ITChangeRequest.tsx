import { useEffect, useState } from 'react'
import BottomNavigation from '../../../components/BottomNavigation'
import Header from '../../../components/Header'
import SearchConponent from '../../../components/SearchConponent'
import ITSideNav from '../../../components/SideNav/ITSideNav'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import { getItTicketParameter } from '../../../features/Ticket/ticketSlice'
import ITTicketTable from './ITTicketTable'
import moment from 'moment'

const ITChangeRequest = () => {
	const dispatch = useAppDispatch();
	const { itticketparameterdata, itticketparameterisLoading } = useAppSelector((state: any) => state.ticket)
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
	const [data] = useState<any>([]);





	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
		switch (type) {
			// @ts-ignore
			case 'prev': dispatch(getItTicketParameter({ page: pagination?.page - 1, limit: limit }));
				break;
			// @ts-ignore
			case 'next': dispatch(getItTicketParameter({ page: pagination?.page + 1, limit: limit }));
				break;
			case 'limit':
				if (data) {
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(getItTicketParameter({ limit: data.target.value }));
				}
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// @ts-ignore
					dispatch(getItTicketParameter({ page: pageNumber, limit: limit }));
				}
				break;
		}
	}




	useEffect(() => {
		const datas = { ticketType: "CHANGE" };
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
						<h5 className='dashboard-first-card-h'>Change Request</h5>
						{/* <p className='dashboard-first-card-p'>15 incident request ticket</p> */}
					</div>
				</div>
				<SearchConponent
					placeholder={"search ticket"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={itticketparameterdata?.tickets}
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
					<ITTicketTable
						TYPE={true}
						pagination={itticketparameterdata}
						handlePagination={handlePagination}
						data={itticketparameterdata?.tickets}
						isLoading={itticketparameterisLoading} />
				</div>
			</main>
		</div>
	)
}

export default ITChangeRequest
