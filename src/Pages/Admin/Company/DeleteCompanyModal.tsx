import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../../store/useStore';
import { SVGLoader } from '../../../components/SVGLoader';
import { BsTrash } from 'react-icons/bs'
import { BsXLg } from "react-icons/bs";
import { customId } from '../../../components/Options';
import { deleteCompany } from '../../../features/Company/companySlice';

const DeleteCompanyModal = ({ id, }: any) => {
	const dispatch = useAppDispatch()
	const { deleteisLoading, deletemessage, deleteisError, deleteisSuccess } = useAppSelector((state: any) => state.company)

	const [show, setShow] = useState(false);

	useEffect(() => {
		if (deleteisSuccess) {
			toast.success("Company Deleted!", { toastId: customId });
			setShow(false)
		}
	}, [dispatch, deleteisError, deleteisSuccess, deletemessage]);





	const handelfalse = () => {
		setShow(false)
	}
	const handeltrue = () => {
		// @ts-ignore 
		dispatch(deleteCompany(id))
	}


	return (
		<div >
			<div className='team-card-option' onClick={() => setShow(true)}>
				<BsTrash size={16} />
				<span>Delete Company</span>
			</div>
			<Modal show={show} centered>
				<div className='exit-modal' onClick={() => setShow(false)}>
					<BsXLg size={20} className='close-span-icon' />
				</div>
				<div className="popup__container">
					<div className="popup__modal">
						<div className="popup__modal_header">
							<div className="popup__modal_title_accent">
								<h5>Delete  Task?</h5>
							</div>
						</div>
						<div className="popup__modal_footer">
							<button id="button-modal-cancel" className="popup__modal_button" onClick={handelfalse}>Cancel</button>
							<button id="button-modal-continue" className="popup__modal_button_accent" disabled={deleteisLoading} onClick={handeltrue}>
								{deleteisLoading ? <SVGLoader width={"40px"} height={"40px"} color={"#fff"} /> : 'Continue'}</button>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default DeleteCompanyModal

