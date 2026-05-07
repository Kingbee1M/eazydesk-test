import React from 'react';
import ReactDOM from 'react-dom'; // Added for Portal
import { useState } from 'react';
import Details from './details';
import WorkNotes from './workNotes';

interface ViewTicketPortalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket: any; 
}

const ViewTicketPortal = ({ isOpen, onClose, ticket }: ViewTicketPortalProps) => {
    const [inView, setInView] = useState<"details" | "work notes">("details")

    
  if (!isOpen || !ticket) return null;
  const isCritical = ticket.severity === 'CRITICAL';
    const isMedium = ticket.severity === 'MEDIUM';


  return ReactDOM.createPortal(
    <main className="modal-overlay" style={{padding: '0px'}} onClick={onClose}>
      {/* 
         Using modal-content-container for the layout/logic 
         plus view-ticket-modal for the specific sidebar styling 
      */}
      <div 
        className="modal-content-container view-ticket-modal" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* HEADER */}
        <div className="top-header">
            <span>{ticket.ticketId}</span>
            <span style={{ color: isCritical ? '#EB291B' : isMedium ? '#073CF8' : '#686C84' }}>{ticket?.severity || 'No Severity'}</span>
        </div>
        
        
        <hr className='horizontal-line' />


        <div className='section-model'>
            

            <div className='view-header'>
                <button onClick={() =>setInView('details')} className={`${inView=== 'details' ? 'active' : ''}`}>Details</button>
                <button onClick={() =>setInView('work notes')} className={`${inView=== 'work notes' ? 'active' : ''}`}>Work notes</button>
            </div>

            {/* BODY */}
            <section>
                {inView === "details" ? 
                <Details ticketData={ticket} /> 
                : 
                <WorkNotes ticketData={ticket} />
                }
            </section>
        </div>

      </div>
    </main>,
    document.body
  );
};

export default ViewTicketPortal;