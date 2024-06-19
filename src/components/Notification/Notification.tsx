import { useEffect, useState } from 'react';
import ModalHeaderIcon from '../ModalHeaderIcon';
import { AiOutlineNotification } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getItTicket, reset } from '../../features/Ticket/ticketSlice';
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

	const [faqs, setFaqs] = useState<any>([]);

	useEffect(() => {
		if (itdata) {
			setFaqs(itdata?.tickets?.map((faq: any) => ({ ...faq, active: false })));
		}
	}, [itdata]);

	const toggleFaq = (index: number) => {
		setFaqs((prevFaqs: any[]) =>
			prevFaqs.map((item, i) => ({
				...item,
				active: i === index ? !item.active : false,
			}))
		);
	};


	useEffect(() => {
		if (isOpen || itassignisSuccess) {
			// @ts-ignore
			dispatch(getItTicket(datas));
		}

		setTimeout(() => {
			dispatch(reset());
		}, 2000);


	}, [dispatch, isOpen, itassignisSuccess]);




	const renderData = (item: any) => (

		<div className="inner_border_two">
			<h3 className="faq-title">
				<div className='stack_right_container_sub'>
					<div>Ticket Type</div>
					<div>Severity</div>
					<div>Assign</div>
					<div>Status</div>
				</div>
			</h3>
			<div className="stack_right_container_sub_one">
				<div>{item?.ticketType}</div>
				<td data-title="severity">
					{item?.severity === "High" ? (
						<button className="severity-high">
							{item?.severity}
						</button>
					) : item?.severity === "Medium" ? (
						<button className="severity-medium">
							{item?.severity}
						</button>
					) : item?.severity === "Critical" ? (
						<button className="severity-Critical">
							{item?.severity}
						</button>
					) : item?.severity === "Low" ? (
						<button className="severity-low">
							{item?.severity}
						</button>
					) : (
						<button className="severity-low">Low</button>
					)}
				</td>
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
										<button className="severity-high">
											{item?.severity}
										</button>
									) : item?.severity === "Medium" ? (
										<button className="severity-medium">
											{item?.severity}
										</button>
									) : item?.severity === "Critical" ? (
										<button className="severity-Critical">
											{item?.severity}
										</button>
									) : item?.severity === "Low" ? (
										<button className="severity-low">
											{item?.severity}
										</button>
									) : (
										<button className="severity-low">Low</button>
									)}
								</div>

							</div> 	<p style={{ marginLeft: "12px", marginTop: "5px" }}>
									{moment.duration(moment().diff(item?.createdAt)).humanize()}{" "}
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
	);
}

export default Notification;


