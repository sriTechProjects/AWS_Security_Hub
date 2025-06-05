import * as React from 'react';
import AppliedFilter from './AppliedFilter';
import { useState } from 'react';
const rows = [
  { id: 'IAM.1', title: 'Avoid the use of root account', controlStatus: 'PASSED', severity: 'High', failedChecks: 0, customParameters: '-' },
  { id: 'IAM.2', title: 'Require multi-factor authentication', controlStatus: 'FAILED', severity: 'Critical', failedChecks: 2, customParameters: 'MFA setup required' },
  { id: 'IAM.3', title: 'Use of least privilege', controlStatus: 'PASSED', severity: 'Medium', failedChecks: 1, customParameters: 'Review IAM roles' },
  { id: 'IAM.4', title: 'Ensure strong passwords', controlStatus: 'PASSED', severity: 'Low', failedChecks: 0, customParameters: '-' },
];
React.useState
export default function DataTable() {
  const [filtersApplied,setfiltersApplied] = useState(true)
  return (
    <div className="overflow-y-scroll text-black h-4/10  rounded-2xl bg-white shadow-lg  py-2 px-2">
      {/* Table Header */}
      <h1 className='text-2xl font-semibold'>All Controls</h1>
      <div className='flex gap-5 mt-2'>
          <input type="text" name="" id="" className='border-1 border-gray-500 w-3/10 rounded-md px-2 box-border' placeholder='Filter controls ' />
          <button className='bg-green-400 text-l font-semibold w-1/10 rounded-md px-2 box-border' onClick={()=>{
              setfiltersApplied(false);
          }}>
          Clear Filters
          </button>

      </div>
      <div className='appliedFilters flex gap-2 mt-3 mb-5' >
      {filtersApplied && (<>
        <AppliedFilter filterName="Control Status" value="Failed"/>
        <AppliedFilter filterName="Control Status" value="Failed"/>
        <AppliedFilter filterName="Control Status" value="Failed"/>
        <AppliedFilter filterName="Control Status" value="Failed"/>
        </>)}
        
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-7 font-semibold gap-2 mb-4">
        <div></div>
        <div>ID</div>
        <div>Title</div>
        <div>Control Status</div>
        <div>Severity</div>
        <div>Failed Checks</div>
        <div>Custom Parameters</div>
      </div>

      {/* Table Rows */}
      {rows.map((row, i) => (
        <div key={i} className="grid grid-cols-2 sm:grid-cols-7 gap-2 mb-2 items-center">
          {/* Radio Button */}
          <input type="radio" className="w-4 h-4" />
          <div>{row.id}</div>
          <div>{row.title}</div>
          <div className={`font-semibold ${row.controlStatus === 'PASSED' ? 'text-green-600' : 'text-red-600'}`}>
            {row.controlStatus}
          </div>
          <div className={row.severity === 'Critical' ? 'text-red-600' : row.severity === 'High' ? 'text-orange-600' : row.severity === 'Medium' ? 'text-yellow-600' : 'text-green-600'}>
            {row.severity}
          </div>
          <div>{row.failedChecks}</div>
          <div>{row.customParameters}</div>
        </div>
      ))}
    </div>
  );
}
