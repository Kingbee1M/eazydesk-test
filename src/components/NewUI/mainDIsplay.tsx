import React from 'react';

interface MainDisplayProps {
    totalTicket: number;
    pendingAssign: number;
    resolvedToday: number;
}

export default function MainDisplay({ 
    totalTicket, 
    pendingAssign, 
    resolvedToday 
}: MainDisplayProps) {
    
    // Quick array to map through for the UI
    const stats = [
        { label: 'Total Tickets', value: totalTicket, },
        { label: 'Pending Assignment', value: pendingAssign, },
        { label: 'Resolved Today', value: resolvedToday,  }
    ];

    return (
        <main className='main-content-wrapper'>
            

            <section className='left-grid'>
                <h1>Dashboard</h1>
                <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <p className="stat-label">{stat.label}</p>
                        <h2 className="stat-value">
                            {stat.value}
                        </h2>
                    </div>
                ))}
            </div>


            </section>
            

            <section className="table-container">
                {/* Your ticket list will go here later */}
            </section>
        </main>
    )
}