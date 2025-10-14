import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ className = '', ...props }) => {
  const baseClasses = "w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition resize-none";
  
  return (
    <textarea
      {...props}
      className={`${baseClasses} ${className}`}
    />
  );
};

export default TextArea;