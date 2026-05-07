import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

// Assuming your socket server URL is in an env variable
const SOCKET_SERVER_URL = process.env.REACT_APP_SOCKET_URL || "http://localhost:3001";

interface WorkNotesProps {
    ticketData: any;
}

const WorkNotes = ({ ticketData }: WorkNotesProps) => {
    const userInfo = JSON.parse(localStorage.getItem("service_desk") || "{}");
    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState("");
    const socketRef = useRef<any>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        
        // 1. Initialize Socket Connection
        socketRef.current = io(SOCKET_SERVER_URL);

        // 2. Join the specific ticket room
        socketRef.current.emit("join_ticket_chat", {
            ticketId: ticketData.ticketId,
            userId: userInfo.id, // Backend will verify if this user is allowed
        });

        // 3. Listen for incoming notes
        socketRef.current.on("receive_note", (newNote: any) => {
            setMessages((prev) => [...prev, newNote]);
        });

        // Cleanup on unmount
        return () => {
            socketRef.current.disconnect();
        };
    }, [ticketData.ticketId, userInfo.id]);

    

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const userRole = userInfo.role; // e.g., 'admin', 'team_lead', 'it_support'
    const userId = userInfo.id;

    const canViewChat = 
        userRole === 'ADMIN' || 
        ticketData.createdBy === userId || 
        ticketData.assignedToId === userId;

    if (!canViewChat) {
        return <div className="p-4 text-red-500">You do not have permission to view these work notes.</div>;
    }

    const sendNote = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const noteData = {
            ticketId: ticketData.ticketId,
            senderId: userInfo.id,
            senderName: userInfo.name,
            message: input,
            timestamp: new Date().toISOString(),
        };

        // Emit to server
        socketRef.current.emit("send_note", noteData);
        
        // Optimistic UI update (optional) or wait for server broadcast
        setInput("");
    };

    return (
        <section className="work-notes-container">
            <h2 className="headings">WORK NOTES (Restricted Access)</h2>
            
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`message-bubble ${msg.senderId === userInfo.id ? 'own' : 'other'}`}
                    >
                        <span className="sender-name">{msg.senderName}</span>
                        <p>{msg.message}</p>
                        <span className="chat-time">{new Date(msg.timestamp).toLocaleTimeString()}</span>
                    </div>
                ))}
                <div ref={scrollRef} />
            </div>

            <form onSubmit={sendNote} className="chat-input-area">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a work note..."
                />
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default WorkNotes;