import { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import BottomNavigation from '../../../components/BottomNavigation'
import SearchConponent from '../../../components/SearchConponent'
import TicketTableComponent from '../../../components/Table/TicketTableComponent'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import moment from 'moment'
import { admingetTicket } from '../../../features/Ticket/ticketSlice'
import SuperSideNav from '../../../components/SideNav/SuperSideNav'

const ClosedTicket = () => {
	const dispatch = useAppDispatch();
	const { itassignisSuccess } = useAppSelector((state: any) => state.ticket);
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "6";
	});

	const [startDates, setStartDates] = useState([]);
	let [endDates, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);
	const [datas, setDatas] = useState([]);
	const [searchItem, setSearchItem] = useState("");
	const [limit, setLimit] = useState<any>(8);
	const { admingetticketdata, admingetticketisLoading } = useAppSelector((state: any) => state.ticket)
	endDates = new Date();
	const formattedEndDate = endDates.toISOString().split('T')[0]; // Extracting date part and removing time
	const [startDate1] = useState(formattedEndDate);
	const [endDate1] = useState(formattedEndDate);
	const [selectedDate, setSelectedDate] = useState("");


	const currentDate = moment().format("YYYY-MM-DD");
	const sevenDays = moment().subtract(7, "days").format("YYYY-MM-DD");
	const yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		setData(admingetticketdata);
	}, [admingetticketdata]);

	console.log('admingetticketdata', admingetticketdata)

	useEffect(() => {
		const datas = { status: "CLOSED" };
		// @ts-ignore 
		dispatch(admingetTicket(datas))

	}, [dispatch, endDate1, startDate1, itassignisSuccess])


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
				<div className='dashboard-first-card-boards  mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>Closed Ticket</h5>
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

				<div className='mt-4'>
					<TicketTableComponent
						TYPE={false}
						data={admingetticketdata?.tickets}
						isLoading={admingetticketisLoading}
						colSpan={8}
						assignto={true}
					/>
				</div>
			</main>
		</div>
	)
}

export default ClosedTicket
