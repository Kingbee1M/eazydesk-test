import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import TicketTable from "./ticketTable";
import RaiseTicketModal from "./raiseTicketModal";
import { mockTickets } from "src/Pages/Leads/LeadsDashboard";


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
            ticket.affectedUsers.toLowerCase().includes(searchQuery.toLowerCase()) ||
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