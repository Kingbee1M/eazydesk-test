import dIcon1 from "../../../assets/DashboardIcons/Dicon1.svg"
import dIcon2 from "../../../assets/DashboardIcons/Dicon2.svg"
import dIcon3 from "../../../assets/DashboardIcons/Dicon3.svg"
import dIcon4 from "../../../assets/DashboardIcons/Dicon4.svg"
import ITSideNav from '../../../components/SideNav/ITSideNav';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { dashBoardInfo } from '../../../features/Ticket/ticketSlice'
import ITHeader from '../../../components/Headers/ITHeader';
import LeadsThreeinOneBarChart from '../../../components/Charts/LeadsThreeinOneBarChart';
import { GoDotFill } from 'react-icons/go';
import DoughnutChat from '../../../components/DoughnutChat';
import ITBottomNavigation from '../../../components/BottomNavigation/ITBottomNavigation';

import { useEffect, useState } from "react";
import LeadsHeader from "src/components/LeadsHeader";
import { ToastContainer } from "react-toastify";
import MainDisplay from "src/components/NewUI/mainDIsplay";
import TopBar from "src/components/NewUI/topbar";
import { Outlet, useLocation } from "react-router-dom";
import { mockTickets } from "src/Pages/Leads/LeadsDashboard";
import { motion } from "framer-motion";


export interface TicketProps {
    ticketId: string;
    severity: 'LOW' | 'CRITICAL' | 'MEDIUM';
    ticketType: 'Incident' | 'Service' | 'Change';
    subject: string;
    status: 'Pending' | 'In Progress' | 'Resolved'
}

export interface TicketsData {
	month: string;
	service: number;
	incident: number;
	change: number;
}

export interface StaffData {
    name: string;
    tickets: number;
}

export interface AnnualStaffPerformance {
    [year: string]: StaffData[];
}

interface StaffPerformanceProps {
    data: AnnualStaffPerformance;
}

