import React, { useState } from 'react';
import Chart from 'react-apexcharts';
const Chart3 = () => {
  const [centerLabel, setCenterLabel] = useState('72%'); // Initial center label

  const options = {
    chart: {
      type: 'donut',
      events: {
        // Trigger when the mouse enters a data point
        dataPointMouseEnter: (event, chartContext, config) => {
          const percentage = config.w.config.series[config.dataPointIndex];
          setCenterLabel(`${percentage}%`); // Set label to the hovered slice percentage
        },
        // Reset the label when the mouse leaves the data point
        dataPointMouseLeave: () => {
          setCenterLabel('72%'); // Reset to default value
        },
      },
    },
    labels: [
      'Percentage discount',
      'Fixed card discount',
      'Fixed product discount',
    ],
    colors: ['#4285F4', '#84C1FF', '#2B77C1'], // Adjusted colors
    legend: {
      position: 'bottom', // Legend below the chart
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            name: {
              show: false, // Hide section name
            },
            value: {
              show: true,
              fontSize: '22px',
              fontWeight: 600,
              color: '#333',
              offsetY: -10,
              formatter: function () {
                return centerLabel; // Use the dynamic state value for the center label
              },
            },
            total: {
              show: false, // Hide total label
            },
          },
        },
      },
    },
    stroke: {
      show: false, // No stroke between slices
    },
    dataLabels: {
      enabled: false, // Disable the data labels on the slices
    },
  };

  const series = [72, 18, 10];

  return (
    <div>
      <h3
        className="text-lg font-semibold mb-1"
        style={{ marginBottom: '10px', color: '#333' }}
      >
        Top coupons
      </h3>
      <p style={{ marginTop: '0', marginBottom: '20px', color: '#666' }}>
        Last 7 days
      </p>
      <Chart options={options} series={series} type="donut" width="300" />
    </div>
  );
};

export default Chart3;
