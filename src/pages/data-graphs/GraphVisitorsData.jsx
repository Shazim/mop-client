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

const GraphVisitorsData = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
    // Legend
  );

  const customData = [
    { x: '01/06', y: 100 },
    { x: '08/06', y: 200 },
    { x: '15/06', y: 200 },
    { x: '22/06', y: 100 },
    { x: '29/06', y: 300 },
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
        borderRadius: 50,
      },
      {
        label: 'Dataset 2',

        data: customData.map((data) => data.y),
        barThickness: 17,
        backgroundColor: '#4A4949',
        borderWidth: 2,
        borderRadius: 50,
      },
      {
        label: 'Dataset 3',

        data: customData.map((data) => data.y),
        barThickness: 17,
        backgroundColor: '#C71118',
        borderWidth: 2,
        borderRadius: 50,
      },
      {
        label: 'Dataset 4',

        data: customData.map((data) => data.y),
        barThickness: 17,
        backgroundColor: '#C71118',
        borderWidth: 2,
        borderRadius: 50,
      },
      {
        label: 'Dataset 5',

        data: customData.map((data) => data.y),
        barThickness: 17,
        backgroundColor: '#C71118',
        borderWidth: 2,
        borderRadius: 50,
      },
      {
        label: 'Dataset 6',

        data: customData.map((data) => data.y),
        barThickness: 17,
        backgroundColor: '#4A4949',
        borderWidth: 2,
        borderRadius: 50,
      },
    ],
    options: {
      // scales: {
      //   y: {
      //     ticks: {
      //       // Include a dollar sign in the ticks
      //       callback: function (value, index, ticks) {
      //         return '<' + value + ' Min';
      //       },
      //     },
      //   },
      // },
      layout: {
        width: 700,
        height: 320,
        padding: 30,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={data.options} />
    </div>
  );
};

export default GraphVisitorsData;