const ITDashboard = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const location = useLocation();
	const dispatch = useAppDispatch();
	const { dashBoardInfodata, itassignisSuccess } = useAppSelector((state: any) => state.ticket);
	const isDashboardHome = location.pathname === "/itdashboard" || location.pathname === "/itdashboard/";


	useEffect(() => {
		dispatch(dashBoardInfo())
		if (itassignisSuccess) {
			dispatch(dashBoardInfo())
		}
	}, [dispatch, itassignisSuccess])


	const { data: ticket, isSuccess } = useAppSelector((state: any) => state.ticket);



	const mockTicket = mockTickets
        

	const incidentCount =  mockTicket.filter((t: any) => t?.ticketType?.includes("Incident")).length;
    const serviceCount = mockTicket.filter((t: any) => t?.ticketType?.includes("Service")).length;
    const changeCount = mockTicket.filter((t: any) => t?.ticketType?.includes("Change")).length;


				// NEW CODE
		const myTickets: TicketProps[]= [
			{ ticketId: '1001', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
			{ ticketId: '1002', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'In Progress' },
			{ ticketId: '1003', severity: 'MEDIUM', ticketType: 'Incident', subject: 'Server Down', status: 'Resolved' },
			{ ticketId: '1004', severity: 'MEDIUM', ticketType: 'Service', subject: 'Password Reset', status: 'Resolved' },
			{ ticketId: '1005', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Resolved' },
			{ ticketId: '1006', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'Pending' },
			{ ticketId: '1007', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
			{ ticketId: '1008', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'Pending' },
			{ ticketId: '1009', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Resolved' },
			{ ticketId: '10010', severity: 'MEDIUM', ticketType: 'Service', subject: 'Password Reset', status: 'Pending' },
			{ ticketId: '10012', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
			{ ticketId: '10012', severity: 'MEDIUM', ticketType: 'Service', subject: 'Password Reset', status: 'Pending' },
			{ ticketId: '10013', severity: 'MEDIUM', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
			{ ticketId: '10014', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'In Progress' },
			{ ticketId: '10015', severity: 'MEDIUM', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
			{ ticketId: '10016', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'Resolved' },
			{ ticketId: '10017', severity: 'CRITICAL', ticketType: 'Incident', subject: 'Server Down', status: 'Resolved' },
			{ ticketId: '10018', severity: 'LOW', ticketType: 'Service', subject: 'Password Reset', status: 'Resolved' },
			{ ticketId: '10019', severity: 'MEDIUM', ticketType: 'Incident', subject: 'Server Down', status: 'Pending' },
			{ ticketId: '10020', severity: 'MEDIUM', ticketType: 'Service', subject: 'Password Reset', status: 'Pending' },
		];
	
		const ticketsData: TicketsData[] = [
		  { month: "Jan", service: 40, incident: 24, change: 10 },
		  { month: "Feb", service: 30, incident: 13, change: 22 },
		  { month: "Mar", service: 20, incident: 58, change: 15 },
		  { month: "Apr", service: 27, incident: 39, change: 20 },
		  { month: "May", service: 18, incident: 48, change: 25 },
		  { month: "Jun", service: 80, incident: 33, change: 45 },
		  { month: "Jul", service: 55, incident: 48, change: 19 },
		  { month: "Aug", service: 72, incident: 18, change: 25 },
		  { month: "Sep", service: 13, incident: 73, change: 44 },
		  { month: "Oct", service: 6, incident: 48, change: 68 },
		  { month: "Nov", service: 44, incident: 78, change: 68 },
		  { month: "Dec", service: 45, incident: 88, change: 68 },
		];
	
		const yearData: AnnualStaffPerformance = {
	  "2023": [
		{ name: "John Doe", tickets: 120 },
		{ name: "Jane Smith", tickets: 95 },
		{ name: "Alex Mike", tickets: 150 },
		{ name: "Sarah Connor", tickets: 110 },
	  ],
	  "2024": [
		{ name: "John Doe", tickets: 210 },
		{ name: "Jane Smith", tickets: 185 },
		{ name: "Alex Mike", tickets: 160 },
		{ name: "Sarah Connor", tickets: 240 },
	  ],
	  "2025": [
		{ name: "John Doe", tickets: 180 },
		{ name: "Jane Smith", tickets: 310 }, // Big year for Jane
		{ name: "Alex Mike", tickets: 220 },
		{ name: "Sarah Connor", tickets: 195 },
	  ],
	  "2026": [
		{ name: "John Doe", tickets: 350 }, // Massive growth
		{ name: "Jane Smith", tickets: 290 },
		{ name: "Alex Mike", tickets: 315 },
		{ name: "Sarah Connor", tickets: 380 },
	  ],
	};

	


	return (
		<div id="dashboard">
            <div className={`hero-section1 ${isMenuOpen ? "open" : ""}`}>
                <LeadsHeader 
                    incident={incidentCount} 
                    service={serviceCount} 
                    change={changeCount}
                />
            </div>

            <main className='main'>
                 {/* Mobile Toggle Button */}

				<motion.button 
					drag
					dragConstraints={{ left: 0, right: 0, top: 0, bottom: 500 }} // Elastic snap-back
					// OR use specific constraints based on screen size:
					// dragConstraints={{ left: -300, right: 0, top: 0, bottom: 500 }}
					className="mobile-menu-toggle" 
					onClick={toggleMenu}
					style={{ touchAction: "none" }} // Prevents page scroll while dragging
				>
					{isMenuOpen ? "✕" : "☰"}
				</motion.button>
				{isMenuOpen && <div className="menu-overlay" onClick={toggleMenu} />}
                <TopBar />
                
                <div className="content-area">
                    {isDashboardHome ? (
                        /* Default view when logged in */
                        <MainDisplay 
                            totalTicket={124} 
                            pendingAssign={12} 
                            resolvedToday={45}
                            Service={23}
                            Change={7}
                            Incident={33}
                            tickets={myTickets}
                            ticketChart={ticketsData}
                            staffData={yearData}
                        />
                    ) : (
                        /* This renders AllTickets, IncidentView, etc. */
                        <Outlet />
                    )}
                </div>
            </main>
        </div>

	)
}

export default ITDashboard












