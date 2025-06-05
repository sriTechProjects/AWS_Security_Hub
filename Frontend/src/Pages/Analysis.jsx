import React from 'react';
import Dashboard1 from '../Components/Dashboard1';
import { DashboardProvider } from '../Components/DashboardContext';
import Navbar from '../Components/Navbar';

const Analysis = () => {
  return (
    <>
      <Navbar />
      <DashboardProvider>
        <div className="p-4">
          <Dashboard1 />
        </div>
      </DashboardProvider>
    </>
  );
};

export default Analysis;
