import React from 'react';
import {ExclamationIcon, CheckCircleIcon} from '@heroicons/react/outline';

const StatusTemperatur = () => {
  return(
    <div className="pt-2">
      <div className="hidden">
        <CheckCircleIcon className="w-8 text-green-400"/>
        <h1 className="font-bold">Proses berjalan...</h1>
      </div>
      <div className="">
        <ExclamationIcon className="w-8 text-yellow-400"/>
        <h1 className="font-bold">Process berhenti</h1>
        <span className="text-sm font-light">Temperatur ruangan di luar rentang yang diizinkan</span>
      </div>
    </div>
  )
}

export default StatusTemperatur