import * as React from 'react';
import AppliedFilter from './AppliedFilter';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataTable() {
  const [filtersApplied, setFiltersApplied] = useState(true);
  const [rows, setRows] = useState([]);

  // Fetch controls from backend
  useEffect(() => {
    const fetchControls = async () => {
      try {
        const response = await axios.get('http://localhost:4000/security-hub/api/controls');
        setRows(response.data);
      } catch (error) {
        console.error('Error fetching controls:', error);
      }
    };

    fetchControls();
  }, []);

  return (
    <div className="overflow-y-scroll text-black h-4/10  rounded-2xl bg-white shadow-lg  py-2 px-2">
      <h1 className="text-2xl font-semibold">All Controls</h1>

      {/* Filter input and Clear button */}
      <div className="flex gap-5 mt-2">
        <input
          type="text"
          className="border-1 border-gray-500 w-3/10 rounded-md px-2 box-border"
          placeholder="Filter controls"
        />
        <button
          className="bg-green-400 text-l font-semibold w-1/10 rounded-md px-2 box-border"
          onClick={() => {
            setFiltersApplied(false);
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Applied Filters */}
      <div className="appliedFilters flex gap-2 mt-3 mb-5">
        {filtersApplied && (
          <>
            <AppliedFilter filterName="Control Status" value="Failed" />
            <AppliedFilter filterName="Severity" value="High" />
          </>
        )}
      </div>

      {/* Table Headers */}
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
          <input type="radio" className="w-4 h-4" />
          <div>{row.id}</div>
          <div>{row.title}</div>
          <div
            className={`font-semibold ${
              row.controlStatus === 'PASSED' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {row.status}
          </div>
          <div
            className={
              row.severity === 'CRITICAL'
                ? 'text-red-600'
                : row.severity === 'HIGH'
                ? 'text-orange-600'
                : row.severity === 'MEDIUM'
                ? 'text-yellow-600'
                : 'text-green-600'
            }
          >
            {row.severity}
          </div>
          <div>{row.failedChecks}</div>
          <div>{row.customParameters}</div>
        </div>
      ))}
    </div>
  );
}
