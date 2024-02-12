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
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DoughnutChat = ({ TaskStatus }: any) => {



  const doughnutData = {
    labels: ['New', "In Progress", "Completed", "Outdate"],
    datasets: [
      {
        label: 'Task',
        data: [TaskStatus?.NEW, TaskStatus?.IN_PROGRESS, TaskStatus?.COMPLETED, TaskStatus?.OUTDATED],
        backgroundColor: [
          '#6f47eb',
          '#b161ff',
          '#d2c3ff',
          '#ededed'
        ],
        cutout: 70,
      },
    ],
  }
  const chartOptions = {
    responsive: true,
    width: 400, // Set your desired width
    height: 400, // Set your desired height
    cutoutPercentage: 70,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
        callbacks: {
          label: (context: any) => {
            // Customize the label displayed when hovering over a section
            return `${context.label}: ${context.formattedValue}`;
          },
        },
      },
    },
  };
  return (

    <div className='Doughnutcontainer'>
      <Doughnut data={doughnutData} options={chartOptions} />
    </div>
  )
}

export default DoughnutChat;

