
import React, { useContext, useState } from 'react';
import { AppContext, AppScreen } from '../types';
import Header from '../components/Header';
import Modal from '../components/Modal';
import QRScanner from '../components/QRScanner';
import { CollectionIcon, LedgerIcon } from '../constants';

const ShopkeeperScreen: React.FC = () => {
  const context = useContext(AppContext);
  const [isScannerOpen, setScannerOpen] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [lastScannedItem, setLastScannedItem] = useState({ itemName: '', coinValue: 0 });

  const handleScanSuccess = (scannedItem: { itemName: string; coinValue: number }) => {
    setLastScannedItem(scannedItem);
    context?.addItems(1); 
    context?.awardCoins(scannedItem.coinValue);
    setScannerOpen(false);
    setConfirmationModalOpen(true);
  };

  return (
    <div className="animate-slide-in-up">
      <Header title="Shopkeeper Portal" backScreen={AppScreen.HOME}/>

      <div className="p-6 mb-6 text-center bg-dark-secondary rounded-2xl shadow-xl border border-dark-tertiary">
        <p className="text-base text-light-secondary">Items Collected Today</p>
        <div className="flex items-center justify-center my-2">
           <CollectionIcon className="h-10 w-10 text-accent-blue"/>
          <p className="ml-3 text-5xl font-bold text-light-primary">{context?.shopItemsCollected}</p>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => setScannerOpen(true)}
          className="w-full py-4 text-lg font-bold text-white transition-transform transform bg-accent-blue rounded-xl shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-blue/50"
        >
          Scan Customer's Item
        </button>
        <button
          onClick={() => context?.navigate(AppScreen.SHOPKEEPER_ACCOUNTING)}
          className="w-full flex items-center justify-center p-4 text-lg font-semibold text-light-primary transition-colors bg-dark-secondary rounded-xl shadow-lg hover:bg-dark-tertiary border border-dark-tertiary focus:outline-none focus:ring-4 focus:ring-gray-500/50"
        >
          <LedgerIcon />
          <span className="ml-3">View Ledger</span>
        </button>
      </div>


      <Modal isOpen={isScannerOpen} onClose={() => setScannerOpen(false)}>
        <QRScanner onScanSuccess={handleScanSuccess} onClose={() => setScannerOpen(false)} />
      </Modal>

      <Modal isOpen={isConfirmationModalOpen} onClose={() => setConfirmationModalOpen(false)}>
        <div className="text-center">
            <div className="flex justify-center mb-4">
               <CheckCircleIcon />
            </div>
            <h2 className="text-3xl font-bold text-light-primary">Item Confirmed!</h2>
            <p className="text-lg text-light-secondary mt-2">
                Awarded <span className="font-bold text-accent-yellow">{lastScannedItem.coinValue} coins</span> for a {lastScannedItem.itemName}.
            </p>
            <button onClick={() => setConfirmationModalOpen(false)} className="mt-6 bg-accent-blue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-400 transition-colors w-full">
                Continue
            </button>
        </div>
      </Modal>
    </div>
  );
};

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export default ShopkeeperScreen;
