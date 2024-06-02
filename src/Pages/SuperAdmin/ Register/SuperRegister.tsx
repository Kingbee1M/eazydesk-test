import { useState, useEffect } from 'react';
import EditRegisteredUserModal from './EditRegisteredUserModal';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { ToastContainer } from 'react-toastify';
import { superallReguser } from '../../../features/Registration/registrationSlice';
import TableLoader from '../../../components/TableLoader';
import { NoRecordFound, TableFetch } from '../../../components/Options';
import SuperSideNav from '../../../components/SideNav/SuperSideNav';
import RealPagination from '../../../components/RealPagination';
import SearchConponent from '../../../components/SearchConponent';
import SuperHeader from '../../../components/Headers/SuperHeader';
import SuperBottomNavigation from '../../../components/BottomNavigation/SuperBottomNavigation';




const SuperRegister = () => {
	const [limit, setLimit] = useState<any>(8);
	const [showEditUser, setShowEditUser] = useState(false)
	const dispatch = useAppDispatch();
	const { superallReguserdata, superallReguserisLoading, isSuccess, edituserisSuccess } = useAppSelector((state: any) => state.reg);
	const [searchItem, setSearchItem] = useState("");
	const [ticketType, setTicketType] = useState("");
	const [status, setStatus] = useState("");
	const pagination = superallReguserdata?.data?.pagination
	const users = superallReguserdata?.data?.users
	const [data, setRealData] = useState<any>([]);
	const [startDate, setStartDates] = useState([]);
	let [endDate, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);



	useEffect(() => {
		// Fetch data when the component is mounted or dispatch changes 
		dispatch(superallReguser());
		if (isSuccess || edituserisSuccess) {
			// If success is true, fetch data again
			dispatch(superallReguser());
		}
	}, [dispatch, edituserisSuccess, isSuccess]);





	useEffect(() => {
		const result = superallReguserdata?.data?.users?.filter((item: any) =>
			item?.firstname?.toLowerCase()?.includes(searchItem)
		);
		setRealData(result);
	}, [superallReguserdata, searchItem]);




	const handlePagination = (type: string, data?: React.ChangeEvent<HTMLSelectElement> | undefined) => {
		switch (type) {
			// @ts-ignore
			case 'prev': dispatch(superallReguser({ page: pagination?.page - 1, limit: limit }));
				break;
			// @ts-ignore
			case 'next': dispatch(superallReguser({ page: pagination?.page + 1, limit: limit }));
				break;
			case 'limit':
				if (data) {
					setLimit(data.target.value);
					// @ts-ignore
					dispatch(superallReguser({ limit: data.target.value }));
				}
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// @ts-ignore
					dispatch(superallReguser({ page: pageNumber, limit: limit }));
				}
				break;
		}
	}



	return (
		<div id="page-wrapper">
			<SuperSideNav />
			<SuperHeader />
			<SuperBottomNavigation />
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
					data={users}
					filter={true}
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
				<div className='table-container mt-4'>
					{superallReguserisLoading && <TableLoader isLoading={superallReguserisLoading} />}
					<table id="table" className={"table-hover table-mc-light-blue"}>
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Company</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Role</th>
								<th>isActive</th>
								<th>Edit User</th>
							</tr>
						</thead>
						<tbody className="data-table-content">
							{superallReguserisLoading ? (
								<TableFetch colSpan={8} />
							) : data?.length === 0 || data === undefined ? (
								<NoRecordFound colSpan={7} />
							) : (
								data?.map((item: any, i: any) => (
									<tr key={i}>
										<td >{item?.firstname}</td>
										<td >{item?.lastname}</td>
										<td >{item?.Company?.name}</td>
										<td >{item?.email}</td>
										<td >{item?.mobileNumber}</td>
										<td >{item?.role}</td>
										<td >
											<button className={item?.activated ? "table-link-active" : "de-active"}>
												{item?.activated ? "Active" : "Deactivated"}
											</button>
										</td>
										<td >
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
		</div>
	)
}

export default SuperRegister
