import { useEffect, useState } from 'react'
import BottomNavigation from '../../../components/BottomNavigation'
import Header from '../../../components/Header'
import SearchConponent from '../../../components/SearchConponent'
import TicketTableComponent from '../../../components/Table/TicketTableComponent'
import ITSideNav from '../../../components/SideNav/ITSideNav'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import { getItTicketParameter } from '../../../features/Ticket/ticketSlice'
import ITTicketTable from './ITTicketTable'
import moment from 'moment'

const ITChangeRequest = () => {
	const dispatch = useAppDispatch();


	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "6";
	});

	const [startDates, setStartDates] = useState([]);
	let [endDates, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);
	const [datas, setDatas] = useState([]);
	const [find, setFind] = useState<any>();
	const [sortData, setSortData] = useState<any>([]);
	const [searchItem, setSearchItem] = useState("");
	const [Unassigned, setUnassigned] = useState(false);

	const { itticketparameterdata, itticketparameterisLoading } = useAppSelector((state: any) => state.ticket)
	console.log('itticketparameterdata', itticketparameterdata)

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
				// handleCustomFilters={handleCustomFilters}
				/>

				<div  >
					<ITTicketTable
						pageheader={"CHANGE"}
						Request={"Change Request"}
						TYPE={"CHANGE"}
						data={itticketparameterdata?.tickets}
						isLoading={itticketparameterisLoading} />
				</div>
			</main>
		</div>
	)
}

export default ITChangeRequest
