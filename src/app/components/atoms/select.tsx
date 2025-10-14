import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
     id?: string;
}

const Select: React.FC<SelectProps> = ({ children, className = '', ...props }) => {
  const baseClasses = "w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition";

  return (
    <select
      {...props}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </select>
  );
};

export default Select;