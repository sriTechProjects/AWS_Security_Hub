import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Legend } from 'recharts';

const PieChartBlock = ({ title, data }) => {
  const pieData = data.map((item, index) => ({
    id: index,
    value: item.count,
    label: `${item.status} (${item.count})`,
  }));

  return (
    <div className="p-4 font-bold bg-gray-200 rounded-lg shadow">
      <h3 className="font-bold text-center mb-4 text-xl">{title}</h3>
      <PieChart
        series={[
          {
            data: pieData,
            innerRadius: 0,
            outerRadius: 120,
            arcLabel: (item) => item.label,
          },
        ]}
        width={400}
        height={300}
      />
    </div>
  );
};

export default PieChartBlock;
