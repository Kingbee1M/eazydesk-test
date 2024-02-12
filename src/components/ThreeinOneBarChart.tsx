import React from 'react'
import { Bar } from 'react-chartjs-2';
import AssignTask from './Modals/AssignTask';

const ThreeinOneBarChart = ({ datas }: any) => {


	const Tasks = !datas ? [] : datas?.filter((task: { taskStatus: string; }) => task?.taskStatus === 'NEW');

	// Group completed tasks by the day of the months
	const assignTasks = Tasks?.reduce((grouped: any, task: any) => {
		const completedDate = new Date(task?.updatedAt);
		const dayOfMonth = completedDate?.getDate();

		if (!grouped[dayOfMonth]) {
			grouped[dayOfMonth] = [];
		}

		grouped[dayOfMonth].push(task);

		return grouped;
	}, {});

	const inprogressTasks = !datas ? [] : datas?.filter((task: { taskStatus: string; }) => task?.taskStatus === 'IN_PROGRESS');

	// Inprogress completed tasks by the day of the months
	const InprogressdTasks = inprogressTasks?.reduce((grouped: any, task: any) => {
		const completedDate = new Date(task?.updatedAt);
		const dayOfMonth = completedDate?.getDate();

		if (!grouped[dayOfMonth]) {
			grouped[dayOfMonth] = [];
		}

		grouped[dayOfMonth].push(task);

		return grouped;
	}, {});



	const overdueTasks = datas?.filter((task: { status: string; }) => task?.status === 'OUTDATED');


	// Group completed tasks by the day of the months
	const OverdueTasks = overdueTasks?.reduce((grouped: any, task: any) => {
		const completedDate = new Date(task?.updatedAt);
		const dayOfMonth = completedDate?.getDate();

		if (!grouped[dayOfMonth]) {
			grouped[dayOfMonth] = [];
		}
		grouped[dayOfMonth].push(task);

		return grouped;
	}, {});


	const today = new Date();
	const currentDay = today.getDate();
	const lastFiveDays = Array?.from({ length: 5 }, (_, index) => currentDay - index).reverse();
	const data = {
		labels: lastFiveDays,
		datasets: [
			{
				label: 'Completed',
				backgroundColor: '#6f47eb',
				borderColor: '#6f47eb',
				borderWidth: 1,
				barThickness: 20,
				data: lastFiveDays?.map(day => assignTasks[day]?.length || 0),
			},
			{
				label: 'Inprogress',
				backgroundColor: '#b161ff',
				borderColor: '#b161ff',
				borderWidth: 1,
				barThickness: 20,
				data: lastFiveDays?.map(day => InprogressdTasks[day]?.length || 0),
			},
			{
				label: 'Overdue',
				backgroundColor: '#d2c3ff',
				borderColor: '#d2c3ff',
				borderWidth: 1,
				barThickness: 20,
				data: lastFiveDays?.map(day => overdueTasks[day]?.length || 0),
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
	};

	return (
		<div className='three-in-one'>
			<Bar data={data} options={options} height={"100%"} width={"100%"} />
		</div>
	);
}

export default ThreeinOneBarChart