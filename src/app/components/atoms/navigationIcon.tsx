import React from 'react';

interface NavigationIconProps {
  className?: string;
}

const NavigationIcon: React.FC<NavigationIconProps> = ({ className = '' }) => {
  return (
    <svg 
      className={`w-5 h-5 text-gray-400 group-hover:text-white transition ${className}`} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      {/* Ícono de flecha derecha */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
};

export default NavigationIcon;