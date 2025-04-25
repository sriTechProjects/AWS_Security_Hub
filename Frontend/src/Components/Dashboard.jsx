import React from "react";
import FailedChecks from "./FailedChecks";
import ControlStatus from "./ControlStatus";

import AppliedFilter from "./AppliedFilter";
import BasicPie from "./BasicPie";
import TickPlacementBars from "./TickPlacementBars";
import DataTable from "./DataTable";
import { useEffect, useState } from "react";
const Dashboard = () => {
  var controlsCount = 501;

  // const failedChecks = [
  //   { severity: "CRITICAL", count: "3" },
  //   { severity: "HIGH", count: "23" },
  //   { severity: "MEDIUM", count: "32" },
  //   { severity: "LOW", count: "0" },
  // ];

  const [controls, setControls] = useState([]);
  const [failedChecks, setFailedChecks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/security-hub/api/controls")
      .then((res) => res.json())
      .then((data) => {
        setControls(data);
        console.log(data);

        // Calculate failed checks by severity
        const severityMap = { Critical: 0, High: 0, Medium: 0, Low: 0 };
        data.forEach((item) => {
          if (item.status === "FAILED") {
            severityMap[item.severity] =
              (severityMap[item.severity] || 0) + item.failedChecks;
          }
        });

        const failed = Object.entries(severityMap).map(([severity, count]) => ({
          severity,
          count: count.toString(),
        }));

        setFailedChecks(failed);
      })
      .catch((err) => console.error("Error fetching controls:", err));
  }, []);
  const totalFailedChecks = failedChecks.reduce(
    (acc, curr) => acc + Number(curr.count),
    0
  );
  const totalChecks = controls.reduce(
    (acc, curr) => acc + (curr.failedChecks || 0),
    0
  );

  const totalControls = controls.length;
  const passedControls = controls.filter(
    (ctrl) => ctrl.status === "PASSED"
  ).length;
  const securityScore =
    totalControls === 0
      ? 0
      : Math.round((passedControls / totalControls) * 100);

  return (
    <div className=" w-full h-full flex flex-col px-4 md:px-20 bg-[#eef2f5] text-black py-10 gap-5">
      <h1 className="text-3xl text-black  font-bold text-start">Controls</h1>
      <div className="two_containers flex gap-5">
        <div className="controlsDashboard  rounded-2xl  bg-white shadow-lg   flex  w-5/10 py-5 px-5 ">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold underline">Security Score</h2>
            <h1 className="text-5xl font-bold text-green-500">
              {securityScore}%
            </h1>
            <h5 className="text-md text-gray-400">
              {passedControls} out of {totalControls} controls passed
            </h5>
            <h2 className="text-md font-semibold">Control Status</h2>
          </div>
          <BasicPie controls={controls} />
        </div>

        <div className="failed-checks  rounded-2xl  bg-white shadow-lg   flex  w-5/10 py-5 px-5 ">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold underline">Failed Checks</h2>
            <div className="flex items-baseline">
              <h1 className="text-5xl font-bold">{totalFailedChecks}</h1>
              <h4 className="text-md text-gray-300"> / {totalChecks}</h4>
            </div>
          </div>
          <TickPlacementBars failedChecks={failedChecks} />
        </div>
      </div>
      <DataTable controls={controls} />

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-5"></div>
    </div>
  );
};

export default Dashboard;
