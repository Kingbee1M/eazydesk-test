import { useState } from "react";
import { Modal } from "react-bootstrap";
// import { NoRecordFound } from '../Options';
// import ImageLightbox from '../ImageLightbox';
import ModalHeader from "./ModalHeader";
import ReactQuillWrapper from "../TicketModals/ReactQuillWrapper";

const ViewEmailDetailsModal = ({ data }: any) => {
  const [showModal, setLgShow] = useState(false);
  const [value, setValue] = useState("");
  console.log(data);

  return (
    <>
      <button
        className='btn'
        onClick={() => setLgShow(true)}
        style={{ whiteSpace: "nowrap" }}
      >
        View Email
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
            headerTitle={"Email Address"}
          />
          {/* modal-Body */}
          <Modal.Body>
            <div className='pop_box'>
              <ul className='modal_container'>
                {data.emails.map((mail: string, i: any) => (
                  <li key={i}>{mail}</li>
                ))}
              </ul>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ViewEmailDetailsModal;
