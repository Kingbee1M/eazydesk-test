import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import LeadsHeader from '../../components/LeadsHeader';
import TicketTableComponent from '../../components/Table/TicketTableComponent';
import { EntriesLimit } from '../../components/Options';
import IncidentRequestModal from '../../components/TicketModals/IncidentRequestModal';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getTicket } from '../../features/Ticket/ticketSlice';
import { ToastContainer } from 'react-toastify';


const LeadsIncidentRequest = () => {
	const [result, setResult] = useState("")
	const [limit, setLimit] = useState<any>(10);
	const dispatch = useAppDispatch();
	const { data: ticket, isLoading } = useAppSelector((state: any) => state.ticket)
	const { createisSuccess } = useAppSelector((state: any) => state.ticket)
	const datas = ticket?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("INCIDENT"));
	const [data, setData] = useState<any>('');
	const [status, setStatus] = useState("");
	const pagination = ticket?.pagination

	useEffect(() => {
		const datas = { limit: limit, ticketType: "INCIDENT" };
		// @ts-ignore 
		dispatch(getTicket(datas))
		if (createisSuccess) {
			const datas = { limit: limit, ticketType: "INCIDENT" };
			// @ts-ignore 
			dispatch(getTicket(datas))
		}
	}, [dispatch, createisSuccess, limit])






	useEffect(() => {
		const results: any = datas?.filter(
			(data: any) =>
				data?.status?.toLowerCase().includes(result) ||
				data?.ticketType?.toLowerCase().includes(result) ||
				data?.severity?.toLowerCase().includes(result)
		);
		setData(results)
	}, [ticket, result]);


	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
		// setShow(false)
		switch (type) {
			// @ts-ignore
			case 'prev': dispatch(getTicket({ ticketType: "INCIDENT", page: pagination?.page - 1, limit: limit }));
				break;
			// @ts-ignore
			case 'next': dispatch(getTicket({ ticketType: "INCIDENT", page: pagination?.page + 1, limit: limit }));
				break;
			case 'limit':
				if (data) {
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(getTicket({ ticketType: "INCIDENT", limit: data.target.value }));
				};
				break;
			case 'ticketType':
				// @ts-ignore
				dispatch(getTicket({ ticketType: ticketType }));
				break;
			case 'status':
				// @ts-ignore
				dispatch(getTicket({ ticketType: "INCIDENT", status: status }));
				break;
			case 'date':
				// @ts-ignore
				dispatch(getTicket({ ticketType: "INCIDENT", startDate: startDate, endDate: endDate }));
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// @ts-ignore
					dispatch(getTicket({ ticketType: "INCIDENT", page: pageNumber, limit: limit }));
				}
				break;
		}
	}

	return (
		<div id="dashboard">
			<div className="hero-section2"> 
				<LeadsHeader />
				<ToastContainer />
				<div className="hero-search">
					<div className="hero-search-container">
						<input
							className="custom-placeholder"
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
				<div className='request-container table_margin'>
					<div className="container-items">
						<h5 className='dashboard-first-card-h'>Incident Request</h5>
						<div className="entries-perpage">
							{data && (
								<EntriesLimit
									limit={limit}
									data={data}
									handlePagination={handlePagination}
								/>
							)}
						</div>
						<IncidentRequestModal headerTitle={"Raise a Ticket - Incident Request"} />
					</div>
					<div  >
						<TicketTableComponent
							TYPE={false}
							data={datas}
							isLoading={isLoading}
							colSpan={8}
							assignto={false}
							pagination={ticket}
							handlePagination={handlePagination}
						/>
					</div>
				</div>
			</main>

		</div>
	)
}

export default LeadsIncidentRequest;




