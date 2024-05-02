import { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import LeadsHeader from '../../components/LeadsHeader';
import { EntriesPerPage } from '../../components/Options';
import ServiceRequestModal from '../../components/TicketModals/ServiceRequestModal';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getTicket } from '../../features/Ticket/ticketSlice';
import TicketTableComponent from '../../components/Table/TicketTableComponent';
import TableLoader from '../../components/TableLoader';



const LeadsServiceRequest = () => {
	const [limit, setLimit] = useState<any>(10);
	const dispatch = useAppDispatch();
	const { data: ticket, isLoading } = useAppSelector((state: any) => state.ticket)
	const { createisSuccess } = useAppSelector((state: any) => state.ticket)
	const data = ticket?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("SERVICE"));

	useEffect(() => {
		dispatch(getTicket())
		if (createisSuccess) {
			dispatch(getTicket())
		}
	}, [dispatch, createisSuccess])


	const [result, setResult] = useState("")
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return "10";
	});

	useEffect(() => {
		// setDisplayData(data?.slice(pagesVisited, pagesVisited + usersPerPage));
		localStorage.setItem("rowsPerPage", entriesPerPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [entriesPerPage]);

	// const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
	// 	switch (type) {
	// 		// @ts-ignore
	// 		case 'prev': dispatch(getTicket({ page: pagination?.page - 1, limit: limit }));
	// 			break;
	// 		// @ts-ignore
	// 		case 'next': dispatch(getTicket({ page: pagination?.page + 1, limit: limit }));
	// 			break;
	// 		case 'limit':
	// 			if (data) {
	// 				setLimit(data.target.value);
	// 				// @ts-ignore
	// 				dispatch(getTicket({ limit: data.target.value }));
	// 			}
	// 			break;
	// 		default:
	// 			// For page numbers or any other custom actions
	// 			const pageNumber = parseInt(type);
	// 			if (!isNaN(pageNumber)) {
	// 				// @ts-ignore
	// 				dispatch(getTicket({ page: pageNumber, limit: limit, ticketType: "SERVICE" }));
	// 			}
	// 			break;
	// 	}
	// }


	useEffect(() => {
		const datas = { limit: limit, ticketType: "SERVICE" };

		// @ts-ignore 
		dispatch(getTicket(datas))

	}, [dispatch, limit])

	return (
		<div id="dashboard">
			<div className="hero-section3">
				<LeadsHeader />
				<div className="hero-search container">
					<div className="hero-search-container">
						<input
							type="text"
							value={result}
							onChange={(e) => setResult(e.target.value)}
						/>
						<span>
							<HiOutlineSearch size={30} color="#fff" />
						</span>
					</div>
				</div>
			</div>
			<main  >
				<div className='request-container'>
					<div className="container-items">
						<h5 className='dashboard-first-card-h'>Service Request </h5>
						<div className="entries-perpage">
							{data && (
								<EntriesPerPage
									data={data}
									entriesPerPage={entriesPerPage}
									setEntriesPerPage={setEntriesPerPage}
								/>

							)}
						</div>
						<ServiceRequestModal headerTitle={"Raise a Ticket - Service Request"} />
					</div>

					<div  >

						<TicketTableComponent
							TYPE={false}
							data={ticket?.ticket}
							isLoading={isLoading}
							pagination={ticket?.pagination}
							colSpan={8}
						/>
					</div>
				</div>
			</main>


		</div>
	)
}

export default LeadsServiceRequest;