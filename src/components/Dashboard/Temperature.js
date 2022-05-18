import React  from "react";

const Temperature = () => {
  return(
    <div className="basis-1/4 h-28 bg-indigo-200 shadow-md shadow-slute-600">
    <h1 className="text-sm font-bold pl-4 pt-2">Temperatur Ruangan</h1>
    <div className="flex flex-row p-2 justify-end">
      <h2 className="text-6xl">29</h2>
      <h2 className="text-sm px-4 pt-10">celcius</h2>
    </div>
  </div>
  )
}

export default Temperature;