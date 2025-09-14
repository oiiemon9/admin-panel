import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const TotalSells = () => {
  const chartOptions = {
    chart: {
      height: 300,
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    series: [
      {
        name: 'Income',
        data: [
          18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000, 88000, 80000,
          60000, 70000,
        ],
      },
      {
        name: 'Outcome',
        data: [
          90000, 38000, 60000, 77000, 40000, 50000, 49000, 29000, 42000, 27000,
          42000, 50000,
        ],
      },
    ],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.1,
        opacityTo: 0.8,
      },
    },
    xaxis: {
      categories: [
        '25 Jan 2023',
        '26 Jan 2023',
        '27 Jan 2023',
        '28 Jan 2023',
        '29 Jan 2023',
        '30 Jan 2023',
        '31 Jan 2023',
        '1 Feb 2023',
        '2 Feb 2023',
        '3 Feb 2023',
        '4 Feb 2023',
        '5 Feb 2023',
      ],
      labels: {
        style: {
          colors: '#9ca3af',
          fontSize: '13px',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
        style: {
          colors: '#9ca3af',
          fontSize: '13px',
        },
      },
    },
    grid: {
      borderColor: '#e5e7eb',
    },
    colors: ['#2563eb', '#9333ea'],
  };
  return (
    <div>
      <div className="block sm:flex items-center justify-between">
        <div className="mb-2 sm:mb-0">
          <h1 className="text-2xl font-bold">Total sells</h1>
          <p className="font-semibold text-sm text-gray-500">
            Payment received across all channels
          </p>
        </div>
        <select className="select select-bordered w-full max-w-xs">
          <option>Mar 1 - 31, 2022</option>
          <option>April 1 - 30, 2022</option>
          <option>May 1 - 31, 2022</option>
        </select>
      </div>
      <div>
        {/* Legend Indicator */}
        <div className="flex justify-center sm:justify-end items-center gap-x-4 mb-6">
          <div className="inline-flex items-center">
            <span className="w-2.5 h-2.5 inline-block bg-blue-600 rounded-sm mr-2"></span>
            <span className="text-sm text-gray-600">Income</span>
          </div>
          <div className="inline-flex items-center">
            <span className="w-2.5 h-2.5 inline-block bg-purple-600 rounded-sm mr-2"></span>
            <span className="text-sm text-gray-600">Outcome</span>
          </div>
        </div>
        {/* Chart */}
        <div id="hs-multiple-area-charts">
          <Chart
            options={chartOptions}
            series={chartOptions.series}
            type="area"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default TotalSells;
