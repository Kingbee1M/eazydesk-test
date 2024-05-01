import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { months } from '../Options';
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);




const LinePerformanceChart = ({ types }: any) => {

	console.log('types--tp', types)
	// Initialize incidents with empty arrays for each month
	const type: any = months.reduce((acc: any, month) => {
		acc[month] = [];
		return acc;
	}, {});

	// Populate incidents with data
	types?.forEach((ticket: { createdAt: string | number | Date; }) => {
		const updatedDate = new Date(ticket?.createdAt);
		const month = months[updatedDate.getMonth()]; // Get the month component (0-indexed)

		type[month]?.push(ticket);
	});
	const data: any = {
		labels: months,

		datasets: [
			{
				fill: false,
				lineTension: 0.3,
				backgroundColor: '#C4B4F7',
				borderColor: '#0240BC',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: '#0240BC',
				pointBackgroundColor: '#f31212',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: '#0240BC',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: months.map(month => type[month].length),
			},
		]
	};
	const options: any = {
		plugins: {
			legend: {
				display: false, // Set display property of legend to false
			},
		},
		scales: {
			y: {
				min: 0,
				max: 100,
			},
		},
		responsive: true,
		maintainAspectRatio: false,
	};


	return (
		<div className='Linestyle2'>
			<Line
				data={data}
				options={options}
			/>
		</div>
	)
}

export default LinePerformanceChart