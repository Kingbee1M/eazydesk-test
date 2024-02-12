import Modal from 'react-bootstrap/Modal';
import { customId, customStyles } from '../TableOptions';
import ModalHeader from './ModalHeader';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { SVGLoader } from '../SVGLoader';
import Select from 'react-select'


const AssignTask = ({ show, setShow }: any) => {

	const navigate = useNavigate();
	const handleClose = () => setShow(false);
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
			<ToastContainer position="top-right" />
			<Modal show={show} onHide={handleClose} centered>
				<ModalHeader setShow={setShow} headerTitle={"Assign Task"} />
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
						<div className='mb-4'>
							<label className='label-side'>Select Task</label>
							<Select name="Select Task" id="register-select"
								value={selectedOption2}
								onChange={handleSelectedChange2}
								options={allTask}
								isDisabled={false}
								isLoading={false}
								styles={customStyles} />
						</div>
						<div className='mb-4'>
							<label className='label-side'>Select Team</label>
							<Select name="Select Team" id="register-select"
								value={selectedOption3}
								onChange={handleSelectedChange3}
								options={allTeam}
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
