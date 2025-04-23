import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
const AppliedFilter = (props) => {
  return (
    <div className="h-7 bg-blue-100 px-2 border-2 border-blue-800 rounded-xl flex items-center justify-between gap-2 w-fit">
    <h1 className="text-black text-sm font-semibold">{props.filterName} = {props.value}</h1>
    <RxCrossCircled className="text-black h-5" />
  </div>
  )
}

export default AppliedFilter
