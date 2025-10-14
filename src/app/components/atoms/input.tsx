import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string; //  prop 'id' explícita
  placeholder?: string; // prop 'placeholder' explícita
}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  const baseClasses = "w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition";
  
  return (
    <input
      {...props}
      className={`${baseClasses} ${className}`}
    />
  );
};

export default Input;