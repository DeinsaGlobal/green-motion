import React from 'react';

interface ColorBulletProps {
  color?: 'primary';
  className?: string;
}

const ColorBullet: React.FC<ColorBulletProps> = ({ className = '' }) => {
  return (
    <span className={`w-2 h-2 bg-[#47ba41] rounded-full mr-3 ${className}`}></span>
  );
};

export default ColorBullet