import { useEffect, useState } from 'react'
import SearchConponent from '../../../components/SearchConponent'
import ITSideNav from '../../../components/SideNav/ITSideNav'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import { getItTicketParameter } from '../../../features/Ticket/ticketSlice'
import TicketTableComponent from '../../../components/Table/TicketTableComponent'
import ITHeader from '../../../components/Headers/ITHeader'
import ITBottomNavigation from '../../../components/BottomNavigation/ITBottomNavigation'
import TicketHeaderList from '../../../components/TicketHeaders/TicketHeaderList'




const ITIncidentRequest = () => {
	const dispatch = useAppDispatch();
	const { itticketparameterisLoading, itticketparameterdata, itticketparameterSuccess } = useAppSelector((state: any) => state.ticket)
	const [startDate, setStartDates] = useState([]);
	const [endDate, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [limit, setLimit] = useState<any>(8);
	const [ticketType, setTicketType] = useState("");
	const [status, setStatus] = useState("");
	const [data, setData] = useState([]);
	const pagination = itticketparameterdata?.pagination



	useEffect(() => {
		const datas = { ticketType: "INCIDENT" };
		// @ts-ignore 
		dispatch(getItTicketParameter(datas))

	}, [dispatch, itticketparameterSuccess])

	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
		setShow(false)
		switch (type) {
			// @ts-ignore
			case 'prev': dispatch(getItTicketParameter({ ticketType: "INCIDENT", page: pagination?.page - 1, limit: limit }));
				break;
			// @ts-ignore
			case 'next': dispatch(getItTicketParameter({ ticketType: "INCIDENT", page: pagination?.page + 1, limit: limit }));
				break;
			case 'limit':
				if (data) {
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(getItTicketParameter({ ticketType: "INCIDENT", limit: data.target.value }));
				};
				break;
			case 'ticketType':
				// @ts-ignore
				dispatch(getItTicketParameter({ ticketType: ticketType }));
				break;
			case 'status':
				// @ts-ignore
				dispatch(getItTicketParameter({ ticketType: "INCIDENT", status: status }));
				break;
			case 'date':
				// @ts-ignore
				dispatch(getItTicketParameter({ ticketType: "INCIDENT", startDate: startDate, endDate: endDate }));
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// @ts-ignore
					dispatch(getItTicketParameter({ ticketType: "INCIDENT", page: pageNumber, limit: limit }));
				}
				break;
		}
	}

	useEffect(() => {
		const result: any = itticketparameterdata?.tickets?.filter(
			(data: any) =>
				data?.status?.toLowerCase().includes(searchItem) ||
				data?.ticketType?.toLowerCase().includes(searchItem) ||
				data?.severity?.toLowerCase().includes(searchItem)
		);
		setData(result)
	}, [itticketparameterdata?.tickets, searchItem]);









	return (
		<div id="page-wrapper">
			<ITSideNav />
			<ITHeader />
			<ITBottomNavigation />
			<main>
				<div className='dashboard-first-card-boards '>
					<TicketHeaderList text="Incident Request" />

				</div>
				<SearchConponent
					placeholder={"Search ticket"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={itticketparameterdata?.tickets}
					filter={true}
					setStartDates={setStartDates}
					setEndDates={setEndDates}
					setShow={setShow}
					show={show}
					handlePagination={handlePagination}
					report={false}
					setTicketType={setTicketType}
					ticketType={ticketType}
					setStatus={setStatus}
					status={status}
					statusFilter={false}
				/>

				<div  >
					<TicketTableComponent
						TYPE={false}
						pagination={itticketparameterdata}
						data={data}
						isLoading={itticketparameterisLoading}
						handlePagination={handlePagination}
						colSpan={8}
						assignto={true}
					/>
				</div>
			</main>
		</div>
	)
}

export default ITIncidentRequest
