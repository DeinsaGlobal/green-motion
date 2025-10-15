
import React from 'react';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'lead' | 'small'; // Diferentes tamaños o énfasis de texto
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ variant = 'body', className = '', children, ...props }) => {
  let baseClasses = "text-gray-300"; // Color por defecto para texto en fondo oscuro

  switch (variant) {
    case 'body':
      baseClasses = "text-base text-gray-300"; // Texto de cuerpo estándar
      break;
    case 'lead':
      baseClasses = "text-lg text-gray-400"; // Texto más grande para introducciones (como en el Header)
      break;
    case 'small':
      baseClasses = "text-sm text-gray-500"; // Texto más pequeño para notas o descripciones secundarias
      break;
  }

  // Usamos una etiqueta <p> por defecto, pero se puede extender para usar <span> si es necesario
  return (
    <p className={`${baseClasses} ${className}`} {...props}>
      {children}
    </p>
  );
};

export default Text;