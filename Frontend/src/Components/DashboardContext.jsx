import { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [region, setRegion] = useState('all');
  const [resourceType, setResourceType] = useState('all');
  const [timePeriod, setTimePeriod] = useState('all');
  const [severityLevel, setSeverityLevel] = useState('all');
  const [complianceStandard, setComplianceStandard] = useState('all');
  const [findingType, setFindingType] = useState('all');
  const [accountId, setAccountId] = useState('all');
  const [status, setStatus] = useState('all');

  return (
    <DashboardContext.Provider
      value={{
        region, setRegion,
        resourceType, setResourceType,
        timePeriod, setTimePeriod,
        severityLevel, setSeverityLevel,
        complianceStandard, setComplianceStandard,
        findingType, setFindingType,
        accountId, setAccountId,
        status, setStatus,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
