import React from 'react';

interface IconTextItemProps {
  icon: React.ReactNode; 
  title: string;
  content: React.ReactNode; // Valor o lista de <p>
  variant: 'spec' | 'info'; // 'spec' para C1, 'info' para C2
}

const IconTextItem: React.FC<IconTextItemProps> = ({ icon, title, content, variant }) => {
  if (variant === 'spec') {
    // Usado en Especificaciones Técnicas (del Componente 1)
    return (
      <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-[#00ff88]/30 transition-all">
        {icon && <div className="text-3xl">{icon}</div>}
        <div>
          <div className="text-sm text-gray-500">{title}</div> {/* title es el label */}
          <div className="text-lg font-bold text-white">{content}</div> {/* content es el value */}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4">
      {/* Contenedor del ícono */}
      <div className="w-12 h-12 bg-[#00764e] rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        {content}
      </div>
    </div>
  );
};

export default IconTextItem;