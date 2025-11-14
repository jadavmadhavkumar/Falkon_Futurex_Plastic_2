
import React, { useEffect, useState } from 'react';
import { RECYCLABLE_ITEMS } from '../constants';

interface QRScannerProps {
  onScanSuccess: (scannedItem: { itemName: string; coinValue: number }) => void;
  onClose: () => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScanSuccess, onClose }) => {
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
        setScanProgress(prev => Math.min(prev + 1, 100));
    }, 30);
    
    const scanTimeout = setTimeout(() => {
      clearInterval(progressInterval);
      const randomItem = RECYCLABLE_ITEMS[Math.floor(Math.random() * RECYCLABLE_ITEMS.length)];
      onScanSuccess({ itemName: randomItem.name, coinValue: randomItem.coinValue });
    }, 3000);

    return () => {
      clearTimeout(scanTimeout);
      clearInterval(progressInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScanSuccess]);

  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold text-light-primary mb-4">Scanning QR Code</h2>
      <p className="text-light-secondary mb-6">Align the QR code within the frame.</p>
      
      <div className="relative w-64 h-64 bg-dark-primary rounded-lg overflow-hidden border-4 border-dark-tertiary p-4">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{backgroundImage: 'url(https://picsum.photos/seed/camera/300/300)'}}
        ></div>

        <div className="absolute top-0 left-0 w-full h-1 bg-accent-green shadow-[0_0_15px_5px_rgba(52,211,153,0.5)] animate-pulse" style={{ transform: `translateY(${scanProgress * 2.5}px)` }}></div>
        
        <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-accent-green"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-accent-green"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-accent-green"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-accent-green"></div>
      </div>

      <div className="w-full bg-dark-tertiary rounded-full h-2.5 mt-8">
        <div className="bg-accent-green h-2.5 rounded-full" style={{ width: `${scanProgress}%` }}></div>
      </div>
      <p className="mt-2 text-sm text-light-secondary">{scanProgress}%</p>

      <button onClick={onClose} className="mt-6 bg-dark-tertiary text-light-primary font-bold py-2 px-6 rounded-full hover:bg-gray-600 transition-colors">
        Cancel
      </button>
    </div>
  );
};

export default QRScanner;
