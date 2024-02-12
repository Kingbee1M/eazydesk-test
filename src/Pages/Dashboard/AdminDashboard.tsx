import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import BottomNavigation from '../../components/BottomNavigation';
import { useNavigate } from 'react-router-dom';
import { userInfo } from '../../components/TableOptions';

const AdminDashboard = () => {



	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<BottomNavigation />

			<main>

				hhh
			</main>

		</div>
	)
}

export default AdminDashboard
