import Modal from 'react-bootstrap/Modal';
import { customId, customStyles } from '../Options';
import ModalHeader from './ModalHeader';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { SVGLoader } from '../SVGLoader';
import Select from 'react-select'


const AssignTask = () => {

	const navigate = useNavigate();
	const handleClose = () => setShow(false);
	const [show, setShow] = useState(false);
	const [selectedOption1, setSelectedOption1] = useState(null);
	const [selectedOption2, setSelectedOption2] = useState(null);
	const [selectedOption3, setSelectedOption3] = useState(null);
	const [input, setInput] = useState<any>({
		assignedToId: "",
		taskId: "",
		assignedTeamId: ""
	})






	const allAgents = [] as any;
	const allTeam = [] as any;
	const allTask = [] as any;






	const handleSelectedChange1 = (selectedOption1: any) => {
		setSelectedOption1(selectedOption1);
	};
	const handleSelectedChange2 = (selectedOption2: any) => {
		setSelectedOption2(selectedOption2);
	};
	const handleSelectedChange3 = (selectedOption3: any) => {
		setSelectedOption3(selectedOption3);
	};
	useEffect(() => {
		setInput((prevState: any) => {
			return ({
				...prevState,
				// @ts-ignore
				assignedToId: selectedOption1?.value,
				// @ts-ignore
				taskId: selectedOption2?.value,
				// @ts-ignore
				assignedTeamId: selectedOption3?.value,
			});
		});
		// @ts-ignore
	}, [selectedOption1?.value, selectedOption2?.value, selectedOption3?.value, setInput]);



	const handleSubmit = (e: any) => {
		e.preventDefault()
		// @ts-ignore 
		dispatch(assignTask(input))
	}

	return (
		<>
			<button className="assign-btn" onClick={() => setShow(true)} >Assign</button>

			<Modal show={show} onHide={handleClose} centered>
				<ModalHeader setShow={setShow} headerTitle={"Assign Ticket to"} />
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<label className='label-side'>Assigned To</label>
							<Select name="AssignedTo" id="register-select"
								value={selectedOption1}
								onChange={handleSelectedChange1}
								options={allAgents}
								isDisabled={false}
								isLoading={false}
								styles={customStyles} />
						</div>


						<button
							type="submit"
							id='custom-btn'
							className='mt-4'
							disabled={false} >{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Assign"}</button>
					</form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default AssignTask;
