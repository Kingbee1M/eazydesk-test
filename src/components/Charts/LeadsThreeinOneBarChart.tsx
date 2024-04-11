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




const LeadsThreeinOneBarChart = () => {
	const data = {
		labels: months,
		datasets: [
			{
				label: 'Completed',
				backgroundColor: '#0240BC',
				borderColor: '#0240BC',
				borderWidth: 1,
				barThickness: 20,
				data: [33, 42, 55, 12, 55, 86, 77, 13.41, 98, 99, 66, 44],
			},
			{
				label: 'Inprogress',
				backgroundColor: '#0240bc90',
				borderColor: '#0240bc90',
				borderWidth: 1,
				barThickness: 20,
				data: [42, 44, 55, 12, 55, 86, 77, 13.41, 98, 99, 66, 33],
			},
			{
				label: 'New',
				backgroundColor: '#E5ECFB',
				borderColor: '#E5ECFB',
				borderWidth: 1,
				barThickness: 20,
				data: [33, 42, 44, 55, 12, 55, 86, 77, 13.41, 98, 99, 66],
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
		<div className='three-in-one' style={{ height: '400px' }}>
			<Bar data={data} options={options} height={"100%"} width={"100%"} />
		</div>
	);
}

export default LeadsThreeinOneBarChart;
