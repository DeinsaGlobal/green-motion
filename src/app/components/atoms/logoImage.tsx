import React from 'react';
import Image from 'next/image'; 

interface LogoImageProps {
  src: string;
  alt: string;
  size: 'small' | 'medium'; // 'small' para Otras Marcas (h-12), 'medium' para Destacadas (h-16)
  className?: string;
}

const LogoImage: React.FC<LogoImageProps> = ({ src, alt, size, className = '' }) => {
  // Clases CSS para el alto
  const sizeClasses = size === 'medium' ? 'h-16' : 'h-12';

  let width = 120;
  let height = 60; 

  if (size === 'medium') {
    width = 160; // Para h-16 (aprox.)
    height = 80;
  }
  // Si es 'small', se queda con 120x60 (para h-12 aprox.)

  // Clases comunes de interactividad: grayscale y hover
  const interactionClasses = "w-auto mx-auto grayscale group-hover:grayscale-0 transition-all duration-300 object-contain";
  
  return (
    // Es vital que el elemento padre (molécula o contenedor) tenga la clase 'group' 
    // para que group-hover funcione, pero el átomo solo aplica las clases.
    <Image
      src={src} 
      alt={alt}
      width={width}
      height={height} 
      // Combinamos las clases de tamaño y las de interacción
      className={`${sizeClasses} ${interactionClasses} ${className}`}
    />
  );
};

export default LogoImage;