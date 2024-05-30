import { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import LeadsHeader from '../../components/LeadsHeader';
import { EntriesPerPage } from '../../components/Options';
import ServiceRequestModal from '../../components/TicketModals/ServiceRequestModal';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getTicket } from '../../features/Ticket/ticketSlice';
import TicketTableComponent from '../../components/Table/TicketTableComponent';




const LeadsServiceRequest = () => {

	const [limit,] = useState<any>(10);
	const dispatch = useAppDispatch();
	const { data, isLoading, createisSuccess } = useAppSelector((state: any) => state.ticket)




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
				<div className='request-container  table_margin'>
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
							data={data?.tickets}
							isLoading={isLoading}
							pagination={data?.pagination}
							colSpan={8}
							Requester={false}
							assignto={false}
						/>
					</div>
				</div>
			</main>
		</div>
	)
}

export default LeadsServiceRequest;