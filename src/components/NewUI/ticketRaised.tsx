import React from "react";
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper 
} from "@material-ui/core";

import { TicketProps } from "src/Pages/Leads/LeadsDashboard";


interface UnassignedTicketProps {
    tickets: TicketProps[];
}

export default function TicketRaised ({ tickets }: UnassignedTicketProps) {
    const getSeverityStyle = (severity: string) => {
        switch (severity) {
            case 'CRITICAL': return { color: '#EB291B', fontWeight: 'bold' };
            case 'MEDIUM': return { color: '#073CF8', fontWeight: 'bold' };
            default: return { color: '#686C84', fontWeight: 'bold' };
        }
    };

    const topTickets = tickets.slice(0, 3);
    return (
        <section className="section-wrapper stylish-border">
        
            <h2 className="heading2">Ticket Raised</h2>
            

            <TableContainer component={Paper} elevation={0} className="table-container">
                <Table aria-label="unassigned tickets table" className="table-comp">
                    <TableHead>
                        <TableRow className="table-header">
                            <TableCell style={{fontSize: 11}}><strong>TICKET ID</strong></TableCell>
                            <TableCell style={{fontSize: 11}}><strong>SEVERITY</strong></TableCell>
                            <TableCell style={{fontSize: 11}}><strong>TICKET TYPE</strong></TableCell>
                            <TableCell style={{fontSize: 11}}><strong>SUBJECT</strong></TableCell>
                            <TableCell style={{fontSize: 11}}><strong>status</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {topTickets.map((ticket) => {
                            const status = ticket.status
                            return (
                            <TableRow key={ticket.ticketId} className="ticket-row">
                                <TableCell style={{fontSize: 10}}>
                                    {ticket.ticketId}
                                </TableCell>
                                <TableCell style={{fontSize: 10}}>
                                    <span style={getSeverityStyle(ticket.severity)}>
                                        {ticket.severity}
                                    </span>
                                </TableCell>
                                <TableCell style={{fontSize: 10}}>
                                    {ticket.ticketType}
                                </TableCell>
                                <TableCell style={{fontSize: 10}}>{ticket.subject}</TableCell>
                                <TableCell  style={{fontSize: 10, padding: '16px 0px'}}>
                                    <span 
                                    style={{backgroundColor: 
                                    status === 'Pending' ? '#FFFAEB' : status === 'In Progress' ? '#EFF8FF' : '#ECFDF3',
                                    color: 
                                    status === 'Pending' ? '#B54708' : status === 'In Progress' ? '#175CD3' : '#067647',
                                    borderColor: 
                                    status === 'Pending' ? '#FEDF89' : status === 'In Progress' ? '#B2DDFF' : '#ABEFC6',
                                    padding: '8px 5px',
                                    borderRadius: 20,
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    width: '100%',
                                    }}
                                    >{ticket.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        )})}
                    </TableBody>
                </Table>
            </TableContainer>

        </section>
    );
}