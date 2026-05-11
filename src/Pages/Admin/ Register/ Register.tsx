import { useState, useEffect } from "react";
import SideNav from "../../../components/SideNav/SideNav";
import EditRegisteredUserModal from "./EditRegisteredUserModal";
import { useAppDispatch, useAppSelector } from "../../../store/useStore";
import { ToastContainer } from "react-toastify";
import { getallReguser } from "../../../features/Registration/registrationSlice";
import TableLoader from "../../../components/TableLoader";
import { NoRecordFound, TableFetch } from "../../../components/Options";
import AdminHeader from "../../../components/Headers/AdminHeader";
import AdminBottomNavigation from "../../../components/BottomNavigation/AdminBottomNavigation";
import RealPagination from "../../../components/RealPagination";
import SearchConponent from "../../../components/SearchConponent";

const Register = () => {
	const [limit, setLimit] = useState<any>(8);
	const [showEditUser, setShowEditUser] = useState(false);
	const dispatch = useAppDispatch();
	const { dataAll, isLoadingAll, edituserisSuccess, isSuccess } = useAppSelector((state: any) => state.reg);
	const [searchItem, setSearchItem] = useState("");
	const [ticketType, setTicketType] = useState("");
	const [status, setStatus] = useState("");
	const pagination = dataAll?.data?.pagination
	const [data, setData] = useState<any>([]);
	const [startDate, setStartDates] = useState([]);
	let [endDate, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);



	// Data Fetching (Conditional) Effect
	useEffect(() => {
		if (isSuccess || edituserisSuccess) {
			// If success is true, fetch data again 
			dispatch(getallReguser());
		} else {
			// Fetch data when the component is mounted or dispatch changes
			dispatch(getallReguser());
		}
	}, [dispatch, edituserisSuccess, isSuccess]);


	useEffect(() => {
		const result = dataAll?.users?.filter((item: any) =>
			item?.firstname?.toLowerCase()?.includes(searchItem)
		);
		setData(result);
	}, [dataAll, searchItem]);






	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
		switch (type) {
			// @ts-ignore
			case 'prev': dispatch(getallReguser({ page: pagination?.page - 1, limit: limit }));
				break;
			// @ts-ignore
			case 'next': dispatch(getallReguser({ page: pagination?.page + 1, limit: limit }));
				break;
			case 'limit':
				if (data) {
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(getallReguser({ limit: data.target.value }));
				}
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// @ts-ignore
					dispatch(getallReguser({ page: pageNumber, limit: limit }));
				}
				break;
		}
	}



	return (
			<main >
				<div className='dashboard-first-card-boards mb-2 mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>Register</h5>
					</div>
				</div>
				<SearchConponent
					placeholder={"Search registered users"}
					setSearchItem={setSearchItem}
					searchItem={searchItem}
					data={data}
					filter={false}
					setStartDates={setStartDates}
					setEndDates={setEndDates}
					setShow={setShow}
					show={show}
					handlePagination={handlePagination}
					RegModal={true}
					setTicketType={setTicketType}
					ticketType={ticketType}
					setStatus={setStatus}
					status={status}
					statusFilter={false}
				/>
				<div className='table-container '>
					{isLoadingAll && <TableLoader isLoading={isLoadingAll} />}
					<table style={{ width: '100%', borderCollapse: 'collapse' }} >
						<thead>
							<tr style={{ textAlign: 'left', borderBottom: '2px solid #f0f0f0' }}>
								<th style={headerStyle}>First Name</th>
								<th style={headerStyle}>Last Name</th>
								<th style={headerStyle}>Email</th>
								<th style={headerStyle}>Phone Number</th>
								<th style={headerStyle}>Role</th>
								<th style={headerStyle}>isActive</th>
								<th style={headerStyle}>Edit User</th>
							</tr>
						</thead>
						<tbody className="data-table-content">
							{isLoadingAll ? (
								<TableFetch colSpan={9} />
							) : data?.length === 0 || data === undefined ? (
								<NoRecordFound colSpan={9} />
							) : (
								data?.map((item: any, i: any) => (
									<tr key={i} style={{ borderBottom: '1px solid #D5D5D5', }} className="ticket-row">
										<td style={cellStyle}>{item?.firstname}</td>
										<td style={cellStyle}>{item?.lastname}</td>
										<td style={cellStyle}>{item?.email}</td>
										<td style={cellStyle}>{item?.mobileNumber}</td>
										<td style={cellStyle}>{item?.role}</td>
										<td style={cellStyle}>
											<button className={item?.activated ? "table-link-active" : "de-active"}>
												{item?.activated ? "Active" : "Deactivated"}
											</button>
										</td>
										<td style={{padding: '15px 20px'}}>
											<EditRegisteredUserModal data={item} showEditUser={showEditUser} setShowEditUser={setShowEditUser} id={item?.id} />
										</td>
									</tr>
								)))}
						</tbody>
					</table>
				</div>
				<footer className="main-table-footer">
					{pagination?.totalUsers > 1 && <div className="totalResponses">
						<h3>Total of {pagination?.totalUsers} Tickets - <span>Page {pagination?.page} of {pagination?.totalPages}</span></h3>
						<RealPagination handlePagination={handlePagination} pagination={pagination} />
					</div>}
				</footer>
			</main>
	);
};

export default Register;

const headerStyle: React.CSSProperties = {
	padding: '12px 5px',
	fontSize: '14px',
	fontWeight: '600',
	color: '#363636',
};

const cellStyle: React.CSSProperties = {
	padding: '12px 5px',
	fontSize: '14px',
	color: '#333',
};

const statuscellStyle: React.CSSProperties = {
	padding: '12px 0px',
	fontSize: '10px',
	color: '#333',
	width: '90px',
};