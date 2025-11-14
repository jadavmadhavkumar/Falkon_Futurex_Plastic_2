
import React from 'react';
import Header from '../components/Header';
import { RECYCLABLE_ITEMS } from '../constants';
import { AppScreen } from '../types';

const DistributorScreen: React.FC = () => {
    
  const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode; }> = ({ title, value, icon }) => (
    <div className="bg-dark-secondary p-4 rounded-2xl shadow-lg flex items-center border border-dark-tertiary">
        <div className="p-3 bg-dark-primary rounded-xl mr-4">
            {icon}
        </div>
        <div>
            <p className="text-sm text-light-secondary">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    </div>
  );
  
  return (
    <div className="animate-slide-in-up">
      <Header title="Distributor Dashboard" backScreen={AppScreen.HOME}/>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatCard title="Circulation" value="1,240" icon={<PackageIcon />} />
        <StatCard title="Return Rate" value="65%" icon={<TrendingUpIcon />} />
      </div>

      <button
        className="w-full py-4 mb-6 text-lg font-bold text-dark-primary transition-transform transform bg-accent-yellow rounded-xl shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-yellow/50"
      >
        Generate New QR Batch
      </button>

      <div className="p-6 bg-dark-secondary rounded-2xl border border-dark-tertiary">
        <h3 className="text-xl font-bold text-light-primary mb-4">Item Return Status</h3>
        <div className="space-y-4">
          {RECYCLABLE_ITEMS.slice(0, 4).map(item => (
            <div key={item.id} className="bg-dark-primary p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-light-primary">{item.name}</p>
                <p className="text-sm text-light-secondary">{Math.floor(Math.random() * 60) + 20}%</p>
              </div>
              <div className="w-full h-2 bg-dark-tertiary rounded-full overflow-hidden">
                 <div className="h-2 bg-accent-green rounded-full" style={{width: `${Math.floor(Math.random() * 60) + 20}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PackageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
);

const TrendingUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

export default DistributorScreen;
