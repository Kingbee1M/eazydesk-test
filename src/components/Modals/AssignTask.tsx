import Modal from 'react-bootstrap/Modal';
import { customId, customStyles } from '../Options';
import ModalHeader from './ModalHeader';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { SVGLoader } from '../SVGLoader';
import Select from 'react-select'
import { ITgetallReguser } from '../../features/Registration/registrationSlice';
import { itAssignTicket, reset } from '../../features/Ticket/ticketSlice';
import { useAppDispatch, useAppSelector } from '../../store/useStore';




const AssignTask = ({ id, Assigned, needsApproval, data }: any) => {
	const dispatch = useAppDispatch();
	const { itassignisSuccess, itassignisLoading, } = useAppSelector((state: any) => state.ticket);
	const { ITgetallReguserdata, ITgetallReguserisLoading } = useAppSelector((state: any) => state.reg);
	const user = ITgetallReguserdata?.data?.users?.filter((person: { role: string; }) => person?.role === 'IT_SUPPORT');

	const handleClose = () => setShow(false);
	const [show, setShow] = useState(false);
	const [assignedUserId, setAssignedUserId] = useState(null);
	const handleSelectedChange1 = (assignedUserId: any) => {
		setAssignedUserId(assignedUserId);
	};


	const item = user?.map((item: any) => ({
		value: item?.id,
		label: `${item.firstname}  ${item.lastname}`,
	})) || [];




	//@ts-ignore
	const formData = { "assignedUserId": assignedUserId?.value }
	const handleSubmit = (e: any) => {
		e.preventDefault()
		const datas = { id, formData }
		// @ts-ignore  
		dispatch(itAssignTicket(datas))
	}

	useEffect(() => {
		if (show) {
			dispatch(ITgetallReguser())
		}

		if (itassignisSuccess) {
			toast.success(`Ticket ${Assigned}`, { toastId: customId });
			setShow(false);
		}
		// Fetch data when the component is mounted or dispatch changes  
		dispatch(reset());
	}, [dispatch, itassignisSuccess, Assigned, show]);

	const getButtonProps = () => {
		const disabled = needsApproval && !["APPROVED", "INPROGRESS", "PENDING"].includes(data?.previousStatus);
		const className = disabled ? "needsApproval" : "assign-btn";
		return { disabled, className };
	};

	const { disabled, className } = getButtonProps();



	return (
		<>
			<ToastContainer />
			<button
				disabled={disabled}
				className={className}
				onClick={() => setShow(true)}
			>
				Assign
			</button>

			<Modal show={show} onHide={handleClose} centered>
				<ModalHeader setShow={setShow} headerTitle={"Assign Ticket to"} />
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<Select name="AssignedTo" id="register-select"
								value={assignedUserId}
								onChange={handleSelectedChange1}
								options={item}
								isDisabled={ITgetallReguserisLoading}
								isLoading={ITgetallReguserisLoading}
								styles={customStyles} />
						</div>

						<button
							type="submit"
							id='custom-btn'
							className='mt-4'
							disabled={ITgetallReguserisLoading} >
							{itassignisLoading ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Assign Task"}
						</button>
					</form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default AssignTask;
