import React from "react";
import ReactDOM from "react-dom";
import StandardTicketUI from './StandardTicketUI'
import ChangeTicketUI from './ChangeTicketUI'
import { useState } from "react";

interface PortalProps {
  isOpen: boolean;
  onClose: () => void;
  ticketType: "Incident" | "Service" | "Change";
}

const RaiseTicketModal = ({ isOpen, onClose, ticketType }: PortalProps) => {
  const [currentType, setCurrentType] = useState(ticketType);
  const [email, setEmail] = useState<string[]>([])
  const [subject, setSubject] = useState("")
  const [description1, setDescription1] = useState<string>("");
  const [currentState, setCurrentState] = useState<string>("");
  const [proposedChange, setProposedChange] = useState<string>("");
  const [affectedUsers, setAffectedUsers] = useState<string>("");
  const [severity, setSeverity] = useState<string>("");
  const [attachments, setAttachments] = useState<File[]>([])
  const [timeCreated, setTimeCreated] = useState<string>(new Date().toISOString());
  if (!isOpen) return null;

    const handleFormSubmit = (formData: any) => {
    console.log(`Submitting ${ticketType} Ticket:`, formData);
    onClose();
    }

  
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      
      
      <div className="modal-content-container" onClick={(e) => e.stopPropagation()}>
        
          {/* <button style={{position: 'absolute', top: 0, right: 0, background: 'none', fontSize: '32px' !}} onClick={onClose}>&times;</button> */}

        <div className="modal-body">
          {currentType === 'Change' ? (
          <ChangeTicketUI 
            type={currentType} 
            onTypeChange={(t) => setCurrentType(t)} 
            onCancel={onClose} 
            onSubmit={handleFormSubmit}
            email={email}
            setEmail={setEmail}
            subject={subject}
            setSubject={setSubject}
            description={description1}
            setDescription={setDescription1}
            description2={currentState}
            setDescription2={setCurrentState}
            description3={proposedChange}
            setDescription3={setProposedChange}
            affectedUsers={affectedUsers}
            setAffectedUsers={setAffectedUsers}
            severity={severity}
            setSeverity={setSeverity}
            attachments={attachments}
            setAttachments={setAttachments}
          />
        ) : (
          <StandardTicketUI 
            type={currentType} 
            onTypeChange={(t) => setCurrentType(t)} 
            onCancel={onClose} 
            onSubmit={handleFormSubmit}
            email={email}
            setEmail={setEmail}
            subject={subject}
            setSubject={setSubject}
            description={description1}
            setDescription={setDescription1}
            affectedUsers={affectedUsers}
            setAffectedUsers={setAffectedUsers}
            severity={severity}
            setSeverity={setSeverity}
            attachments={attachments}
            setAttachments={setAttachments}
          />
        )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default RaiseTicketModal;

