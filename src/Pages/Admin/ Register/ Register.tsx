import { useState, useEffect } from 'react';
import SideNav from '../../../components/SideNav/SideNav';
import Header from '../../../components/Header';
import EditRegisteredUserModal from './EditRegisteredUserModal';
import RegisterModal from './RegisterModal';
import BottomNavigation from '../../../components/BottomNavigation';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { ToastContainer } from 'react-toastify';
import { getallReguser } from '../../../features/Registration/registrationSlice';
import Pagination from '../../../components/Pagination';
import TableLoader from '../../../components/TableLoader';
import { NoRecordFound, TableFetch } from '../../../components/Options';




const Register = ({ switchs }: any) => {
	// @ts-ignore 
	const userInfo = JSON.parse(localStorage.getItem("service_desk"));

	const [showEditUser, setShowEditUser] = useState(false)
	const dispatch = useAppDispatch();
	const { dataAll, isLoadingAll } = useAppSelector((state: any) => state.reg);
	const { isSuccess } = useAppSelector((state) => state.reg)
	const { edituserisSuccess } = useAppSelector((state: any) => state.reg);




	// --- Pagination --- //
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "8";
	});
	const [realData, setRealData] = useState<any>([]);
	const [searchItem, setSearchItem] = useState("");



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

	// Local Storage Effect
	useEffect(() => {
		// Update the 'reportsPerPages' item in local storage when entriesPerPage changes
		localStorage.setItem("reportsPerPages", entriesPerPage);
	}, [entriesPerPage]);

	const [displayData, setDisplayData] = useState([]);


	useEffect(() => {
		const result = dataAll?.users?.filter((item: any) =>
			item?.firstname?.toLowerCase()?.includes(searchItem)
		);
		setRealData(result);
	}, [dataAll, searchItem]);

	console.log('result', dataAll.length)



	return (
		<div id="page-wrapper">
			<ToastContainer position="top-right" containerId={"custom1"} />
			<SideNav />
			<Header />
			<BottomNavigation />
			<main >
				<div className='dashboard-first-card-boards mb-2 mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>Register</h5>
						<p className='dashboard-first-card-p'>{displayData?.length} Total Registered Users</p>
					</div>
					<RegisterModal />
				</div>
				<div className='table-container'>
					{isLoadingAll && <TableLoader isLoading={isLoadingAll} />}
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
							{isLoadingAll ? (
								<TableFetch colSpan={7} />
							) : displayData?.length === 0 || dataAll.length === 0 ? (
								<NoRecordFound colSpan={7} />
							) : (
								displayData?.map((item: any, i: any) => (
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
					<Pagination
						setDisplayData={setDisplayData}
						data={realData}
						entriesPerPage={entriesPerPage}
						Total={"Registered User"}
					/>
				</footer>
			</main>
		</div>
	)
}

export default Register
