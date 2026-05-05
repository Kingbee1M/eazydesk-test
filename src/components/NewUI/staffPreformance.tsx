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
    const years = Object.keys(data).sort(); 
    
    const currentYear = new Date().getFullYear().toString();

    const initialYear = data[currentYear] ? currentYear : (years[0] || "");

    const [selectedYear, setSelectedYear] = useState(initialYear);

    return (
        <section className="stylish-border" style={{ width: "100%", height: "400px", padding: "20px" }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Team Workload</h2>

            <div style={{ width: "100%", height: "250px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={data[selectedYear] || []}
                        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                        {/* 1. THE DOTTED GRID: In vertical layout, vertical lines look better for a ruler effect */}
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

                        {/* 2. THE SHADOW BACKGROUND BAR */}
                        <Bar 
                            dataKey="tickets" 
                            fill="#2152FF" 
                            radius={0} 
                            barSize={20}
                            background={{ fill: '#D6DBED66', radius: 0 }} 
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* PILL SELECTORS */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(4, 1fr)', 
                    gap: '10px', 
                    marginTop: '20px', 
                    width: '100%',
                    maxWidth: '500px',
                    marginInline: 'auto'
                }}>
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            style={{
                                padding: '8px 0',
                                borderRadius: '20px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: 600,
                                transition: 'all 0.2s ease',
                                backgroundColor: selectedYear === year ? '#2152FF' : '#F0F2F5',
                                color: selectedYear === year ? '#fff' : '#666',
                                textAlign: 'center',
                                width: '100%'
                            }}
                        >
                            {year}
                        </button>
                    ))}
                </div>
        </section>
    );
}