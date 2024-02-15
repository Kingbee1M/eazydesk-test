import { useState } from 'react';
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';
import EditRegisteredUserModal from '../../components/Modals/EditRegisteredUserModal';
import { FiPlus } from "react-icons/fi";
import RegisterModal from '../../components/Modals/RegisterModal';
import BottomNavigation from '../../components/BottomNavigation';




const Register = () => {

	const [showTask, setShowTask] = useState(false);
	const [showEditUser, setShowEditUser] = useState(false)
	const [tasksData, setTasksData] = useState([
		{
			id: 1,
			firstname: 'John',
			lastname: 'Doe',
			email: 'johndoe@gmail.com',
			phoneNumber: '123304947',
			location: 'new york',
			role: 'IT support'
		},
		{
			id: 2,
			firstname: 'Grace',
			lastname: 'Wall',
			email: 'gracewall@gmail.com',
			phoneNumber: '0873436282',
			location: 'new jersey',
			role: 'Admin'
		},
		{
			id: 3,
			firstname: 'Daniel',
			lastname: 'Johnson',
			email: 'danieljohnsion@gmail.com',
			phoneNumber: '1246474959',
			location: 'Atlanta',
			role: 'Trainner'
		},
		{
			id: 4,
			firstname: 'Erik',
			lastname: 'Moore',
			email: 'erikmoore@yahoo.uk',
			phoneNumber: '093574884',
			location: 'Georgia',
			role: 'Software'
		},
		{
			id: 5,
			firstname: 'Diana',
			lastname: 'Griffins',
			email: 'dianagriffins@yahoo.com',
			phoneNumber: '090876543',
			location: 'Canada',
			role: 'Supervisor'
		},
	]);







	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<BottomNavigation />
			<RegisterModal showTask={showTask} setShowTask={setShowTask} />

			{/* <BottomNavigation /> */}
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
					{/* {isLoadingAll ? <TableLoader isLoading={isLoadingAll} /> : ""} */}
					<table>
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
							{tasksData?.map((item: any, i: any) => (
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
							))}
						</tbody>
					</table>
				</div>
				<footer className="main-table-footer">
					{/* <Pagination
						setDisplayData={setDisplayData}
						data={realData}
						entriesPerPage={entriesPerPage}
						Total={"Registered User"}
					/> */}
				</footer>
			</main>
		</div>
	)
}

export default Register