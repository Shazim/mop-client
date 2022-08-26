import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const Graph = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          maxBarThickness: 100,
        },
      ],
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ['01/06', '08/06', '15/06', '22/06', '29/06'];

  const data = {
    labels,
    datasets: [
      {
        data: [100, 200, 300],
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        backgroundColor: '#C71118',
      },
      {
        data: [100, 200, 300],
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        backgroundColor: '#4A4949',
      },
    ],
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="h-250">
      <Bar options={options} data={data} />
    </div>
  );
};

export default Graph;
