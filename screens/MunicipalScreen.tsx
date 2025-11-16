import React, { useContext } from 'react';
import Header from '../components/Header';
import { AppContext, AppScreen } from '../types';
import { TruckIcon, AlertIcon, ChartIcon, RouteIcon, RecycleIcon } from '../constants';

const MunicipalScreen: React.FC = () => {
    const context = useContext(AppContext);

    const features = [
        {
            title: "Live Fleet Tracking",
            icon: <TruckIcon className="w-8 h-8 text-accent-blue" />,
            screen: AppScreen.FLEET_MANAGEMENT,
        },
        {
            title: "Complaint Management",
            icon: <AlertIcon className="w-8 h-8 text-accent-yellow" />,
            screen: AppScreen.COMPLAINT_MANAGEMENT,
        },
        {
            title: "Operations Analytics",
            icon: <ChartIcon className="w-8 h-8 text-accent-green" />,
            screen: AppScreen.ANALYTICS,
        },
        {
            title: "Smart Route Planning",
            icon: <RouteIcon className="w-8 h-8 text-accent-purple" />,
            screen: AppScreen.ROUTE_PLANNING,
        },
        {
            title: "MRF Management",
            icon: <RecycleIcon className="w-8 h-8 text-light-secondary" />,
            screen: AppScreen.MRF_MANAGEMENT,
        },
    ];

    return (
        <div className="animate-slide-in-up">
            <Header title="Municipal Dashboard" backScreen={AppScreen.HOME} />

            <div className="p-6 mb-6 text-left bg-dark-secondary rounded-2xl shadow-xl border border-dark-tertiary">
                <h2 className="text-2xl font-bold text-light-primary">Welcome, Manager</h2>
                <p className="text-light-secondary mt-1">Here's your operational overview for today.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                 <StatCard title="Active Trucks" value="2/4" color="text-accent-green" />
                 <StatCard title="Open Complaints" value="1" color="text-accent-yellow" />
            </div>

            <div className="mt-6 space-y-4">
                {features.map(feature => (
                    <button 
                        key={feature.title}
                        onClick={() => context?.navigate(feature.screen)}
                        className="w-full flex items-center p-4 bg-dark-secondary rounded-xl border border-dark-tertiary transition-all hover:border-accent-purple hover:bg-dark-tertiary"
                    >
                        {feature.icon}
                        <span className="ml-4 text-lg font-semibold text-light-primary">{feature.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};


const StatCard: React.FC<{ title: string; value: string; color: string;}> = ({ title, value, color }) => (
    <div className="bg-dark-secondary p-4 rounded-xl border border-dark-tertiary">
        <p className="text-sm text-light-secondary">{title}</p>
        <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </div>
);


export default MunicipalScreen;
