import React, { useState, useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';

const Chart4 = () => {
  const [payingPercent, setPayingPercent] = useState(0); // Dynamic percentage
  const nonPayingPercent = 100 - payingPercent;
  const chartRef = useRef(null); // Reference to the chart element
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  // Custom options for manual chart design
  const options = {
    chart: {
      type: 'radialBar',
      offsetY: 0,
      background: '', // Custom background color
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: '65%', // Control hollow size for smaller inner circle
          background: '#fff', // White background for the center
        },
        track: {
          background: '#e5e7eb', // Light gray background for the track
          strokeWidth: '100%', // Full-width track for a bold look
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            color: '#111827', // Dark gray text color
            fontSize: '16px',
          },
          value: {
            offsetY: 5,
            color: '#3b82f6', // Blue color for percentage value
            fontSize: '22px', // Font size for percentage
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'solid', // Solid color fill for the radial bar
    },
    stroke: {
      lineCap: 'round', // Round the edges of the radial bar
    },
    labels: ['Paying Customer'],
    colors: ['#3b82f6'], // Blue color for radial bar
  };

  useEffect(() => {
    // Simulate data update
    const timer = setTimeout(() => {
      if (isVisible) {
        setPayingPercent(65); // Update to 40% when visible
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visibility to true when in view
            observer.unobserve(entry.target); // Stop observing once in view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (chartRef.current) {
      observer.observe(chartRef.current); // Start observing the chart
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current); // Clean up observer
      }
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-md" ref={chartRef}>
      <h2 className="text-lg font-semibold mb-1">Paying vs Non-paying</h2>
      <p className="text-gray-500 mb-4">Last 7 days</p>

      {/* Chart with manual design */}
      <Chart
        options={options}
        series={[payingPercent]}
        type="radialBar"
        height={250}
      />

      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">Paying customer</span>
        </div>
        <span className="text-sm text-gray-700">{payingPercent}%</span>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-100 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">Non-paying customer</span>
        </div>
        <span className="text-sm text-gray-700">{nonPayingPercent}%</span>
      </div>
    </div>
  );
};

export default Chart4;
