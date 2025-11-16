import React from 'react';
import Header from '../components/Header';
import { AppScreen } from '../types';
import { ChartIcon, CollectionIcon, RecycleIcon } from '../constants';

const AnalyticsScreen: React.FC = () => {

  const analyticsData = {
    wasteCollected: [
      { day: 'Mon', value: 80 }, { day: 'Tue', value: 92 }, { day: 'Wed', value: 85 },
      { day: 'Thu', value: 95 }, { day: 'Fri', value: 110 }, { day: 'Sat', value: 120 }, { day: 'Sun', value: 105 }
    ],
    recyclingRate: 68,
  };

  const BarChart: React.FC<{ data: { day: string, value: number }[], color: string }> = ({ data, color }) => (
    <div className="flex justify-between items-end h-40 pt-4 px-2">
      {data.map(item => (
        <div key={item.day} className="flex flex-col items-center w-1/7">
          <div className={`${color} w-4/5 rounded-t-md`} style={{ height: `${(item.value / 130) * 100}%` }}></div>
          <p className="text-xs mt-2 text-light-secondary">{item.day}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="animate-slide-in-up">
      <Header title="Operations Analytics" backScreen={AppScreen.MUNICIPAL} />
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatCard title="Waste Collected" value="5.2 tons" icon={<CollectionIcon className="h-6 w-6 text-accent-blue" />} />
        <StatCard title="Recycling Rate" value={`${analyticsData.recyclingRate}%`} icon={<RecycleIcon className="h-6 w-6 text-accent-green" />} />
      </div>

      <div className="bg-dark-secondary p-4 rounded-2xl border border-dark-tertiary mb-6">
        <h3 className="text-lg font-bold text-light-primary mb-2">Weekly Collection (tons)</h3>
        <BarChart data={analyticsData.wasteCollected} color="bg-accent-blue" />
      </div>

      <div className="bg-dark-secondary p-6 rounded-2xl border border-dark-tertiary">
        <h3 className="text-xl font-bold text-light-primary mb-4">Performance Insights</h3>
        <ul className="list-disc list-inside space-y-2 text-light-secondary">
            <li>Saturday collections are highest, consider adding resources.</li>
            <li>Recycling rate is up 3% from last week.</li>
            <li>Fuel efficiency has improved by 5%.</li>
        </ul>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode; }> = ({ title, value, icon }) => (
    <div className="bg-dark-secondary p-4 rounded-xl shadow-lg flex items-center border border-dark-tertiary">
        <div className="p-3 bg-dark-primary rounded-xl mr-4">
            {icon}
        </div>
        <div>
            <p className="text-sm text-light-secondary">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    </div>
);


export default AnalyticsScreen;
