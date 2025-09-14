import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import UserMap from './UserMap';

const MapAnalytics = () => {
  const countriesData = [
    {
      country: 'United States',
      visits: 10013,
      purchases: 5361,
      change: '-3.2%',
      position: [37.0902, -95.7129], // Coordinates for the US
    },
    {
      country: 'India',
      visits: 8545,
      purchases: 5361,
      change: '+45.8%',
      position: [20.5937, 78.9629],
    },
    {
      country: 'China',
      visits: 6837,
      purchases: 3954,
      change: '+24.4%',
      position: [35.8617, 104.1954],
    },
    {
      country: 'Brazil',
      visits: 4512,
      purchases: 2512,
      change: '12%',
      position: [-14.235, -51.9253],
    },
    {
      country: 'Germany',
      visits: 3795,
      purchases: 1973,
      change: '0.9%',
      position: [51.1657, 10.4515],
    },
    {
      country: 'United Kingdom',
      visits: 2100,
      purchases: 1012,
      change: '0.1%',
      position: [55.3781, -3.436],
    },
  ];

  return (
    <div className="container mx-auto bg-white shadow-sm rounded-lg p-4">
      <div className="p-4">
        <h1 className="text-3xl font-bold">Top regions by revenue</h1>
        <p className="font-semibold text-sm text-gray-500">
          Where you generated most of the revenue
        </p>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 lg:col-span-6">
          <UserMap></UserMap>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="h-full">
            <table className="table-auto w-full text-left border-collapse border border-gray-200 bg-white h-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-xs sm:text-sm">Country</th>
                  <th className="px-4 py-2 text-xs sm:text-sm">Visits</th>
                  <th className="px-4 py-2 text-xs sm:text-sm">Purchases</th>
                  <th className="px-4 py-2 text-xs sm:text-sm">Change</th>
                </tr>
              </thead>
              <tbody>
                {countriesData.map((country, index) => (
                  <tr key={index}>
                    <td className="border px-2 sm:px-4 py-2">
                      {country.country}
                    </td>
                    <td className="border px-2 sm:px-4 py-2">
                      {country.visits}
                    </td>
                    <td className="border px-2 sm:px-4 py-2">
                      {country.purchases}
                    </td>
                    <td className="border px-2 sm:px-4 py-2">
                      {country.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapAnalytics;
