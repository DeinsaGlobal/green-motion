import React from 'react';

interface KeyValueItemProps {
  label: string;
  value: React.ReactNode;
  valueColor?: 'default' | 'primary'; // default es blanco, primary es el verde [#47ba41]
  showDivider?: boolean;
}

const KeyValueItem: React.FC<KeyValueItemProps> = ({ label, value, valueColor = 'default', showDivider = false }) => {
  const dividerClasses = showDivider ? 'border-b border-gray-700 pb-2' : '';
  const valueClasses = valueColor === 'primary' ? 'text-[#47ba41] font-bold' : 'text-white';
  
  return (
    <div className={`flex justify-between ${dividerClasses}`}>
      <span className="text-gray-400">{label}:</span>
      <span className={valueClasses}>{value}</span>
    </div>
  );
};

export default KeyValueItem;