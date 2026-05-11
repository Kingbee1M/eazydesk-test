import React from "react";
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper 
} from "@material-ui/core";

import { TicketProps } from "src/Pages/Leads/LeadsDashboard";


interface UnassignedTicketProps {
    tickets: TicketProps[];
}

export default function UnassignedTicket({ tickets }: UnassignedTicketProps) {
    const unassignedTickets = tickets
        .filter(ticket => ticket.status === 'Pending')
        .sort((a, b) => {
            const priority = { 'CRITICAL': 1, 'MEDIUM': 2, 'LOW': 3 };
            return priority[a.severity] - priority[b.severity];
        });

    const topUnassignedTickets = unassignedTickets.slice(0, 3);
    const unassignedCount = unassignedTickets.length;

    const getSeverityStyle = (severity: string) => {
        switch (severity) {
            case 'CRITICAL': return { color: '#EB291B', fontWeight: 'bold' };
            case 'MEDIUM': return { color: '#073CF8', fontWeight: 'bold' };
            default: return { color: '#686C84', fontWeight: 'bold' };
        }
    };

    return (
        <section className="section-wrapper stylish-border">

            <div className="heading-holder">
                <h2 className="heading2" style={{fontSize: '18px'}}>Unassigned Ticket</h2>
                <span className="pending">{unassignedCount} Pending</span>
            </div>
            

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
                        {topUnassignedTickets.map((ticket) => (
                            <TableRow key={ticket.ticketId} className="ticket-row">
                                <TableCell style={{fontSize: 10}}>
                                    #{ticket.ticketId}
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
                                <TableCell  style={{fontSize: 10, }}>
                                    <button className='ticket-button'>
                                        {ticket.status === 'Pending' ? 'Assign' : 'Unassign'}
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </section>

    );
}