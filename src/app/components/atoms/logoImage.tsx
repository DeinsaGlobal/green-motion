import React from 'react';
import Image from 'next/image'; 

interface LogoImageProps {
  src: string;
  alt: string;
  size: 'small' | 'medium'; 
  className?: string;
}

const LogoImage: React.FC<LogoImageProps> = ({ src, alt, size, className = '' }) => {
  const sizeClasses = size === 'medium' ? 'h-16' : 'h-12';

  let width = 120;
  let height = 60; 

  if (size === 'medium') {
    width = 160; 
    height = 80;
  }
  
  const interactionClasses = "w-auto mx-auto grayscale group-hover:grayscale-0 transition-all duration-300 object-contain";
  
  return (
   
    <Image src={src} alt={alt} width={width} height={height} 
      className={`${sizeClasses} ${interactionClasses} ${className}`}
    />
  );
};

export default LogoImage;