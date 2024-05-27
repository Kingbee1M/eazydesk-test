import { useEffect, useState } from 'react'
import SearchConponent from '../../../components/SearchConponent'
import TicketTableComponent from '../../../components/Table/TicketTableComponent'
import ITSideNav from '../../../components/SideNav/ITSideNav'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import { getItTicketParameter } from '../../../features/Ticket/ticketSlice'
import ITHeader from '../../../components/Headers/ITHeader'
import ITBottomNavigation from '../../../components/BottomNavigation/ITBottomNavigation'
import TicketHeaderList from '../../../components/TicketHeaders/TicketHeaderList'



const ITServiceRequest = () => {
	const dispatch = useAppDispatch();
	const { itticketparameterdata, itticketparameterisLoading } = useAppSelector((state: any) => state.ticket)
	const [entriesPerPage, setEntriesPerPage] = useState(() => { return "8" });
	const [startDates, setStartDates] = useState<any>([]);
	let [endDates, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [limit, setLimit] = useState<any>(10);
	endDates = new Date();
	const formattedEndDate = endDates.toISOString().split('T')[0]; // Extracting date part and removing time
	const [startDate1] = useState(formattedEndDate);
	const [endDate1] = useState(formattedEndDate);







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
		const datas = { ticketType: "SERVICE" };
		// @ts-ignore 
		dispatch(getItTicketParameter(datas))

	}, [dispatch, endDate1, startDate1])




	return (
		<div id="page-wrapper">
			<ITSideNav />
			<ITHeader />
			<ITBottomNavigation />
			<main>
				<div className='dashboard-first-card-boards '>
					<TicketHeaderList text="Service Request" />
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

				<div className='mt-4'>
					<TicketTableComponent
						TYPE={false}
						pagination={itticketparameterdata}
						handlePagination={handlePagination}
						data={itticketparameterdata?.tickets}
						isLoading={itticketparameterisLoading}
						colSpan={8}
						assignto={true}
					/>
				</div>
			</main>
		</div>
	)
}

export default ITServiceRequest