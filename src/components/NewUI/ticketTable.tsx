import React, { useState } from "react";
import pdf from '../../assets/img/pdf-icon.svg'
import { BsFiletypeDoc } from "react-icons/bs";
import { BsFiletypePng } from "react-icons/bs";
import ViewTicketPortal from "./viewTicket";
import eye from '../../assets/img/view.svg'

interface TicketTableProps {
    page?: 'all' 
    tickets: any[];
}

export default function TicketTable({ tickets, page }: TicketTableProps) {
    const [selectedTicket, setSelectedTicket] = useState<any>(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
    return (
        <div className="table-container" style={{ width: '100%', overflowX: 'auto', marginTop: '20px' }}>
            <table className="ticket-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ textAlign: 'left', borderBottom: '2px solid #f0f0f0', backgroundColor: '#FCFCFC' }}>
                        <th style={headerStyle}>TICKET ID</th>
                        <th style={headerStyle}>SEVERITY</th>
                        <th style={headerStyle}>FILE</th>
                        {page === 'all' && <th style={headerStyle}>TICKET TYPE</th>}
                        <th style={headerStyle}>AFFECTED USER</th>
                        <th style={headerStyle}>SUBJECT</th>
                        <th style={headerStyle}>TIME STAMP</th>
                        <th style={headerStyle}>STATUS</th>
                        <th style={headerStyle}>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets?.length > 0 ? (
                    tickets.map((ticket, index) => {
                        const isCritical = ticket.severity === 'CRITICAL';
                        const isMedium = ticket.severity === 'MEDIUM';

                        const isInProgress = ticket.status === 'In Progress';
                        const isResolved = ticket.status === 'Resolved';
                        const isClosed = ticket.status === 'Closed';


                        return (
                            <tr key={index} style={{ borderBottom: '1px solid #D5D5D5' }} className="ticket-row">
                                <td style={cellStyle}>{ticket.ticketId}</td>
                                <td style={cellStyle}>
                                    <span 
                                        className={`${ticket.severity.toLowerCase()}`} 
                                        style={{ color: isCritical ? '#EB291B' : isMedium ? '#073CF8' : '#686C84' }}
                                    >
                                        {ticket.severity}
                                    </span>
                                </td>
                                <td style={cellStyle}>
                                {Array.isArray(ticket.file) && ticket.file.length > 0 ? (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {ticket.file.map((fileName: string, index: number) => {
                                        const lowerFile = fileName.toLowerCase();
                                        return (
                                        <div
                                            key={index}
                                            title={fileName}
                                            style={{
                                            marginLeft: index === 0 ? '0' : '-10px',
                                            zIndex: ticket.file.length - index,  
                                            backgroundColor: '#fff', 
                                            borderRadius: '4px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            transition: 'transform 0.2s', 
                                            }}
                                            // Fun hover effect to see the stacked files
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                        >
                                            {lowerFile.endsWith('.pdf') ? (
                                            <img src={pdf} alt="pdf" style={{ width: '22px', height: '22px' }} />
                                            ) : lowerFile.endsWith('.png') || lowerFile.endsWith('.jpg') ? (
                                            <BsFiletypePng style={{ fontSize: '22px', color: '#0ea5e9' }} />
                                            ) : (
                                            <BsFiletypeDoc style={{ fontSize: '22px', color: '#64748b' }} />
                                            )}
                                        </div>
                                        );
                                    })}
                                    
                                    {/* Optional: Counter if there are too many files */}
                                    {ticket.file.length > 3 && (
                                        <span style={{ fontSize: '10px', marginLeft: '8px', color: '#94a3b8', fontWeight: 'bold' }}>
                                        +{ticket.file.length - 3}
                                        </span>
                                    )}
                                    </div>
                                ) : (
                                    <span style={{ color: '#ccc', fontSize: '12px' }}>No File</span>
                                )}
                                </td>
                                {page === 'all' && <td style={cellStyle}>{ticket.ticketType}</td>}
                                <td style={cellStyle}>{ticket.affectedUsers || "User"}</td>
                                <td style={cellStyle}>{ticket.subject}</td>
                                <td style={cellStyle}>{ticket.timestamp || "2026-05-03"}</td>
                                <td style={statuscellStyle}>
                                    <span style={{ 
                                        padding: '4px 10px', 
                                        borderRadius: '16px', 
                                        backgroundColor: isInProgress ? '#EFF8FF' : isResolved ? '#ECFDF3' : isClosed ? '#F7F8FB' : '#FFFAEB',
                                        color: isInProgress ? '#175CD3' : isResolved ? '#067647' : isClosed ? '#6C757D' : '#B54708',
                                        border: `1px solid ${isInProgress ? '#B2DDFF' : isResolved ? '#ABEFC6' : isClosed ? '#E2E6EF' : '#FEDF89'}`
                                    }}>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td style={cellStyle}>
                                    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => { setSelectedTicket(ticket); setIsViewOpen(true); }}>
                                        <img src={eye} alt="view" style={{width: '20px'}} />
                                    </button>
                                </td>
                                </tr>
                                    );
                                })
                            ) : (
                            
                                <tr>
                                    <td colSpan={9} style={{ textAlign: 'center', padding: '20px' }}>
                                        No tickets found.
                                    </td>
                                </tr>
                            )}
                </tbody>
            </table>

            <ViewTicketPortal 
            isOpen={isViewOpen} 
            onClose={() => setIsViewOpen(false)} 
            ticket={selectedTicket} 
            />
        </div>
    );
}

const headerStyle: React.CSSProperties = {
    padding: '12px 5px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#363636',
};

const cellStyle: React.CSSProperties = {
    padding: '12px 15px',
    fontSize: '14px',
    color: '#333',
};

const statuscellStyle: React.CSSProperties = {
    padding: '12px 0px',
    fontSize: '10px',
    color: '#333',
    width: '90px',
};

