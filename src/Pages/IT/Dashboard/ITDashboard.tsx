import Header from '../../../components/Header'
import BottomNavigation from '../../../components/BottomNavigation';
import { RiArrowUpSFill } from "react-icons/ri";
import dIcon1 from "../../../assets/DashboardIcons/Dicon1.svg"
import dIcon2 from "../../../assets/DashboardIcons/Dicon2.svg"
import dIcon3 from "../../../assets/DashboardIcons/Dicon3.svg"
import dIcon4 from "../../../assets/DashboardIcons/Dicon4.svg"
import ITSideNav from '../../../components/SideNav/ITSideNav';
import { AiOutlineEye } from 'react-icons/ai';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { VscCloudDownload } from 'react-icons/vsc';
import AssignTask from '../../../components/Modals/AssignTask';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { dashBoardInfo, getItTicket } from '../../../features/Ticket/ticketSlice'
import { useEffect, useState } from 'react';
import TicketStatusCell from '../../Admin/Ticket/TicketStatusCell';
import { NoRecordFound, TableFetch } from '../../../components/Options';


const ITDashboard = () => {
	const dispatch = useAppDispatch();
	const { dashBoardInfodata } = useAppSelector((state: any) => state.ticket);
	const { itdata, itisLoading } = useAppSelector((state: any) => state.ticket)
	const { itassignisSuccess } = useAppSelector((state: any) => state.ticket);

	useEffect(() => {
		dispatch(getItTicket())
		dispatch(dashBoardInfo())
		if (itassignisSuccess) {
			dispatch(getItTicket())
			dispatch(dashBoardInfo())
		}
	}, [dispatch, itassignisSuccess])




	const [result] = useState(itdata?.tickets)

	const ticketdata =
		[
			{
				"_id": "656e57e83b839efc8accb24e",
				"ticketType": "INCIDENT",
				"ticketId": "68",
				"issueCategory": "LOSS OF INTERNET",
				"issueDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus et lacus id sodales. In mattis quam odio, in dictum quam congue id. Praesent semper consequat elit eu fringilla. Etiam vehicula vel dolor et aliquam. Nam nec lorem eu neque ullamcorper porta. Integer non eleifend urna. Phasellus luctus diam ultricies volutpat laoreet. Nullam sit amet sapien pretium, efficitur risus non, vulputate magna. Maecenas sit amet rutrum purus, quis rhoncus nibh. Phasellus hendrerit lorem a orci egestas condimentum. Pellentesque mollis eget dolor at vestibulum. Curabitur id justo quis enim lobortis hendrerit.",
				"affectedUsers": 2,
				"severity": "Low",
				"images": [
					"image-1701730232041.png"
				],
				"finalStatus": "Unassigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62b0945bd834d5c0c1896932",
					"firstname": "Admin",
					"lastname": "User",
					"email": "godgomailn@yahoo.com",
					"phoneNumber": "08165619895",
					"role": "625587ca291fe357244f7aa9",
					"client": "623464a508418e5846f6790a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1701730168068.png",
					"createdAt": "2022-06-20T15:38:03.527Z",
					"__v": 0,
					"lastLoginDate": "2023-12-04T22:48:38.389Z",
					"isActive": true,
					"id": "62b0945bd834d5c0c1896932"
				},
				"client": {
					"_id": "623464a508418e5846f6790a",
					"client": "Access Bank",
					"clientCode": "Access",
					"createdAt": "2022-03-18T10:53:25.567Z",
					"__v": 0
				},
				"comments": [],
				"status": [],
				"createdAt": "2023-12-04T22:51:20.787Z",
				"__v": 0
			},
			{
				"_id": "64c034e665527458d83b2c4e",
				"ticketType": "INCIDENT",
				"ticketId": "67",
				"issueCategory": "Power Related Issues",
				"issueDescription": "light",
				"affectedUsers": 100,
				"severity": "High",
				"images": [
					"image-1690318053219.png"
				],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "bvjabjkbahjnsjnbkj\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "64c0365f65527458d83b2db9",
						"createdAt": "2023-07-25T20:53:51.872Z"
					},
					{
						"comment": "bchkabkj",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "64c0368e65527458d83b2dd6",
						"createdAt": "2023-07-25T20:54:38.003Z"
					},
					{
						"comment": "sdvava",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "64c036aa65527458d83b2df3",
						"createdAt": "2023-07-25T20:55:06.753Z"
					},
					{
						"comment": "hfvajhshjaghgkjagfbjahbh",
						"images": [
							""
						],
						"createdBy": "6255655d291fe357244f77c2",
						"_id": "64c0393e65527458d83b31c1",
						"createdAt": "2023-07-25T21:06:06.955Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "64c0360465527458d83b2d8b",
						"createdAt": "2023-07-25T20:52:20.517Z"
					},
					{
						"status": "Completed",
						"createdBy": "6255655d291fe357244f77c2",
						"_id": "64c0394f65527458d83b31de",
						"createdAt": "2023-07-25T21:06:23.556Z"
					},
					{
						"status": "Closed",
						"createdBy": "6255655d291fe357244f77c2",
						"_id": "64c039fd65527458d83b32c4",
						"createdAt": "2023-07-25T21:09:17.675Z"
					}
				],
				"createdAt": "2023-07-25T20:47:34.576Z",
				"__v": 7,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"closedAt": "2023-07-25T21:09:17.675Z"
			},
			{
				"_id": "64c0345a65527458d83b2c33",
				"ticketType": "CHANGE",
				"ticketId": "66",
				"issueCategory": "Change Request",
				"issueDescription": "laptop",
				"affectedUsers": 11,
				"severity": "High",
				"images": [
					"image-1690317909290.png"
				],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6255655d291fe357244f77c2",
						"_id": "64c039e665527458d83b325c",
						"createdAt": "2023-07-25T21:08:54.702Z"
					}
				],
				"createdAt": "2023-07-25T20:45:14.307Z",
				"__v": 1,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "64c02b888d8add534f0d546d",
				"ticketType": "INCIDENT",
				"ticketId": "65",
				"issueCategory": "Email Delivery Issue ",
				"issueDescription": "Email Delivery",
				"affectedUsers": 45,
				"severity": "High",
				"images": [
					"image-1690315654887.png"
				],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "64c02c078d8add534f0d54f9",
						"createdAt": "2023-07-25T20:09:43.295Z"
					},
					{
						"status": "Completed",
						"createdBy": "62cec8d51c665c2015e87f92",
						"_id": "64c02cf08d8add534f0d5549",
						"createdAt": "2023-07-25T20:13:36.019Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "64c02d148d8add534f0d55b5",
						"createdAt": "2023-07-25T20:14:12.979Z"
					}
				],
				"createdAt": "2023-07-25T20:07:36.923Z",
				"__v": 3,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				},
				"closedAt": "2023-07-25T20:14:12.975Z"
			},
			{
				"_id": "642edd025da0c4de9effda99",
				"ticketType": "SERVICE",
				"ticketId": "64",
				"issueCategory": "Calls Not Recording",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 3,
				"severity": "Low",
				"images": [],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642edd1a5da0c4de9effdb08",
						"createdAt": "2023-04-06T14:54:18.476Z"
					}
				],
				"createdAt": "2023-04-06T14:53:54.418Z",
				"__v": 1,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "642edc455da0c4de9effd840",
				"ticketType": "SERVICE",
				"ticketId": "63",
				"issueCategory": "VPN Configuration",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 2,
				"severity": "Low",
				"images": [],
				"finalStatus": "Completed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642edc885da0c4de9effd88f",
						"createdAt": "2023-04-06T14:51:52.853Z"
					},
					{
						"status": "Completed",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642edce55da0c4de9effda44",
						"createdAt": "2023-04-06T14:53:25.761Z"
					}
				],
				"createdAt": "2023-04-06T14:50:45.912Z",
				"__v": 2,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "642ed9995da0c4de9effd549",
				"ticketType": "SERVICE",
				"ticketId": "62",
				"issueCategory": "VPN Configuration",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 3,
				"severity": "Low",
				"images": [],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ed9d15da0c4de9effd598",
						"createdAt": "2023-04-06T14:40:17.911Z"
					}
				],
				"createdAt": "2023-04-06T14:39:21.834Z",
				"__v": 1,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "642ed17b5da0c4de9effce44",
				"ticketType": "SERVICE",
				"ticketId": "61",
				"issueCategory": "Agent's Access Reactivation",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 6,
				"severity": "Medium",
				"images": [],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ed18d5da0c4de9effce8e",
						"createdAt": "2023-04-06T14:05:01.905Z"
					}
				],
				"createdAt": "2023-04-06T14:04:43.004Z",
				"__v": 1,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "642ed0175da0c4de9effcbb5",
				"ticketType": "INCIDENT",
				"ticketId": "60",
				"issueCategory": "System Related Issues",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 3,
				"severity": "Low",
				"images": [],
				"finalStatus": "Completed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "what is the update",
						"images": [],
						"createdBy": "62cec8d51c665c2015e87f92",
						"_id": "65c5d1ce44d4994be8583093",
						"createdAt": "2024-02-09T07:18:38.045Z"
					},
					{
						"comment": "good",
						"images": [
							"image-1709468899057.png"
						],
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "65e46ced9fd580966e1de86f",
						"createdAt": "2024-03-03T12:28:29.042Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ed0615da0c4de9effcc1c",
						"createdAt": "2023-04-06T14:00:01.177Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "64bf68c9c550feff1066ac2e",
						"createdAt": "2023-07-25T06:16:41.905Z"
					},
					{
						"status": "Completed",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "65e46d1b9fd580966e1de88c",
						"createdAt": "2024-03-03T12:29:15.310Z"
					}
				],
				"createdAt": "2023-04-06T13:58:47.330Z",
				"__v": 5,
				"assignedTo": {
					"_id": "630dd6ddf20e611ac7930449",
					"firstname": "Ayorinde",
					"lastname": "Rinde",
					"email": "ayo@gmail.com",
					"phoneNumber": "09022222222",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1661851267110.jpeg",
					"createdAt": "2022-08-30T09:22:37.448Z",
					"__v": 0,
					"lastLoginDate": "2022-08-30T09:42:20.602Z",
					"isActive": true,
					"id": "630dd6ddf20e611ac7930449"
				}
			},
			{
				"_id": "642eca1b5da0c4de9effc694",
				"ticketType": "CHANGE",
				"ticketId": "59",
				"issueCategory": "Modify Existing Prompt",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 3,
				"severity": "Low",
				"images": [],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642eca8c5da0c4de9effc715",
						"createdAt": "2023-04-06T13:35:08.002Z"
					}
				],
				"createdAt": "2023-04-06T13:33:15.234Z",
				"__v": 1,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "642ec8c95da0c4de9effc500",
				"ticketType": "CHANGE",
				"ticketId": "58",
				"issueCategory": "Modify Existing Prompt",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 4,
				"severity": "Low",
				"images": [],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ec9655da0c4de9effc657",
						"createdAt": "2023-04-06T13:30:13.015Z"
					},
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "656e33993b839efc8acca88c",
						"createdAt": "2023-12-04T20:16:25.528Z"
					},
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "65c5d0c844d4994be8582f5b",
						"createdAt": "2024-02-09T07:14:16.454Z"
					}
				],
				"createdAt": "2023-04-06T13:27:37.655Z",
				"__v": 3,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "642ec8bf5da0c4de9effc4e7",
				"ticketType": "SERVICE",
				"ticketId": "57",
				"issueCategory": "Agents Access Deactivation",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 4,
				"severity": "Low",
				"images": [],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "asvabssfsd",
						"images": [
							""
						],
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "6461ec1c9458b7288f7b99a3",
						"createdAt": "2023-05-15T08:23:56.978Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ec8ee5da0c4de9effc5cb",
						"createdAt": "2023-04-06T13:28:14.002Z"
					}
				],
				"createdAt": "2023-04-06T13:27:27.305Z",
				"__v": 2,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "642ec8445da0c4de9effc41b",
				"ticketType": "SERVICE",
				"ticketId": "56",
				"issueCategory": "Calls Not Recording",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 3,
				"severity": "Low",
				"images": [],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ec8935da0c4de9effc491",
						"createdAt": "2023-04-06T13:26:43.006Z"
					}
				],
				"createdAt": "2023-04-06T13:25:24.434Z",
				"__v": 1,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "642ec49b5da0c4de9effc258",
				"ticketType": "SERVICE",
				"ticketId": "55",
				"issueCategory": "Calls Not Recording",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 4,
				"severity": "Low",
				"images": [
					"image-1680786586156.png"
				],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ec4b55da0c4de9effc32e",
						"createdAt": "2023-04-06T13:10:13.492Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "656edcb53b839efc8accba98",
						"createdAt": "2023-12-05T08:17:57.755Z"
					}
				],
				"createdAt": "2023-04-06T13:09:47.383Z",
				"__v": 2,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				}
			},
			{
				"_id": "642ec1415da0c4de9effbda8",
				"ticketType": "INCIDENT",
				"ticketId": "54",
				"issueCategory": "LOSS OF INTERNET",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 2,
				"severity": "Low",
				"images": [
					"image-1680785727393.png"
				],
				"finalStatus": "Completed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ec17d5da0c4de9effbe8f",
						"createdAt": "2023-04-06T12:56:29.438Z"
					},
					{
						"status": "Completed",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ec4335da0c4de9effc13d",
						"createdAt": "2023-04-06T13:08:03.789Z"
					}
				],
				"createdAt": "2023-04-06T12:55:29.818Z",
				"__v": 2,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "642ec12f5da0c4de9effbd99",
				"ticketType": "INCIDENT",
				"ticketId": "53",
				"issueCategory": "Request For Call logs",
				"issueDescription": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
				"affectedUsers": 6,
				"severity": "Medium",
				"images": [],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ec3d35da0c4de9effc053",
						"createdAt": "2023-04-06T13:06:27.269Z"
					}
				],
				"createdAt": "2023-04-06T12:55:11.014Z",
				"__v": 1,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "641c34782f77432e67e5cdb8",
				"ticketType": "INCIDENT",
				"ticketId": "52",
				"issueCategory": "IVR Issue",
				"issueDescription": "IVR can not be reached",
				"affectedUsers": 5,
				"severity": "Low",
				"images": [],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "641c34352f77432e67e5cd87",
					"firstname": "Test",
					"lastname": "User",
					"email": "test2@example.com",
					"phoneNumber": "08177666666",
					"isActive": true,
					"role": "623464be08418e5846f6790f",
					"client": "623464a508418e5846f6790a",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "",
					"createdAt": "2023-03-23T11:12:53.310Z",
					"__v": 0,
					"lastLoginDate": "2023-03-23T11:13:05.639Z",
					"id": "641c34352f77432e67e5cd87"
				},
				"client": {
					"_id": "623464a508418e5846f6790a",
					"client": "Access Bank",
					"clientCode": "Access",
					"createdAt": "2022-03-18T10:53:25.567Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "What do mean",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "641c35162f77432e67e5cf53",
						"createdAt": "2023-03-23T11:16:38.322Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "641c34c62f77432e67e5ce93",
						"createdAt": "2023-03-23T11:15:18.223Z"
					},
					{
						"status": "Completed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "641c35332f77432e67e5cf70",
						"createdAt": "2023-03-23T11:17:07.087Z"
					},
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ec2ba5da0c4de9effbfac",
						"createdAt": "2023-04-06T13:01:46.840Z"
					}
				],
				"createdAt": "2023-03-23T11:14:00.614Z",
				"__v": 4,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "63ea57542b1213d94f9a470e",
				"ticketType": "SERVICE",
				"ticketId": "51",
				"issueCategory": "Agent's Access Reactivation",
				"issueDescription": "jjjjjjjj",
				"affectedUsers": 10,
				"severity": "Medium",
				"images": [],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "hi\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "640c3a23236ba1f5477d6ce5",
						"createdAt": "2023-03-11T08:21:55.434Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "62be26efadff4b73dd42d684",
						"_id": "640c39cd236ba1f5477d6b3a",
						"createdAt": "2023-03-11T08:20:29.617Z"
					}
				],
				"createdAt": "2023-02-13T15:29:24.079Z",
				"__v": 2,
				"assignedTo": {
					"_id": "630dd6ddf20e611ac7930449",
					"firstname": "Ayorinde",
					"lastname": "Rinde",
					"email": "ayo@gmail.com",
					"phoneNumber": "09022222222",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1661851267110.jpeg",
					"createdAt": "2022-08-30T09:22:37.448Z",
					"__v": 0,
					"lastLoginDate": "2022-08-30T09:42:20.602Z",
					"isActive": true,
					"id": "630dd6ddf20e611ac7930449"
				}
			},
			{
				"_id": "63ea572f2b1213d94f9a46e6",
				"ticketType": "INCIDENT",
				"ticketId": "50",
				"issueCategory": "Email Delivery Issue ",
				"issueDescription": "kk",
				"affectedUsers": 3,
				"severity": "Low",
				"images": [],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cec8d51c665c2015e87f92",
					"firstname": "John",
					"lastname": "Adibe",
					"email": "john.adibe@yahoo.com",
					"phoneNumber": " 62850755",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cec8551c665c2015e87f78",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1690284570448.png",
					"createdAt": "2022-07-13T13:29:57.993Z",
					"__v": 0,
					"lastLoginDate": "2024-02-20T08:58:18.261Z",
					"id": "62cec8d51c665c2015e87f92"
				},
				"client": {
					"_id": "62cec8551c665c2015e87f78",
					"client": "kuda",
					"clientCode": "kuda Bank",
					"createdAt": "2022-07-13T13:27:49.043Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ebd335da0c4de9effb73f",
						"createdAt": "2023-04-06T12:38:11.669Z"
					},
					{
						"status": "Completed",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ec41b5da0c4de9effc0d6",
						"createdAt": "2023-04-06T13:07:39.342Z"
					},
					{
						"status": "Closed",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ed2655da0c4de9effcff7",
						"createdAt": "2023-04-06T14:08:37.221Z"
					}
				],
				"createdAt": "2023-02-13T15:28:47.780Z",
				"__v": 3,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"closedAt": "2023-04-06T14:08:37.220Z"
			},
			{
				"_id": "637cddec833ad5edb421e1f6",
				"ticketType": "INCIDENT",
				"ticketId": "49",
				"issueCategory": "Application Issue",
				"issueDescription": "thut",
				"affectedUsers": 5,
				"severity": "Low",
				"images": [],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ebdc15da0c4de9effb77e",
						"createdAt": "2023-04-06T12:40:33.309Z"
					},
					{
						"status": "Completed",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ec2755da0c4de9effbf5d",
						"createdAt": "2023-04-06T13:00:37.823Z"
					},
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ecd9e5da0c4de9effc8dd",
						"createdAt": "2023-04-06T13:48:14.180Z"
					},
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ed2a25da0c4de9effd083",
						"createdAt": "2023-04-06T14:09:38.633Z"
					}
				],
				"createdAt": "2022-11-22T14:34:20.121Z",
				"__v": 4,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "635e6434fc653ff790f147ef",
				"ticketType": "SERVICE",
				"ticketId": "48",
				"issueCategory": "License Issue",
				"issueDescription": "testing",
				"affectedUsers": 11,
				"severity": "High",
				"images": [
					"image-1667130413075.jpg"
				],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "625dd12f8024b66a580a758e",
					"firstname": "chinedugmail.com",
					"lastname": "gmail.com",
					"email": "chinedu.go@gmail.com",
					"phoneNumber": "+2348062850763",
					"role": "625d81b741b7eaade9af7ed8",
					"client": "625591a3291fe357244f7ba5",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1667130438347.jpg",
					"createdAt": "2022-04-18T20:59:27.848Z",
					"__v": 0,
					"isActive": true,
					"lastLoginDate": "2022-12-01T04:48:01.289Z",
					"resetPasswordExpire": "2022-12-01T06:52:57.183Z",
					"resetPasswordToken": "1c4025aed4bddd6d1ddf00bb5d003a1744cdbba04ddaac25230ed1394b55dc28",
					"id": "625dd12f8024b66a580a758e"
				},
				"client": {
					"_id": "625591a3291fe357244f7ba5",
					"client": "GT Bank",
					"clientCode": "GT Bank",
					"createdAt": "2022-04-12T14:50:11.562Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ebf475da0c4de9effba0c",
						"createdAt": "2023-04-06T12:47:03.431Z"
					}
				],
				"createdAt": "2022-10-30T11:47:00.295Z",
				"__v": 1,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "631f2c0cf216e2784976a3e2",
				"ticketType": "SERVICE",
				"ticketId": "47",
				"issueCategory": "Email Issue ",
				"issueDescription": "Email password just got expired",
				"affectedUsers": 17,
				"severity": "High",
				"images": [
					"image-1662987241547.png"
				],
				"finalStatus": "Assigned",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ebfa05da0c4de9effba63",
						"createdAt": "2023-04-06T12:48:32.484Z"
					}
				],
				"createdAt": "2022-09-12T12:54:36.121Z",
				"__v": 1,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "6315b5c9cec88919b9b74a5c",
				"ticketType": "SERVICE",
				"ticketId": "46",
				"issueCategory": "Flash Calls As Abandoned Calls",
				"issueDescription": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
				"affectedUsers": 10,
				"severity": "Medium",
				"images": [
					"image-1662367175836.jpg"
				],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318a21e72011afedf181b98",
						"createdAt": "2022-09-07T13:52:30.469Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318a4e572011afedf181e93",
						"createdAt": "2022-09-07T14:04:21.893Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318a4f272011afedf181ede",
						"createdAt": "2022-09-07T14:04:34.690Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6318c3a272011afedf182f42",
						"createdAt": "2022-09-07T16:15:30.323Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "631f2edef216e2784976a52a",
						"createdAt": "2022-09-12T13:06:38.763Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "631f2eeaf216e2784976a53d",
						"createdAt": "2022-09-12T13:06:50.367Z"
					}
				],
				"createdAt": "2022-09-05T08:39:37.804Z",
				"__v": 6,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				},
				"closedAt": "2022-09-12T13:06:50.367Z"
			},
			{
				"_id": "6315ae2ccec88919b9b74a37",
				"ticketType": "SERVICE",
				"ticketId": "45",
				"issueCategory": "Email Issue ",
				"issueDescription": "Can\"t Log in",
				"affectedUsers": 18,
				"severity": "High",
				"images": [
					"image-1662365225371.jpg"
				],
				"finalStatus": "Completed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "resolved perfectly",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "631ef63bba410f56bf9124c9",
						"createdAt": "2022-09-12T09:04:59.537Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318a1e372011afedf181b5c",
						"createdAt": "2022-09-07T13:51:31.442Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318a32572011afedf181d32",
						"createdAt": "2022-09-07T13:56:53.251Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318a33272011afedf181d7d",
						"createdAt": "2022-09-07T13:57:06.761Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318aa5572011afedf1820d6",
						"createdAt": "2022-09-07T14:27:33.849Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318b97272011afedf182d4a",
						"createdAt": "2022-09-07T15:32:02.740Z"
					},
					{
						"status": "Reopen",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "631f319ef216e2784976a9c2",
						"createdAt": "2022-09-12T13:18:22.924Z"
					},
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ec0905da0c4de9effbc3f",
						"createdAt": "2023-04-06T12:52:32.967Z"
					},
					{
						"status": "Completed",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ed5125da0c4de9effd462",
						"createdAt": "2023-04-06T14:20:02.771Z"
					}
				],
				"createdAt": "2022-09-05T08:07:08.459Z",
				"__v": 9,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "6315ad8ecec88919b9b74a1e",
				"ticketType": "INCIDENT",
				"ticketId": "44",
				"issueCategory": "Agents Access Deactivation",
				"issueDescription": "Agents got deactivated unexpectedly",
				"affectedUsers": 6,
				"severity": "Medium",
				"images": [],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318a59472011afedf181fa0",
						"createdAt": "2022-09-07T14:07:16.350Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6318b52672011afedf182708",
						"createdAt": "2022-09-07T15:13:42.296Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6318b5e772011afedf182722",
						"createdAt": "2022-09-07T15:16:55.702Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6318b60672011afedf182735",
						"createdAt": "2022-09-07T15:17:26.990Z"
					}
				],
				"createdAt": "2022-09-05T08:04:30.456Z",
				"__v": 4,
				"assignedTo": {
					"_id": "62bda1ee2e544d671e8fe922",
					"firstname": "asiah",
					"lastname": "latifa",
					"email": "latifa@yahoo.com",
					"phoneNumber": "62850763",
					"isActive": true,
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1658439194668.jpg",
					"createdAt": "2022-06-30T13:15:26.172Z",
					"__v": 0,
					"lastLoginDate": "2022-07-21T21:32:57.589Z",
					"id": "62bda1ee2e544d671e8fe922"
				},
				"closedAt": "2022-09-07T15:17:26.990Z"
			},
			{
				"_id": "630e05d6a5aa0cc852014c61",
				"ticketType": "INCIDENT",
				"ticketId": "43",
				"issueCategory": "NEW CHECK",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "Critical",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Open",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630e0611a5aa0cc852014c6d",
						"createdAt": "2022-08-30T12:44:01.785Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630e0614a5aa0cc852014c73",
						"createdAt": "2022-08-30T12:44:04.618Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630e063e46a454e278ed3099",
						"createdAt": "2022-08-30T12:44:46.108Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630e065164a29e983a0f8205",
						"createdAt": "2022-08-30T12:45:05.596Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630e08b2dc5da9eafeaf31fd",
						"createdAt": "2022-08-30T12:55:14.140Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630e0baa9070d2d6b963d175",
						"createdAt": "2022-08-30T13:07:54.938Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630e155aaf92ce7d7e022e81",
						"createdAt": "2022-08-30T13:49:14.077Z"
					},
					{
						"status": "Open",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630e155daf92ce7d7e022e94",
						"createdAt": "2022-08-30T13:49:17.839Z"
					}
				],
				"createdAt": "2022-08-30T12:43:02.907Z",
				"__v": 8,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				}
			},
			{
				"_id": "630de45af20e611ac7931cc4",
				"ticketType": "CHANGE",
				"ticketId": "42",
				"issueCategory": "New Report Feature",
				"issueDescription": "Kindly create a new propmt",
				"affectedUsers": 6,
				"severity": "Medium",
				"images": [],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630de48df20e611ac7931d46",
						"createdAt": "2022-08-30T10:21:01.229Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630de50df20e611ac7931f43",
						"createdAt": "2022-08-30T10:23:09.815Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630de652f20e611ac7932068",
						"createdAt": "2022-08-30T10:28:34.841Z"
					}
				],
				"createdAt": "2022-08-30T10:20:10.178Z",
				"__v": 3,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				},
				"closedAt": "2022-08-30T10:28:34.841Z"
			},
			{
				"_id": "630dd73df20e611ac79304f3",
				"ticketType": "INCIDENT",
				"ticketId": "41",
				"issueCategory": "Access Creation",
				"issueDescription": "Create new users",
				"affectedUsers": 4,
				"severity": "Low",
				"images": [
					"image-1661851448485.jpeg"
				],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "630dd683f20e611ac793040f",
					"firstname": "Naimat",
					"lastname": "Alabi",
					"email": "naimat@gmail.com",
					"phoneNumber": "09088888888",
					"isActive": false,
					"role": "630dd5b2f20e611ac79303fb",
					"client": "630dd584f20e611ac79303f0",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "",
					"createdAt": "2022-08-30T09:21:07.467Z",
					"__v": 0,
					"lastLoginDate": "2022-08-30T09:45:31.078Z",
					"id": "630dd683f20e611ac793040f"
				},
				"client": {
					"_id": "630dd584f20e611ac79303f0",
					"client": "IQSS",
					"clientCode": "IQSS",
					"createdAt": "2022-08-30T09:16:52.519Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "we will need a default password",
						"images": [
							"image-1661852050043.jpeg"
						],
						"createdBy": "630dd6ddf20e611ac7930449",
						"_id": "630dd994f20e611ac793092d",
						"createdAt": "2022-08-30T09:34:12.813Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630dd87bf20e611ac79305c2",
						"createdAt": "2022-08-30T09:29:31.907Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630dd932f20e611ac7930870",
						"createdAt": "2022-08-30T09:32:34.109Z"
					},
					{
						"status": "Completed",
						"createdBy": "630dd683f20e611ac793040f",
						"_id": "630dda59f20e611ac7930a68",
						"createdAt": "2022-08-30T09:37:29.524Z"
					},
					{
						"status": "Closed",
						"createdBy": "630dd6ddf20e611ac7930449",
						"_id": "630ddb01f20e611ac7930b55",
						"createdAt": "2022-08-30T09:40:17.493Z"
					},
					{
						"status": "Completed",
						"createdBy": "630dd683f20e611ac793040f",
						"_id": "630ddb32f20e611ac7930c33",
						"createdAt": "2022-08-30T09:41:06.826Z"
					},
					{
						"status": "Closed",
						"createdBy": "630dd683f20e611ac793040f",
						"_id": "630ddb3df20e611ac7930c5c",
						"createdAt": "2022-08-30T09:41:17.968Z"
					},
					{
						"status": "Completed",
						"createdBy": "630dd683f20e611ac793040f",
						"_id": "630ddb64f20e611ac7930d22",
						"createdAt": "2022-08-30T09:41:56.597Z"
					},
					{
						"status": "Closed",
						"createdBy": "630dd683f20e611ac793040f",
						"_id": "630ddc43f20e611ac7930e7f",
						"createdAt": "2022-08-30T09:45:39.568Z"
					}
				],
				"createdAt": "2022-08-30T09:24:13.547Z",
				"__v": 9,
				"assignedTo": {
					"_id": "630dd6ddf20e611ac7930449",
					"firstname": "Ayorinde",
					"lastname": "Rinde",
					"email": "ayo@gmail.com",
					"phoneNumber": "09022222222",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1661851267110.jpeg",
					"createdAt": "2022-08-30T09:22:37.448Z",
					"__v": 0,
					"lastLoginDate": "2022-08-30T09:42:20.602Z",
					"isActive": true,
					"id": "630dd6ddf20e611ac7930449"
				},
				"closedAt": "2022-08-30T09:45:39.567Z"
			},
			{
				"_id": "6304e7fb14c1660beabe7636",
				"ticketType": "INCIDENT",
				"ticketId": "40",
				"issueCategory": "Total DOWNTIME",
				"issueDescription": "just testing...",
				"affectedUsers": null,
				"severity": "Critical",
				"images": [
					"image-1661265913200.jpeg"
				],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "630dddf5f20e611ac7931081",
						"createdAt": "2022-08-30T09:52:53.206Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630dde30f20e611ac7931164",
						"createdAt": "2022-08-30T09:53:52.332Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630ddfc3f20e611ac793127d",
						"createdAt": "2022-08-30T10:00:35.838Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630ddffdf20e611ac7931301",
						"createdAt": "2022-08-30T10:01:33.406Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "630de07bf20e611ac79314be",
						"createdAt": "2022-08-30T10:03:39.694Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630de14af20e611ac7931637",
						"createdAt": "2022-08-30T10:07:06.323Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630de23cf20e611ac7931672",
						"createdAt": "2022-08-30T10:11:08.574Z"
					}
				],
				"createdAt": "2022-08-23T14:45:15.981Z",
				"__v": 7,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"closedAt": "2022-08-30T10:11:08.573Z"
			},
			{
				"_id": "6304cd5d14c1660beabe708a",
				"ticketType": "INCIDENT",
				"ticketId": "39",
				"issueCategory": "Access Creation",
				"issueDescription": "new testing testing...",
				"affectedUsers": 6,
				"severity": "Medium",
				"images": [
					"image-1661259094498.png"
				],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630dde3af20e611ac793118a",
						"createdAt": "2022-08-30T09:54:02.742Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630dde52f20e611ac79311ca",
						"createdAt": "2022-08-30T09:54:26.908Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630ddefdf20e611ac793120a",
						"createdAt": "2022-08-30T09:57:17.108Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630de009f20e611ac7931327",
						"createdAt": "2022-08-30T10:01:45.746Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630de247f20e611ac79316c7",
						"createdAt": "2022-08-30T10:11:19.628Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630dec49f20e611ac7932366",
						"createdAt": "2022-08-30T10:54:01.420Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630df428f20e611ac793292a",
						"createdAt": "2022-08-30T11:27:36.683Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318a0f672011afedf181a92",
						"createdAt": "2022-09-07T13:47:34.029Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318b6ed72011afedf182a11",
						"createdAt": "2022-09-07T15:21:17.485Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318b70f72011afedf182a38",
						"createdAt": "2022-09-07T15:21:51.925Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318ca3f72011afedf1832d7",
						"createdAt": "2022-09-07T16:43:43.848Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318ca5272011afedf18333c",
						"createdAt": "2022-09-07T16:44:02.542Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318ca7f72011afedf18334f",
						"createdAt": "2022-09-07T16:44:47.806Z"
					}
				],
				"createdAt": "2022-08-23T12:51:41.169Z",
				"__v": 13,
				"assignedTo": {
					"_id": "6234651908418e5846f6791a",
					"firstname": "Testing...",
					"lastname": "LASTTEST",
					"email": "test@example.com",
					"phoneNumber": "08161719897",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "",
					"createdAt": "2022-03-18T10:55:21.956Z",
					"__v": 0,
					"lastLoginDate": "2022-11-24T08:16:01.615Z",
					"isActive": true,
					"id": "6234651908418e5846f6791a"
				},
				"closedAt": "2022-09-07T16:44:47.806Z"
			},
			{
				"_id": "6304cc4814c1660beabe6f0c",
				"ticketType": "SERVICE",
				"ticketId": "38",
				"issueCategory": "INABILITY TO ACCESS SIEBEL",
				"issueDescription": "come to testing",
				"affectedUsers": 6,
				"severity": "Medium",
				"images": [
					"image-1661258818203.png"
				],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "testing.. new",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304cc9e14c1660beabe6fe9",
						"createdAt": "2022-08-23T12:48:30.876Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304cc6b14c1660beabe6fb0",
						"createdAt": "2022-08-23T12:47:39.185Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304cccd14c1660beabe7006",
						"createdAt": "2022-08-23T12:49:17.661Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6305f87c11de2edadf772f59",
						"createdAt": "2022-08-24T10:07:56.327Z"
					}
				],
				"createdAt": "2022-08-23T12:47:04.771Z",
				"__v": 4,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"closedAt": "2022-08-24T10:07:56.326Z"
			},
			{
				"_id": "6304a4453f2506a2fbc43b81",
				"ticketType": "CHANGE",
				"ticketId": "37",
				"issueCategory": "Modify Existing IVR",
				"issueDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
				"affectedUsers": 3,
				"severity": "Low",
				"images": [],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "62cecdcd1c665c2015e88291",
					"firstname": "Aisha",
					"lastname": "mutiu",
					"email": "m.aishat9890@gmail.com",
					"phoneNumber": "+23480628 ",
					"isActive": true,
					"role": "62553e88291fe357244f7338",
					"client": "62cecd031c665c2015e88258",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1657720267629.png",
					"createdAt": "2022-07-13T13:51:09.458Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:22:00.538Z",
					"id": "62cecdcd1c665c2015e88291"
				},
				"client": {
					"_id": "62cecd031c665c2015e88258",
					"client": "Opay",
					"clientCode": "Opay Money",
					"createdAt": "2022-07-13T13:47:47.546Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304a8f33f2506a2fbc44010",
						"createdAt": "2022-08-23T10:16:19.689Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304b9253f2506a2fbc44c84",
						"createdAt": "2022-08-23T11:25:25.689Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305f0bc11de2edadf772d90",
						"createdAt": "2022-08-24T09:34:52.371Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305f1d511de2edadf772e03",
						"createdAt": "2022-08-24T09:39:33.335Z"
					}
				],
				"createdAt": "2022-08-23T09:56:21.031Z",
				"__v": 4,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"closedAt": "2022-08-24T09:39:33.335Z"
			},
			{
				"_id": "6303e6acdbd8d261a1c878dd",
				"ticketType": "INCIDENT",
				"ticketId": "36",
				"issueCategory": "Bad Laptop Battery",
				"issueDescription": "testing...",
				"affectedUsers": 23,
				"severity": "High",
				"images": [],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "just testing,,",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "63049d8d3f2506a2fbc43901",
						"createdAt": "2022-08-23T09:27:41.497Z"
					},
					{
						"comment": "Reference site about Lorem Ipsum, giving information on its origins, as well as a random\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "63049f933f2506a2fbc4391e",
						"createdAt": "2022-08-23T09:36:19.421Z"
					},
					{
						"comment": "g",
						"images": [],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630c87e735fe24cadb94db49",
						"createdAt": "2022-08-29T09:33:27.986Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6303fe58dbd8d261a1c887c8",
						"createdAt": "2022-08-22T22:08:24.941Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304be653f2506a2fbc45049",
						"createdAt": "2022-08-23T11:47:49.883Z"
					}
				],
				"createdAt": "2022-08-22T20:27:24.358Z",
				"__v": 5,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				},
				"closedAt": "2022-08-23T11:47:49.881Z"
			},
			{
				"_id": "6302782f305b40be35edc795",
				"ticketType": "INCIDENT",
				"ticketId": "35",
				"issueCategory": "Product Issue",
				"issueDescription": "thet",
				"affectedUsers": 77,
				"severity": "High",
				"images": [],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "thnks",
						"images": [],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630602ef11de2edadf77301e",
						"createdAt": "2022-08-24T10:52:31.143Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304ab503f2506a2fbc4423e",
						"createdAt": "2022-08-23T10:26:24.261Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305efef11de2edadf772bb1",
						"createdAt": "2022-08-24T09:31:27.944Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6305fb7e11de2edadf772fbf",
						"createdAt": "2022-08-24T10:20:46.223Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63060a9911de2edadf773173",
						"createdAt": "2022-08-24T11:25:13.997Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630627281be9f7a683c29bbd",
						"createdAt": "2022-08-24T13:27:04.655Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6306276e1be9f7a683c29bea",
						"createdAt": "2022-08-24T13:28:14.099Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63062a151be9f7a683c29c77",
						"createdAt": "2022-08-24T13:39:33.004Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630c87de35fe24cadb94db20",
						"createdAt": "2022-08-29T09:33:18.020Z"
					}
				],
				"createdAt": "2022-08-21T18:23:43.303Z",
				"__v": 9,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"closedAt": "2022-08-29T09:33:18.018Z"
			},
			{
				"_id": "630276bd305b40be35edc778",
				"ticketType": "INCIDENT",
				"ticketId": "34",
				"issueCategory": "Email Delivery Issue",
				"issueDescription": "rtdth",
				"affectedUsers": 5,
				"severity": "Low",
				"images": [],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6303f079dbd8d261a1c87c11",
						"createdAt": "2022-08-22T21:09:13.726Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304ab093f2506a2fbc441e7",
						"createdAt": "2022-08-23T10:25:13.926Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304ade33f2506a2fbc445d0",
						"createdAt": "2022-08-23T10:37:23.626Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305f04a11de2edadf772c74",
						"createdAt": "2022-08-24T09:32:58.587Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "630dde17f20e611ac79310da",
						"createdAt": "2022-08-30T09:53:27.556Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630de3ccf20e611ac7931bac",
						"createdAt": "2022-08-30T10:17:48.004Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630de3d6f20e611ac7931bed",
						"createdAt": "2022-08-30T10:17:58.392Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630debeaf20e611ac79322ee",
						"createdAt": "2022-08-30T10:52:26.027Z"
					},
					{
						"status": "Completed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "630e027746a454e278ed29b6",
						"createdAt": "2022-08-30T12:28:39.721Z"
					},
					{
						"status": "Closed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "630e02b246a454e278ed29db",
						"createdAt": "2022-08-30T12:29:38.660Z"
					}
				],
				"createdAt": "2022-08-21T18:17:33.506Z",
				"__v": 10,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				},
				"closedAt": "2022-08-30T12:29:38.659Z"
			},
			{
				"_id": "62f9ff179a6982c28ba7cdc1",
				"ticketType": "INCIDENT",
				"ticketId": "33",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "Critical",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304a9903f2506a2fbc44087",
						"createdAt": "2022-08-23T10:18:56.642Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304ae6b3f2506a2fbc44627",
						"createdAt": "2022-08-23T10:39:39.584Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305ea9e11de2edadf7727f1",
						"createdAt": "2022-08-24T09:08:46.349Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630ddfeaf20e611ac79312a3",
						"createdAt": "2022-08-30T10:01:14.433Z"
					},
					{
						"status": "Completed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "630de261f20e611ac793176f",
						"createdAt": "2022-08-30T10:11:45.522Z"
					},
					{
						"status": "Closed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "631885d310a34c546fb0514b",
						"createdAt": "2022-09-07T11:51:47.953Z"
					}
				],
				"createdAt": "2022-08-15T08:08:55.554Z",
				"__v": 6,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				},
				"closedAt": "2022-09-07T11:51:47.953Z"
			},
			{
				"_id": "62f9fe1bc9abdf9be25fe9bc",
				"ticketType": "INCIDENT",
				"ticketId": "32",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Assigned",
				"criticalStatus": "Critical",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630400f1dbd8d261a1c8890c",
						"createdAt": "2022-08-22T22:19:29.683Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "631f312ef216e2784976a917",
						"createdAt": "2022-09-12T13:16:30.432Z"
					},
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ed3b95da0c4de9effd2e3",
						"createdAt": "2023-04-06T14:14:17.468Z"
					}
				],
				"createdAt": "2022-08-15T08:04:43.034Z",
				"__v": 3,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "62f259aa4c93666047694552",
				"ticketType": "INCIDENT",
				"ticketId": "31",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62f259b64c93666047694558",
						"createdAt": "2022-08-09T12:57:26.339Z"
					},
					{
						"status": "Unassigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62f25a21f3d17f8e4828ebf8",
						"createdAt": "2022-08-09T12:59:13.789Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62f25a30f3d17f8e4828ec03",
						"createdAt": "2022-08-09T12:59:28.907Z"
					}
				],
				"createdAt": "2022-08-09T12:57:14.302Z",
				"__v": 3,
				"closedAt": "2022-08-09T12:59:28.906Z"
			},
			{
				"_id": "62f25774d3cd3b98e60ea13c",
				"ticketType": "INCIDENT",
				"ticketId": "30",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Closed",
				"criticalStatus": "Critical",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62f2592d059abd7ba13ea235",
						"createdAt": "2022-08-09T12:55:09.621Z"
					}
				],
				"createdAt": "2022-08-09T12:47:48.434Z",
				"__v": 1
			},
			{
				"_id": "62f256b1de46431284dbd98f",
				"ticketType": "INCIDENT",
				"ticketId": "29",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Reopen",
				"criticalStatus": "Critical",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304b9893f2506a2fbc44d4c",
						"createdAt": "2022-08-23T11:27:05.590Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630e02f346a454e278ed2b25",
						"createdAt": "2022-08-30T12:30:43.467Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "631f3144f216e2784976a96c",
						"createdAt": "2022-09-12T13:16:52.632Z"
					}
				],
				"createdAt": "2022-08-09T12:44:33.931Z",
				"__v": 3,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "62f255f24b66cd3baf67e3d0",
				"ticketType": "INCIDENT",
				"ticketId": "28",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Assigned",
				"criticalStatus": "Critical",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ebea25da0c4de9effb908",
						"createdAt": "2023-04-06T12:44:18.691Z"
					}
				],
				"createdAt": "2022-08-09T12:41:22.766Z",
				"__v": 1,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "62f25597284e43e8dff494a9",
				"ticketType": "INCIDENT",
				"ticketId": "27",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Completed",
				"criticalStatus": "Critical",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "thank you",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fe6431609e3860c9ae2435",
						"createdAt": "2022-08-18T16:09:21.275Z"
					},
					{
						"comment": "Kindly recheck",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62feeebfa27da2a60a4f6c55",
						"createdAt": "2022-08-19T02:00:31.375Z"
					},
					{
						"comment": "Thanks\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fef1d6a27da2a60a4f6e12",
						"createdAt": "2022-08-19T02:13:42.111Z"
					},
					{
						"comment": "kindly recheck",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fef471a27da2a60a4f6ec9",
						"createdAt": "2022-08-19T02:24:49.331Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62fe050c0ddea19532406ea3",
						"createdAt": "2022-08-18T09:23:24.629Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62fe4e62609e3860c9ae17ad",
						"createdAt": "2022-08-18T14:36:18.427Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62fe4ea0609e3860c9ae17e1",
						"createdAt": "2022-08-18T14:37:20.477Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62fe5397609e3860c9ae1dd5",
						"createdAt": "2022-08-18T14:58:31.876Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305ec9e11de2edadf772a1a",
						"createdAt": "2022-08-24T09:17:18.125Z"
					}
				],
				"createdAt": "2022-08-09T12:39:51.435Z",
				"__v": 9,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "62f2554473d49c4c525c5e41",
				"ticketType": "INCIDENT",
				"ticketId": "26",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Closed",
				"criticalStatus": "Not Critical",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304aea93f2506a2fbc446a7",
						"createdAt": "2022-08-23T10:40:41.747Z"
					},
					{
						"status": "Completed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "631887cc10a34c546fb051eb",
						"createdAt": "2022-09-07T12:00:12.062Z"
					},
					{
						"status": "Closed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "63ea26ddeb28a00517bfbebd",
						"createdAt": "2023-02-13T12:02:37.311Z"
					}
				],
				"createdAt": "2022-08-09T12:38:28.320Z",
				"__v": 3,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				},
				"closedAt": "2023-02-13T12:02:37.298Z"
			},
			{
				"criticalStatus": "Not Critical",
				"_id": "62e1c4efa7b07dea14ab5dab",
				"ticketType": "INCIDENT",
				"ticketId": "25",
				"issueCategory": "Network Issue",
				"issueDescription": "testing",
				"affectedUsers": 17,
				"severity": "High",
				"images": [
					"image-1658963173184.PNG"
				],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "how far",
						"images": [
							"image-1658963429879.PNG"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62e1c5f4a7b07dea14ab5eaf",
						"createdAt": "2022-07-27T23:10:44.373Z"
					},
					{
						"comment": "am working on it",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62e1c6afa7b07dea14ab5fb9",
						"createdAt": "2022-07-27T23:13:51.164Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62e1c5c0a7b07dea14ab5e6f",
						"createdAt": "2022-07-27T23:09:52.118Z"
					},
					{
						"status": "Completed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62e1c6c4a7b07dea14ab601a",
						"createdAt": "2022-07-27T23:14:12.987Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62e2346683d7e8623053dd79",
						"createdAt": "2022-07-28T07:01:58.951Z"
					}
				],
				"createdAt": "2022-07-27T23:06:23.648Z",
				"__v": 5,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				}
			},
			{
				"_id": "62dff30920e7f065db0f0ef2",
				"ticketType": "SERVICE",
				"ticketId": "24",
				"issueCategory": "License Issue",
				"issueDescription": "yyy",
				"affectedUsers": 6,
				"severity": "Medium",
				"images": [
					"image-1658843912799.png"
				],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "62b09658d834d5c0c189696e",
					"firstname": " mail.com",
					"lastname": "Admin",
					"email": "godvvvvbbbil@yahoo.com",
					"phoneNumber": " 850763",
					"isActive": true,
					"role": "625d80ca41b7eaade9af7ea5",
					"client": "623c3a28d910f5b2039e19f3",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1655739977332.jpg",
					"createdAt": "2022-06-20T15:46:32.059Z",
					"__v": 0,
					"lastLoginDate": "2022-07-27T11:17:10.776Z",
					"id": "62b09658d834d5c0c189696e"
				},
				"client": {
					"_id": "623c3a28d910f5b2039e19f3",
					"client": "Wema",
					"clientCode": "wema",
					"createdAt": "2022-03-24T09:30:16.899Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630ddd76f20e611ac7931001",
						"createdAt": "2022-08-30T09:50:46.553Z"
					},
					{
						"status": "Completed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "630de678f20e611ac7932163",
						"createdAt": "2022-08-30T10:29:12.698Z"
					},
					{
						"status": "Closed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "630de67cf20e611ac7932176",
						"createdAt": "2022-08-30T10:29:16.953Z"
					}
				],
				"createdAt": "2022-07-26T13:58:33.975Z",
				"__v": 3,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				},
				"criticalStatus": "Not Critical",
				"closedAt": "2022-08-30T10:29:16.953Z"
			},
			{
				"_id": "62dff2f620e7f065db0f0ed9",
				"ticketType": "INCIDENT",
				"ticketId": "23",
				"issueCategory": "IVR Issue",
				"issueDescription": "rrrr",
				"affectedUsers": 5,
				"severity": "Low",
				"images": [
					"image-1658843893232.png"
				],
				"finalStatus": "Assigned",
				"createdBy": {
					"_id": "62b09658d834d5c0c189696e",
					"firstname": " mail.com",
					"lastname": "Admin",
					"email": "godvvvvbbbil@yahoo.com",
					"phoneNumber": " 850763",
					"isActive": true,
					"role": "625d80ca41b7eaade9af7ea5",
					"client": "623c3a28d910f5b2039e19f3",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1655739977332.jpg",
					"createdAt": "2022-06-20T15:46:32.059Z",
					"__v": 0,
					"lastLoginDate": "2022-07-27T11:17:10.776Z",
					"id": "62b09658d834d5c0c189696e"
				},
				"client": {
					"_id": "623c3a28d910f5b2039e19f3",
					"client": "Wema",
					"clientCode": "wema",
					"createdAt": "2022-03-24T09:30:16.899Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "done\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fef5fea27da2a60a4f6f81",
						"createdAt": "2022-08-19T02:31:26.660Z"
					},
					{
						"comment": "thnks",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fef77da27da2a60a4f705d",
						"createdAt": "2022-08-19T02:37:49.973Z"
					},
					{
						"comment": "thnks",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fef787a27da2a60a4f7062",
						"createdAt": "2022-08-19T02:37:59.366Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62fe04fd0ddea19532406e78",
						"createdAt": "2022-08-18T09:23:09.775Z"
					}
				],
				"createdAt": "2022-07-26T13:58:14.598Z",
				"__v": 4,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"criticalStatus": "Not Critical"
			},
			{
				"_id": "62dfdaed20e7f065db0ef575",
				"ticketType": "INCIDENT",
				"ticketId": "22",
				"issueCategory": "LOSS OF INTERNET",
				"issueDescription": "fff",
				"affectedUsers": 44,
				"severity": "High",
				"images": [],
				"finalStatus": "Assigned",
				"createdBy": {
					"_id": "625e6e172d1ee92302ec740f",
					"firstname": "Pascal",
					"lastname": "Ojinnaka",
					"email": "pascal.ojinnaka@outcess.com",
					"phoneNumber": "08161718760",
					"role": "62553e88291fe357244f7338",
					"client": "625e6d822d1ee92302ec7400",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1657718762789.jpeg",
					"createdAt": "2022-04-19T08:08:55.711Z",
					"__v": 0,
					"isActive": true,
					"lastLoginDate": "2022-07-26T12:15:19.476Z",
					"id": "625e6e172d1ee92302ec740f"
				},
				"client": {
					"_id": "625e6d822d1ee92302ec7400",
					"client": "AG-MORTAGE",
					"clientCode": "AG",
					"createdAt": "2022-04-19T08:06:26.459Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "Congratulations ",
						"images": [
							"image-1658938747874.jpeg"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62e1657f8522572ed78b8255",
						"createdAt": "2022-07-27T16:19:11.147Z"
					},
					{
						"comment": "Meeting at home ",
						"images": [
							"image-1658938937360.jpeg"
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62e1663c8522572ed78b842c",
						"createdAt": "2022-07-27T16:22:20.024Z"
					},
					{
						"comment": "good to go!",
						"images": [
							"image-1659158941519.png"
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62e4c1b03112d53684f2ee24",
						"createdAt": "2022-07-30T05:29:20.350Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62dfed3f20e7f065db0f0a57",
						"createdAt": "2022-07-26T13:33:51.857Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62fe54b7609e3860c9ae1e0a",
						"createdAt": "2022-08-18T15:03:19.512Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fe5ba6609e3860c9ae1fa3",
						"createdAt": "2022-08-18T15:32:54.575Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "6303fdb1dbd8d261a1c88671",
						"createdAt": "2022-08-22T22:05:37.891Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305e9ce11de2edadf7726c6",
						"createdAt": "2022-08-24T09:05:18.527Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "630de086f20e611ac79314e4",
						"createdAt": "2022-08-30T10:03:50.955Z"
					}
				],
				"createdAt": "2022-07-26T12:15:41.892Z",
				"__v": 9,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"criticalStatus": "Not Critical"
			},
			{
				"_id": "62dfd94920e7f065db0ef2f0",
				"ticketType": "SERVICE",
				"ticketId": "21",
				"issueCategory": "License Issue",
				"issueDescription": "fff",
				"affectedUsers": 66,
				"severity": "High",
				"images": [
					"image-1658837318994.png"
				],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "gotten\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff77e4dfe30baf9c2c9bb9",
						"createdAt": "2022-08-19T11:45:40.942Z"
					},
					{
						"comment": "thanks\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ffe58112cd509e6b77aff1",
						"createdAt": "2022-08-19T19:33:21.950Z"
					},
					{
						"comment": "testing admin part",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6303e81ddbd8d261a1c879d0",
						"createdAt": "2022-08-22T20:33:33.787Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62dff0f420e7f065db0f0d0d",
						"createdAt": "2022-07-26T13:49:40.318Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305dd6911de2edadf771cad",
						"createdAt": "2022-08-24T08:12:25.457Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305dd7611de2edadf771cc2",
						"createdAt": "2022-08-24T08:12:38.214Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630601de11de2edadf772ff2",
						"createdAt": "2022-08-24T10:47:58.054Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63060b6211de2edadf7731ad",
						"createdAt": "2022-08-24T11:28:34.323Z"
					}
				],
				"createdAt": "2022-07-26T12:08:41.238Z",
				"__v": 8,
				"assignedTo": {
					"_id": "62bda1ee2e544d671e8fe922",
					"firstname": "asiah",
					"lastname": "latifa",
					"email": "latifa@yahoo.com",
					"phoneNumber": "62850763",
					"isActive": true,
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1658439194668.jpg",
					"createdAt": "2022-06-30T13:15:26.172Z",
					"__v": 0,
					"lastLoginDate": "2022-07-21T21:32:57.589Z",
					"id": "62bda1ee2e544d671e8fe922"
				},
				"criticalStatus": "Not Critical",
				"closedAt": "2022-08-24T11:28:34.323Z"
			},
			{
				"_id": "62dfc0d420e7f065db0edf51",
				"ticketType": "CHANGE",
				"ticketId": "20",
				"issueCategory": "Modify Existing IVR",
				"issueDescription": "gggggg",
				"affectedUsers": 66,
				"severity": "High",
				"images": [],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "Congratulations ",
						"images": [
							"image-1660321768909.jpeg"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62f67fed577707eba6778740",
						"createdAt": "2022-08-12T16:29:33.370Z"
					},
					{
						"comment": "Thnks\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff05cda27da2a60a4f7950",
						"createdAt": "2022-08-19T03:38:53.226Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dfcef620e7f065db0ee97d",
						"createdAt": "2022-07-26T11:24:38.644Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fe5c24609e3860c9ae205c",
						"createdAt": "2022-08-18T15:35:00.083Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305e49311de2edadf77213e",
						"createdAt": "2022-08-24T08:42:59.847Z"
					}
				],
				"createdAt": "2022-07-26T10:24:20.523Z",
				"__v": 5,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				},
				"criticalStatus": "Not Critical",
				"closedAt": "2022-08-24T08:42:59.846Z"
			},
			{
				"_id": "62dea5699d9009201bace096",
				"ticketType": "INCIDENT",
				"ticketId": "19",
				"issueCategory": "Prompt",
				"issueDescription": "Promot not playing account balance",
				"affectedUsers": 11,
				"severity": "High",
				"images": [],
				"finalStatus": "Assigned",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "how far",
						"images": [],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "62e1c538a7b07dea14ab5dd3",
						"createdAt": "2022-07-27T23:07:36.181Z"
					},
					{
						"comment": "good",
						"images": [
							"image-1658963274510.PNG"
						],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "62e1c54da7b07dea14ab5de2",
						"createdAt": "2022-07-27T23:07:57.724Z"
					},
					{
						"comment": "ergs",
						"images": [],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63027f49305b40be35edc9f9",
						"createdAt": "2022-08-21T18:54:01.015Z"
					},
					{
						"comment": "hshffghx",
						"images": [],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6302800f305b40be35edca0e",
						"createdAt": "2022-08-21T18:57:19.953Z"
					},
					{
						"comment": "testing the comment",
						"images": [],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6303e774dbd8d261a1c878f1",
						"createdAt": "2022-08-22T20:30:44.349Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62df1e2decddcbc7f49fe07a",
						"createdAt": "2022-07-25T22:50:21.748Z"
					}
				],
				"createdAt": "2022-07-25T14:15:05.677Z",
				"__v": 6,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"criticalStatus": "Not Critical"
			},
			{
				"_id": "62de4d02eb40fee72279c400",
				"ticketType": "SERVICE",
				"ticketId": "18",
				"issueCategory": "Password Issue",
				"issueDescription": "Password Reset",
				"affectedUsers": 1,
				"severity": "Low",
				"images": [],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "WellDone",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff09daa27da2a60a4f7bf9",
						"createdAt": "2022-08-19T03:56:10.899Z"
					},
					{
						"comment": "Recheck please",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff0cada27da2a60a4f7c9a",
						"createdAt": "2022-08-19T04:08:13.842Z"
					},
					{
						"comment": "done, thanks\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ffe1ce12cd509e6b77aef2",
						"createdAt": "2022-08-19T19:17:34.834Z"
					},
					{
						"comment": "gret",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305e24211de2edadf771ed8",
						"createdAt": "2022-08-24T08:33:06.599Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62e1c66ea7b07dea14ab5f4b",
						"createdAt": "2022-07-27T23:12:46.647Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305e34311de2edadf771f9e",
						"createdAt": "2022-08-24T08:37:23.793Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305e43311de2edadf771ff5",
						"createdAt": "2022-08-24T08:41:23.977Z"
					}
				],
				"createdAt": "2022-07-25T07:57:54.000Z",
				"__v": 7,
				"assignedTo": {
					"_id": "62bda1ee2e544d671e8fe922",
					"firstname": "asiah",
					"lastname": "latifa",
					"email": "latifa@yahoo.com",
					"phoneNumber": "62850763",
					"isActive": true,
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1658439194668.jpg",
					"createdAt": "2022-06-30T13:15:26.172Z",
					"__v": 0,
					"lastLoginDate": "2022-07-21T21:32:57.589Z",
					"id": "62bda1ee2e544d671e8fe922"
				},
				"criticalStatus": "Not Critical",
				"closedAt": "2022-08-24T08:41:23.977Z"
			},
			{
				"_id": "62de4cefeb40fee72279c3f5",
				"ticketType": "INCIDENT",
				"ticketId": "17",
				"issueCategory": "Calling Issue",
				"issueDescription": "agent not able to call ",
				"affectedUsers": 3,
				"severity": "Low",
				"images": [],
				"finalStatus": "Assigned",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "Done.Thanks\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ffe66a12cd509e6b77b23d",
						"createdAt": "2022-08-19T19:37:14.715Z"
					},
					{
						"comment": "Thanks for resolving",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ffe75d12cd509e6b77b270",
						"createdAt": "2022-08-19T19:41:17.313Z"
					},
					{
						"comment": "Hello check again",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6303350603458a23c49ebe58",
						"createdAt": "2022-08-22T07:49:26.960Z"
					},
					{
						"comment": "khygvyhg",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630336af03458a23c49ebeb7",
						"createdAt": "2022-08-22T07:56:31.413Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62dfedc220e7f065db0f0b59",
						"createdAt": "2022-07-26T13:36:02.455Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62fe5516609e3860c9ae1e3a",
						"createdAt": "2022-08-18T15:04:54.487Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630de301f20e611ac793183e",
						"createdAt": "2022-08-30T10:14:25.055Z"
					},
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ecedc5da0c4de9effc9e7",
						"createdAt": "2023-04-06T13:53:32.843Z"
					}
				],
				"createdAt": "2022-07-25T07:57:35.659Z",
				"__v": 8,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"criticalStatus": "Not Critical"
			},
			{
				"_id": "62de4ce1eb40fee72279c3de",
				"ticketType": "INCIDENT",
				"ticketId": "16",
				"issueCategory": "Application Issue",
				"issueDescription": "Application not loading",
				"affectedUsers": 20,
				"severity": "High",
				"images": [],
				"finalStatus": "Assigned",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62df2570ecddcbc7f49fea54",
						"createdAt": "2022-07-25T23:21:20.936Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630de37cf20e611ac79319cc",
						"createdAt": "2022-08-30T10:16:28.833Z"
					},
					{
						"status": "Assigned",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ecf345da0c4de9effca62",
						"createdAt": "2023-04-06T13:55:00.123Z"
					}
				],
				"createdAt": "2022-07-25T07:57:21.039Z",
				"__v": 3,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"criticalStatus": "Not Critical"
			},
			{
				"criticalStatus": "Not Critical",
				"_id": "62de4ca4eb40fee72279c3d3",
				"ticketType": "INCIDENT",
				"ticketId": "15",
				"issueCategory": "Prompt",
				"issueDescription": "prompt issue",
				"affectedUsers": 5,
				"severity": "Low",
				"images": [],
				"finalStatus": "Assigned",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62df28bfecddcbc7f49fee66",
						"createdAt": "2022-07-25T23:35:27.053Z"
					}
				],
				"createdAt": "2022-07-25T07:56:20.397Z",
				"__v": 1,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "62de4c0deb40fee72279c3ae",
				"ticketType": "SERVICE",
				"ticketId": "14",
				"issueCategory": "Password Issue",
				"issueDescription": "yed",
				"affectedUsers": 20,
				"severity": "High",
				"images": [],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "ggg\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff6ed5dfe30baf9c2c9473",
						"createdAt": "2022-08-19T11:07:01.182Z"
					},
					{
						"comment": "tt",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff7505dfe30baf9c2c998c",
						"createdAt": "2022-08-19T11:33:25.110Z"
					},
					{
						"comment": "yed\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff7535dfe30baf9c2c99eb",
						"createdAt": "2022-08-19T11:34:13.694Z"
					},
					{
						"comment": "yes\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff7641dfe30baf9c2c9a1e",
						"createdAt": "2022-08-19T11:38:41.313Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62df2559ecddcbc7f49fe9b0",
						"createdAt": "2022-07-25T23:20:57.249Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62dfd52420e7f065db0eedde",
						"createdAt": "2022-07-26T11:51:00.296Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305e43e11de2edadf77204e",
						"createdAt": "2022-08-24T08:41:34.054Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63060c0611de2edadf773212",
						"createdAt": "2022-08-24T11:31:18.948Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63060dd811de2edadf773237",
						"createdAt": "2022-08-24T11:39:04.331Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630624221be9f7a683c29a97",
						"createdAt": "2022-08-24T13:14:10.082Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630624281be9f7a683c29aac",
						"createdAt": "2022-08-24T13:14:16.200Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6306243f1be9f7a683c29ac1",
						"createdAt": "2022-08-24T13:14:39.756Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630624511be9f7a683c29ad6",
						"createdAt": "2022-08-24T13:14:57.906Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630624581be9f7a683c29aeb",
						"createdAt": "2022-08-24T13:15:04.235Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6306245b1be9f7a683c29b00",
						"createdAt": "2022-08-24T13:15:07.558Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630625861be9f7a683c29b3d",
						"createdAt": "2022-08-24T13:20:06.448Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630625ee1be9f7a683c29b62",
						"createdAt": "2022-08-24T13:21:50.973Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630626601be9f7a683c29b7f",
						"createdAt": "2022-08-24T13:23:44.329Z"
					}
				],
				"createdAt": "2022-07-25T07:53:49.844Z",
				"__v": 18,
				"assignedTo": {
					"_id": "62be26efadff4b73dd42d684",
					"firstname": "lam",
					"lastname": "man",
					"email": "lam@yahoo.com",
					"phoneNumber": "62850763",
					"isActive": true,
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1656632139670.png",
					"createdAt": "2022-06-30T22:42:55.508Z",
					"__v": 0,
					"lastLoginDate": "2023-03-11T08:19:55.909Z",
					"id": "62be26efadff4b73dd42d684"
				},
				"criticalStatus": "Not Critical",
				"closedAt": "2022-08-24T13:23:44.329Z"
			},
			{
				"_id": "62ddb58d25a5291f916cb921",
				"ticketType": "SERVICE",
				"ticketId": "13",
				"issueCategory": "Email Issue ",
				"issueDescription": "Nullam scelerisque tincidunt elit, ac cursus felis. Donec quis ...",
				"affectedUsers": 4,
				"severity": "Low",
				"images": [
					"image-1658697099638.png"
				],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62df28b3ecddcbc7f49fee10",
						"createdAt": "2022-07-25T23:35:15.781Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62fe5204609e3860c9ae1d37",
						"createdAt": "2022-08-18T14:51:48.917Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62fe528f609e3860c9ae1d5c",
						"createdAt": "2022-08-18T14:54:07.479Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62fe52e6609e3860c9ae1d81",
						"createdAt": "2022-08-18T14:55:34.060Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304be583f2506a2fbc44fb5",
						"createdAt": "2022-08-23T11:47:36.141Z"
					}
				],
				"createdAt": "2022-07-24T21:11:41.352Z",
				"__v": 5,
				"assignedTo": {
					"_id": "62bda1ee2e544d671e8fe922",
					"firstname": "asiah",
					"lastname": "latifa",
					"email": "latifa@yahoo.com",
					"phoneNumber": "62850763",
					"isActive": true,
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1658439194668.jpg",
					"createdAt": "2022-06-30T13:15:26.172Z",
					"__v": 0,
					"lastLoginDate": "2022-07-21T21:32:57.589Z",
					"id": "62bda1ee2e544d671e8fe922"
				},
				"criticalStatus": "Not Critical",
				"closedAt": "2022-08-23T11:47:36.140Z"
			},
			{
				"_id": "62ddb54e25a5291f916cb89e",
				"ticketType": "CHANGE",
				"ticketId": "12",
				"issueCategory": "New IVR Flow ",
				"issueDescription": "Nullam scelerisque tincidunt elit, ac cursus felis. Donec quis ...",
				"affectedUsers": 6,
				"severity": "Medium",
				"images": [
					"image-1658697035911.png"
				],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "Cccc",
						"images": [
							"image-1658812811408.jpeg"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62df79908a7af72ad179fb41",
						"createdAt": "2022-07-26T05:20:16.414Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62df2777ecddcbc7f49fec41",
						"createdAt": "2022-07-25T23:29:59.353Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305e7f311de2edadf772546",
						"createdAt": "2022-08-24T08:57:23.734Z"
					}
				],
				"createdAt": "2022-07-24T21:10:38.587Z",
				"__v": 3,
				"assignedTo": {
					"_id": "62bda1ee2e544d671e8fe922",
					"firstname": "asiah",
					"lastname": "latifa",
					"email": "latifa@yahoo.com",
					"phoneNumber": "62850763",
					"isActive": true,
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1658439194668.jpg",
					"createdAt": "2022-06-30T13:15:26.172Z",
					"__v": 0,
					"lastLoginDate": "2022-07-21T21:32:57.589Z",
					"id": "62bda1ee2e544d671e8fe922"
				},
				"closedAt": "2022-08-24T08:57:23.733Z",
				"criticalStatus": "Not Critical"
			},
			{
				"_id": "62ddacc825a5291f916cb4c6",
				"ticketType": "INCIDENT",
				"ticketId": "11",
				"issueCategory": "Application Issue",
				"issueDescription": "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
				"affectedUsers": 11,
				"severity": "High",
				"images": [
					"image-1658694854557.png"
				],
				"finalStatus": "Completed",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "thanks for resolving\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ffe7aa12cd509e6b77b2fa",
						"createdAt": "2022-08-19T19:42:34.047Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62df24e3ecddcbc7f49fe870",
						"createdAt": "2022-07-25T23:18:59.705Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63060df311de2edadf773269",
						"createdAt": "2022-08-24T11:39:31.901Z"
					}
				],
				"createdAt": "2022-07-24T20:34:16.274Z",
				"__v": 3,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"criticalStatus": "Not Critical"
			},
			{
				"_id": "62dafb75918ca8f37f756637",
				"ticketType": "CHANGE",
				"ticketId": "10",
				"issueCategory": "New IVR Flow ",
				"issueDescription": "testing..",
				"affectedUsers": 45,
				"severity": "High",
				"images": [],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "ddd",
						"images": [],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "62dda1f225a5291f916cb1de",
						"createdAt": "2022-07-24T19:48:02.532Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd3f1fe6b8851c56bbbbff",
						"createdAt": "2022-07-24T12:46:23.620Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305e83c11de2edadf77259a",
						"createdAt": "2022-08-24T08:58:36.829Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6305f31411de2edadf772e73",
						"createdAt": "2022-08-24T09:44:52.536Z"
					}
				],
				"createdAt": "2022-07-22T19:33:09.438Z",
				"__v": 4,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"criticalStatus": "Not Critical",
				"closedAt": "2022-08-24T09:44:52.536Z"
			},
			{
				"_id": "62d9766534c5a544907dc7d4",
				"ticketType": "SERVICE",
				"ticketId": "9",
				"issueCategory": "Password Issue",
				"issueDescription": "working progress..",
				"affectedUsers": 55,
				"severity": "High",
				"images": [
					"image-1658418783779.png"
				],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "sssssss",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc8800579988253dc5c402",
						"createdAt": "2022-07-23T23:45:04.417Z"
					},
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc880b579988253dc5c417",
						"createdAt": "2022-07-23T23:45:15.420Z"
					},
					{
						"comment": "ddddd",
						"images": [
							"image-1658620023767.png"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc889d579988253dc5c438",
						"createdAt": "2022-07-23T23:47:41.791Z"
					},
					{
						"comment": "ffffffffffff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd240ee6b8851c56bb9bec",
						"createdAt": "2022-07-24T10:50:54.704Z"
					},
					{
						"comment": "vvvv",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2440e6b8851c56bb9eec",
						"createdAt": "2022-07-24T10:51:44.321Z"
					},
					{
						"comment": "ccccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2446e6b8851c56bb9f01",
						"createdAt": "2022-07-24T10:51:50.844Z"
					},
					{
						"comment": "vvvvvv",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2a1ce6b8851c56bba7c0",
						"createdAt": "2022-07-24T11:16:44.251Z"
					},
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd788fc8e9d122fbaf465c",
						"createdAt": "2022-07-24T16:51:27.086Z"
					},
					{
						"comment": "ddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd78fcc8e9d122fbaf466e",
						"createdAt": "2022-07-24T16:53:16.243Z"
					},
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd7943c8e9d122fbaf468d",
						"createdAt": "2022-07-24T16:54:27.755Z"
					},
					{
						"comment": "ccc  goood",
						"images": [
							"image-1658683234772.jpg"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd7f6ec8e9d122fbaf4a6c",
						"createdAt": "2022-07-24T17:20:46.193Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62d98d4328dcfd787e2db9df",
						"createdAt": "2022-07-21T17:30:43.176Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc88aa579988253dc5c44d",
						"createdAt": "2022-07-23T23:47:54.675Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63060e2511de2edadf7732a7",
						"createdAt": "2022-08-24T11:40:21.761Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63060e3411de2edadf7732bc",
						"createdAt": "2022-08-24T11:40:36.173Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63060f9111de2edadf7732d1",
						"createdAt": "2022-08-24T11:46:25.736Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63060f9411de2edadf7732e6",
						"createdAt": "2022-08-24T11:46:28.966Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6306103d11de2edadf773323",
						"createdAt": "2022-08-24T11:49:17.096Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63061ed31be9f7a683c29943",
						"createdAt": "2022-08-24T12:51:31.662Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63061f011be9f7a683c29978",
						"createdAt": "2022-08-24T12:52:17.322Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "63061fdb1be9f7a683c29995",
						"createdAt": "2022-08-24T12:55:55.362Z"
					},
					{
						"status": "Closed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630620081be9f7a683c299b2",
						"createdAt": "2022-08-24T12:56:40.167Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "6306203d1be9f7a683c299d7",
						"createdAt": "2022-08-24T12:57:33.954Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630620701be9f7a683c299fc",
						"createdAt": "2022-08-24T12:58:24.552Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630620771be9f7a683c29a11",
						"createdAt": "2022-08-24T12:58:31.853Z"
					},
					{
						"status": "Completed",
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "630622981be9f7a683c29a6e",
						"createdAt": "2022-08-24T13:07:36.144Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318ad0572011afedf182228",
						"createdAt": "2022-09-07T14:39:01.868Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318adac72011afedf182295",
						"createdAt": "2022-09-07T14:41:48.475Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318ade872011afedf1822fa",
						"createdAt": "2022-09-07T14:42:48.789Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318adfb72011afedf18230f",
						"createdAt": "2022-09-07T14:43:07.389Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318ae0d72011afedf18233a",
						"createdAt": "2022-09-07T14:43:25.280Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318ae2072011afedf182377",
						"createdAt": "2022-09-07T14:43:44.805Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318ae5372011afedf1823e4",
						"createdAt": "2022-09-07T14:44:35.736Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318ae6072011afedf18240f",
						"createdAt": "2022-09-07T14:44:48.151Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318aebf72011afedf1824be",
						"createdAt": "2022-09-07T14:46:23.257Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318af0472011afedf182511",
						"createdAt": "2022-09-07T14:47:32.115Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318af5672011afedf182580",
						"createdAt": "2022-09-07T14:48:54.004Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318af6972011afedf18259b",
						"createdAt": "2022-09-07T14:49:13.475Z"
					},
					{
						"status": "Reopen",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318af9f72011afedf1825d2",
						"createdAt": "2022-09-07T14:50:07.336Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318b00272011afedf18266d",
						"createdAt": "2022-09-07T14:51:46.057Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6318b94e72011afedf182cd5",
						"createdAt": "2022-09-07T15:31:26.005Z"
					}
				],
				"createdAt": "2022-07-21T15:53:09.813Z",
				"__v": 41,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"closedAt": "2022-09-07T15:31:26.001Z",
				"criticalStatus": "Not Critical"
			},
			{
				"criticalStatus": "Not Critical",
				"_id": "62d96ea3e3970cb2541de5c2",
				"ticketType": "INCIDENT",
				"ticketId": "8",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Assigned",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "This is a testing , resolved by Hacker . ",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dabc5a9612f053863f43d2",
						"createdAt": "2022-07-22T15:03:54.477Z"
					},
					{
						"comment": "The resolved column is not align , you can work on that , resolved by Hacker . ",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dabea39612f053863f48f6",
						"createdAt": "2022-07-22T15:13:39.099Z"
					},
					{
						"comment": "ffffff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62db1fa0d61b6e13ae4f23c1",
						"createdAt": "2022-07-22T22:07:28.344Z"
					},
					{
						"comment": "ddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62db205dd61b6e13ae4f24e0",
						"createdAt": "2022-07-22T22:10:37.652Z"
					},
					{
						"comment": "ddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62db2063d61b6e13ae4f2543",
						"createdAt": "2022-07-22T22:10:43.269Z"
					},
					{
						"comment": "ddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62db2069d61b6e13ae4f25a6",
						"createdAt": "2022-07-22T22:10:49.214Z"
					},
					{
						"comment": "ddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62db20aad61b6e13ae4f260d",
						"createdAt": "2022-07-22T22:11:54.180Z"
					},
					{
						"comment": "ssss",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62db20b4d61b6e13ae4f269b",
						"createdAt": "2022-07-22T22:12:04.849Z"
					},
					{
						"comment": "ddd",
						"images": [
							"image-1658528034906.jpg"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62db212dd61b6e13ae4f2731",
						"createdAt": "2022-07-22T22:14:05.188Z"
					},
					{
						"comment": "dddd",
						"images": [
							"image-1658528034906.jpg"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62db2296d61b6e13ae4f27f2",
						"createdAt": "2022-07-22T22:20:06.597Z"
					},
					{
						"comment": "dddd",
						"images": [
							"image-1658528034906.jpg"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62db22ead61b6e13ae4f2884",
						"createdAt": "2022-07-22T22:21:30.029Z"
					},
					{
						"comment": "sssssssssss",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62db2333d61b6e13ae4f2916",
						"createdAt": "2022-07-22T22:22:43.459Z"
					},
					{
						"comment": "ddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62db242cd61b6e13ae4f29a8",
						"createdAt": "2022-07-22T22:26:52.437Z"
					},
					{
						"comment": "dddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc93fd579988253dc5c95f",
						"createdAt": "2022-07-24T00:36:13.343Z"
					},
					{
						"comment": "sssssss",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc943f579988253dc5c9f4",
						"createdAt": "2022-07-24T00:37:19.378Z"
					},
					{
						"comment": "sssnnnnnnnnnn",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc944a579988253dc5ca01",
						"createdAt": "2022-07-24T00:37:30.670Z"
					},
					{
						"comment": "cffff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc98c7579988253dc5cf4f",
						"createdAt": "2022-07-24T00:56:39.721Z"
					},
					{
						"comment": "cccccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca1ccf688ce496df3c246",
						"createdAt": "2022-07-24T01:35:08.583Z"
					},
					{
						"comment": "ddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca1dbf688ce496df3c253",
						"createdAt": "2022-07-24T01:35:23.726Z"
					},
					{
						"comment": "bbgggg",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca217f688ce496df3c260",
						"createdAt": "2022-07-24T01:36:23.593Z"
					},
					{
						"comment": "vvvvvvv\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca222f688ce496df3c295",
						"createdAt": "2022-07-24T01:36:34.136Z"
					},
					{
						"comment": "xxxxxxx\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca23af688ce496df3c2a2",
						"createdAt": "2022-07-24T01:36:58.612Z"
					},
					{
						"comment": "cccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca6c5f688ce496df3ce8d",
						"createdAt": "2022-07-24T01:56:21.494Z"
					},
					{
						"comment": "dggggg",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dcafe7f688ce496df3d080",
						"createdAt": "2022-07-24T02:35:19.422Z"
					},
					{
						"comment": "ccccccccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd1486dffa4f72275d07a1",
						"createdAt": "2022-07-24T09:44:38.743Z"
					},
					{
						"comment": "ccccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd1796dffa4f72275d0dab",
						"createdAt": "2022-07-24T09:57:42.885Z"
					},
					{
						"comment": "ccccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd17cbdffa4f72275d0e1f",
						"createdAt": "2022-07-24T09:58:35.393Z"
					},
					{
						"comment": "dddddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd1804dffa4f72275d0e84",
						"createdAt": "2022-07-24T09:59:32.409Z"
					},
					{
						"comment": "scccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2203e6b8851c56bb90c8",
						"createdAt": "2022-07-24T10:42:11.239Z"
					},
					{
						"comment": "nnnnn",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2850e6b8851c56bba531",
						"createdAt": "2022-07-24T11:09:04.563Z"
					},
					{
						"comment": "ggggg",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd29cbe6b8851c56bba641",
						"createdAt": "2022-07-24T11:15:23.924Z"
					},
					{
						"comment": "ffffffffff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2b1de6b8851c56bbb1ab",
						"createdAt": "2022-07-24T11:21:01.131Z"
					},
					{
						"comment": "vvvvvvvvvvvv",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2b34e6b8851c56bbb34c",
						"createdAt": "2022-07-24T11:21:24.330Z"
					},
					{
						"comment": "vvvvvvvvvvvvh",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2b4ae6b8851c56bbb381",
						"createdAt": "2022-07-24T11:21:46.911Z"
					},
					{
						"comment": "vvvvvvvvvvvvh",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2ba0e6b8851c56bbb3b6",
						"createdAt": "2022-07-24T11:23:12.263Z"
					},
					{
						"comment": "Come",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62de4713eb40fee72279bf47",
						"createdAt": "2022-07-25T07:32:35.735Z"
					},
					{
						"comment": "comment",
						"images": [
							"image-1658738657645.png"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62de57e9eb40fee72279c7b7",
						"createdAt": "2022-07-25T08:44:25.189Z"
					},
					{
						"comment": "ccccccccc",
						"images": [
							"image-1658788381514.png"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62df1a27ecddcbc7f49fdf35",
						"createdAt": "2022-07-25T22:33:11.889Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62d9733f34c5a544907dc604",
						"createdAt": "2022-07-21T15:39:43.393Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dabc6e9612f053863f443b",
						"createdAt": "2022-07-22T15:04:14.297Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dabee09612f053863f4956",
						"createdAt": "2022-07-22T15:14:40.464Z"
					}
				],
				"createdAt": "2022-07-21T15:20:03.324Z",
				"__v": 41,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"_id": "62d96e5c0a97dff637cec71b",
				"ticketType": "INCIDENT",
				"ticketId": "7",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Assigned",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "This is another testing , its takes time loading this page . Resolved by Hacker . ",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dabd049612f053863f457f",
						"createdAt": "2022-07-22T15:06:44.921Z"
					},
					{
						"comment": "This is another testing , its takes time loading this page and the resolve colume is not align . Resolved by Hacker . ",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dabde99612f053863f45fb",
						"createdAt": "2022-07-22T15:10:33.389Z"
					},
					{
						"comment": "ffffffffff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc90f4579988253dc5c6d3",
						"createdAt": "2022-07-24T00:23:16.766Z"
					},
					{
						"comment": "cccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc9612579988253dc5cd83",
						"createdAt": "2022-07-24T00:45:06.058Z"
					},
					{
						"comment": "cccccccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc962a579988253dc5cd89",
						"createdAt": "2022-07-24T00:45:30.119Z"
					},
					{
						"comment": "dddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc9644579988253dc5ce0f",
						"createdAt": "2022-07-24T00:45:56.778Z"
					},
					{
						"comment": "dddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc96a3579988253dc5ce74",
						"createdAt": "2022-07-24T00:47:31.830Z"
					},
					{
						"comment": "dddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc96d6579988253dc5ce79",
						"createdAt": "2022-07-24T00:48:22.278Z"
					},
					{
						"comment": "dddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc96e0579988253dc5ce8e",
						"createdAt": "2022-07-24T00:48:32.882Z"
					},
					{
						"comment": "dddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc98a9579988253dc5cec3",
						"createdAt": "2022-07-24T00:56:09.502Z"
					},
					{
						"comment": "dddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc98b4579988253dc5cec8",
						"createdAt": "2022-07-24T00:56:20.379Z"
					},
					{
						"comment": "dddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca41bf688ce496df3c72f",
						"createdAt": "2022-07-24T01:44:59.195Z"
					},
					{
						"comment": "dddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca4fcf688ce496df3c7c4",
						"createdAt": "2022-07-24T01:48:44.925Z"
					},
					{
						"comment": "xddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca509f688ce496df3c829",
						"createdAt": "2022-07-24T01:48:57.909Z"
					},
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca521f688ce496df3c8be",
						"createdAt": "2022-07-24T01:49:21.854Z"
					},
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca568f688ce496df3c8f3",
						"createdAt": "2022-07-24T01:50:32.424Z"
					},
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca5e3f688ce496df3c900",
						"createdAt": "2022-07-24T01:52:35.620Z"
					},
					{
						"comment": "bbbbb",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca67ff688ce496df3ccb7",
						"createdAt": "2022-07-24T01:55:11.054Z"
					},
					{
						"comment": "bbbbbfff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca694f688ce496df3ccec",
						"createdAt": "2022-07-24T01:55:32.671Z"
					},
					{
						"comment": "bbbbbffffff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca69df688ce496df3cd51",
						"createdAt": "2022-07-24T01:55:41.061Z"
					},
					{
						"comment": "bbbbbffffff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca6b5f688ce496df3cdb6",
						"createdAt": "2022-07-24T01:56:05.820Z"
					},
					{
						"comment": "vvvvvvvvvv",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2458e6b8851c56bba04a",
						"createdAt": "2022-07-24T10:52:08.067Z"
					},
					{
						"comment": "ggggg",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd27e8e6b8851c56bba3c9",
						"createdAt": "2022-07-24T11:07:20.366Z"
					},
					{
						"comment": "gggggghhhhhhhhhhh",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2800e6b8851c56bba42e",
						"createdAt": "2022-07-24T11:07:44.450Z"
					},
					{
						"comment": "gggg",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2aa7e6b8851c56bbaf8e",
						"createdAt": "2022-07-24T11:19:03.349Z"
					},
					{
						"comment": "thanks\n",
						"images": [
							"image-1658688562411.jpeg"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd943c25a5291f916cabcc",
						"createdAt": "2022-07-24T18:49:32.839Z"
					},
					{
						"comment": "Sorted\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fef97aa27da2a60a4f70d9",
						"createdAt": "2022-08-19T02:46:18.266Z"
					},
					{
						"comment": "Sorted\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fef984a27da2a60a4f70e0",
						"createdAt": "2022-08-19T02:46:28.807Z"
					},
					{
						"comment": "fff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fefa15a27da2a60a4f7109",
						"createdAt": "2022-08-19T02:48:53.390Z"
					},
					{
						"comment": "fff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fefa18a27da2a60a4f710e",
						"createdAt": "2022-08-19T02:48:56.461Z"
					},
					{
						"comment": "comment",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff0013a27da2a60a4f731f",
						"createdAt": "2022-08-19T03:14:27.065Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dabbac9612f053863f42e5",
						"createdAt": "2022-07-22T15:01:00.496Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dabdf29612f053863f4658",
						"createdAt": "2022-07-22T15:10:42.488Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dabe329612f053863f4774",
						"createdAt": "2022-07-22T15:11:46.049Z"
					}
				],
				"createdAt": "2022-07-21T15:18:52.945Z",
				"__v": 34,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"criticalStatus": "Not Critical"
			},
			{
				"_id": "62d96e580a97dff637cec716",
				"ticketType": "INCIDENT",
				"ticketId": "6",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "Recheck\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff0442a27da2a60a4f76d6",
						"createdAt": "2022-08-19T03:32:18.533Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62df2463ecddcbc7f49fe7e0",
						"createdAt": "2022-07-25T23:16:51.242Z"
					},
					{
						"status": "Closed",
						"createdBy": "6233ae7f13260afa4a2dff38",
						"_id": "642ecf7c5da0c4de9effcb0b",
						"createdAt": "2023-04-06T13:56:12.244Z"
					}
				],
				"createdAt": "2022-07-21T15:18:48.984Z",
				"__v": 3,
				"assignedTo": {
					"_id": "62bda1ee2e544d671e8fe922",
					"firstname": "asiah",
					"lastname": "latifa",
					"email": "latifa@yahoo.com",
					"phoneNumber": "62850763",
					"isActive": true,
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1658439194668.jpg",
					"createdAt": "2022-06-30T13:15:26.172Z",
					"__v": 0,
					"lastLoginDate": "2022-07-21T21:32:57.589Z",
					"id": "62bda1ee2e544d671e8fe922"
				},
				"criticalStatus": "Not Critical",
				"closedAt": "2023-04-06T13:56:12.243Z"
			},
			{
				"criticalStatus": "Not Critical",
				"_id": "62d947fa18468ea366ebd5f7",
				"ticketType": "INCIDENT",
				"ticketId": "5",
				"issueCategory": "Application Issue",
				"issueDescription": "testing..",
				"affectedUsers": 12,
				"severity": "High",
				"images": [
					"image-1658406903057.jpeg"
				],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "628a9b71f147f0b4acfc2a86",
					"firstname": "god",
					"lastname": "salesnet",
					"email": "chinedugodwin300@yahoo.com",
					"phoneNumber": "62850764",
					"role": "625d7f1341b7eaade9af7e7b",
					"client": "623c74d9d910f5b2039e1c2a",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660837676000.jpg",
					"createdAt": "2022-05-22T20:22:09.776Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T20:41:08.236Z",
					"isActive": true,
					"id": "628a9b71f147f0b4acfc2a86"
				},
				"client": {
					"_id": "623c74d9d910f5b2039e1c2a",
					"client": "Diamond",
					"clientCode": "Diamond",
					"createdAt": "2022-03-24T13:40:41.052Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "ggggggggg",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc8963579988253dc5c4f8",
						"createdAt": "2022-07-23T23:50:59.229Z"
					},
					{
						"comment": "gggg",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc8970579988253dc5c55d",
						"createdAt": "2022-07-23T23:51:12.174Z"
					},
					{
						"comment": "ffffffffff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc89d6579988253dc5c5f2",
						"createdAt": "2022-07-23T23:52:54.512Z"
					},
					{
						"comment": "ffffffff",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc946a579988253dc5ca18",
						"createdAt": "2022-07-24T00:38:02.931Z"
					},
					{
						"comment": " vvvvvvvv",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc947c579988253dc5ca25",
						"createdAt": "2022-07-24T00:38:20.505Z"
					},
					{
						"comment": " vvvvvvvv",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc94a6579988253dc5ca92",
						"createdAt": "2022-07-24T00:39:02.140Z"
					},
					{
						"comment": "ooooo",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc94c2579988253dc5cac7",
						"createdAt": "2022-07-24T00:39:30.200Z"
					},
					{
						"comment": "nnn",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc94d5579988253dc5cb3e",
						"createdAt": "2022-07-24T00:39:49.031Z"
					},
					{
						"comment": "nnncdd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc9505579988253dc5cb7d",
						"createdAt": "2022-07-24T00:40:37.768Z"
					},
					{
						"comment": "nnncddcccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc954f579988253dc5cbb2",
						"createdAt": "2022-07-24T00:41:51.899Z"
					},
					{
						"comment": "nnncddcccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc9588579988253dc5cbe7",
						"createdAt": "2022-07-24T00:42:48.828Z"
					},
					{
						"comment": "nnncddcccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc95e7579988253dc5cc4c",
						"createdAt": "2022-07-24T00:44:23.731Z"
					},
					{
						"comment": "cccccc\n\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca198579988253dc5cf54",
						"createdAt": "2022-07-24T01:34:16.451Z"
					},
					{
						"comment": "ddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca329f688ce496df3c3f3",
						"createdAt": "2022-07-24T01:40:57.912Z"
					},
					{
						"comment": "dddddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca3adf688ce496df3c611",
						"createdAt": "2022-07-24T01:43:09.077Z"
					},
					{
						"comment": "bbbbb",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca5ecf688ce496df3c93d",
						"createdAt": "2022-07-24T01:52:44.074Z"
					},
					{
						"comment": "dddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca60ff688ce496df3c9d2",
						"createdAt": "2022-07-24T01:53:19.223Z"
					},
					{
						"comment": "come\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca61df688ce496df3ca37",
						"createdAt": "2022-07-24T01:53:33.410Z"
					},
					{
						"comment": "comevvvv\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca639f688ce496df3cacc",
						"createdAt": "2022-07-24T01:54:01.906Z"
					},
					{
						"comment": "comevvvvdddd\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca640f688ce496df3cb31",
						"createdAt": "2022-07-24T01:54:08.643Z"
					},
					{
						"comment": "comevvvvdddd\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca66af688ce496df3cb96",
						"createdAt": "2022-07-24T01:54:50.224Z"
					},
					{
						"comment": "comevvvvdddd\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca66cf688ce496df3cc2b",
						"createdAt": "2022-07-24T01:54:52.994Z"
					},
					{
						"comment": "comevvvvdddd\n",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca670f688ce496df3cc30",
						"createdAt": "2022-07-24T01:54:56.605Z"
					},
					{
						"comment": "good",
						"images": [],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "62dd0ed9dffa4f72275d04d2",
						"createdAt": "2022-07-24T09:20:25.527Z"
					},
					{
						"comment": "what is good",
						"images": [
							"image-1658654612506.png"
						],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "62dd0fc5dffa4f72275d0511",
						"createdAt": "2022-07-24T09:24:21.248Z"
					},
					{
						"comment": "what is a good",
						"images": [],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "62dd101ddffa4f72275d0520",
						"createdAt": "2022-07-24T09:25:49.396Z"
					},
					{
						"comment": "hhhhh",
						"images": [],
						"createdBy": "628a9b71f147f0b4acfc2a86",
						"_id": "62dd1032dffa4f72275d052d",
						"createdAt": "2022-07-24T09:26:10.812Z"
					},
					{
						"comment": "ccccccc",
						"images": [
							"image-1658654923500.png"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd10cfdffa4f72275d066f",
						"createdAt": "2022-07-24T09:28:47.271Z"
					},
					{
						"comment": "ccccccc",
						"images": [
							"image-1658654923500.png"
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd145edffa4f72275d06dc",
						"createdAt": "2022-07-24T09:43:58.946Z"
					},
					{
						"comment": "ccc",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd2270e6b8851c56bb9285",
						"createdAt": "2022-07-24T10:44:00.401Z"
					},
					{
						"comment": "ssss",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd7a33c8e9d122fbaf47da",
						"createdAt": "2022-07-24T16:58:27.744Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62d9709334c5a544907dc45c",
						"createdAt": "2022-07-21T15:28:19.162Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62d9c29f8da8a7ed551c8ad7",
						"createdAt": "2022-07-21T21:18:23.247Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd79f8c8e9d122fbaf475f",
						"createdAt": "2022-07-24T16:57:28.468Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd7a29c8e9d122fbaf47c9",
						"createdAt": "2022-07-24T16:58:17.024Z"
					}
				],
				"createdAt": "2022-07-21T12:35:06.285Z",
				"__v": 35,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				}
			},
			{
				"criticalStatus": "Not Critical",
				"_id": "62d93dc6a0043eb93b58f813",
				"ticketType": "INCIDENT",
				"ticketId": "4",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "ddd",
						"images": [
							"image-1658516186999.jpg"
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daf2e1918ca8f37f756057",
						"createdAt": "2022-07-22T18:56:33.109Z"
					},
					{
						"comment": "ddddddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca350f688ce496df3c49a",
						"createdAt": "2022-07-24T01:41:36.395Z"
					},
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd7bf4c8e9d122fbaf486b",
						"createdAt": "2022-07-24T17:05:56.617Z"
					},
					{
						"comment": "",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd96fa25a5291f916caf58",
						"createdAt": "2022-07-24T19:01:14.040Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62d943a61031c80e923391c1",
						"createdAt": "2022-07-21T12:16:38.962Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd7964c8e9d122fbaf46fb",
						"createdAt": "2022-07-24T16:55:00.277Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd7bf9c8e9d122fbaf4888",
						"createdAt": "2022-07-24T17:06:01.159Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd7bfdc8e9d122fbaf489d",
						"createdAt": "2022-07-24T17:06:05.378Z"
					}
				],
				"createdAt": "2022-07-21T11:51:34.090Z",
				"__v": 8,
				"assignedTo": {
					"_id": "628b66fa420ab2bed20335c0",
					"firstname": "Omobolanle",
					"lastname": "Makinwa",
					"email": "omobolanle@gmailcom",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1660820096502.png",
					"createdAt": "2022-05-23T10:50:34.524Z",
					"__v": 0,
					"lastLoginDate": "2024-03-11T06:23:45.974Z",
					"isActive": true,
					"id": "628b66fa420ab2bed20335c0"
				}
			},
			{
				"_id": "62d93d0e6acfa5a12f305b40",
				"ticketType": "INCIDENT",
				"ticketId": "3",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Assigned",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daed35918ca8f37f755a60",
						"createdAt": "2022-07-22T18:32:21.424Z"
					},
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daed63918ca8f37f755ac2",
						"createdAt": "2022-07-22T18:33:07.376Z"
					},
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daed6a918ca8f37f755b05",
						"createdAt": "2022-07-22T18:33:14.059Z"
					},
					{
						"comment": "sssss",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daed88918ca8f37f755b86",
						"createdAt": "2022-07-22T18:33:44.902Z"
					},
					{
						"comment": "sss",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daed8f918ca8f37f755bc9",
						"createdAt": "2022-07-22T18:33:51.927Z"
					},
					{
						"comment": "sssss",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daedba918ca8f37f755c2b",
						"createdAt": "2022-07-22T18:34:34.576Z"
					},
					{
						"comment": "sssss",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daee10918ca8f37f755cea",
						"createdAt": "2022-07-22T18:36:00.683Z"
					},
					{
						"comment": "ssss",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daee8d918ca8f37f755d6b",
						"createdAt": "2022-07-22T18:38:05.079Z"
					},
					{
						"comment": "vvvvvvv",
						"images": [
							"image-1658516039031.png"
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daf24b918ca8f37f755f26",
						"createdAt": "2022-07-22T18:54:03.036Z"
					},
					{
						"comment": "ffff",
						"images": [
							"image-1658516065633.jpg"
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daf264918ca8f37f755f6b",
						"createdAt": "2022-07-22T18:54:28.532Z"
					},
					{
						"comment": "ddd",
						"images": [
							"image-1658516065633.jpg"
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daf2b1918ca8f37f755fcd",
						"createdAt": "2022-07-22T18:55:45.321Z"
					},
					{
						"comment": "dddd",
						"images": [
							"image-1658516160100.png"
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daf2c2918ca8f37f756012",
						"createdAt": "2022-07-22T18:56:02.607Z"
					},
					{
						"comment": "sssss",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc9347579988253dc5c7aa",
						"createdAt": "2022-07-24T00:33:11.737Z"
					},
					{
						"comment": "ssss",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc935a579988253dc5c80f",
						"createdAt": "2022-07-24T00:33:30.462Z"
					},
					{
						"comment": "ssss",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dc937a579988253dc5c874",
						"createdAt": "2022-07-24T00:34:02.331Z"
					},
					{
						"comment": "dddddddd",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dca400f688ce496df3c6b8",
						"createdAt": "2022-07-24T01:44:32.309Z"
					},
					{
						"comment": " vvv",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd22cae6b8851c56bb952c",
						"createdAt": "2022-07-24T10:45:30.647Z"
					},
					{
						"comment": "commented",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62fefa9da27da2a60a4f71e9",
						"createdAt": "2022-08-19T02:51:09.180Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62d9714034c5a544907dc492",
						"createdAt": "2022-07-21T15:31:12.116Z"
					},
					{
						"status": "Completed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62dd235ce6b8851c56bb9591",
						"createdAt": "2022-07-24T10:47:56.653Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62fe5728609e3860c9ae1e84",
						"createdAt": "2022-08-18T15:13:44.603Z"
					}
				],
				"createdAt": "2022-07-21T11:48:30.852Z",
				"__v": 21,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"criticalStatus": "Not Critical"
			},
			{
				"_id": "62d93ce86acfa5a12f305b3b",
				"ticketType": "INCIDENT",
				"ticketId": "2",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Assigned",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "xxxxx",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daeb86918ca8f37f755834",
						"createdAt": "2022-07-22T18:25:10.326Z"
					},
					{
						"comment": "xxxxx",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daebbb918ca8f37f75585a",
						"createdAt": "2022-07-22T18:26:03.131Z"
					},
					{
						"comment": "xxxxx",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daebca918ca8f37f755898",
						"createdAt": "2022-07-22T18:26:18.523Z"
					},
					{
						"comment": "ssssss",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daeccd918ca8f37f75597b",
						"createdAt": "2022-07-22T18:30:37.600Z"
					},
					{
						"comment": "ccccc",
						"images": [
							"image-1658516763379.jpg"
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daf51e918ca8f37f75625e",
						"createdAt": "2022-07-22T19:06:06.093Z"
					},
					{
						"comment": "check again",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff02cda27da2a60a4f756c",
						"createdAt": "2022-08-19T03:26:05.145Z"
					},
					{
						"comment": "recheck",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62ff039ea27da2a60a4f75f7",
						"createdAt": "2022-08-19T03:29:34.598Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62d96e4b0a97dff637cec712",
						"createdAt": "2022-07-21T15:18:35.349Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62d96f3a34c5a544907dc328",
						"createdAt": "2022-07-21T15:22:34.985Z"
					},
					{
						"status": "Completed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daecd2918ca8f37f7559bc",
						"createdAt": "2022-07-22T18:30:42.667Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62df2587ecddcbc7f49feafd",
						"createdAt": "2022-07-25T23:21:43.268Z"
					}
				],
				"createdAt": "2022-07-21T11:47:52.810Z",
				"__v": 11,
				"assignedTo": {
					"_id": "6255655d291fe357244f77c2",
					"firstname": "chinedu",
					"lastname": "gmail",
					"email": "godgood99mail@yahoo.com",
					"phoneNumber": "+2348062850763",
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1658838314327.jpg",
					"createdAt": "2022-04-12T11:41:17.874Z",
					"__v": 0,
					"lastLoginDate": "2023-07-25T21:04:20.676Z",
					"isActive": true,
					"id": "6255655d291fe357244f77c2"
				},
				"criticalStatus": "Not Critical"
			},
			{
				"_id": "62d93cde6acfa5a12f305b36",
				"ticketType": "INCIDENT",
				"ticketId": "1",
				"issueCategory": "REPAIR",
				"issueDescription": "Description test",
				"affectedUsers": 3,
				"severity": "High",
				"images": [
					"sun.png",
					"moon.png"
				],
				"finalStatus": "Closed",
				"createdBy": {
					"_id": "625de2278024b66a580a77fc",
					"firstname": "Admin",
					"lastname": "outcess",
					"email": "admin1@outcess.com",
					"phoneNumber": "08062850763",
					"role": "6233ade412845c79c629b3f6",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "6233ae7f13260afa4a2dff38",
					"profilePic": "image-1680718308764.png",
					"createdAt": "2022-04-18T22:11:51.531Z",
					"__v": 0,
					"lastLoginDate": "2024-02-19T08:30:52.085Z",
					"isActive": true,
					"id": "625de2278024b66a580a77fc"
				},
				"client": {
					"_id": "6233ade912845c79c629b3fd",
					"client": "OUTCESS",
					"clientCode": "OUTCESS",
					"createdAt": "2022-03-17T21:53:45.762Z",
					"__v": 0
				},
				"comments": [
					{
						"comment": "testing...\n",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62dae836918ca8f37f75551d",
						"createdAt": "2022-07-22T18:11:02.841Z"
					},
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62dae9d6918ca8f37f75570c",
						"createdAt": "2022-07-22T18:17:58.813Z"
					},
					{
						"comment": "dddd",
						"images": [
							""
						],
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62daea56918ca8f37f755738",
						"createdAt": "2022-07-22T18:20:06.877Z"
					},
					{
						"comment": "Thanks for resolving promptly",
						"images": [
							""
						],
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "630333fe03458a23c49ebdc5",
						"createdAt": "2022-08-22T07:45:02.755Z"
					}
				],
				"status": [
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62d96da8c08e86f31b37369a",
						"createdAt": "2022-07-21T15:15:52.857Z"
					},
					{
						"status": "Assigned",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "62d96e2a0a97dff637cec706",
						"createdAt": "2022-07-21T15:18:02.347Z"
					},
					{
						"status": "Completed",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62dae858918ca8f37f75553f",
						"createdAt": "2022-07-22T18:11:36.277Z"
					},
					{
						"status": "Assigned",
						"createdBy": "628b66fa420ab2bed20335c0",
						"_id": "62df2844ecddcbc7f49fed62",
						"createdAt": "2022-07-25T23:33:24.054Z"
					},
					{
						"status": "Closed",
						"createdBy": "625de2278024b66a580a77fc",
						"_id": "6304c3e11f189a4dbadcf1ab",
						"createdAt": "2022-08-23T12:11:13.290Z"
					}
				],
				"createdAt": "2022-07-21T11:47:42.445Z",
				"__v": 9,
				"assignedTo": {
					"_id": "62bda1ee2e544d671e8fe922",
					"firstname": "asiah",
					"lastname": "latifa",
					"email": "latifa@yahoo.com",
					"phoneNumber": "62850763",
					"isActive": true,
					"role": "6233ade412845c79c629b3f5",
					"client": "6233ade912845c79c629b3fd",
					"loginFlag": true,
					"createdBy": "625de2278024b66a580a77fc",
					"profilePic": "image-1658439194668.jpg",
					"createdAt": "2022-06-30T13:15:26.172Z",
					"__v": 0,
					"lastLoginDate": "2022-07-21T21:32:57.589Z",
					"id": "62bda1ee2e544d671e8fe922"
				},
				"criticalStatus": "Not Critical",
				"closedAt": "2022-08-23T12:11:13.289Z"
			}
		]


	const ID = "628b66fa420ab2bed20335c0";

	// const result = itdata?.filter((data: any) =>
	// 	data?.assignedTo?._id?.toString()?.includes(ID)
	// );

	const ticketTotal = dashBoardInfodata?.pagination?.totalTickets
	const changeRequest = dashBoardInfodata?.totals?.ticketType?.changeRequest
	const incidentRequest = dashBoardInfodata?.totals?.ticketType?.incidentRequest
	const serviceRequest = dashBoardInfodata?.totals?.ticketType?.serviceRequest
	const approved = dashBoardInfodata?.ticketType?.approved
	const closed = dashBoardInfodata?.totals?.status?.closed
	const completed = dashBoardInfodata?.totals?.status?.completed
	const dissaproved = dashBoardInfodata?.totals?.status?.dissaproved
	const inprogress = dashBoardInfodata?.totals?.status?.inprogress
	const invalid = dashBoardInfodata?.totals?.status?.invalid
	const open = dashBoardInfodata?.totals?.status?.open
	const pending = dashBoardInfodata?.totals?.status?.pending
	const reopen = dashBoardInfodata?.totals?.status?.reopen




	return (
		<div id="page-wrapper">
			<ITSideNav />
			<Header />
			<BottomNavigation />
			<main>
				<div className='dashboard_container_grid'>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Total Total</h6>
							<div className='total_card_flex_icon1'>
								<img src={dIcon1} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>{!ticketTotal ? 0 : ticketTotal}</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>10%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>+$150 today</h3>
							</div>
						</div>
					</div>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Inprogress</h6>
							<div className='total_card_flex_icon2'>
								<img src={dIcon2} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>{!inprogress ? 0 : inprogress}</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>50%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>View orders</h3>
							</div>
						</div>
					</div>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Completed Tickets</h6>
							<div className='total_card_flex_icon3'>
								<img src={dIcon3} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>{!completed ? 0 : completed}</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>30%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>In last week</h3>
							</div>
						</div>
					</div>
					<div className='total_card'>
						<div className='total_card_flex'>
							<h6>Unassigned Tickets</h6>
							<div className='total_card_flex_icon4'>
								<img src={dIcon4} alt='new' crossOrigin="anonymous" />
							</div>
						</div>
						<h1 className='total_card_flex_icon_h1'>{!pending ? 0 : pending}</h1>
						<div>
							<div className='total_card_flex_icon_source'>
								<div className='total_card_ArrowUpSFill'>	<p>70%</p> <RiArrowUpSFill size={20} /> </div>
								<h3>2477 tickets automated</h3>
							</div>
						</div>
					</div>
				</div>

				<div className='dash_statistics_container'>
					{/* <div className='dash_statistics_sub1'>
						<div>
							<h3>Ticket</h3>
							<p>Summary</p>
						</div>
						<div>
							<DoughnutChat />
						</div>
					</div> */}
					<div className='dash_statistics_sub_it'>
						<div className='dash_statistics_sub2_text'>
							<div>
								<h3>Pending Tickets</h3>

							</div>
						</div>
						<div className='statistics_sub2_table_container'>
							<table id="table" className="table">
								<thead>
									<tr>
										<th>Reference</th>
										<th>Ticket Type</th>
										<th>Severity</th>
										<th>Affected Users</th>
										<th>Time Stamp</th>
										<th>Assign To</th>
										<th>Ticket Status</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{itisLoading ? (
										<TableFetch colSpan={8} />
									) : result?.length === undefined ? (
										<NoRecordFound
											colSpan={8}
											children={"No record found!"}
										/>
									) : (
										result?.map((item: any) => (
											<tr key={item?.id}>

												<td data-title="Reference">
													{item.ticketType === "INCIDENT"
														? "INC"
														: item.ticketType === "SERVICE"
															? "SRV"
															: "CHG"}
												</td>
												<td data-title="ticket type">{item?.ticketType}</td>
												<td data-title="severity">
													{item?.severity === "High" ? (
														<span className="severity-high">{item?.severity}</span>
													) : item?.severity === "Medium" ? (
														<span className="severity-medium">
															{item?.severity}
														</span>
													) : (
														<span className="severity-low">{item?.severity}</span>
													)}
												</td>
												<td data-title="affected users">{item?.affectedUsers}</td>
												<td data-title="Assign To">
													{item?.finalStatus === "Closed" ? (
														<button className="ticket-Closed">Closed</button>
													) : (
														<AssignTask id={item?.id} />
													)}
												</td>
												<td data-title="affected users">{item?.affectedUsers}</td>
												<td data-title="progresss">
													<TicketStatusCell user={item} customId={item?.id} />
												</td>
												<td data-title="View">
													{item?.ticketType === "INCIDENT" ? (
														<NavLink
															to={`/itincidentrequest`}
															className="admin-btn-View">
															<AiOutlineEye size={20} />
														</NavLink>
													) : item?.ticketType === "SERVICE" ? (
														<NavLink
															to={`/itservicerequest`}
															className="admin-btn-View">
															<AiOutlineEye size={20} />
														</NavLink>
													) : (
														<NavLink
															to={`/itchangerequest`}
															className="admin-btn-View">
															<AiOutlineEye size={20} />
														</NavLink>
													)}
												</td>
											</tr>
										))
									)}
								</tbody>
							</table>
						</div>
						{/* <ThreeinOneBarChart /> */}
					</div>
				</div>

			</main>
		</div>
	)
}

export default ITDashboard












