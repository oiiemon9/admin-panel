import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';

const AnotherCharts = () => {
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
      <div className="grid grid-cols-12 gap-5">
        {/* charts 1 */}
        <div className="p-4 border rounded-lg shadow-sm bg-white col-span-12 md:col-span-6">
          <Chart1></Chart1>
        </div>
        {/* charts 2 */}
        <div className="p-4 border rounded-lg shadow-sm bg-white col-span-12 md:col-span-6">
          <Chart2></Chart2>
        </div>
        {/* charts 3 */}
        <div className="p-4 border rounded-lg shadow-sm bg-white col-span-12 md:col-span-6">
          <Chart3></Chart3>
        </div>
        {/* charts 4 */}
        <div className="p-4 border rounded-lg shadow-sm bg-white col-span-12 md:col-span-6">
          <Chart4></Chart4>
        </div>
      </div>
    </div>
  );
};

export default AnotherCharts;
