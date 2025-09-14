import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ReturningChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: 'Fourth time',
        data: [60, 80, 70, 50, 90, 60, 80, 40, 60, 70],
      },
      {
        name: 'Third time',
        data: [50, 70, 60, 40, 80, 50, 70, 30, 50, 60],
      },
      {
        name: 'Second time',
        data: [40, 60, 50, 30, 70, 40, 60, 20, 40, 50],
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'straight',
        dashArray: [0, 3, 5], // Different styles for each line
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
        ],
        title: {
          text: 'Months',
        },
      },
      yaxis: {
        title: {
          text: 'Returning Rate (%)',
        },
        min: 0,
        max: 100,
        tickAmount: 5,
      },
      colors: ['#0043C5', '#6FC5E8', '#AECBE8'], // Custom colors for each line
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },
      markers: {
        size: 4,
      },
      grid: {
        borderColor: '#e7e7e7',
      },
      tooltip: {
        y: {
          formatter: (val) => `${val}%`,
        },
      },
    },
  });

  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold" style={{ color: '#333' }}>
          Returning customer rate
        </h3>
        <p style={{ marginTop: '0', marginBottom: '20px', color: '#666' }}>
          Rate of customers returning to your shop over time
        </p>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default ReturningChart;
