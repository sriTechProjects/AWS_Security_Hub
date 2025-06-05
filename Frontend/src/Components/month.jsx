import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Card, CardContent, CardHeader, CardTitle } from "@mui/material";
import { TrendingUp } from "lucide-react";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

// Extract labels and data
const xAxisData = chartData.map((item) => item.month);
const seriesData = chartData.map((item) => item.desktop);

export function Monthbar() {
  return (
    <Card sx={{ maxWidth: 600, p: 2 }}>
      <CardHeader
        title={<CardTitle>Bar Chart - Horizontal</CardTitle>}
        subheader="January - June 2024"
      />
      <CardContent>
        <BarChart
          layout="horizontal"
          xAxis={[{ scaleType: 'band', data: xAxisData }]}
          series={[{ data: seriesData, label: 'Desktop', color: '#3f51b5' }]}
          width={500}
          height={300}
          slotProps={{
            bar: {
              radius: 5,
            },
          }}
        />
      </CardContent>
      <CardContent sx={{ mt: 2, fontSize: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontWeight: 500 }}>Trending up by 5.2% this month</span>
          <TrendingUp style={{ height: 16, width: 16 }} />
        </div>
        <div style={{ color: "#6c757d" }}>Showing total visitors for the last 6 months</div>
      </CardContent>
    </Card>
  );
}
