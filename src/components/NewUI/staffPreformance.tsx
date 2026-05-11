import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface StaffData {
    name: string;
    tickets: number;
}

export interface AnnualStaffPerformance {
    [year: string]: StaffData[];
}

interface StaffPerformanceProps {
    data: AnnualStaffPerformance;
}

export default function StaffPerformance({ data }: StaffPerformanceProps) {
    const years = Object.keys(data).sort((a, b) => b.localeCompare(a));
    
    const currentYear = new Date().getFullYear().toString();
    const initialYear = data[currentYear] ? currentYear : (years[0] || "");

    const [selectedYear, setSelectedYear] = useState(initialYear);

    return (
        <section className="stylish-border" style={{ width: "100%", height: "400px", padding: "20px" }}>
            {/* Header with Title and Dropdown */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '20px' 
            }}>
                <h2 style={{ fontSize: '18px', margin: 0 }}>Team Workload</h2>
                
                <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: '1px solid #E0E0E0',
                        backgroundColor: '#fff',
                        fontSize: '14px',
                        color: '#333',
                        outline: 'none',
                        cursor: 'pointer'
                    }}
                >
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            <div style={{ width: "100%", height: "280px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={data[selectedYear] || []}
                        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid 
                            strokeDasharray="3 3" 
                            horizontal={false} 
                            vertical={true} 
                            stroke="#E0E0E0" 
                        />

                        <XAxis type="number" hide /> 
                        
                        <YAxis 
                            dataKey="name" 
                            type="category" 
                            axisLine={false} 
                            tickLine={false} 
                            width={100}
                            tick={{ fontSize: 12, fill: '#666' }}
                        />
                        
                        <Tooltip 
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />

                        <Bar 
                            dataKey="tickets" 
                            fill="#2152FF" 
                            radius={[0, 4, 4, 0]} // Added slight rounding to the right edge
                            barSize={20}
                            background={{ fill: '#D6DBED66', radius: 0 }} 
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}