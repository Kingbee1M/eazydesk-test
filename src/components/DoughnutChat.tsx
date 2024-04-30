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

const DoughnutChat = ({ ticketTotal, completed, inprogress, pending }: any) => {



  const doughnutData = {
    datasets: [
      {
        label: 'Tickets',
        data: [ticketTotal, inprogress, completed, pending],
        backgroundColor: [
          '#0240BC',
          '#F86624',
          '#22CAAD',
          '#EB3D4D',
        ],
        cutout: 50,
      },
    ],
  }
  const chartOptions = {
    responsive: true,
    width: 400, // Set your desired width
    height: 400, // Set your desired height
    cutoutPercentage: 70,
  };
  return (

    <div className='Doughnutcontainer'>
      <Doughnut data={doughnutData} options={chartOptions} />
    </div>
  )
}

export default DoughnutChat;

