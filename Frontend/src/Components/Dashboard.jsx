import React from "react";
import FailedChecks from "./FailedChecks";
import ControlStatus from "./ControlStatus";

import AppliedFilter from "./AppliedFilter";
import BasicPie from "./BasicPie";
import TickPlacementBars from "./TickPlacementBars";
import DataTable from "./DataTable";
const Dashboard = () => {
  var controlsCount = 501;


  const failedChecks = [
    { severity: "CRITICAL", count: "3" },
    { severity: "HIGH", count: "23" },
    { severity: "MEDIUM", count: "32" },
    { severity: "LOW", count: "0" },
  ];

  return (
    <div className=" w-full h-full flex flex-col px-4 md:px-20 bg-[#eef2f5] text-black py-10 gap-5">
      <h1 className="text-3xl text-black  font-bold text-start">Controls</h1>
        <div className="two_containers flex gap-5">
          
      <div className="controlsDashboard  rounded-2xl  bg-white shadow-lg   flex  w-5/10 py-5 px-5 ">
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold underline">Security Score</h2>
          <h1 className="text-5xl font-bold text-green-500">94%</h1>
          <h5 className="text-md text-gray-400">
            268 out of 286 control passed
          </h5>
          <h2 className="text-md font-semibold">Control Status</h2>
        </div>
        <BasicPie className="text-white" />
        </div>

        <div className="failed-checks  rounded-2xl  bg-white shadow-lg   flex  w-5/10 py-5 px-5 ">
        <div className="flex flex-col justify-center">
        <h2 className="text-lg font-semibold underline">Failed Checks</h2>
        <div className="flex items-baseline">
                  <h1 className="text-5xl font-bold">58 </h1>
                  <h4 className="text-md text-gray-300"> / 2893</h4>
                </div>
        </div>
        <TickPlacementBars className="text-white" />
        </div>


        
        </div>
        <DataTable/>
       

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-5">
       
      </div>


    </div>
  );
};

export default Dashboard;
