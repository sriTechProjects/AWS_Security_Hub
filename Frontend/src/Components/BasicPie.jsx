import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  const controlStatus = [
    { status: "Passed", count: "268" },
    { status: "Failed", count: "17" },
    { status: "No data", count: "6" },
    { status: "Unknown", count: "1" },
    { status: "Disabled", count: "209" },
  ];

  // Convert count from string to number, and format data correctly
  const pieData = controlStatus.map((item, id) => ({
    id,
    value: Number(item.count),
    label: item.status,
  }));

  return (
    <PieChart
      series={[
        {
          data: pieData,
        },
      ]}
      width={200}
      height={200}
    />
  );
}
