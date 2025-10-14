import React from 'react';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  variant?: 'neon' | 'modern' | 'simple'; 
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level, children, variant = 'simple', className = '' }) => {
  const Tag = level;
  let baseClasses = "font-bold text-white";

  switch (level) {
    case 'h1': baseClasses += " text-5xl md:text-7xl font-black mb-6"; break;
    case 'h2': baseClasses += " text-3xl mb-4"; break;
    case 'h3': baseClasses += " text-2xl mb-6"; break;
  }

  if (variant === 'neon') {
    baseClasses += " bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent";
  } else if (variant === 'modern') {
    baseClasses += " bg-gradient-to-r from-[#00764e] to-[#47ba41] bg-clip-text text-transparent";
  }
  // Nota: Para el h1 de Contacto, se necesitará un wrapper simple para el texto del span.
  return (
    <Tag className={`${baseClasses} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;