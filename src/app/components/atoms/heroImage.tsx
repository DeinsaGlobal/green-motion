import Image from 'next/image';
import React from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return (
    <>
      <Image 
        src={src} 
        alt={alt}
        fill
        className="object-cover" // Estilos para cubrir todo el contenedor
        priority
        quality={90}
        sizes="100vw"
      />
      {/* Overlay de oscuridad */}
      <div className="absolute inset-0 bg-black/60"></div>
    </>
  );
};

export default HeroImage;