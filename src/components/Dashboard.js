import React, {useState} from "react";


import Temperature from "./Dashboard/Temperature";
import TotalLPG from "./Dashboard/TotalLPG";
import StatusTemperatur from "./Dashboard/StatusTemperatur";
import NomorSampel from "./Dashboard/NomorSampel";
import Massa from "./Dashboard/Massa";
import StatusGas from "./Dashboard/StatusGas";
import StatusUji from "./Dashboard/StatusUji";

const Dashboard = () => {

  return(
		<div name="dashboard" className="w-full max-h-screen pb-7 bg-slate-200">
			<div className="flex flex-row px-12 py-8 gap-x-16">
				<Temperature />
				<TotalLPG/>
				<StatusTemperatur/>
			</div>
			
			<div className="flex flex-col mx-12 max-w-full h-max bg bg-indigo-300">
				<h1 className="px-2 pt-2 font-bold">Uji Kualitas LPG</h1>
				<div className="flex flex-row p-4 gap-x-16">
					<NomorSampel/>
					<Massa/>
					<StatusGas/>
				</div>
				<StatusUji/>
			</div>

		</div>
	)
}

export default Dashboard