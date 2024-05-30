import { useEffect, useState } from 'react'
import BottomNavigation from '../../../components/BottomNavigation'
import SearchConponent from '../../../components/SearchConponent'
import { admingetTicket } from '../../../features/Ticket/ticketSlice'
import { useAppDispatch, useAppSelector } from '../../../store/useStore'
import SubscriptionTable from './SubscriptionTable'
import SuperSideNav from '../../../components/SideNav/SuperSideNav'
import SuperHeader from '../../../components/Headers/SuperHeader'




const Subscription = () => {
	const dispatch = useAppDispatch();
	const [limit, setLimit] = useState<any>(8);
	const { itassignisSuccess, admingetticketdata, admingetticketisLoading } = useAppSelector((state: any) => state.ticket);
	const [startDate, setStartDates] = useState([]);
	let [endDate, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);
	const [searchItem, setSearchItem] = useState("");
	const [ticketType, setTicketType] = useState("");
	const [status, setStatus] = useState("");
	const pagination = admingetticketdata?.pagination

	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
		setShow(false)
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
				dispatch(admingetTicket({ startDate: startDate, endDate: endDate }));
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
		const datas = { limit: limit };
		// @ts-ignore 
		dispatch(admingetTicket(datas))

	}, [dispatch, itassignisSuccess, limit])


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
					data={admingetticketdata?.tickets}
					filter={false}
					setStartDates={setStartDates}
					setEndDates={setEndDates}
					setShow={setShow}
					show={show}
					subscription={true}
					setTicketType={setTicketType}
					ticketType={ticketType}
					setStatus={setStatus}
					status={status}
					handlePagination={handlePagination}
				/>

				<div>
					<SubscriptionTable
						data={admingetticketdata?.tickets}
						isLoading={admingetticketisLoading}
						pagination={admingetticketdata}
						handlePagination={handlePagination}
					/>
				</div>
			</main>
		</div>
	)
}

export default Subscription
