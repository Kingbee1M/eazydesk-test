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
	const [limit, setLimit] = useState<any>(8);
	const { itassignisSuccess, admingetticketdata, admingetticketisLoading } = useAppSelector((state: any) => state.ticket);
	const [startDate, setStartDates] = useState([]);
	const [endDate, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [ticketType, setTicketType] = useState("");
	const [status, setStatus] = useState("");
	const [data, setData] = useState([]);
	const pagination = admingetticketdata?.pagination



	useEffect(() => {
		const datas = { ticketType: "INCIDENT" };
		// @ts-ignore 
		dispatch(admingetTicket(datas))

	}, [dispatch, itassignisSuccess])

	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
		setShow(false)
		switch (type) {
			// @ts-ignore
			case 'prev': dispatch(admingetTicket({ ticketType: "INCIDENT", page: pagination?.page - 1, limit: limit }));
				break;
			// @ts-ignore
			case 'next': dispatch(admingetTicket({ ticketType: "INCIDENT", page: pagination?.page + 1, limit: limit }));
				break;
			case 'limit':
				if (data) {
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(admingetTicket({ ticketType: "INCIDENT", limit: data.target.value }));
				};
				break;
			case 'ticketType':
				// @ts-ignore
				dispatch(admingetTicket({ ticketType: ticketType }));
				break;
			case 'status':
				// @ts-ignore
				dispatch(admingetTicket({ ticketType: "INCIDENT", status: status }));
				break;
			case 'date':
				// @ts-ignore
				dispatch(admingetTicket({ ticketType: "INCIDENT", startDate: startDate, endDate: endDate }));
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// @ts-ignore
					dispatch(admingetTicket({ ticketType: "INCIDENT", page: pageNumber, limit: limit }));
				}
				break;
		}
	}

	useEffect(() => {
		const result: any = admingetticketdata?.tickets?.filter(
			(data: any) =>
				data?.status?.toLowerCase().includes(searchItem) ||
				data?.ticketType?.toLowerCase().includes(searchItem) ||
				data?.severity?.toLowerCase().includes(searchItem)
		);
		setData(result)
	}, [admingetticketdata?.tickets, searchItem]);

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
					data={data}
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

				<div >
					<TicketTableComponent
						TYPE={false}
						data={data}
						isLoading={admingetticketisLoading}
						pagination={admingetticketdata}
						handlePagination={handlePagination}
						colSpan={8}
						assignto={true}
					/>
				</div>
			</main>
		</div>
	)
}

export default IncidentRequest
