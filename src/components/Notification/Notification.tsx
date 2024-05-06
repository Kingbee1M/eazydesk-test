import { Key, useEffect } from 'react';
import ModalHeaderIcon from '../ModalHeaderIcon';
import { AiOutlineNotification } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getItTicket } from '../../features/Ticket/ticketSlice';
import { NoRecordFound, TableFetch } from '../Options';
import AssignTask from '../Modals/AssignTask';
import TicketStatusCell from '../../Pages/Admin/Ticket/TicketStatusCell';


const Notification = ({ isOpen, onClose }: any) => {
	const dispatch = useAppDispatch();
	const drawerclassNameName = `drawer-container ${isOpen ? 'drawer-open' : ''}`;
	const { itdata, itisLoading } = useAppSelector((state: any) => state.ticket)
	const { itassignisSuccess } = useAppSelector((state: any) => state.ticket);





	useEffect(() => {
		const datas = ""
		// @ts-ignore
		dispatch(getItTicket(datas))
		if (itassignisSuccess) {
			// @ts-ignore
			dispatch(getItTicket(datas))
		}
	}, [dispatch, itassignisSuccess])








	const renderData = (item: any) => {
		return item?.map((item: any, i: Key | null | undefined) => (
			<div className="inner_border_two" key={i}>
				<div className="stack_right_container_sub_one">
					<div>	{item?.ticketType === "INCIDENT"
						? "INC"
						: item?.ticketType === "SERVICE"
							? "SRV"
							: "CHG"}</div>
					<div>{item?.ticketType}</div>
					<div>{item?.severity === "High" ? (
						<span className="severity-high">{item?.severity}</span>
					) : item?.severity === "Medium" ? (
						<span className="severity-medium">
							{item?.severity}
						</span>
					) : (
						<span className="severity-low">{item?.severity}</span>
					)}</div>
					<div >
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
			</div>
		));
	};

	return (
		<div>
			<div className={drawerclassNameName}>
				<ModalHeaderIcon setShow={onClose} icon={<AiOutlineNotification size={30} />} title={"Notification"} subtitle={"Notification & Assign Task"} />
				<div>
					<div className="side-wrapper">
						<div className='dashboard_stack_right_container_main'>
							<div className='stack_right_container_sub'>
								<div>Reference</div>
								<div>Ticket Type</div>
								<div>Severity</div>
								<div>Time Stamp</div>
								<div>Ticket Status</div>
							</div>
							<div className="inner_border_two_container">
								{itisLoading ? (
									<div className='Doughnutcontainer'>
										<TableFetch colSpan={8} />	</div>
								) : itdata?.tickets?.length === undefined ? (
									<div className='Doughnutcontainer'>
										<NoRecordFound
											colSpan={8}
											children={"No record found!"} />
									</div>) : (
									renderData(itdata?.tickets)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Notification;

