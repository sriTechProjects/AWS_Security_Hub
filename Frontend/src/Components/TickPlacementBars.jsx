import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const severities = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];
const counts = [3, 23, 32, 0]; // Corresponding to each severity

const data = severities.map((label, index) => ({
  label,
  value: counts[index],
}));

const size = {
  width: 200,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function TickPlacementBars() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>Failed Checks</PieCenterLabel>
    </PieChart>
  );
}
