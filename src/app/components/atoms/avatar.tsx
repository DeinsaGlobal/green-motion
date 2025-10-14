import React from 'react';
import Image from 'next/image'; 

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'default'
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, className = '' }) => {

  const sizeValue = 96; 
  
   return (
      <Image 
      src={src} 
      alt={alt}
      width={sizeValue} 
      height={sizeValue} 
      className={`w-24 h-24 rounded-full mx-auto mb-6 object-cover ${className}`} />
  );
};

export default Avatar;