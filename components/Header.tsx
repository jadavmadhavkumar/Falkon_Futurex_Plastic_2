
import React, { useContext } from 'react';
import { AppContext, AppScreen } from '../types';
import { BackIcon } from '../constants';

interface HeaderProps {
  title: string;
  backScreen?: AppScreen | null;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack, backScreen = AppScreen.HOME }) => {
  const context = useContext(AppContext);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if(backScreen) {
      context?.navigate(backScreen);
    }
  };

  return (
    <header className="relative flex items-center justify-center py-4 mb-4">
      {backScreen !== null && (
        <button 
          onClick={handleBack} 
          className="absolute left-0 p-2 text-light-secondary transition-colors rounded-full hover:bg-dark-secondary hover:text-light-primary"
          aria-label="Go back"
        >
          <BackIcon />
        </button>
      )}
      <h1 className="text-xl font-semibold text-center text-light-primary">{title}</h1>
    </header>
  );
};

export default Header;
