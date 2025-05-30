import React, { useState, useEffect } from 'react';
import { FiUpload } from "react-icons/fi";
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import FailedChecks from '../Components/FailedChecks';
import WorkflowProgress from '../Components/WorkflowProgress';
import Navbar from '../Components/Navbar';

const Findings = () => {
  const [data, setData] = useState([]);
  const [selectedSeverity, setSelectedSeverity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:4000/security-hub/api/findings');
        setData(response.data.findings);
        console.log(response.data.findings);
      } catch (err) {
        setError("Failed to fetch findings.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSeverityChange = (e) => {
    setSelectedSeverity(e.target.value);
  };

  const filteredData = selectedSeverity
    ? data.filter((item) => item.severity === selectedSeverity)
    : data;

  const handleExport = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Security Findings", 14, 22);

    const tableColumn = [
      "Finding", "Severity", "Workflow", "Region",
      "Account", "Product", "Resource", "Compliance", "Updated"
    ];

    const tableRows = filteredData.map(item => [
      item.title,
      item.severity,
      item.workflowStatus,
      item.region,
      item.awsAccountId,
      item.productName,
      item.resourceId,
      item.complianceStatus,
      item.updatedAt,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("findings.pdf");
  };

  return (
    <>
      <Navbar />
      <div className='bg-[#eaebf0] min-h-screen w-full flex justify-center px-4 py-6'>
        <div className='bg-[#f8f9fb] px-4 py-5 w-9/10 rounded-xl h-6/10 flex flex-col gap-5'>
          <h1 className='text-2xl font-semibold'>Findings</h1>

          {/* Search and Export */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <input
              className='bg-white border border-gray-400 rounded-md px-3 py-2 w-full md:w-1/3'
              type="text"
              placeholder='Add filter'
              onChange={handleSeverityChange}
            />
            <button
              onClick={handleExport}
              className='flex items-center justify-center cursor-pointer gap-2 border border-gray-500 px-4 py-2 rounded-2xl text-blue-500 font-semibold w-fit self-end md:self-auto'
            >
              <FiUpload className='w-5 h-5' />
              Export
            </button>
          </div>

          {/* Table */}
          <div className="overflow-auto max-h-[500px]">
            <div className="min-w-[1200px]">
              {/* Table Header */}
              <div className="grid grid-cols-10 gap-2 font-semibold border-b border-gray-300 py-2 sticky top-0 bg-[#f8f9fb] z-10">
                <div><input type="checkbox" /></div>
                <div>Finding</div>
                <div>Severity</div>
                <div>Workflow</div>
                <div>Region</div>
                <div>Account</div>
                <div>Product</div>
                <div>Resource</div>
                <div>Compliance</div>
                <div>Updated</div>
              </div>

              {/* Conditional Rendering */}
              {loading ? (
                <div className="text-center py-4 col-span-10">Loading...</div>
              ) : error ? (
                <div className="text-center py-4 col-span-10 text-red-600">{error}</div>
              ) : (
                filteredData.map((item, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-10 gap-2 items-center py-2 border-b border-gray-200"
                  >
                    <div><input type="checkbox" /></div>
                    <div className="break-words whitespace-normal">{item.title}</div>
                    <div><FailedChecks severity={item.severity} /></div>
                    <div><WorkflowProgress status={item.workflowStatus} /></div>
                    <div className="break-words whitespace-normal">{item.region}</div>
                    <div className="break-words whitespace-normal">{item.awsAccountId}</div>
                    <div className="break-words whitespace-normal">{item.productName}</div>
                    <div className="break-words whitespace-normal">{item.resourceId}</div>
                    <div className="break-words whitespace-normal">{item.complianceStatus}</div>
                    <div className="break-words whitespace-normal">{item.updatedAt}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Findings;
