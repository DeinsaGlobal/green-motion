import React from 'react';

interface IconCircleProps {
  children: React.ReactNode; // El ícono (SVG)
  color?: 'primary' | 'secondary'; // primary es el verde oscuro
  size?: 'default';
  className?: string;
}

const IconCircle: React.FC<IconCircleProps> = ({ children, color = 'primary', className = '' }) => {
  const colorClasses = color === 'primary' ? 'bg-[#00764e]' : 'bg-white'; // Usamos el verde oscuro

  return (
    <div className={`w-16 h-16 ${colorClasses} rounded-full flex items-center justify-center mx-auto mb-6 ${className}`}>
      {/* El SVG dentro */}
      <div className="w-8 h-8 text-white">
        {children}
      </div>
    </div>
  );
};

export default IconCircle;