import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
  Label,
  ResponsiveContainer
} from 'recharts';

const BarChartSingle = ({ data }) => (
  <div className="p-4 font-black bg-gray-200 rounded-lg shadow">
    <h3 className="text-center font-bold mb-2 justify-items-center">Findings by Region</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 80, left: 40, bottom: 40 }}
      >
        <XAxis type="number">
          <Label offset={-30} value="Count of Findings" position="insideBottom" />
        </XAxis>
        <YAxis type="category" dataKey="region"></YAxis>
        <Tooltip />
        <Legend verticalAlign="middle" align="right" layout="vertical" />
        <Bar dataKey="count" fill="#3b82f6" name="Findings Count">
          <LabelList dataKey="count" position="right" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartSingle;
