import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { SVGLoader } from '../../../components/SVGLoader';
import ModalHeader from '../../../components/Modals/ModalHeader';
import { BsPencil } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { reset, updateCompany } from '../../../features/Company/companySlice';
import { customId } from '../../../components/Options';


const EditCompany = ({ id, name }: any) => {
	const dispatch = useAppDispatch();
	const { updateisSuccess, updateisLoading } = useAppSelector((state: any) => state.company);
	const handleClose = () => setShow(false);
	const [show, setShow] = useState(false);
	const [input, setInput] = useState<any>({ name: "" })



	const handleSubmit = (e: { preventDefault: () => void; }) => {
		const value = { id, input }
		e.preventDefault()
		// @ts-ignore 
		dispatch(updateCompany(value))
	}

	const handleOnChange = (input: string, value: string) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};

	useEffect(() => {
		setInput((prevState: any) => {
			return ({
				...prevState,
				name: name
			});
		});
	}, [name]);
	useEffect(() => {
		if (updateisSuccess) {
			toast.success("Company Updated!", { toastId: customId });
			setShow(false);
		};
		dispatch(reset())
	}, [updateisSuccess, dispatch]);


	return (
		<>
			<div className='team-card-option' onClick={() => setShow(true)}>
				<BsPencil size={16} />
				<span>Edit Company</span>
			</div>
			<ToastContainer />
			<Modal show={show} onHide={handleClose} centered>
				<ModalHeader setShow={setShow} headerTitle={"Edit Company"} />
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<div className="input__box mb-4">
							<span className="details">Company Name</span>
							<input type="text" placeholder="name"
								value={input?.name}
								onChange={(e) => handleOnChange("name", e.target.value)}
								required />
						</div>

						<button
							type="submit"
							id='custom-btn'
							className='mt-4'
							disabled={updateisLoading} >{updateisLoading ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Edit"}</button>
					</form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default EditCompany;
