import { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import EditRegisteredUserModal from './EditRegisteredUserModal';
import RegisterModal from './RegisterModal';
import BottomNavigation from '../../../components/BottomNavigation';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { ToastContainer } from 'react-toastify';
import { getallReguser, superallReguser } from '../../../features/Registration/registrationSlice';
import Pagination from '../../../components/Pagination';
import TableLoader from '../../../components/TableLoader';
import { NoRecordFound, TableFetch } from '../../../components/Options';
import SuperSideNav from '../../../components/SideNav/SuperSideNav';
import RealPagination from '../../../components/RealPagination';
import Search from '../../../components/Search';
import SearchConponent from '../../../components/SearchConponent';
import moment from 'moment';




const SuperRegister = ({ switchs }: any) => {
	// @ts-ignore 
	const userInfo = JSON.parse(localStorage.getItem("service_desk"));
	const [limit, setLimit] = useState<any>(8);
	const [showEditUser, setShowEditUser] = useState(false)
	const dispatch = useAppDispatch();
	const { superallReguserdata, superallReguserisLoading } = useAppSelector((state: any) => state.reg);
	const { isSuccess } = useAppSelector((state) => state.reg)
	const { edituserisSuccess } = useAppSelector((state: any) => state.reg);

	const pagination = superallReguserdata?.data?.pagination
	const users = superallReguserdata?.data?.users




	// --- Pagination --- //
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "8";
	});
	const [data, setRealData] = useState<any>([]);
	const [searchItem, setSearchItem] = useState("");
	const [startDates, setStartDates] = useState([]);
	let [endDates, setEndDates] = useState<any>([]);
	const [show, setShow] = useState(false);
	const [datas, setDatas] = useState([]);


	endDates = new Date();
	const formattedEndDate = endDates.toISOString().split('T')[0]; // Extracting date part and removing time
	const [startDate1] = useState(formattedEndDate);
	const [endDate1] = useState(formattedEndDate);






	// Data Fetching (Conditional) Effect
	useEffect(() => {
		if (isSuccess || edituserisSuccess) {
			// If success is true, fetch data again
			dispatch(superallReguser());
		} else {
			// Fetch data when the component is mounted or dispatch changes 
			dispatch(superallReguser());
		}
	}, [dispatch, edituserisSuccess, isSuccess]);

	// Local Storage Effect
	useEffect(() => {
		// Update the 'reportsPerPages' item in local storage when entriesPerPage changes
		localStorage.setItem("reportsPerPages", entriesPerPage);
	}, [entriesPerPage]);




	useEffect(() => {
		const result = superallReguserdata?.data?.users?.filter((item: any) =>
			item?.firstname?.toLowerCase()?.includes(searchItem)
		);
		setRealData(result);
	}, [superallReguserdata, searchItem]);


	useEffect(() => {
		dispatch(superallReguser())
	}, [dispatch])

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
					// dispatch(superallReguser({ limit: data.target.value }));
				}
				break;
			default:
				// For page numbers or any other custom actions
				const pageNumber = parseInt(type);
				if (!isNaN(pageNumber)) {
					// @ts-ignore
					// dispatch(superallReguser({ page: pageNumber, limit: limit }));
				}
				break;
		}
	}


	return (
		<div id="page-wrapper">
			<ToastContainer position="top-right" containerId={"custom111221"} />
			<SuperSideNav />
			<Header />
			<BottomNavigation />
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
					data={superallReguserdata?.users}
					entriesPerPage={entriesPerPage}
					setEntriesPerPage={setEntriesPerPage}
					filter={true}
					setStartDates={setStartDates}
					setEndDates={setEndDates}
					setShow={setShow}
					show={show}
					handlePagination={handlePagination}
					RegModal={true}
				// handleCustomFilters={handleCustomFilters}
				/>
				<div className='table-container mt-4'>
					{superallReguserisLoading && <TableLoader isLoading={superallReguserisLoading} />}
					<table id="table" className={switchs ? "table" : " table-hover table-mc-light-blue"}>
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Role</th>
								<th>isActive</th>
								<th>Edit User</th>
							</tr>
						</thead>
						<tbody className="data-table-content">
							{superallReguserisLoading ? (
								<TableFetch colSpan={7} />
							) : data?.length === 0 || data === undefined ? (
								<NoRecordFound colSpan={7} />
							) : (
								data?.map((item: any, i: any) => (
									<tr key={i}>
										<td >{item?.firstname}</td>
										<td >{item?.lastname}</td>
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
					{pagination?.pagination?.totalTickets > 1 && <div className="totalResponses">
						<h3>Total of {pagination?.totalUsers} Tickets - <span>Page {pagination?.page} of {pagination?.totalPages}</span></h3>
						<RealPagination handlePagination={handlePagination} pagination={pagination} />
					</div>}
				</footer>
			</main>
		</div>
	)
}

export default SuperRegister
