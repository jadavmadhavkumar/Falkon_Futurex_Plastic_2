import React from 'react';
import Header from '../components/Header';
import { AppScreen, Vehicle } from '../types';
import { MOCK_VEHICLES, TruckIcon } from '../constants';

const FleetManagementScreen: React.FC = () => {
    
    const getStatusColor = (status: Vehicle['status']) => {
        switch (status) {
            case 'On Route': return 'bg-green-500';
            case 'Idle': return 'bg-yellow-500';
            case 'Maintenance': return 'bg-red-500';
        }
    };
    
  return (
    <div className="animate-slide-in-up">
      <Header title="Fleet Management" backScreen={AppScreen.MUNICIPAL} />

      <div className="relative w-full h-56 bg-dark-secondary rounded-2xl overflow-hidden shadow-2xl mb-6 border border-dark-tertiary">
        <img
          src="https://www.mapbox.com/images/demos/dark-static.png"
          alt="Map of fleet"
          className="w-full h-full object-cover opacity-50"
        />
        {MOCK_VEHICLES.map(vehicle => (
             <div key={vehicle.id} className="absolute" style={{top: `${(vehicle.lat - 34.04) * 2000}%`, left: `${(vehicle.lng + 118.27) * 2000}%`}}>
                <TruckIcon className={`w-8 h-8 ${vehicle.status === 'On Route' ? 'text-accent-green animate-pulse' : 'text-light-secondary'}`} />
            </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <p className="text-xl font-bold bg-black/50 px-4 py-2 rounded-lg">LIVE FLEET VIEW</p>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_VEHICLES.map((vehicle) => (
          <div key={vehicle.id} className="bg-dark-secondary p-4 rounded-xl border border-dark-tertiary">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xl font-bold text-light-primary">{vehicle.name}</p>
                <p className="text-sm text-light-secondary">Driver: {vehicle.driver}</p>
              </div>
              <div className="flex items-center text-sm font-semibold bg-dark-primary px-3 py-1 rounded-full">
                <span className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(vehicle.status)}`}></span>
                {vehicle.status}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-light-secondary mb-1">Fuel Level: {vehicle.fuel}%</p>
              <div className="w-full bg-dark-tertiary rounded-full h-2">
                <div className="bg-accent-blue h-2 rounded-full" style={{ width: `${vehicle.fuel}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetManagementScreen;
