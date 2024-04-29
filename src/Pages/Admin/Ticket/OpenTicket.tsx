import { useEffect, useState } from 'react'
import SideNav from '../../../components/SideNav/SideNav'
import Header from '../../../components/Header'
import BottomNavigation from '../../../components/BottomNavigation'
import SearchConponent from '../../../components/SearchConponent'
import AdminTicketTable from './AdminTicketTable'
import moment from 'moment'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import { admingetTicket } from '../../../features/Ticket/ticketSlice'

const OpenTicket = () => {

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

	const { admingetticketdata } = useAppSelector((state: any) => state.ticket)
	endDates = new Date();
	const formattedEndDate = endDates.toISOString().split('T')[0]; // Extracting date part and removing time
	const [startDate1] = useState(formattedEndDate);
	const [endDate1] = useState(formattedEndDate);


	const currentDate = moment().format("YYYY-MM-DD");
	const sevenDays = moment().subtract(7, "days").format("YYYY-MM-DD");
	const yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		setData(admingetticketdata);
	}, [admingetticketdata]);


	useEffect(() => {
		const datas = { status: "OPEN" };
		// @ts-ignore 
		dispatch(admingetTicket(datas))

	}, [dispatch, endDate1, startDate1, itassignisSuccess])

	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<BottomNavigation />
			<main>
				<div className='dashboard-first-card-boards  mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>Open Ticket</h5>
					</div>
				</div>
				<SearchConponent
					placeholder={"search ticket report"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={datas}
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
					<AdminTicketTable
						data={admingetticketdata?.tickets}
					/>
				</div>
			</main>
		</div>
	)
}

export default OpenTicket