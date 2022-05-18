import React, { useState } from "react";
import Dashboard from "./Dashboard"
import Report from "./Report"
import {link} from "react-router-dom"

import { MenuIcon,XIcon, ServerIcon, UserIcon, DocumentReportIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="flex">
      <div className={nav ? "w-40 h-screen bg-indigo-900" : "w-13 h-screen bg-indigo-900 "} onClick={handleClick}>
        {!nav ? <MenuIcon className="m-4 pt-1 w-5 text-white"/> : <XIcon className="m-4 pt-1 w-5 text-white"/>}
      
      <ul className="p-2">
        <li className="text-white text-sm flex gap-x-2 p-2 hover:bg-indigo-500 rounded-md"> 
          <ServerIcon className="w-5"/>
          <span className={!nav ? "hidden":"origin-left"}>Dashboard</span>
        </li>
        <li className="text-white text-sm flex gap-x-2 p-2 hover:bg-indigo-500 rounded-md"> 
          <DocumentReportIcon className="w-5"/>
          <span className={!nav ? "hidden":"origin-left"}>Report</span>
        </li>
        <li className="text-white text-sm flex gap-x-2 p-2 hover:bg-indigo-500 rounded-md"> 
          <UserIcon className="w-5"/>
          <span className={!nav ? "hidden":"origin-left"}>Team</span>
        </li>
      </ul>
      </div> 
      
      <div className="text-md font-semibold flex-1">
        <div className="p-3 bg-indigo-900 m-4 rounded-md inline-block text-white">
          <h1>Sistem Monitoring Kualitas LPG</h1>
        </div>
        <Report/>
      </div>
    </div>
  )
}

export default Sidebar