import React, { useContext } from 'react';
import RoleSelectionCard from '../components/RoleSelectionCard';
import { ROLES } from '../constants';
import { AppContext, AppScreen, Role } from '../types';

const HomeScreen: React.FC = () => {
  const context = useContext(AppContext);

  const handleRoleSelect = (role: Role) => {
    switch (role) {
      case Role.USER:
        context?.navigate(AppScreen.USER);
        break;
      case Role.SHOPKEEPER:
        context?.navigate(AppScreen.SHOPKEEPER);
        break;
      case Role.DISTRIBUTOR:
        context?.navigate(AppScreen.DISTRIBUTOR);
        break;
      case Role.MUNICIPAL:
        context?.navigate(AppScreen.MUNICIPAL);
        break;
    }
  };

  const roleAccentClasses = {
    [Role.USER]: 'text-accent-green focus:ring-accent-green',
    [Role.SHOPKEEPER]: 'text-accent-blue focus:ring-accent-blue',
    [Role.DISTRIBUTOR]: 'text-accent-yellow focus:ring-accent-yellow',
    [Role.MUNICIPAL]: 'text-accent-purple focus:ring-accent-purple',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] animate-fade-in">
      <header className="text-center mb-12">
        <h2 className="text-lg font-medium text-light-secondary">Welcome to</h2>
        <h1 className="text-5xl font-extrabold text-light-primary mt-1">
          EcoCoin
        </h1>
        <p className="text-lg text-light-secondary mt-6">Who are you today?</p>
      </header>
      
      <div className="w-full space-y-4">
        {ROLES.map((roleInfo) => (
          <RoleSelectionCard
            key={roleInfo.role}
            role={roleInfo.role}
            description={roleInfo.description}
            accentClass={roleAccentClasses[roleInfo.role]}
            icon={roleInfo.icon}
            onClick={() => handleRoleSelect(roleInfo.role)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;