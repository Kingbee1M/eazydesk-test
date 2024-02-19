import { useState } from 'react';
import SideNav from '../../../components/SideNav/SideNav';
import Header from '../../../components/Header';
import EditCustomerModal from '../../../components/Modals/EditCustomerModal';






const VendorsMembers = () => {

	const [showEditUser, setShowEditUser] = useState(false)
	const [tasksData, setTasksData] = useState([
		{
			id: 1,
			firstname: 'John',
			lastname: 'Doe',
			email: 'johndoe@gmail.com',
			phoneNumber: '123304947',
			location: 'new york',
			role: 'Supervisor'
		},
		{
			id: 2,
			firstname: 'Grace',
			lastname: 'Wall',
			email: 'gracewall@gmail.com',
			phoneNumber: '0873436282',
			location: 'new jersey',
			role: 'Supervisor'
		},
		{
			id: 3,
			firstname: 'Daniel',
			lastname: 'Johnson',
			email: 'danieljohnsion@gmail.com',
			phoneNumber: '1246474959',
			location: 'Atlanta',
			role: 'Supervisor'
		},
		{
			id: 4,
			firstname: 'Erik',
			lastname: 'Moore',
			email: 'erikmoore@yahoo.uk',
			phoneNumber: '093574884',
			location: 'Georgia',
			role: 'Supervisor'
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
			<main >
				<div className='dashboard-first-card-boards mb-2 mt-2'>
					<div>
						<h5 className='dashboard-first-card-h'>Customers</h5>
						<p className='dashboard-first-card-p'>32 Total Customers</p>
					</div>
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
										<EditCustomerModal data={item} showEditUser={showEditUser} setShowEditUser={setShowEditUser} />
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

export default VendorsMembers