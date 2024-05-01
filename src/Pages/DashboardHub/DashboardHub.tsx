import { useNavigate } from "react-router-dom";
import { getUserPrivileges } from "../../hooks/auth";
import { useEffect } from "react";
import { logoutUserAction } from "../../features/Auth/authService";
import { useAppDispatch } from "../../store/useStore";
import DataService from "../../features/Auth/dataService";

const DashboardHUB = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const dataService = DataService();
	// @ts-ignore  
	const userInfo = JSON.parse(localStorage.getItem("service_desk"));
	const {
		isSuperAdmin,
		isAdmin,
		isSupervisor,
		isITSupport,
		isTeamLead,

	} = getUserPrivileges();

	useEffect(() => {
		if (userInfo) {
			switch (true) {
				case isSuperAdmin:
					navigate('/superdashboard');
					break;
				case isAdmin:
					navigate('/admindashboard');
					break;
				case isSupervisor:
					navigate('/supervisordashboard');
					break;
				case isITSupport:
					navigate('/itdashboard');
					break;
				case isTeamLead:
					navigate('/leadsdashboard');
					break;
				default:
					dispatch(logoutUserAction());
					dataService.clearData()
					navigate('/');
					break;
			}
		}
	}, [dataService, dispatch, isAdmin, isITSupport, isSuperAdmin, isSupervisor, isTeamLead, navigate, userInfo]);

	return null; // Adjust as needed
};

export default DashboardHUB;
