import React, { useEffect, useState } from 'react';
import KPIcard from './KPIcard';
import Slicer from './Slicer';
import PieChartBlock from './PieChartBlock';
import BarChartBlock from './BarChartBlock';
import { useDashboard } from './DashboardContext';
import PieChartDonut from './PiechartDonut';
import BarChartSingle from './BarChartSingle';

const Dashboard1 = () => {
  const {
    region,
    resourceType,
    timePeriod,
    severityLevel,
    complianceStandard,
    findingType,
    accountId,
    status
  } = useDashboard();

  const [complianceData, setComplianceData] = useState([]);
  const [workflowData, setWorkflowData] = useState([]);
  const [monthData, setMonthData] = useState([]);
  const [severityData, setSeverityData] = useState([]);
  const [findingcomplianceData, setFindingcomplianceData] = useState([]);
  const [findingregionData, setFindingRegionData] = useState([]);

  useEffect(() => {
    let newComplianceData = [];
    let newWorkflowData = [];
    let newMonthData = [];
    let newSeverityData = [];
    let newFindingComplianceData = [];
    let newFindingRegionData = [];

    // Compliance Status
    if (region === 'all') {
      newComplianceData = [
        { status: 'FAILED', count: 44.93 },
        { status: 'PASSED', count: 35.13 },
        { status: 'WARNING', count: 14.92 },
        { status: 'NOT_AVAILABLE', count: 5.02 },
      ];
    } else {
      newComplianceData = [
        { status: 'FAILED', count: 60 },
        { status: 'PASSED', count: 30 },
        { status: 'WARNING', count: 7 },
        { status: 'NOT_AVAILABLE', count: 3 },
      ];
    }

    // Workflow Status
    if (severityLevel === 'high') {
      newWorkflowData = [
        { status: 'RESOLVED', count: 45 },
        { status: 'NEW', count: 30 },
        { status: 'IN_PROGRESS', count: 15 },
        { status: 'NOTIFIED', count: 5 },
      ];
    } else if (severityLevel === 'medium') {
      newWorkflowData = [
        { status: 'RESOLVED', count: 40 },
        { status: 'NEW', count: 35 },
        { status: 'IN_PROGRESS', count: 20 },
        { status: 'NOTIFIED', count: 5 },
      ];
    } else {
      newWorkflowData = [
        { status: 'RESOLVED', count: 30 },
        { status: 'NEW', count: 40 },
        { status: 'IN_PROGRESS', count: 20 },
        { status: 'NOTIFIED', count: 10 },
      ];
    }

    // Monthly Data
    if (timePeriod === 'last-month') {
      newMonthData = [
        { month: 'January', increase: 1200, decrease: 300, total: 1500 },
        { month: 'February', increase: 800, decrease: 100, total: 900 },
        { month: 'March', increase: 1100, decrease: 200, total: 1300 },
        { month: 'April', increase: 1500, decrease: 400, total: 1900 },
        { month: 'Total', increase: 5600, decrease: 1000, total: 6700 },
      ];
    } else if (timePeriod === 'last-week') {
      newMonthData = [
        { month: 'Week 1', increase: 500, decrease: 100, total: 600 },
        { month: 'Week 2', increase: 600, decrease: 200, total: 800 },
        { month: 'Week 3', increase: 800, decrease: 150, total: 950 },
        { month: 'Week 4', increase: 900, decrease: 200, total: 1100 },
        { month: 'Total', increase: 2800, decrease: 650, total: 3450 },
      ];
    } else {
      newMonthData = [
        { month: 'January', increase: 1500, decrease: 400, total: 1900 },
        { month: 'February', increase: 1000, decrease: 300, total: 1300 },
        { month: 'March', increase: 1400, decrease: 500, total: 1900 },
        { month: 'April', increase: 2000, decrease: 500, total: 2500 },
        { month: 'Total', increase: 5900, decrease: 1700, total: 7600 },
      ];
    }

    // Severity Data
    newSeverityData = [
      { status: 'CRITICAL', count: 20 },
      { status: 'HIGH', count: 30 },
      { status: 'MEDIUM', count: 35 },
      { status: 'LOW', count: 15 },
    ];

    // Compliance Standard Breakdown
    newFindingComplianceData = [
      { status: 'CIS', count: 40 },
      { status: 'PCI', count: 25 },
      { status: 'HIPAA', count: 15 },
      { status: 'ISO', count: 20 },
    ];

    // Findings by Region
    newFindingRegionData = [
      { region: 'us-east-1', count: 4000 },
      { region: 'us-west-2', count: 300 },
      { region: 'eu-central-1', count: 2800 },
      { region: 'ap-south-1', count: 260 },
      { region: 'sa-east-1', count: 140 }
    ];

    setComplianceData(newComplianceData);
    setWorkflowData(newWorkflowData);
    setMonthData(newMonthData);
    setSeverityData(newSeverityData);
    setFindingcomplianceData(newFindingComplianceData);
    setFindingRegionData(newFindingRegionData);
  }, [region, resourceType, timePeriod, severityLevel, complianceStandard, findingType, accountId, status]);

  return (
    <div className="bg-white space-y-5 p-4">
      <div className="grid grid-cols-5 gap-4 justify-items-center">
        <KPIcard title="Total Findings" value="10K" />
        <KPIcard title="Regions" value="8" />
        <KPIcard title="Resource Types" value="5" />
        <KPIcard title="Active Accounts" value="6" />
        <KPIcard title="Alerts" value="120" />
      </div>
      <div className="gap-6 justify-items-center">
      <Slicer />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <PieChartBlock title="Compliance Status of Findings" data={complianceData} />
        <PieChartDonut title="Workflow of Findings" data={workflowData} />
        <BarChartBlock title="Monthly Changes in Findings" data={monthData} />
        <BarChartSingle title="Count of Findings by Region" data={findingregionData} />
        <PieChartBlock title="Severity Status of Findings" data={severityData} />
        <PieChartDonut title="Count of Findings by Compliance Standard" data={findingcomplianceData} />
      </div>
    </div>
  );
};

export default Dashboard1;
