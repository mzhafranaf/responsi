import React from "react";

const StatusGas = () => {
  return(
    <div className="basis-1/3 h-28 bg-indigo-200 shadow-md shadow-slute-600">
			<h1 className="text-sm font-bold pl-4 pt-2">Status Kebocoran</h1>
			<div className="flex flex-row p-2 justify-end">
				<h2 className="text-4xl pr-4 pt-4">Tidak Ada</h2>
				<h2 className="hidden text-4xl pr-4 pt-4">Ada</h2>
			</div>
		</div>
  )
}
export default StatusGas