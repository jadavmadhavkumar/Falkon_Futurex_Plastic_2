import React from 'react';
import Header from '../components/Header';
import { AppScreen } from '../types';

const RoutePlanningScreen: React.FC = () => {
  return (
    <div className="animate-slide-in-up">
      <Header title="Smart Route Planning" backScreen={AppScreen.MUNICIPAL} />

      <div className="relative w-full h-72 bg-dark-secondary rounded-2xl overflow-hidden shadow-2xl mb-6 border border-dark-tertiary">
        <img
          src="https://www.mapbox.com/images/demos/dark-static.png"
          alt="Map of routes"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Mock Routes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline points="20,80 30,50 50,60 60,30 80,40" fill="none" stroke="#60A5FA" strokeWidth="1" />
            <polyline points="15,20 40,35 55,25 75,50 85,75" fill="none" stroke="#34D399" strokeWidth="1" />
        </svg>
        <div className="absolute top-4 left-4 bg-dark-primary/70 p-2 rounded-lg">
            <p className="font-bold">Optimized Routes for Today</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <RouteCard routeName="Route A - Downtown" truck="Truck-01" stops={32} color="border-l-accent-blue" />
        <RouteCard routeName="Route B - Suburbs" truck="Truck-04" stops={45} color="border-l-accent-green" />
      </div>
    </div>
  );
};

const RouteCard: React.FC<{ routeName: string, truck: string, stops: number, color: string }> = ({ routeName, truck, stops, color }) => (
    <div className={`bg-dark-secondary p-4 rounded-lg border border-dark-tertiary border-l-4 ${color}`}>
        <p className="text-lg font-bold text-light-primary">{routeName}</p>
        <div className="flex justify-between text-sm text-light-secondary mt-1">
            <span>Assigned: {truck}</span>
            <span>Stops: {stops}</span>
        </div>
    </div>
);


export default RoutePlanningScreen;
