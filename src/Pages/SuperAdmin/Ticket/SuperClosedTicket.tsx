import { useEffect, useState } from 'react'
import BottomNavigation from '../../../components/BottomNavigation'
import SearchConponent from '../../../components/SearchConponent'
import TicketTableComponent from '../../../components/Table/TicketTableComponent'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'

import { admingetTicket } from '../../../features/Ticket/ticketSlice'
import SuperSideNav from '../../../components/SideNav/SuperSideNav'
import TicketHeader from '../../../components/TicketHeaders/TicketHeader'
import SuperHeader from '../../../components/Headers/SuperHeader'

const ClosedTicket = () => {
	const dispatch = useAppDispatch();
	const { itassignisSuccess, admingetticketdata, admingetticketisLoading } = useAppSelector((state: any) => state.ticket);
	const [endDate, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);
	const [startDate, setStartDates] = useState([]);
	const [searchItem, setSearchItem] = useState("");
	const [limit, setLimit] = useState<any>(8);
	const [ticketType, setTicketType] = useState("");
	const [status, setStatus] = useState("");
	const [data, setData] = useState([]);
	const pagination = admingetticketdata?.pagination




	useEffect(() => {
		const datas = { status: "CLOSED" };
		// @ts-ignore 
		dispatch(admingetTicket(datas))

	}, [dispatch, itassignisSuccess])


	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
		setShow(false)
		switch (type) {
			// @ts-ignore
			case 'prev': dispatch(admingetTicket({ status: "CLOSED", page: pagination?.page - 1, limit: limit }));
				break;
			// @ts-ignore
			case 'next': dispatch(admingetTicket({ status: "CLOSED", page: pagination?.page + 1, limit: limit }));
				break;
			case 'limit':
				if (data) {
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(admingetTicket({ status: "CLOSED", limit: data.target.value }));
				};
				break;
			case 'ticketType':
				// @ts-ignore
				dispatch(admingetTicket({ status: "CLOSED", ticketType: ticketType }));
				break;
			case 'status':
				// @ts-ignore
				dispatch(admingetTicket({ status: status }));
				break;
			case 'date':
				// @ts-ignore
				dispatch(admingetTicket({ status: "CLOSED", startDate: startDate, endDate: endDate }));
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
				<div className='dashboard-first-card-boards  '>
					{/* Ticket Links */}
					<TicketHeader text={"Closed Ticket"} />

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

				<div  >
					<TicketTableComponent
						TYPE={false}
						pagination={admingetticketdata}
						data={data}
						isLoading={admingetticketisLoading}
						handlePagination={handlePagination}
						colSpan={8}
					/>
				</div>
			</main>
		</div>
	)
}

export default ClosedTicket
