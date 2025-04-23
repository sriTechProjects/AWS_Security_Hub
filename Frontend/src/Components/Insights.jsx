import React, { useState } from 'react'
import AppliedFilter from './AppliedFilter'
import FailedChecks from './FailedChecks';
import WorkflowProgress from './WorkflowProgress';

const Insights = ()=>{
  const dummyData = [
    {
      finding: "Open port detected",
      severity: "High",
      workflowStatus: "New",
      region: "us-east-1",
      accountId: "123456789012",
      product: "Amazon EC2",
      resource: "i-0abcd1234efgh5678",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-17",
    },
    {
      finding: "IAM policy too permissive",
      severity: "Medium",
      workflowStatus: "InProgress",
      region: "us-west-2",
      accountId: "234567890123",
      product: "IAM",
      resource: "policy/AllowAll",
      complianceStatus: "Compliant",
      updatedAt: "2025-04-15",
    },
    {
      finding: "Outdated SSL certificate",
      severity: "Low",
      workflowStatus: "Resolved",
      region: "eu-central-1",
      accountId: "345678901234",
      product: "Amazon CloudFront",
      resource: "dist/abc123",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-16",
    },
    {
      finding: "Unencrypted S3 bucket",
      severity: "High",
      workflowStatus: "New",
      region: "ap-south-1",
      accountId: "456789012345",
      product: "S3",
      resource: "bucket-name",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-14",
    },{
    finding: "Open port detected",
      severity: "High",
      workflowStatus: "New",
      region: "us-east-1",
      accountId: "123456789012",
      product: "Amazon EC2",
      resource: "i-0abcd1234efgh5678",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-17",
    },
    {
      finding: "IAM policy too permissive",
      severity: "Medium",
      workflowStatus: "InProgress",
      region: "us-west-2",
      accountId: "234567890123",
      product: "IAM",
      resource: "policy/AllowAll",
      complianceStatus: "Compliant",
      updatedAt: "2025-04-15",
    },
    {
      finding: "Outdated SSL certificate",
      severity: "Low",
      workflowStatus: "Resolved",
      region: "eu-central-1",
      accountId: "345678901234",
      product: "Amazon CloudFront",
      resource: "dist/abc123",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-16",
    },
    {
      finding: "Unencrypted S3 bucket",
      severity: "High",
      workflowStatus: "New",
      region: "ap-south-1",
      accountId: "456789012345",
      product: "S3",
      resource: "bucket-name",
      complianceStatus: "Non-Compliant",
      updatedAt: "2025-04-14",
    },
  ];

  const [selectedSeverity, setSelectedSeverity] = useState("");

  const handleSeverityChange = (e) => {
    setSelectedSeverity(e.target.value);
  };

  const filteredData = selectedSeverity
    ? dummyData.filter((item) => item.severity === selectedSeverity)
    : dummyData;

  return(
    <>
    <div className="main p-5 flex flex-col gap-2">
      <div className="top flex gap-5">
        <input className='border-1 border-white text-white px-2 py-1 w-6/10 rounded-md'  type="text" name="seacrh" id="" placeholder='Add filter' />
  
        <select className='text-white border-1 border-white text-white px- py-1 w-3/10 rounded-md' name="" id="dropdown">
          <option className='text-black'  value="">None</option>
          <option className='text-black' value="">None</option>
          <option className='text-black' value="">None</option>
          <option className='text-black' value="">None</option>
          <option className='text-black' value="">None</option>
        </select>
      

      </div>
      <div className="filters flex gap-2">
      <AppliedFilter filterName="Product name" value="Config"/>
      <AppliedFilter filterName="Workflow status" value="New"/>
      <button className="h-7 bg-blue-100 px-2 border-2 border-blue-800 rounded-xl text-blue-800 font-semibold text-sm">
              Clear filters
            </button>
      </div>
      
          {/* Table */}
           {/* Header */}
      <div className="mt-5 text-white grid grid-cols-2 sm:grid-cols-10 gap-2 font-bold mb-2">
      <div>
            <input type="checkbox" />
          </div>
        <div>Finding</div>
        <div>Severity</div>
        <div>Workflow Status</div>
        <div>Region</div>
        <div>Account Id</div>
        <div>Product</div>
        <div>Resource</div>
        <div>Compliance Status</div>
        <div>Updated At</div>
      </div>

      {/* Rows */}
      {filteredData.map((item, i) => (
        <div
          key={i}
          className="text-white grid grid-cols-2 sm:grid-cols-10 gap-2 items-center  py-2"
        >
          <div>
            <input type="checkbox" />
          </div>
          <div>{item.finding}</div>
          <div><FailedChecks severity={item.severity}/></div>
          <div><WorkflowProgress status={item.workflowStatus} /></div>
          <div>{item.region}</div>
          <div>{item.accountId}</div>
          <div>{item.product}</div>
          <div>{item.resource}</div>
          <div>{item.complianceStatus}</div>
          <div>{item.updatedAt}</div>
        </div>
      ))}
    </div>
 
    </>
  )
}

export default Insights