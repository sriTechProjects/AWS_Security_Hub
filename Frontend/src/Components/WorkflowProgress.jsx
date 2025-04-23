import React from 'react'

const WorkflowProgress = (props) => {
    const color = {
        New:"bg-blue-600",
        InProgress:"bg-yellow-400",
        Resolved:"bg-green-400",
    }
  return (
    <div>
      <h1 className={`font-semibold rounded-md w-20 p-1 text-center text-sm  ${color[props.status]}`}>{props.status}</h1>
    </div>
  )
}

export default WorkflowProgress
