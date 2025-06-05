import React from 'react';

const KPIcard = ({ title, value }) => (
  <div className="bg-gray-300 p-4 rounded-lg shadow w-60 text-center">
    <h3 className="text-lm font-black text-gray-600">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default KPIcard;
