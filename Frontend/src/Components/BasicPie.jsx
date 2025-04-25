import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie({ controls }) {
  console.log("Controls data:", controls); // Log the controls data for debugging
  if (!controls || controls.length === 0) {
    return <p>No control data available</p>;
  }

  const statusMap = {
    FAILED: 0,
    PASSED: 0,
    WARNING: 0,
    WAIVED: 0,
    ENABLED: 0,
  };
  
  controls.forEach((control) => {
    const status = control.status?.toUpperCase();
    if (statusMap[status] !== undefined) {
      statusMap[status]++;
    }
  });

  const pieData = Object.entries(statusMap).map(([status, count], id) => ({
    id,
    value: count,
    label: status,
  }));

  return (
    <div style={{ minHeight: 250, padding: 10 }}>
      <PieChart
        series={[{
          data: pieData,
          innerRadius: 40,
          outerRadius: 80,
          paddingAngle: 5,
        }]}
        width={300}
        height={250}
      />
    </div>
  );
}
