import React, { useEffect, useRef } from 'react';
import Datamap from 'datamaps'; // Ensure Datamap is installed

const UserMap = () => {
  const mapContainerRef = useRef(null);

  const dataSet = {
    AFG: { users: 15.2, active: 12, new: 4 },
    AGO: { users: 0.8, active: 0.4, new: 0.3 },
    ALB: { users: 3.5, active: 3.5, new: 1.0 },
    AND: { users: 2.2, active: 2.2, new: 0.4 },
    ARE: { users: 12.5, active: 12.5, new: 3.3 },
    ARG: { users: 22.4, active: 22.4, new: 10.1 },
    ARM: { users: 5.7, active: 5.7, new: 1.2 },
    ATG: { users: 0.5, active: 0.5, new: 0.2 },
    BDI: { users: 1.7, active: 1.7, new: 0.8 },
    BLR: { users: 10.4, active: 10.4, new: 3.9 },
    BLZ: { users: 1.8, active: 1.8, new: 0.7 },
    BOL: { users: 9.7, active: 9.7, new: 3.5 },
    BRA: { users: 42.2, active: 42.2, new: 41.2 },
    BRB: { users: 2.1, active: 2.1, new: 0.6 },
    BRN: { users: 5.8, active: 5.8, new: 2.3 },
    BTN: { users: 0.9, active: 0.9, new: 0.3 },
    BWA: { users: 3.4, active: 3.4, new: 1.5 },
    BGD: { users: 50.5, active: 50.5, new: 6.2 },
    CAF: { users: 1.0, active: 1.0, new: 0.5 },
    CAN: { users: 30.2, active: 30.2, new: 18.7 },
    CHE: { users: 20.4, active: 20.4, new: 8.6 },
    CHL: { users: 23.1, active: 23.1, new: 12.5 },
    CHN: { users: 13.7, active: 13.7, new: 0.1 },
  };

  useEffect(() => {
    // Set gray shades based on active data values
    const maxActiveValue = Math.max(
      ...Object.values(dataSet).map((data) => data.active)
    );
    const minGray = 50; // Lighter gray
    const maxGray = 200; // Darker gray

    const getGrayShade = (active) => {
      const scale = (active / maxActiveValue) * (minGray - maxGray) + maxGray;
      return `rgb(${scale}, ${scale}, ${scale})`;
    };

    const colorDataSet = Object.keys(dataSet).reduce((acc, country) => {
      acc[country] = {
        fillColor: getGrayShade(dataSet[country].active), // Optionally change to users if needed
        ...dataSet[country],
      };
      return acc;
    }, {});

    const dataMap = new Datamap({
      element: mapContainerRef.current,
      projection: 'mercator',
      responsive: true,
      fills: { defaultFill: '#d1d5db' },
      data: colorDataSet,
      geographyConfig: {
        borderColor: 'rgba(0, 0, 0, .09)',
        highlightFillColor: '#3b82f6',
        highlightBorderColor: '#3b82f6',
        popupTemplate: (geo, data) =>
          `<div class="bg-white rounded-xl shadow-lg p-3 w-[150px]">
            <div class="text-sm font-medium">${
              data?.customName || geo.properties.name
            }</div>
            <div class="flex items-center">
              <span class="text-sm text-gray-500">Total Users:</span>
              <span class="text-sm font-medium">${data?.users || 'N/A'}</span>
            </div>
            <div class="flex items-center">
              <span class="text-sm text-gray-500">Active:</span>
              <span class="text-sm font-medium">${data?.active || 'N/A'}</span>
            </div>
            <div class="flex items-center">
              <span class="text-sm text-gray-500">New:</span>
              <span class="text-sm font-medium">${data?.new || 'N/A'}</span>
            </div>
          </div>`,
      },
    });

    const handleResize = () => dataMap.resize();
    window.addEventListener('resize', handleResize);

    // Cleanup function to prevent memory leaks and double rendering
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = ''; // Clear the map container if it exists
      }
    };
  }, []);

  return (
    <div className="p-4 w-full flex justify-center items-center">
      {' '}
      <div
        id="hs-users-datamap"
        ref={mapContainerRef}
        className=" h-[500px] w-full object-fill"
      />
    </div>
  );
};

export default UserMap;
