import React from 'react'

const FailedChecks = (props) => {
    const severityColors = {
        CRITICAL: "bg-red-800",
        HIGH: "bg-orange-500",
        MEDIUM: "bg-yellow-400",
        LOW: "bg-green-400",
        Critical: "bg-red-800",
        High: "bg-orange-500",
        Medium: "bg-yellow-400",
        Low: "bg-green-400",
    };
  return (
 
    <div className='w-4/10'>
            <div className={`font-semibold rounded-md w-15 p-1 text-center text-sm ${severityColors[props.severity]}`}>
               <h1 className='failed-check-text w-3/10'> {props.severity}</h1>
            </div>

            <h1 className='font-semibold text-blue-500 text-md mt-2'>{props.count}</h1>
    </div>
  )
}

export default FailedChecks
