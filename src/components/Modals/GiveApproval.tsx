import Modal from 'react-bootstrap/Modal';
import { customId, customStyles } from '../Options';
import ModalHeader from './ModalHeader';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { SVGLoader } from '../SVGLoader';
import Select from 'react-select'
import { giveApproval, reset } from '../../features/Ticket/ticketSlice';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { item } from '../Data';


const GiveApproval = ({ id }: any) => {
	const dispatch = useAppDispatch();
	const { giveApprovalisLoading, giveApprovalisSuccess } = useAppSelector((state: any) => state.ticket);


	const handleClose = () => setShow(false);
	const [show, setShow] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);



	const handleSelectedChange1 = (selectedOption: any) => {
		setSelectedOption(selectedOption);
	};





	// @ts-ignore
	const value = { status: selectedOption?.value }
	const handleSubmit = (e: any) => {
		const datas = { id, value }
		e.preventDefault()
		// @ts-ignore 
		dispatch(giveApproval(datas))
	}

	useEffect(() => {
		if (giveApprovalisSuccess) {
			toast.success("Approval Given!", { toastId: customId });
			setShow(false);
		}
		dispatch(reset());
	}, [giveApprovalisSuccess, show, dispatch]);




	return (
		<>
			<ToastContainer />
			<button className="assign-btn" onClick={() => setShow(true)} >Give Approval</button>
			<Modal show={show} onHide={handleClose} centered>
				<ModalHeader setShow={setShow} headerTitle={"Give Approval"} />
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<Select name="AssignedTo" id="register-select"
								value={selectedOption}
								onChange={handleSelectedChange1}
								options={item}
								isDisabled={giveApprovalisLoading}
								isLoading={giveApprovalisLoading}
								styles={customStyles} />
						</div>

						<button
							type="submit"
							id='custom-btn'
							className='mt-4'
							disabled={false} >
							{giveApprovalisLoading ?
								<SVGLoader
									width={"30px"}
									height={"30px"}
									color={"#fff"} /> :
								"Give Approval"}
						</button>
					</form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default GiveApproval;

