import React from 'react';
import DonutChart from './donutChart';
import UnassignedTicket from './unassignedTicket';
import TicketPerMonth from './ticketPerMonth';
import TicketRaised from './ticketRaised';
import { AnnualStaffPerformance, TicketsData, TicketProps } from 'src/Pages/Leads/LeadsDashboard';
import StaffPerformance from './staffPreformance';

interface MainDisplayProps {
    totalTicket: number;
    pendingAssign: number;
    resolvedToday: number;
    Service: number;
    Change: number;
    Incident: number;
    tickets: TicketProps[];
    ticketChart: TicketsData[]
    staffData: AnnualStaffPerformance
}

export default function MainDisplay({ 
    totalTicket, 
    pendingAssign, 
    resolvedToday,
    Service,
    Change,
    Incident,
    tickets,
    ticketChart,
    staffData,

}: MainDisplayProps) {
    const userInfo = JSON.parse(localStorage.getItem("service_desk") || "{}");
    const role = userInfo?.role
    const stats = [
        { label: 'Total Tickets', value: totalTicket, },
        { label: 'Pending Assignment', value: pendingAssign, },
        { label: 'Resolved Today', value: resolvedToday,  }
    ];

    return (
        <div className='content-holder'>

            <h1>Dashboard</h1>
         
            <main className='main-content-wrapper'>
                
                
                
                <section className='left-grid'>
                    
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card stylish-border">
                                <p className="stat-label">{stat.label}</p>
                                <h2 className="stat-value">
                                    {stat.value}
                                </h2>
                            </div>
                        ))}
                    </div>

                     {role === "ADMIN" && <UnassignedTicket tickets={tickets} />}

                    <TicketPerMonth TicketData={ticketChart}  />

                    {role === "TEAM_LEAD" && <TicketRaised tickets={tickets} />}
                    
                </section>
                

                <section className="right-grid">
                    <DonutChart Service={Service} Incident={Incident} Change={Change} />
                    {role === "ADMIN" && <StaffPerformance data={staffData} />}
                </section>
            </main>

        </div>
    )
}