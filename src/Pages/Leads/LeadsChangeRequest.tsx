import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import LeadsHeader from "../../components/LeadsHeader";
import { EntriesLimit } from "../../components/Options";
import ChangeRequestModal from "../../components/TicketModals/ChangeRequestModal";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { getTicket } from "../../features/Ticket/ticketSlice";
import TicketTableComponent from "../../components/Table/TicketTableComponent";
import { ToastContainer } from "react-toastify";



const LeadsChangeRequest = () => {
	// setLimit
	const [limit, setLimit] = useState<any>(10);
	const dispatch = useAppDispatch();
	const { data: ticket, isLoading } = useAppSelector((state: any) => state.ticket)
	const { createisSuccess } = useAppSelector((state: any) => state.ticket)
	const datas = ticket?.tickets?.filter((ticket: any) => ticket?.ticketType?.includes("CHANGE"));
	const [status, setStatus] = useState("");
	const pagination = ticket?.pagination
	useEffect(() => {
		const datas = { limit: limit, ticketType: "CHANGE" };
		// @ts-ignore 
		dispatch(getTicket(datas))
		if (createisSuccess) {
			const datas = { limit: limit, ticketType: "CHANGE" };
			// @ts-ignore 
			dispatch(getTicket(datas))
		}
	}, [dispatch, createisSuccess, limit])

	const [data, setData] = useState([]);
	const [result, setResult] = useState("");





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

		switch (type) {
			// @ts-ignore
			case 'prev': dispatch(getTicket({ ticketType: "CHANGE", page: pagination?.page - 1, limit: limit }));
				break;
			// @ts-ignore
			case 'next': dispatch(getTicket({ ticketType: "CHANGE", page: pagination?.page + 1, limit: limit }));
				break;
			case 'limit':
				if (data) {
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(getTicket({ ticketType: "CHANGE", limit: data.target.value }));
				};
				break;
			case 'ticketType':
				// @ts-ignore
				dispatch(getTicket({ ticketType: ticketType }));
				break;
			case 'status':
				// @ts-ignore
				dispatch(getTicket({ status: status }));
				break;
			case 'date':
				// @ts-ignore
				dispatch(getTicket({ ticketType: "CHANGE", startDate: startDate, endDate: endDate }));
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// @ts-ignore
					dispatch(getTicket({ ticketType: "CHANGE", page: pageNumber, limit: limit }));
				}
				break;
		}
	}

	return (
		<div id="dashboard">
			<div className="hero-section4">
				<ToastContainer />
				<LeadsHeader />
				<div className="hero-search">
					<div className="hero-search-container">
						<input
							type="text"
							value={result}
							onChange={(e) => setResult(e.target.value)}
							placeholder='search with severity, status'
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
						<ChangeRequestModal
							headerTitle={"Raise a Ticket - Change Request"}
							pageheader={true}
							currentState={true}
							proposedChange={true}
						/>
					</div>
					<div  >
						<TicketTableComponent
							TYPE={false}
							data={data}
							isLoading={isLoading}
							colSpan={8}
							pagination={ticket}
							handlePagination={handlePagination}
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default LeadsChangeRequest;

