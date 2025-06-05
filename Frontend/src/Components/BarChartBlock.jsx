import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList, Label,
  ResponsiveContainer
} from 'recharts';

const BarChartBlock = ({ data }) => (
  <div className="p-4 font-black bg-gray-200  rounded-lg shadow">
    <h3 className="text-center font-bold mb-2">Findings by Month</h3>
    <ResponsiveContainer width={700} height={300}>
      <BarChart data={data} layout="horizontal" margin={{ top: 20, right: 80, left: 20, bottom: 40 }}>
        <XAxis dataKey="month">
          <Label value="Month" offset={-30} position="insideBottom"  />
        </XAxis>
        <YAxis>
          <Label value="Count" fontSize="large" angle={-90} offset={-10} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Legend verticalAlign="middle" align="right" layout="vertical" />
        <Bar dataKey="increase" fill="#22c55e"></Bar>
        <Bar dataKey="decrease" fill="#ef4444"></Bar>
        <Bar dataKey="total" fill="#3b82f6"></Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartBlock;
