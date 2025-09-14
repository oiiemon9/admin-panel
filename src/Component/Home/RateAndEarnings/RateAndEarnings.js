import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ReturningChart from './ReturningChart';

const RateAndEarnings = () => {
  const [chartData] = useState({
    series: [
      {
        name: 'Projected revenue',
        data: [
          38658, 29654, 31658, 47568, 31693, 25639, 30478, 27584, 32214, 15245,
        ],
      },
      {
        name: 'Actual revenue',
        data: [
          44325, 20695, 37856, 45632, 31695, 26548, 36541, 38621, 43000, 30254,
        ],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      colors: ['#3874ff', '#c7ebff'], // Custom bar colors
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 3, // Apply border radius to bars
          borderRadiusApplication: 'end', // Apply only to top (end of bars)
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb 1 (Mon)',
          'Feb 2 (Tue)',
          'Feb 3 (Wed)',
          'Feb 4 (Thu)',
          'Feb 5 (Fri)',
          'Feb 6 (Sat)',
          'Feb 7 (Sun)',
          'Feb 8 (Mon)',
          'Feb 9 (Tue)',
          'Feb 10 (Wed)',
        ],
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return `$ ${val}`; // Add '$' and 'k' for thousands formatting
          },
        },
        title: {
          text: 'Revenue ($)', // Customize title with units
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => `$ ${val}`,
        },
        theme: 'light', // Dark theme for tooltip
        style: {
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif',
        },
      },
      states: {
        hover: {
          filter: {
            type: 'darken', // Can be 'lighten' or 'none'
            value: 0.15, // Darken by 15%
          },
          colors: ['#2851cc', '#a1d8f0'], // Hover colors for bars
        },
      },
    },
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="p-4 border rounded-lg shadow-sm bg-white col-span-12 lg:col-span-6">
        <h3 className="text-lg font-semibold" style={{ color: '#333' }}>
          Projection vs actual
        </h3>
        <p style={{ marginTop: '0', marginBottom: '20px', color: '#666' }}>
          Actual earnings vs projected earnings
        </p>
        <div id="chart">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
      <div className="p-4 border rounded-lg shadow-sm bg-white col-span-12 lg:col-span-6">
        <ReturningChart></ReturningChart>
      </div>
    </div>
  );
};

export default RateAndEarnings;
