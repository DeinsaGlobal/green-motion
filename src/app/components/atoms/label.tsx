import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({ children, required = false, className = '', ...props }) => {
  const baseClasses = "block text-gray-300 mb-2";
  
  return (
    <label {...props} className={`${baseClasses} ${className}`}>
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;