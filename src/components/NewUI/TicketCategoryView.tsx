import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import TicketTable from "./ticketTable";
import RaiseTicketModal from "./raiseTicketModal";


interface CategoryProps {
    type: "Incident" | "Service" | "Change";
}

export default function TicketCategoryView({ type }: CategoryProps) {
    const [activeFilter, setActiveFilter] = useState<"ALL" | "PENDING" | "IN_PROGRESS" | "CLOSED">("ALL");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const userInfo = JSON.parse(localStorage.getItem("service_desk") || "{}");
    const role = userInfo?.role

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const mockTickets = [
    { 
        ticketId: '4401', 
        severity: 'CRITICAL', 
        file: 'error_log.pdf', 
        ticketType: 'Incident', 
        affectedUser: 'Idris Babatunde', 
        subject: 'Database Connection Timeout', 
        timestamp: '2026-05-03 09:15', 
        status: 'Pending' 
    },
    { 
        ticketId: '4402', 
        severity: 'LOW', 
        file: 'N/A', 
        ticketType: 'Service', 
        affectedUser: 'Sarah Jenkins', 
        subject: 'Software Installation Request', 
        timestamp: '2026-05-03 10:22', 
        status: 'Resolved' 
    },
    { 
        ticketId: '4403', 
        severity: 'MEDIUM', 
        file: 'screenshot.png', 
        ticketType: 'Incident', 
        affectedUser: 'Michael Chen', 
        subject: 'UI Glitch on Dashboard', 
        timestamp: '2026-05-03 11:05', 
        status: 'In Progress' 
    },
    { 
        ticketId: '4404', 
        severity: 'MEDIUM', 
        file: 'RFC_doc.docx', 
        ticketType: 'Change', 
        affectedUser: 'Admin System', 
        subject: 'Server Migration Prep', 
        timestamp: '2026-05-02 14:45', 
        status: 'Pending' 
    },
    { 
        ticketId: '4405', 
        severity: 'CRITICAL', 
        file: 'sys_dump.txt', 
        ticketType: 'Incident', 
        affectedUser: 'Olawale Segun', 
        subject: 'Payment Gateway Down', 
        timestamp: '2026-05-03 08:30', 
        status: 'In Progress' 
    },
    { 
        ticketId: '4406', 
        severity: 'LOW', 
        file: 'N/A', 
        ticketType: 'Service', 
        affectedUser: 'Emily Blunt', 
        subject: 'VPN Access Reset', 
        timestamp: '2026-05-03 12:00', 
        status: 'Resolved' 
    },
    { 
        ticketId: '4407', 
        severity: 'CRITICAL', 
        file: 'security_alert.log', 
        ticketType: 'Incident', 
        affectedUser: 'Security Bot', 
        subject: 'Unauthorized Login Attempt', 
        timestamp: '2026-05-03 01:10', 
        status: 'Pending' 
    },
    { 
        ticketId: '4408', 
        severity: 'LOW', 
        file: 'form_v2.pdf', 
        ticketType: 'Change', 
        affectedUser: 'Jessica Wu', 
        subject: 'Update User Profile Fields', 
        timestamp: '2026-05-01 16:20', 
        status: 'Resolved' 
    },
    { 
        ticketId: '4409', 
        severity: 'MEDIUM', 
        file: 'N/A', 
        ticketType: 'Service', 
        affectedUser: 'David Miller', 
        subject: 'Hardware Upgrade Request', 
        timestamp: '2026-05-02 09:00', 
        status: 'Pending' 
    },
    { 
        ticketId: '4410', 
        severity: 'MEDIUM', 
        file: 'config.json', 
        ticketType: 'Change', 
        affectedUser: 'IT Support', 
        subject: 'API Key Rotation', 
        timestamp: '2026-05-03 11:55', 
        status: 'In Progress' 
    }
];

    // type prop filter
    const typeFilteredTickets = mockTickets.filter(ticket => 
        ticket.ticketType.toLowerCase() === type.toLowerCase()
    )

    // active tab filter
    const finalFilteredTickets = typeFilteredTickets.filter(ticket => {
        // Status logic
        const matchesStatus = activeFilter === "ALL" || 
            ticket.status.toUpperCase().replace(" ", "_") === activeFilter;

        // Search logic (checks ID, User, and Subject)
        const matchesSearch = 
            ticket.ticketId.includes(searchQuery) ||
            ticket.affectedUser.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ticket.subject.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesStatus && matchesSearch;
    });



    return (
        <main className="ticket-category-view">
            <header className="ticket-display-header">
                <div className="">
                    <h1>{type} Ticket Management</h1>
                    <p>Manage and track all support requests across the organization.</p>
                </div>

                {role === 'TEAM_LEAD' && (<button className="raise-button" onClick={handleOpenModal}>
                    <span>Raise {type} Ticket</span>
                </button>)}

                <RaiseTicketModal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                    ticketType={type}
                />
            </header>

            <div className="search-bar">
                <label htmlFor="search"><BiSearchAlt  /></label>
                 <input type="search"
                    id="search" 
                    placeholder={`Search ${type} tickets...`} 
                    className="search-input2" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
            </div>

            <div className="filter-div">
                <button 
                    className={`filter-style ${activeFilter === "ALL" ? "Isactive" : ""}`}
                    onClick={() => setActiveFilter("ALL")}
                >
                    ALL
                </button>
                <button 
                    className={`filter-style ${activeFilter === "PENDING" ? "Isactive" : ""}`}
                    onClick={() => setActiveFilter("PENDING")}
                >
                    Pending
                </button>
                <button 
                    className={`filter-style ${activeFilter === "IN_PROGRESS" ? "Isactive" : ""}`} 
                    onClick={() => setActiveFilter("IN_PROGRESS")}
                >
                    In Progress
                </button>
                <button 
                    className={`filter-style ${activeFilter === "CLOSED" ? "Isactive" : ""}`} 
                    onClick={() => setActiveFilter("CLOSED")}
                >
                    Closed
                </button>
            </div>

            <TicketTable tickets={finalFilteredTickets}/>
           

            
            
        </main>
    )
}