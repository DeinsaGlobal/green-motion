// components/molecules/KeySpecCard.tsx
import React from 'react';
import KeyValueItem from '../atoms/keyValueItem'; // Átomo de Par Clave-Valor
import Heading from '../atoms/heading';           // Átomo para el Título del Bloque

// Estructura de las especificaciones (los datos que le pasamos a la molécula)
interface Spec {
  label: string;
  value: string;
  isPrimary?: boolean; // Para destacar el valor (e.g., el precio, que debería ser verde)
}

interface KeySpecCardProps {
  title: string;
  specs: Spec[]; // Array de especificaciones a mostrar
}

const KeySpecCard: React.FC<KeySpecCardProps> = ({ title, specs }) => {
  return (
    // Estilos del contenedor: fondo negro semitransparente con efecto de desenfoque
    <div className="bg-black/70 backdrop-blur-sm rounded-xl p-8">
      
      {/* 1. Título del Bloque (Átomo Heading.tsx) */}
      <Heading level="h3" className="text-2xl font-bold text-white mb-6">
        {title}
      </Heading>
      
      {/* 2. Lista de Especificaciones (Agrupando KeyValueItem.tsx) */}
      <div className="space-y-4">
        {/* Mapeamos el array de specs que se le pasa a la molécula */}
        {specs.map((spec, index) => (
          <KeyValueItem 
            key={index} 
            label={spec.label} 
            value={spec.value} 
            // Usa la prop isPrimary para aplicar el color verde (primary) o blanco (default)
            valueColor={spec.isPrimary ? 'primary' : 'default'} 
          />
        ))}
      </div>
    </div>
  );
};

export default KeySpecCard;