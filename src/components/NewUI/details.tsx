import React from "react";
import { getTicketDate, getTicketTime, formatShortDate } from '../../functions/date-time'
import CustomMultiSelect from "./comboBox";
import { useState } from "react";


interface DetailsProps {
    ticketData: any
}

const Details = ({ ticketData }: DetailsProps) => {
    const [assignTicket, setAssignTicket] = useState("")
    console.log('ticket data: ',ticketData)
    const userInfo = JSON.parse(localStorage.getItem("service_desk") || "{}");
    const role = userInfo?.role
    const isInProgress = ticketData.status === 'In Progress';
    const isResolved = ticketData.status === 'Resolved';
    const isClosed = ticketData.status === 'Closed';
    return (
        <div className="section-wrapper">
            <span style={isInProgress ? { color: '#175CD3', backgroundColor: '#EFF8FF', borderColor: '#B2DDFF', borderRadius: '16px', padding: '4px 12px', borderWidth: '1px', borderStyle: 'solid', marginTop: '16px' } 
            : isResolved ? { color: '#067647', backgroundColor: '#ECFDF3', borderColor: '#ABEFC6', borderRadius: '16px', padding: '4px 12px', borderWidth: '1px', borderStyle: 'solid', marginTop: '16px' } 
            : isClosed ? { color: '#6C757D', backgroundColor: '#F7F8FB', borderColor: '#E2E6EF', borderRadius: '16px', padding: '4px 12px', borderWidth: '1px', borderStyle: 'solid', marginTop: '16px' }
            :           { color: '#B54708', backgroundColor: '#FFFAEB', borderColor: '#FEDF89', borderRadius: '16px', padding: '4px 12px', borderWidth: '1px', borderStyle: 'solid', marginTop: '16px' }}>
                {ticketData.status}
            </span>

            <section className="section-grid">
                <div className="wrap">
                    <h2 className="headings">TICKET</h2>
                    <span className="data-result">{ticketData.ticketType}</span>
                </div>

                <div className="wrap">
                    <h2 className="headings">RAISED</h2>
                    <span className="data-result">{getTicketTime(ticketData.timestamp)}</span>
                    <span className="data-result">{getTicketDate(ticketData.timestamp)}</span>
                </div>

                 <div className="wrap">
                    <h2 className="headings">AFFECTED USERS</h2>
                    <span className="data-result">{ticketData.affectedUsers}</span>
                </div>

                {(role !== 'ADMIN' && ticketData.ticketType !== 'Change') && (<div className="wrap">
                    <h2 className="headings">ASSIGNED TO</h2>
                    <span className="data-result">{ticketData.assignedTo}</span>
                </div>
                )}

               
                <div className="wrap" style={{ gridRow: "3", gridColumn: "1" }}>
                    <h2 className="headings">DESCRIPTION</h2>
                    <div 
                        dangerouslySetInnerHTML={{ __html: ticketData.description }} 
                    />
                </div>
            </section>

            {ticketData.ticketType === 'Change' && (<>
                <section className="approval-section">
                        <span>Admin approves change request</span>
                        {ticketData.approved ?
                            <span style={{ color: '#067647', backgroundColor: '#ECFDF3', borderColor: '#ABEFC6', borderRadius: '16px', padding: '4px 12px', borderWidth: '1px', borderStyle: 'solid', fontSize: '12px'}}>Approved</span>
                            : <span style={{ color: '#B54708', backgroundColor: '#FFFAEB', borderColor: '#FEDF89', borderRadius: '16px', padding: '4px 12px', borderWidth: '1px', borderStyle: 'solid', fontSize: '12px'}}>Pending</span>
                        }
                </section>

                <section className="plan-section">
                    <div className="wrap" style={{ gridRow: "3", gridColumn: "1" }}>
                        <h2 className="headings">IMPLEMENTATION PLAN</h2>
                        <div 
                            dangerouslySetInnerHTML={{ __html: ticketData.implementationPlan }} 
                        />
                    </div>

                    <div className="wrap" style={{ gridRow: "3", gridColumn: "1" }}>
                        <h2 className="headings">ROLLBACK PLAN</h2>
                        <div 
                            dangerouslySetInnerHTML={{ __html: ticketData.rollbackPlan }} 
                        />
                    </div>

                </section>
                    
                    { role !== 'ADMIN' && (
                        <>
                    <hr className='horizontal-line' />

                    <div className="wrap" style={{margin: '10px 0px'}}>
                        <h2 className="headings">ASSIGNED TO</h2>
                        <span className="data-result" style={{marginLeft: '10px'}}>{ticketData.assignedTo}</span>
                    </div>
                    </>
                    )}
                
                </>
                )}

                {(role === 'ADMIN' || ticketData.ticketType === 'Change') && (
                    <>
                    <hr className='horizontal-line' />

                    <CustomMultiSelect
                    multiple={false} 
                    options={['user1@example.com', 'user2@example.com', 'user3@example.com']} 
                    placeholder="assign the ticket to an it support"
                    value={assignTicket ? [assignTicket] : []}
                    onChange={(val: string[]) => setAssignTicket(val[0])} 
                    />
                    </>
                )}

            <hr className='horizontal-line' />

            <section className="activity-timeline">
                <h2 className="headings">ACTIVITY TIMELINE</h2>

                <div className="timeline-container">
                    {ticketData.activity?.map((item: any, index: number) => (
                        <div className="timeline-item" key={item.actionID || index}>
                            {/* The Dot */}
                            <div className={`timeline-dot ${item.status}`} />
                            
                            {/* The Content */}
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <span className="timeline-action">{item.action}</span>
                                </div>
                                {/* <p className="timeline-user">By {item.user}</p> */}
                                    <span className="timeline-time">
                                        {formatShortDate(getTicketDate(item.time))} — {getTicketTime(item.time)}
                                    </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', gap: '10px', borderTop: "2px solid #D5D5D5", paddingTop: '15px'}}>
                {/* ADMIN PROTAL */}
                {(role === 'ADMIN' && ticketData.ticketType === "Change") ? (
                    <>
                    {ticketData.approved ? 
                    (<>
                        <button style={{width: '100%', padding: '10px', marginBottom: '25px', borderRadius: '10px', backgroundColor: '#148DF6', color: 'white' }}>
                            Save
                        </button>
                    </>) : 


                    (<>
                        <button style={{width: '100%', padding: '10px', marginBottom: '25px', borderRadius: '10px', backgroundColor: '#148DF6', color: 'white' }}>
                            Save
                        </button>
                        <button style={{width: '100%', padding: '10px', marginBottom: '25px', borderRadius: '10px', backgroundColor: '#ECFDF5', color: '#579669', borderWidth: '1px', borderColor: '#6EE7B7', borderStyle: 'solid' }}>
                            Approved
                        </button>
                        <button style={{width: '100%', padding: '10px', marginBottom: '25px', borderRadius: '10px', backgroundColor: '#FEF2F2', color: '#DE2626', borderWidth: '1px', borderColor: '#FCA5A5', borderStyle: 'solid' }}>
                            Reject
                        </button>
                    </>
                )}
                    </>
                ) : (
                    <>
                        <button style={{width: '100%', padding: '10px', marginBottom: '25px', borderRadius: '10px', backgroundColor: '#148DF6', color: 'white' }}>
                            Save
                        </button>
                    </>
                )}

                {/* TEAM LEADER PORTAL */}
                {role === 'TEAM_LEAD' && (<button 
                style={ticketData.status === 'Closed' ? 
                    {width: '50%', padding: '15px', marginBottom: '25px', borderRadius: '10px', background: 'none', textAlign: 'center', borderWidth: '1px', borderColor: '#148DF6', color: '#148DF6', borderStyle: 'solid' }
                    :
                    {width: '50%', padding: '15px', marginBottom: '25px', borderRadius: '10px', backgroundColor: '#148DF6', color: 'white' }
                }
                >
                    {ticketData.status === 'Closed' ? 'Reopen' : 'Confirm & Close ticket'}
                </button>)}


                {/* IT SUPPORT PORTAL */}
                {}
            </div>
        </div>
        
    )
}

export default Details;