import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Chart1 = () => {
  // charts 1
  const [chartData] = useState({
    series: [
      {
        name: 'Completed',
        data: [40, 35, 50, 30, 40, 45, 50],
      },
      {
        name: 'Pending Payment',
        data: [30, 25, 20, 25, 15, 20, 30],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Day 1',
          'Day 2',
          'Day 3',
          'Day 4',
          'Day 5',
          'Day 6',
          'Day 7',
        ],
      },
      colors: ['#007bff', '#e0e0e0'],
      legend: {
        position: 'bottom',
      },
      fill: {
        opacity: 1,
      },
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Total orders</h2>
        <span className="bg-yellow-100 text-yellow-600 p-1 rounded text-xs">
          -6.8%
        </span>
      </div>
      <p className="text-3xl font-bold my-2">16,247</p>
      <p className="text-gray-500 text-sm mb-4">Last 7 days</p>

      <div>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={150}
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 mr-2"></span>
          <span>Completed</span>
        </div>
        <span>52%</span>
      </div>
      <div className="flex justify-between items-center mt-1">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-gray-400 mr-2"></span>
          <span>Pending payment</span>
        </div>
        <span>48%</span>
      </div>
    </div>
  );
};

export default Chart1;
