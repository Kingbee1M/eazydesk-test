import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { months } from '../Options';


ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend
);




const LeadsThreeinOneBarChart = ({ threeinone, incident, service, change }: any) => {



	// Initialize incidents with empty arrays for each month
	const incidents: any = months.reduce((acc: any, month) => {
		acc[month] = [];
		return acc;
	}, {});
	// Initialize incidents with empty arrays for each month
	const services: any = months.reduce((acc: any, month) => {
		acc[month] = [];
		return acc;
	}, {});
	// Initialize incidents with empty arrays for each month
	const changes: any = months.reduce((acc: any, month) => {
		acc[month] = [];
		return acc;
	}, {});

	// Populate incidents with data
	incident?.forEach((ticket: { createdAt: string | number | Date; }) => {
		const updatedDate = new Date(ticket?.createdAt);
		const month = months[updatedDate.getMonth()]; // Get the month component (0-indexed)

		incidents[month]?.push(ticket);
	});
	// Populate incidents with data
	service?.forEach((ticket: { createdAt: string | number | Date; }) => {
		const updatedDate = new Date(ticket?.createdAt);
		const month = months[updatedDate.getMonth()]; // Get the month component (0-indexed)

		services[month]?.push(ticket);
	});
	// Populate incidents with data
	change?.forEach((ticket: { createdAt: string | number | Date; }) => {
		const updatedDate = new Date(ticket?.createdAt);
		const month = months[updatedDate.getMonth()]; // Get the month component (0-indexed)

		changes[month]?.push(ticket);
	});


	const data = {
		labels: months,
		datasets: [
			{
				label: 'Incidents',
				backgroundColor: '#0240BC',
				borderColor: '#0240BC',
				borderWidth: 1,
				barThickness: 20,
				data: months.map(month => incidents[month].length),
			},
			{
				label: 'Inprogress',
				backgroundColor: '#0240bc90',
				borderColor: '#0240bc90',
				borderWidth: 1,
				barThickness: 20,
				data: months.map(month => services[month].length),
			},
			{
				label: 'New',
				backgroundColor: '#E5ECFB',
				borderColor: '#E5ECFB',
				borderWidth: 1,
				barThickness: 20,
				data: months.map(month => changes[month].length),
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
		responsive: true,
		maintainAspectRatio: false,
		height: 600,
	};

	return (
		<div className={threeinone}>
			<Bar data={data} options={options} height={"100%"} width={"100%"} />
		</div>
	);
}

export default LeadsThreeinOneBarChart;
