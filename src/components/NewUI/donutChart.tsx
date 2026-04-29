import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DonutProps {
    Service: number;
    Change: number;
    Incident: number;
}

export default function DonutChart({ Service, Change, Incident }: DonutProps) {
    // 1. Transform props into the format Recharts expects
    const data = [
        { name: 'Service', value: Service },
        { name: 'Changes', value: Change },
        { name: 'Incidents', value: Incident },
    ];

    
    const COLORS = ['#FCA6A0', '#60CDE4', '#9E92FE'];

    return (
        <section className='donut-container stylish-border'>
            <ResponsiveContainer width="100%" height="100%" className="">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={50}
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                fill={COLORS[index % COLORS.length]} 
                            />
                        ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                    />
                </PieChart>
            </ResponsiveContainer>

            <div>
                {data.map((datas, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{
                            width: '12px',      // Slightly smaller circles look cleaner
                            height: '12px', 
                            borderRadius: '50%', 
                            backgroundColor: COLORS[index], // No quotes!
                            display: 'inline-block',        // Critical for width/height to work
                            marginRight: '8px'
                        }} />
                        <span style={{ fontSize: '14px', color: '#4A5568' }}>{datas.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}