import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import TicketForm from './TicketForm'
import ModalHeader from '../Modals/ModalHeader'
import { useAppDispatch, useAppSelector } from '../../store/useStore'
import { getallReguser } from '../../features/Registration/registrationSlice'

const IncidentRequestModal = ({ headerTitle }: any) => {
 const dispatch = useAppDispatch();
 const { dataAll, isLoadingAll } = useAppSelector((state: any) => state.reg);

 useEffect(() => {
  // Fetch data when the component is mounted or dispatch changes
  dispatch(getallReguser());
 }, [dispatch]);

 const [show, setShow] = useState(false);

 return (
  <div>
   <button onClick={() => setShow(true)} className='btn'>
    Raise Incident
   </button>
   <Modal
    size="lg"
    show={show}
    backdrop="static"
    keyboard={false}>
    <ModalHeader setShow={setShow} headerTitle={headerTitle} />
    <Modal.Body>
     <TicketForm
      user={dataAll}
      isLoading={isLoadingAll}
      type={"SERVICE"}
      setShow={setShow}
     />
    </Modal.Body>
   </Modal>
  </div>
 )
}

export default IncidentRequestModal
