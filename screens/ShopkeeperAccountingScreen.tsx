
import React, { useContext } from 'react';
import Header from '../components/Header';
import { AppContext, AppScreen } from '../types';
import { CollectionIcon, CoinIcon, MOCK_TRANSACTIONS } from '../constants';

const ShopkeeperAccountingScreen: React.FC = () => {
  const context = useContext(AppContext);

  const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode; }> = ({ title, value, icon }) => (
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
      <Header title="Shopkeeper Ledger" backScreen={AppScreen.SHOPKEEPER} />

      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatCard 
            title="Items Collected" 
            value={context?.shopItemsCollected ?? 0} 
            icon={<CollectionIcon className="h-6 w-6 text-accent-blue" />} 
        />
        <StatCard 
            title="Coins Awarded" 
            value={context?.shopCoinsAwarded ?? 0} 
            icon={<CoinIcon className="h-6 w-6 text-accent-yellow" />} 
        />
      </div>

      <div className="bg-dark-secondary p-6 rounded-2xl border border-dark-tertiary">
        <h3 className="text-xl font-bold text-light-primary mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {MOCK_TRANSACTIONS.map((transaction, index) => (
            <div key={transaction.id} className={`flex justify-between items-center ${index < MOCK_TRANSACTIONS.length - 1 ? 'pb-3 border-b border-dark-tertiary' : ''}`}>
              <div className="flex items-center">
                 <div className="p-3 bg-dark-primary rounded-full mr-4">
                    <CoinIcon className="w-5 h-5 text-accent-yellow" />
                 </div>
                 <div>
                    <p className="font-semibold text-light-primary">{transaction.itemName}</p>
                    <p className="text-sm text-light-secondary">{transaction.timestamp}</p>
                 </div>
              </div>
              <p className="font-bold text-accent-green text-lg">+{transaction.coinValue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopkeeperAccountingScreen;
