
import React, { ReactNode } from 'react';

interface RoleSelectionCardProps {
  role: string;
  description: string;
  accentClass: string;
  icon: ReactNode;
  onClick: () => void;
}

const RoleSelectionCard: React.FC<RoleSelectionCardProps> = ({ role, description, accentClass, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-6 text-left transition-all transform bg-dark-secondary rounded-2xl shadow-lg border border-dark-tertiary hover:border-light-secondary/50 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-opacity-50 ${accentClass}`}
    >
      <div className={`flex items-center mb-3 ${accentClass}`}>
        {icon}
        <h3 className="ml-4 text-2xl font-bold text-light-primary">{role}</h3>
      </div>
      <p className="text-light-secondary">{description}</p>
    </button>
  );
};

export default RoleSelectionCard;
