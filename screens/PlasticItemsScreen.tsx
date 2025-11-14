
import React from 'react';
import Header from '../components/Header';
import { RECYCLABLE_ITEMS } from '../constants';
import { AppScreen } from '../types';
import { CoinIcon } from '../constants';

const RecyclableItemsScreen: React.FC = () => {
  return (
    <div className="animate-slide-in-up">
      <Header title="Accepted Recyclables" backScreen={AppScreen.USER} />
      <p className="text-center text-light-secondary mb-6 -mt-6">
        Earn coins for recycling each of these items.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {RECYCLABLE_ITEMS.map((item) => (
          <div key={item.id} className="bg-dark-secondary rounded-xl shadow-lg overflow-hidden text-center transition-transform hover:-translate-y-1 border border-dark-tertiary">
            <img src={item.imageUrl} alt={item.name} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-light-primary text-base">{item.name}</h3>
              <p className="text-sm text-light-secondary mb-2">{item.code}</p>
              <div className="inline-flex items-center justify-center bg-dark-primary px-3 py-1 rounded-full">
                <CoinIcon className="w-4 h-4 text-accent-yellow" />
                <span className="ml-1.5 text-sm font-semibold text-light-primary">{item.coinValue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecyclableItemsScreen;
