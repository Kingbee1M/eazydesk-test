import { useState, useEffect } from 'react';
import SideNav from '../../../components/SideNav/SideNav';
import Header from '../../../components/Header';
import EditRegisteredUserModal from '../../../components/Modals/EditRegisteredUserModal';
import { FiPlus } from "react-icons/fi";
import RegisterModal from '../../../components/Modals/RegisterModal';
import BottomNavigation from '../../../components/BottomNavigation';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { toast } from 'react-toastify';
import { getallReguser, reset } from '../../../features/Registration/registrationSlice';
import Pagination from '../../../components/Pagination';
import TableLoader from '../../../components/TableLoader';
import { NoRecordFound, TableFetch } from '../../../components/TableOptions';



const Register = ({ switchs }: any) => {

	const [showTask, setShowTask] = useState(false);
	const [showEditUser, setShowEditUser] = useState(false)
	const dispatch = useAppDispatch();
	const customId = "custom-id-yes";
	const { dataAll, isErrorAll, messageAll, isLoadingAll } = useAppSelector((state: any) => state.reg);

	const { isSuccess } = useAppSelector((state) => state.reg)
	const { edituserisSuccess } = useAppSelector((state: any) => state.reg);
	// --- Pagination --- //
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "8";
	});
	const [realData, setRealData] = useState<any>([]);
	const [searchItem, setSearchItem] = useState("");

	console.log('isErrorAll', isErrorAll, messageAll)

	// Error Handling Effect
	useEffect(() => {
		if (isErrorAll) {
			// Display an error toast with the message and reset the state
			toast.dismiss(); // Dismiss any existing toasts
			toast.error(messageAll, {
				toastId: customId
			});
			setTimeout(() => {
				dispatch(reset());
			}, 6000);
		}
	}, [dispatch, isErrorAll, messageAll]);


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
		const result = dataAll?.filter((item: any) =>
			item?.firstname?.toLowerCase()?.includes(searchItem)
		);
		setRealData(result);
	}, [dataAll, searchItem]);






	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<BottomNavigation />
			<RegisterModal showTask={showTask} setShowTask={setShowTask} />
			<main >
				<div className='dashboard-first-card-boards mb-2 mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>Register</h5>
						<p className='dashboard-first-card-p'>32 Total Registered Users</p>
					</div>
					<button className='btn' onClick={() => setShowTask(true)}>
						<FiPlus size={18} /> <span>Register users</span>
					</button>
				</div>
				<div className='table-container'>
					{isLoadingAll ? <TableLoader isLoading={isLoadingAll} /> : ""}
					<table id="table" className={switchs ? "table" : " table-hover table-mc-light-blue"}>
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Role</th>
								<th>Location</th>
								<th>isActive</th>
								<th>Edit User</th>
							</tr>
						</thead>
						<tbody className="data-table-content">
							{isLoadingAll ? (
								<TableFetch colSpan={18} />
							) : displayData.length === 0 ? (
								<NoRecordFound colSpan={18} />
							) : (
								displayData?.map((item: any, i: any) => (
									<tr key={i}>
										<td >{item.firstname}</td>
										<td >{item.lastname}</td>
										<td >{item.email}</td>
										<td >{item.phoneNumber}</td>
										<td >{item?.role === "MANAGER" ? "SUPERVISOR" : item?.role}</td>
										<td >{item?.location}</td>
										<td >
											<button className={item.isEnabled ? "table-link-active" : "de-active"}>
												{item.isEnabled === true ? "Active" : "Deactivated"}
											</button>
										</td>
										<td >
											<EditRegisteredUserModal data={item} showEditUser={showEditUser} setShowEditUser={setShowEditUser} />
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
