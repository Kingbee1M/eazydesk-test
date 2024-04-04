
import { getUserPrivileges } from "../../hooks/auth";
import AdminDashboard from "../Admin/Dashboard/AdminDashboard";
import ITDashboard from "../IT/Dashboard/ITDashboard";
import LeadsDashboard from "../Leads/LeadsDashboard";
import SupervisorDashboard from "../Supervisor/Dashboard/SupervisorDashboard";


const DashboardHUB = () => {



	const {
		isSuperAdmin,
		isAdmin,
		isSupervisor,
		isITSupport,
		isTeamLead,

	} = getUserPrivileges();

	console.log(isSuperAdmin)
	return (
		<div className="h-100">
			{isSuperAdmin || isAdmin ? (
				<AdminDashboard />
			) : isSupervisor ? (
				<SupervisorDashboard />
			) : isITSupport ? (
				<ITDashboard />
			) : isTeamLead ? (
				<LeadsDashboard />
			) : (
				<AdminDashboard />
			)}

		</div>
	);
};

export default DashboardHUB;

