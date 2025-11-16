import React from 'react';
import Header from '../components/Header';
import { AppScreen } from '../types';
import { MOCK_MRF_INVENTORY } from '../constants';
import { RecycleIcon } from '../constants';

const MRFManagementScreen: React.FC = () => {
    const totalInventory = MOCK_MRF_INVENTORY.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="animate-slide-in-up">
      <Header title="MRF Management" backScreen={AppScreen.MUNICIPAL} />
      
      <div className="p-6 mb-6 text-center bg-dark-secondary rounded-2xl shadow-xl border border-dark-tertiary">
        <p className="text-base text-light-secondary">Total Inventory</p>
        <div className="flex items-center justify-center my-2">
           <RecycleIcon className="h-10 w-10 text-accent-green"/>
          <p className="ml-3 text-5xl font-bold text-light-primary">{totalInventory.toLocaleString()}</p>
          <span className="ml-2 mt-4 text-lg text-light-secondary">kg</span>
        </div>
      </div>

      <div className="bg-dark-secondary p-4 rounded-2xl border border-dark-tertiary">
        <h3 className="text-xl font-bold text-light-primary mb-4">Material Breakdown</h3>
        <div className="space-y-3">
          {MOCK_MRF_INVENTORY.map((item) => (
            <div key={item.id} className="bg-dark-primary p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-light-primary">{item.material}</p>
                    <p className="text-lg font-bold text-accent-green">{item.quantity.toLocaleString()} kg</p>
                </div>
                <div className="w-full bg-dark-tertiary rounded-full h-2">
                    <div className="bg-accent-green h-2 rounded-full" style={{ width: `${(item.quantity / totalInventory) * 200}%` }}></div>
                </div>
                 <p className="text-xs text-right text-light-secondary mt-1">Last Update: {item.lastUpdated}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MRFManagementScreen;
