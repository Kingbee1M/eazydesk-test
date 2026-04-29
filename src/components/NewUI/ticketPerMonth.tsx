import React from "react";
import { TicketsData } from "src/Pages/Leads/LeadsDashboard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";




export default function TicketPerMonth({ TicketData }: { TicketData: TicketsData[] }) {
  return (
    <section className="ticketpm-wrapper" style={{ width: "100%", height: "300px", }}>
      <h2 style={{ marginBottom: '20px', fontSize: '1.2rem', color: '#333' }}>Tickets Per Month</h2>

      <div style={{ width: "100%", height: "90%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={TicketData}
            margin={{ top: 5, right: 30, left: 0, bottom: -30 }}
            barGap={3}
          >

            <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={true} 
                stroke="#E0E0E0" 
            />

            <XAxis
            dataKey="month" 
            height={60}
            axisLine={false} 
            tickLine={false} 
            interval={0}
            tick={{ 
                fill: '#666', 
                fontSize: 11, 
                angle: -45, 
                textAnchor: 'end',
                dx: 0, 
                dy: 0 
            }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 12 }} 
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Legend 
                content={(props) => {
                    const { payload } = props;
                    return (
                        <ul style={{ 
                            display: 'flex', 
                            flexDirection: 'row', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            gap: '24px', 
                            padding: 0,
                            marginTop: '0px',
                            listStyle: 'none' 
                        }}>
                            {payload?.map((entry: any, index: number) => (
                                <li key={`item-${index}`} style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '8px'
                                }}>
                                    {/* The Square Icon */}
                                    <div style={{ 
                                        width: '10px', 
                                        height: '10px', 
                                        backgroundColor: entry.color,
                                        borderRadius: '2px'
                                    }} />
                                    {/* The Text Label */}
                                    <span style={{ 
                                        fontSize: '13px', 
                                        fontWeight: 500, 
                                        color: '#555',
                                        lineHeight: '1'
                                    }}>
                                        {entry.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    );
                }}
            />
            
            <Bar 
                dataKey="service" 
                name="Service" 
                fill="#FF928A" 
                background={{ fill: '#D6DBED66' }} 
            />
            
            <Bar 
                dataKey="incident" 
                name="Incident" 
                fill="#8979FF" 
                background={{ fill: '#D6DBED66' }} 
            />
            
            <Bar 
                dataKey="change" 
                name="Change" 
                fill="#3CC3DF" 
                background={{ fill: '#D6DBED66' }} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}