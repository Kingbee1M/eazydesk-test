import { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import LeadsHeader from '../../components/LeadsHeader';
import { EntriesLimit } from '../../components/Options';
import ServiceRequestModal from '../../components/TicketModals/ServiceRequestModal';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getTicket } from '../../features/Ticket/ticketSlice';
import TicketTableComponent from '../../components/Table/TicketTableComponent';
import { ToastContainer } from 'react-toastify';




const LeadsServiceRequest = () => {
	const [limit, setLimit] = useState<any>(10);
	const dispatch = useAppDispatch();
	const { data: datat, isLoading, createisSuccess } = useAppSelector((state: any) => state.ticket)
	const datas = datat?.tickets
	const [status, setStatus] = useState("");
	const pagination = datat?.pagination

	useEffect(() => {
		const datas = { limit: limit, ticketType: "SERVICE" };
		// @ts-ignore 
		dispatch(getTicket(datas))
		if (createisSuccess) {
			const datas = { limit: limit, ticketType: "SERVICE" };
			// @ts-ignore 
			dispatch(getTicket(datas))
		}
	}, [dispatch, createisSuccess, limit])


	const [result, setResult] = useState("")
	const [data, setData] = useState([])
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "10";
	});

	useEffect(() => {
		localStorage.setItem("rowsPerPage", entriesPerPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [entriesPerPage]);




	useEffect(() => {
		const datas = { limit: limit, ticketType: "SERVICE" };

		// @ts-ignore 
		dispatch(getTicket(datas))

	}, [dispatch, limit])

	useEffect(() => {
		const results: any = datas?.filter(
			(data: any) =>
				data?.status?.toLowerCase().includes(result) ||
				data?.ticketType?.toLowerCase().includes(result) ||
				data?.severity?.toLowerCase().includes(result)
		);
		setData(results)
	}, [datat, result]);
	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {

		switch (type) {
			// @ts-ignore
			case 'prev': dispatch(getTicket({ ticketType: "SERVICE", page: pagination?.page - 1, limit: limit }));
				break;
			// @ts-ignore
			case 'next': dispatch(getTicket({ ticketType: "SERVICE", page: pagination?.page + 1, limit: limit }));
				break;
			case 'limit':
				if (data) {
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(getTicket({ ticketType: "SERVICE", limit: data.target.value }));
				};
				break;
			case 'ticketType':
				// @ts-ignore
				dispatch(getTicket({ ticketType: ticketType }));
				break;
			case 'status':
				// @ts-ignore
				dispatch(getTicket({ ticketType: "SERVICE", status: status }));
				break;
			case 'date':
				// @ts-ignore
				dispatch(getTicket({ ticketType: "SERVICE", startDate: startDate, endDate: endDate }));
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// @ts-ignore
					dispatch(getTicket({ ticketType: "SERVICE", page: pageNumber, limit: limit }));
				}
				break;
		}
	}

	return (
		<div id="dashboard">
			<div className="hero-section3">
				<LeadsHeader />
				<ToastContainer />
				<div className="hero-search">
					<div className="hero-search-container">
						<input
							type="text"
							value={result}
							onChange={(e) => setResult(e.target.value)}
							placeholder='search with severity,status'
						/>
						<span>
							<HiOutlineSearch size={30} color="#fff" />
						</span>
					</div>
				</div>
			</div>
			<main  >
				<div className='request-container  table_margin'>
					<div className="container-items">
						<h5 className='dashboard-first-card-h'>Service Request </h5>
						<div className="entries-perpage">
							{data && (
								<EntriesLimit
									limit={limit}
									data={data}
									handlePagination={handlePagination}
								/>
							)}
						</div>
						<ServiceRequestModal headerTitle={"Raise a Ticket - Service Request"} />
					</div>

					<div  >
						<TicketTableComponent
							TYPE={false}
							data={data}
							isLoading={isLoading}
							pagination={datat}
							colSpan={8}
							Requester={false}
							assignto={false}
							handlePagination={handlePagination}
						/>
					</div>
				</div>
			</main>
		</div>
	)
}

export default LeadsServiceRequest;