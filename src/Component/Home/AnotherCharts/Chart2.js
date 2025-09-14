import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Chart2 = () => {
  const [chartData] = useState({
    series: [
      {
        name: 'New Customers',
        data: [150, 300, 250, 180, 650, 300, 500], // Sample data for new customers
      },
      {
        name: 'Previous Period',
        data: [100, 250, 500, 400, 500, 300, 1000], // Sample data for previous period
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 200,
        toolbar: { show: false },
      },
      stroke: {
        curve: 'smooth',
        width: [3, 3],
        colors: ['#007bff', '#e0e0e0'],
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: [
          '01 May',
          '02 May',
          '03 May',
          '04 May',
          '05 May',
          '06 May',
          '07 May',
        ],
        axisBorder: { show: false },
      },
      yaxis: { show: false },
      grid: { show: false },
      colors: ['#007bff', '#e0e0e0'],
      legend: { show: false },
      tooltip: { enabled: true },
    },
  });

  return (
    <div className="">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">New customers</h2>
        <span className="bg-yellow-100 text-yellow-600 p-1 rounded text-xs">
          +26.5%
        </span>
      </div>
      <p className="text-3xl font-bold my-2">356</p>
      <p className="text-gray-500 text-sm mb-4">Last 7 days</p>

      {/* Chart Section */}
      <div>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={150}
        />
      </div>

      {/* Footer Section */}
      <div className="flex justify-between text-gray-500 text-xs mt-4">
        <span>01 May</span>
        <span>07 May</span>
      </div>
    </div>
  );
};

export default Chart2;
