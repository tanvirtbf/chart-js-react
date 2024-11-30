import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const PieGraph = () => {

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      borderColor: [
        "rgba(43, 63, 229, 0.8)",
        "rgba(250, 192, 19, 0.8)",
        "rgba(253, 135, 135, 0.8)",
      ],
    }]
  };

  const options = {
    plugins: {
      title: {
        text: 'Tanvir'
      }
    }

  }

  return (
    <Doughnut options={options} data={data} />
  )
};

export default PieGraph;
