import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, className = '' }) => {
  return (
    <div className={`bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 ${className}`}>
      {/* El valor usa el color primario verde y fuente grande */}
      <h3 className="text-3xl font-bold text-[#47ba41] mb-2">{value}</h3>
      {/* La etiqueta usa el texto gris claro */}
      <p className="text-gray-300">{label}</p>
    </div>
  );
};

export default StatCard