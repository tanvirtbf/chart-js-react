import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { lineChartData } from "../Fake_Data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
);

const LineGraph = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'This is a Line Chart here..',
        position: 'bottom'
      }
    },
    scales: {
      y: {
        min: 2000,
        max: 10000
      }
    }
  }

  return (
    <div style={{
      width: '800px',
      height: '500px',
      padding: '20px'
    }}>
      <Line options={options} data={lineChartData} />
    </div>
  )
};

export default LineGraph;
