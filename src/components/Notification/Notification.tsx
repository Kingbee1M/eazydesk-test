import { Key, useEffect, useState } from 'react';
import ModalHeaderIcon from '../ModalHeaderIcon';
import { AiOutlineNotification } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getItTicket } from '../../features/Ticket/ticketSlice';
import { NoRecordFound, TableFetch } from '../Options';
import AssignTask from '../Modals/AssignTask';
import TicketStatusCell from '../../Pages/Admin/Ticket/TicketStatusCell';
import { FiChevronDown } from 'react-icons/fi';
import moment from 'moment';


const Notification = ({ isOpen, onClose }: any) => {
	const dispatch = useAppDispatch();
	const drawerclassNameName = `drawer-container ${isOpen ? 'drawer-open' : ''}`;
	const { itdata, itisLoading, itassignisSuccess } = useAppSelector((state: any) => state.ticket)
	const datas = ""
	const [faqs, setFaqs] = useState(itdata?.tickets?.map((faq: any) => ({ ...faq, active: false })));

	const toggleFaq = (index: any) => {
		setFaqs(faqs?.map((item: { active: any; }, i: any) => ({
			...item,
			active: i === index ? !item?.active : false
		})));
	};


	useEffect(() => {

		// @ts-ignore
		dispatch(getItTicket(datas))

		if (isOpen) {
			// @ts-ignore
			dispatch(getItTicket(datas))
		}
		if (itassignisSuccess) {
			if (isOpen) {
				// @ts-ignore
				dispatch(getItTicket(datas))
			}
		}
	}, [dispatch, itassignisSuccess, isOpen])




	const renderData = (item: any) => (
		<div className="inner_border_two">
			<h3 className="faq-title">
				<div className='stack_right_container_sub'>
					<div>Reference</div>
					<div>Ticket Type</div>
					<div>Severity</div>
					<div>Assign</div>
					<div>Status</div>
				</div>
			</h3>
			<div className="stack_right_container_sub_one">
				<div>{item?.ticketType === "INCIDENT" ? "INC" : item?.ticketType === "SERVICE" ? "SRV" : "CHG"}</div>
				<div>{item?.ticketType}</div>
				<div>
					{item?.severity === "High" ? (
						<span className="severity-high">{item?.severity}</span>
					) : item?.severity === "Medium" ? (
						<span className="severity-medium">{item?.severity}</span>
					) : (
						<span className="severity-low">{item?.severity}</span>
					)}
				</div>
				<div>
					{item?.finalStatus === "Closed" ? (
						<button className="ticket-Closed">Closed</button>
					) : (
						<AssignTask id={item?.id} />
					)}
				</div>
				<div>
					<TicketStatusCell user={item} customId={item?.id} />
				</div>
			</div>
			<h3>Description</h3>
			<div className="faq-text" dangerouslySetInnerHTML={{ __html: item?.description }} />
		</div>
	);

	return (
		<div>
			<div className={drawerclassNameName}>
				<ModalHeaderIcon setShow={onClose} icon={<AiOutlineNotification size={30} />} title={"Notification"} subtitle={"Notification & Assign Task"} />

				{itisLoading ? (
					<div className='Doughnutcontainer'>
						<TableFetch colSpan={8} />
					</div>
				) : itdata?.tickets?.length === 0 ? (
					<div className='Doughnutcontainer'>
						<NoRecordFound colSpan={8}>
							No record found!
						</NoRecordFound>
					</div>
				) : (
					<div className="faq-container">
						{faqs?.map((item: any, index: any) => (
							<div key={index} className={`faq ${item?.active ? 'active' : ''}`}>
								{item?.active ? "" : <div className="faq-title-highlight-main"> <div className="faq-title-highlight">
									<h3 className="faq-title">
										{item?.ticketType} - {item?.status}
									</h3>
									<div>
										{item?.severity === "High" ? (
											<span className="severity-high">{item?.severity}</span>
										) : item?.severity === "Medium" ? (
											<span className="severity-medium">{item?.severity}</span>
										) : (
											<span className="severity-low">{item?.severity}</span>
										)}
									</div>

								</div> 	<p style={{ marginLeft: "12px", marginTop: "5px" }}>
										{moment.duration(moment().diff(item?.created_at)).humanize()}{" "}
										ago</p></div>}

								{item?.active && (
									<div className="inner_border_two_container">
										{renderData(item)}
									</div>
								)}
								<button className="faq-toggle" onClick={() => toggleFaq(index)}>
									<FiChevronDown />
								</button>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Notification;


/* eslint-disable jsx-a11y/alt-text */
// import { useState } from "react";
// import { Button } from "react-bootstrap";
// import { RiMessage3Line, RiTeamLine } from "react-icons/ri";
// import TableLoader from "../TableLoader";
// import { FaRegMoneyBillAlt, FaUserPlus } from "react-icons/fa";
// import { HiSpeakerphone } from "react-icons/hi";
// import { BsCalendar2Month, BsChatText, BsFillBriefcaseFill } from "react-icons/bs";
// import { GrStatusWarning, GrUserWorker } from "react-icons/gr";
// import moment from "moment";
// import { useNavigate } from "react-router-dom";
// import { GiAlarmClock, GiStahlhelm } from "react-icons/gi";
// import { BiTask } from "react-icons/bi";
// import { MdOutlineAssignmentInd } from "react-icons/md";
// import { AiOutlineException } from "react-icons/ai";
// import { getUserPrivileges } from "../../hooks/auth";



// interface Item {
// 	type: string;
// 	date: string; // Example additional property for the date
// 	description: string; // Example additional property for a description
// 	// Add other properties as needed
// }


// const Notification = ({ handleNext, handlePrev, notification, loading }: any) => {
// 	const navigate = useNavigate();
// 	// const { paginator } = notification
// 	const [opens, setOpens] = useState<number[]>([]);

// 	const handleOpens = (index: number, item: string) => {
// 		// console.log('item', item)
// 		if (opens.includes(index)) {
// 			setOpens(opens.filter(x => x !== index));
// 		}
// 		else {
// 			setOpens((prevState) => [...prevState, index]);
// 		}
// 	}
// 	const { isSuperAdmin, isAdmin } = getUserPrivileges();
// 	const item: Item = {
// 		type: "new employee",
// 		date: "2023-11-08",
// 		description: "New employee added to the team",
// 		// Add values for other properties as needed
// 	};






// let finalArray: any = []
// useEffect(() => {
//   notification?.map((item: any) => {
//     Array?.map((items) => {
//       if (item?.type === items.notification) {
//         finalArray?.push({items: items?.notification, item: item?.type })
//       }
//     });
//   });
//   console.log(finalArray)
// }, [])

//   return (
//     <span className="icon-Plus">
//       {iconMap[type] || <HiSpeakerphone size={20} />}
//     </span>
//   );
// };


// 	return (
// 		<div className="drop-down-notify">
// 			<ul className="drop-down animated">
// 				<li className="title">
// 					<div>Notifications</div>
// 				</li>
// 			</ul>
// 			<div id="faq-container-noti">
// 				{!notification ? <div className="noti-no-record">
// 					<h6> <RiMessage3Line size={40} color="#999999" style={{ marginRight: "5px" }} />  </h6>
// 					<span>No Notifications</span></div> :
// 					notification?.data?.map((item: any, i: number) => (
// 						<div key={i} className={opens?.includes(i) ? "faq active" : "faq"} >
// 							<div className="faq-title-contain">
// 								<span className="icon-Plus">
// 									{item?.type === "new employee" ||
// 										item?.type === "new HOD" ||
// 										item?.type === "employee approval" ||
// 										item?.type === "employment termination" ||
// 										item?.type === "termination approval" ? <FaUserPlus size={20} /> :
// 										item?.type === "leave HR approval" ||
// 											item?.type === "leave application" ||
// 											item?.type === "leave approval" ||
// 											item?.type === "leave rejection" ||
// 											item?.type === "leave HOD approval" ? <BsFillBriefcaseFill size={20} /> :
// 											item?.type === "announcement" ? <HiSpeakerphone size={20} /> :
// 												item?.type === "workers request application" ||
// 													item?.type === "workers request approval" ||
// 													item?.type === "workers request rejection" ? <GrUserWorker size={20} /> :
// 													item?.type === "assisted clock in" ? <GiAlarmClock size={20} /> :
// 														item?.type === "new warning" ||
// 															item?.type === "warning response" ||
// 															item?.type === "warning decision" ? <GrStatusWarning size={20} /> :
// 															item?.type === "project creation" ||
// 																item?.type === "project commencement" ||
// 																item?.type === "project completion" ? <GiStahlhelm size={20} /> :
// 																item?.type === "new chat" ? <BsChatText size={20} /> :
// 																	item?.type === "team assignment" ||
// 																		item?.type === "team removal" ? <RiTeamLine size={20} /> :
// 																		item?.type === "task assignment" ? <BiTask size={20} /> :
// 																			item?.type === "role assignment" ? <MdOutlineAssignmentInd size={20} /> :
// 																				item?.type === "appraisal request" ||
// 																					item?.type === "appraisal response" ? <AiOutlineException size={20} /> :
// 																					item?.type === "salary increment" ||
// 																						item?.type === "annual salary increment" ||
// 																						item?.type === "salary decrement" ? <FaRegMoneyBillAlt size={20} /> :
// 																						item?.type === "new event" ? <BsCalendar2Month size={20} /> :
// 																							<HiSpeakerphone size={20} />} </span>
// 								<h6 className="faq-title">{item?.type.charAt(0).toUpperCase() + item?.type.slice(1)}</h6>
// 							</div>
// 							<p className="faq-text">{item?.details}</p>
// 							{(isSuperAdmin || isAdmin) && (
// 								<span className=" faq-text view-noti-drop"
// 									// @ts-ignore
// 									onClick={item?.type === "new employee" ||
// 										item?.type === "employee approval" ||
// 										item?.type === "employment termination" ? () => navigate("/employees") :
// 										item?.type === "leave HR approval" ? () => navigate("/leave/leave/hr") :
// 											item?.type === "leave application" ||
// 												item?.type === "leave rejection" ||
// 												item?.type === "leave approval" ? () => navigate("/leave") :
// 												item?.type === "leave HOD approval" ? () => navigate("/leave/leave/team") :
// 													item?.type === "announcement" ? () => navigate("/announcements") :
// 														item?.type === "workers request application" ||
// 															item?.type === "workers request approval" ||
// 															item?.type === "workers request rejection" ? () => navigate("/workers_request") :
// 															item?.type === "assisted clock in" ? () => navigate("/attendance/attendance/list/hr") :
// 																item?.type === "new warning" ||
// 																	item?.type === "warning response" ||
// 																	item?.type === "warning decision" ? () => navigate("/warning") :
// 																	item?.type === "new chat" ? () => navigate("/support") :
// 																		item?.type === "team assignment" ||
// 																			item?.type === "team removal" ? () => navigate("/team") :
// 																			item?.type === "task assignment" ? () => navigate("/tasks") :
// 																				item?.type === "role assignment" ? () => navigate("/createnewrole") :
// 																					item?.type === "appraisal request" ||
// 																						item?.type === "appraisal response" ? () => navigate("/kpiassessment") :
// 																						item?.type === "salary increment" ? () => navigate("/salary") :
// 																							""}>view</span>)}
// 							<button className="faq-toggle" onClick={() => { handleOpens(i, item) }}>
// 								<i className="fas fa-angle-down"></i>
// 							</button>
// 							<p style={{ marginLeft: "12px", marginTop: "5px" }}>
// 								{moment.duration(moment().diff(item.created_at)).humanize()}{" "}
// 								ago</p>
// 						</div>
// 					))
// 				}
// 			</div>
// 			{/* <div id={"notificationbtn"}>
// 				<Button id={"notibtn"} disabled={!paginator?.hasPrevPage} onClick={() => handlePrev()}>Previous</Button>
// 				<div id="notispan-container">  <span>page</span> <span>{paginator?.currentPage}</span> <span>of</span> <span>{paginator?.pageCount}</span></div>
// 				<Button id="notibtn" disabled={!paginator?.hasNextPage} onClick={() => handleNext()} >Next</Button>
// 			</div> */}
// 			{loading ? <TableLoader isLoading={loading} /> : ""}
// 		</div>
// 	);
// };

// export default Notification;
