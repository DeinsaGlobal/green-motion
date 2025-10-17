// components/molecules/StatBlock.tsx
import React from 'react';
import StatCard from '../atoms/statCard'; // Átomo que muestra el valor y la etiqueta de la estadística

// Definición de la estructura de datos que espera la Molécula
interface StatData {
  value: string; // El número o métrica principal (ej: '5.2s')
  label: string; // La descripción (ej: '0-100 km/h')
}

interface StatBlockProps {
  stats: StatData[]; // Array de estadísticas (el flujo principal de datos)
}

const StatBlock: React.FC<StatBlockProps> = ({ stats }) => {
  return (
    // Contenedor que define la estructura de grilla para 2 o 4 columnas
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      
      {/* Mapeo del array de datos para crear las tarjetas individuales */}
      {stats.map((stat, index) => (
        <StatCard 
          key={index} 
          // 👈 Pasamos las props del objeto stat al átomo StatCard
          value={stat.value} 
          label={stat.label} 
        />
      ))}
    </div>
  );
};

export default StatBlock;