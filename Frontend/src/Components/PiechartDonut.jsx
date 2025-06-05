import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const PieChartDonut = ({ title, data }) => {
  const pieData = data.map((item, index) => ({
    id: index,
    value: item.count,
    label: `${item.status} (${item.count})`, // 👈 combining label and value
  }));

  return (
    <div className="p-4 font-bold bg-gray-200 rounded-lg shadow">
      <h3 className="text-center font-bold mb-2 font-size-20 justify-items-center">{title}</h3>
      <PieChart
        series={[
          {
            data: pieData,
            innerRadius: 80,
            outerRadius: 120,
            arcLabel: (item) => item.label, // 👈 this enables the labels in sectors
          }
        ]}
        width={400}
        height={300}
      />
    </div>
  );
};

export default PieChartDonut;
