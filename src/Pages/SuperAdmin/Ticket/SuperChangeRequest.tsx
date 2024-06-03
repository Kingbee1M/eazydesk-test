import { useEffect, useState } from 'react'
import BottomNavigation from '../../../components/BottomNavigation'
import SearchConponent from '../../../components/SearchConponent'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import { admingetTicket } from '../../../features/Ticket/ticketSlice'
import TicketTableComponent from '../../../components/Table/TicketTableComponent'
import SuperSideNav from '../../../components/SideNav/SuperSideNav'
import TicketHeader from '../../../components/TicketHeaders/TicketHeader'
import SuperHeader from '../../../components/Headers/SuperHeader'

const SuperChangeRequest = () => {
	const dispatch = useAppDispatch();
	const { giveApprovalisSuccess, admingetticketdata, admingetticketisLoading } = useAppSelector((state: any) => state.ticket);
	const [startDate, setStartDates] = useState([]);
	const [endDate, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [limit, setLimit] = useState<any>(10);
	const [ticketType, setTicketType] = useState("");
	const [status, setStatus] = useState("");
	const [data, setData] = useState([]);
	const pagination = admingetticketdata?.pagination

	console.log('admingetticketdata', admingetticketdata)


	useEffect(() => {
		const datas = { ticketType: "CHANGE" };
		// @ts-ignore 
		dispatch(admingetTicket(datas))
		if (giveApprovalisSuccess) {
			// @ts-ignore 
			dispatch(admingetTicket(datas))
		}
	}, [dispatch, giveApprovalisSuccess])
	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
		setShow(false)
		switch (type) {
			// @ts-ignore
			case 'prev': dispatch(admingetTicket({ ticketType: "CHANGE", page: pagination?.page - 1, limit: limit }));
				break;
			// @ts-ignore
			case 'next': dispatch(admingetTicket({ ticketType: "CHANGE", page: pagination?.page + 1, limit: limit }));
				break;
			case 'limit':
				if (data) {
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(admingetTicket({ ticketType: "CHANGE", limit: data.target.value }));
				};
				break;
			case 'ticketType':
				// @ts-ignore
				dispatch(admingetTicket({ ticketType: ticketType }));
				break;
			case 'status':
				// @ts-ignore
				dispatch(admingetTicket({ status: status }));
				break;
			case 'date':
				// @ts-ignore
				dispatch(admingetTicket({ ticketType: "CHANGE", startDate: startDate, endDate: endDate }));
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// @ts-ignore
					dispatch(admingetTicket({ ticketType: "CHANGE", page: pageNumber, limit: limit }));
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
			<SuperSideNav />
			<SuperHeader />
			<BottomNavigation />
			<main>
				<div className='dashboard-first-card-boards '>
					{/* Ticket Links */}
					<TicketHeader text={"Change Request"} />
				</div>
				<SearchConponent
					placeholder={"search ticket"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={admingetticketdata?.tickets}
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


				<TicketTableComponent
					TYPE={true}
					pagination={admingetticketdata}
					data={data}
					isLoading={admingetticketisLoading}
					handlePagination={handlePagination}
					colSpan={9}
					assignto={true}
				/>
			</main>
		</div>
	)
}

export default SuperChangeRequest
