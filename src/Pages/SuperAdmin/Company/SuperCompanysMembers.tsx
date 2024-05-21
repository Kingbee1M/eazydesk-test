import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import TableLoader from '../../../components/TableLoader';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { useParams } from 'react-router-dom';
import { viewCompany } from '../../../features/Company/companySlice';
import { NoRecordFound, TableFetch } from '../../../components/Options';
import Pagination from '../../../components/Pagination';
import { ToastContainer } from 'react-toastify';
import SuperSideNav from '../../../components/SideNav/SuperSideNav';




const SuperCompanysMembers = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch();
	// const [showEditUser, setShowEditUser] = useState(false)
	const [displayData, setDisplayData] = useState([]);
	const { viewdata, viewisLoading } = useAppSelector((state: any) => state.company);



	useEffect(() => {
		// @ts-ignore
		dispatch(viewCompany(id))
	}, [dispatch, id])
	// --- Pagination --- //
	const [entriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "8";
	});

	useEffect(() => {
		localStorage.setItem("reportsPerPages", entriesPerPage);
	}, [entriesPerPage]);



	return (
		<div id="page-wrapper">
			<SuperSideNav />
			<Header />
			<ToastContainer />
			<main >
				<div className='dashboard-first-card-boards mb-2 mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>Customers</h5>
						<p className='dashboard-first-card-p'>{!viewdata?.User?.length ? 0 : viewdata?.User?.length} Total Users</p>
					</div>
				</div>
				<div className='table-container'>
					{viewisLoading && <TableLoader isLoading={viewisLoading} />}
					<table>
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Role</th>
							</tr>
						</thead>
						<tbody className="data-table-content">
							{viewisLoading ? (
								<TableFetch colSpan={18} />
							) : displayData?.length === 0 || displayData?.length === undefined ? (
								<NoRecordFound colSpan={18} />
							) : (
								displayData?.map((item: any, i: any) => (
									<tr key={i}>
										<td >{item.firstname}</td>
										<td >{item.lastname}</td>
										<td >{item.email}</td>
										<td >{item.mobileNumber}</td>
										<td >{item?.role}</td>
									</tr>
								)))}
						</tbody>
					</table>

				</div>
				<footer className="main-table-footer">
					<Pagination
						setDisplayData={setDisplayData}
						data={viewdata?.User}
						entriesPerPage={entriesPerPage}
						Total={"Registered User"}
					/>
				</footer>
			</main>
		</div>
	)
}

export default SuperCompanysMembers