import React from 'react'

const ControlStatus = (props) => {
    
    const statusColors = {
        "Passed" : "bg-green-500",
        "Failed" : "bg-red-500",
        "No data" : "bg-blue-500",
        "Unknown" : "bg-yellow-500",
        "Disabled" : "bg-gray-500",
    }
  return (
    <div className='flex gap-3 items-center'>
    <div className={`${statusColors[props.status]} rounded-md w-6 h-6`}></div>
    <h2 className='text-xs'>{props.count} {props.status}</h2>
  </div>
  )
}

export default ControlStatus
