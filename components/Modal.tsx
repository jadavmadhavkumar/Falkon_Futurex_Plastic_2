
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative p-6 m-4 bg-dark-secondary rounded-2xl shadow-2xl max-w-sm w-full animate-slide-in-up border border-dark-tertiary"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
