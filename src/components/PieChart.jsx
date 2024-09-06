import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PieChartComponent = () => {
  const data = {
    labels: ['Completed', 'Pending', 'Canceled'],
    datasets: [
      {
        label: 'Order Status',
        data: [300, 50, 100],
        backgroundColor: ['#4CAF50', '#FF9800', '#F44336'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Pie data={data} />
    </div>
  );
};

export default PieChartComponent;
