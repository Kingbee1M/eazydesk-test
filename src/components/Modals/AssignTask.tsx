import Modal from 'react-bootstrap/Modal';
import { customId, customStyles } from '../Options';
import ModalHeader from './ModalHeader';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { SVGLoader } from '../SVGLoader';
import Select from 'react-select'
import { getallReguser } from '../../features/Registration/registrationSlice';
import { reset } from '../../features/Ticket/ticketSlice';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { itAssignTicket } from '../../features/Ticket/ticketSlice';


const AssignTask = ({ id, Assigned }: any) => {
	const dispatch = useAppDispatch();
	const handleClose = () => setShow(false);
	const [show, setShow] = useState(false);
	const [assignedUserId, setAssignedUserId] = useState(null);

	const handleSelectedChange1 = (assignedUserId: any) => {
		setAssignedUserId(assignedUserId);
	};


	const { itassignisSuccess, itassignisLoading } = useAppSelector((state: any) => state.ticket);
	const { dataAll } = useAppSelector((state: any) => state.reg);

	const Itmember = dataAll?.users?.filter((user: any) => user.role === "IT_SUPPORT").map((user: any) =>
	({
		value: user?.id,
		label: `${user.firstname} ${user.lastname}`,
	}));

	//dispatch to get all registered users
	useEffect(() => {
		//@ts-ignore
		dispatch(getallReguser(id))

	}, [dispatch, id]);


	//@ts-ignore
	const formData = { "assignedUserId": assignedUserId?.value }
	const handleSubmit = (e: any) => {
		e.preventDefault()
		const datas = { id, formData }
		// @ts-ignore  
		dispatch(itAssignTicket(datas))
	}

	useEffect(() => {
		if (itassignisSuccess && show) {
			toast.success(`Ticket ${Assigned}`, { toastId: customId });
			setShow(false);
		}

		dispatch(reset());
	}, [show, dispatch, itassignisSuccess, Assigned]);


	return (
		<>
			<ToastContainer position="top-right" />
			<button className="assign-btn" onClick={() => setShow(true)} >Assign</button>

			<Modal show={show} onHide={handleClose} centered>
				<ModalHeader setShow={setShow} headerTitle={"Assign Ticket to"} />
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<label className='label-side'>Assigned To</label>
							<Select name="AssignedTo" id="register-select"
								value={assignedUserId}
								onChange={handleSelectedChange1}
								options={Itmember}
								isDisabled={false}
								isLoading={false}
								styles={customStyles} />
						</div>

						<button
							type="submit"
							id='custom-btn'
							className='mt-4'
							disabled={false} >
							{itassignisLoading ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Assign Task"}
						</button>
					</form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default AssignTask;
