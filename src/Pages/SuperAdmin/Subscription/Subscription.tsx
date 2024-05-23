import { useEffect, useState } from 'react'
import BottomNavigation from '../../../components/BottomNavigation'
import Header from '../../../components/Header'
import SearchConponent from '../../../components/SearchConponent'
import { admingetTicket } from '../../../features/Ticket/ticketSlice'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import moment from 'moment'
import SubscriptionTable from './SubscriptionTable'
import SuperSideNav from '../../../components/SideNav/SuperSideNav'
import SuperHeader from '../../../components/Headers/SuperHeader'




const Subscription = () => {
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
	const currentDate = moment().format("YYYY-MM-DD");
	const sevenDays = moment().subtract(7, "days").format("YYYY-MM-DD");
	const yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		setData(admingetticketdata);
	}, [admingetticketdata]);


	useEffect(() => {
		const datas = { ticketType: "INCIDENT" };
		// @ts-ignore 
		dispatch(admingetTicket(datas))

	}, [dispatch, endDate1, startDate1, itassignisSuccess])


	return (
		<div id="page-wrapper">
			<SuperSideNav />
			<SuperHeader />
			<BottomNavigation />
			<main>
				<div className='dashboard-first-card-boards '>
					<div>
						<h5 className='dashboard-first-card-h'>Subscription History</h5>
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
					subscription={Subscription}
				// handleCustomFilters={handleCustomFilters}
				/>

				<div  >
					<SubscriptionTable
						data={admingetticketdata?.tickets}
						isLoading={admingetticketisLoading} />
				</div>
			</main>
		</div>
	)
}

export default Subscription
