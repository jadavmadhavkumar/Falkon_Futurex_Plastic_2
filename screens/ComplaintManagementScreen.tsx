import React from 'react';
import Header from '../components/Header';
import { AppScreen, Complaint } from '../types';
import { MOCK_COMPLAINTS } from '../constants';

const ComplaintManagementScreen: React.FC = () => {

  const getStatusClasses = (status: Complaint['status']) => {
    switch (status) {
      case 'New': return 'border-accent-yellow text-accent-yellow';
      case 'In Progress': return 'border-accent-blue text-accent-blue';
      case 'Resolved': return 'border-accent-green text-accent-green';
    }
  };

  return (
    <div className="animate-slide-in-up">
      <Header title="Complaint Management" backScreen={AppScreen.MUNICIPAL} />
      
      <div className="bg-dark-secondary p-4 rounded-2xl border border-dark-tertiary">
        <h3 className="text-xl font-bold text-light-primary mb-4">Citizen Complaints</h3>
        <div className="space-y-4">
          {MOCK_COMPLAINTS.map((complaint) => (
            <div key={complaint.id} className="bg-dark-primary p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-light-primary">{complaint.issue}</p>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${getStatusClasses(complaint.status)}`}>
                        {complaint.status}
                    </span>
                </div>
                <p className="text-sm text-light-secondary">Reported by {complaint.user} • {complaint.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplaintManagementScreen;
