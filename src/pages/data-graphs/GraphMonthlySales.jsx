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

const GraphMonthlySales = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const customData = [
    { x: 'jan', y: '1000' },
    { x: 'feb', y: '1500' },
    { x: 'mar', y: '2000' },
    { x: 'apr', y: '1000' },
  ];

  const data = {
    labels: customData.map((data) => data.x),
    datasets: [
      {
        label: 'Dataset 1',
        data: customData.map((data) => data.y),
        barThickness: 17,
        backgroundColor: '#C71118',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
    options: {
      animations: {
        radius: {
          duration: 400,
          easing: 'linear',
          loop: (context) => context.active,
        },
      },
      hoverRadius: 12,
      hoverBackgroundColor: 'yellow',
      interaction: {
        mode: 'nearest',
        intersect: false,
        axis: 'x',
      },
      plugins: {
        tooltip: {
          enabled: true,
        },
      },

      layout: {
        width: 350,
        height: 250,
        padding: 20,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={data.options} />
    </div>
  );
};

export default GraphMonthlySales;
