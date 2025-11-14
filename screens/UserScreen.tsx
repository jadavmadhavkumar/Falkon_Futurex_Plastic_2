
import React, { useContext, useState } from 'react';
import { AppContext, AppScreen } from '../types';
import Header from '../components/Header';
import Modal from '../components/Modal';
import QRScanner from '../components/QRScanner';
import { CoinIcon, ChatIcon, CameraIcon } from '../constants';

const UserScreen: React.FC = () => {
  const context = useContext(AppContext);
  const [isScannerOpen, setScannerOpen] = useState(false);
  const [isRewardModalOpen, setRewardModalOpen] = useState(false);
  const [lastReward, setLastReward] = useState({ itemName: '', coinValue: 0 });

  const handleScanSuccess = (scannedItem: { itemName: string; coinValue: number }) => {
    setLastReward(scannedItem);
    context?.addCoins(scannedItem.coinValue);
    setScannerOpen(false);
    setRewardModalOpen(true);
  };

  const FeatureButton: React.FC<{ onClick: () => void; text: string; icon: React.ReactNode; }> = ({ onClick, text, icon }) => (
    <button onClick={onClick} className="flex flex-col items-center justify-center p-4 text-center transition bg-dark-secondary rounded-2xl hover:bg-dark-tertiary border border-dark-tertiary">
        <div className="p-3 mb-2 rounded-full bg-dark-primary">
          {icon}
        </div>
        <span className="font-semibold text-sm text-light-primary">{text}</span>
    </button>
  );

  return (
    <div className="animate-slide-in-up">
      <Header title="User Dashboard" backScreen={AppScreen.HOME}/>

      <div className="p-6 mb-6 text-center bg-dark-secondary rounded-2xl shadow-xl border border-dark-tertiary">
        <p className="text-base text-light-secondary">Your Coin Balance</p>
        <div className="flex items-center justify-center my-2">
          <CoinIcon className="w-10 h-10 text-accent-yellow" />
          <p className="ml-3 text-5xl font-bold text-light-primary">{context?.userCoins}</p>
        </div>
      </div>

      <div className="space-y-6">
        <button onClick={() => setScannerOpen(true)} className="w-full py-4 text-lg font-bold text-dark-primary transition-transform transform bg-accent-green rounded-xl shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-green/50">
            Scan & Earn Coins
        </button>

        <div className="grid grid-cols-2 gap-4">
            <FeatureButton 
                onClick={() => context?.navigate(AppScreen.BIN_MAP)}
                text="Find Bins" 
                icon={<MapIcon />} 
            />
            <FeatureButton 
                onClick={() => context?.navigate(AppScreen.RECYCLABLE_ITEMS)}
                text="Item List" 
                icon={<ListIcon />} 
            />
            <FeatureButton 
                onClick={() => context?.navigate(AppScreen.CHATBOT)}
                text="Eco Chatbot" 
                icon={<ChatIcon />} 
            />
            <FeatureButton 
                onClick={() => context?.navigate(AppScreen.IMAGE_ANALYSIS)}
                text="Analyze Item" 
                icon={<CameraIcon />} 
            />
        </div>

         <div className="p-6 bg-dark-secondary rounded-2xl border border-dark-tertiary">
            <h3 className="text-xl font-bold mb-1">Redeem Coins</h3>
            <p className="text-light-secondary mb-4 text-sm">Use your EcoCoins at partner shops for rewards.</p>
            <div className="grid grid-cols-3 gap-4 items-center">
                <img src="https://picsum.photos/seed/brand1/100" alt="Partner Logo 1" className="h-10 w-auto mx-auto grayscale opacity-50" />
                <img src="https://picsum.photos/seed/brand2/100" alt="Partner Logo 2" className="h-10 w-auto mx-auto grayscale opacity-50" />
                <img src="https://picsum.photos/seed/brand3/100" alt="Partner Logo 3" className="h-10 w-auto mx-auto grayscale opacity-50" />
            </div>
        </div>
      </div>

      <Modal isOpen={isScannerOpen} onClose={() => setScannerOpen(false)}>
        <QRScanner onScanSuccess={handleScanSuccess} onClose={() => setScannerOpen(false)} />
      </Modal>

      <Modal isOpen={isRewardModalOpen} onClose={() => setRewardModalOpen(false)}>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <CoinIcon className="w-24 h-24 text-accent-yellow animate-coin-drop" />
          </div>
          <h2 className="text-3xl font-bold text-light-primary">Success!</h2>
          <p className="text-lg text-light-secondary mt-2">
            You earned <span className="font-bold text-accent-yellow">{lastReward.coinValue} coins</span> for a {lastReward.itemName}.
          </p>
          <button onClick={() => setRewardModalOpen(false)} className="mt-6 bg-accent-green text-dark-primary font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-colors w-full">
            Awesome!
          </button>
        </div>
      </Modal>
    </div>
  );
};


const MapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 13V7m6 10V7" />
    </svg>
);
const ListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
);


export default UserScreen;
