import { useState } from "react";
import { Modal } from "react-bootstrap";
import ModalHeader from "./ModalHeader";
import ReactQuillWrapper from "../TicketModals/ReactQuillWrapper";

const ViewTicketDetailsModal = ({ data }: any) => {
  const [showModal, setLgShow] = useState(false);



  return (
    <>
      <button
        className='btn'
        onClick={() => setLgShow(true)}
        style={{ whiteSpace: "nowrap" }}
      >
        View details
      </button>
      {showModal && (
        <Modal
          size='lg'
          show={showModal}
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          {/* modal-header */}
          <ModalHeader
            setLgShow={setLgShow}
            setShow={setLgShow}
            headerTitle={"Ticket Details"}
          />
          {/* modal-Body */}
          <Modal.Body>
            <div className='pop_box'>
              <div className='modal_container'>
                <div className='container viewOrderContainer'>
                  <div className='details_info_title'>
                    <span className='form_info'>{data?.issueDescription} </span>
                  </div>
                </div>
                <ReactQuillWrapper
                  value={data?.description}
                />

              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ViewTicketDetailsModal;
