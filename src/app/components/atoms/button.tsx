import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'neon-primary' | 'neon-secondary' | 'modern-primary' | 'tertiary' | 'modern-secondary' | "white-primary" | "white-secondary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  let baseClasses = "w-full py-4 rounded-xl font-bold transition-all duration-300";
  let variantClasses = "";
  const CtaBaseClasses = "w-full px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"; 
  if (variant === 'neon-primary') {
    // Estilos del Componente 1 (Cotizar Ahora)
    return (
      <button {...props} className="relative group w-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black text-lg hover:scale-105 transition-transform w-full py-4 rounded-xl font-bold">
          {children}
        </div>
      </button>
    );
  } 

  switch (variant) {
    case 'neon-secondary':
      // Estilos del Componente 1 (Agendar Test Drive)
      variantClasses = "border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88]/10";
      break;
    case 'modern-primary':
      // Estilos del Componente 2 (Enviar Solicitud / Botón Cotizar del Header)
       baseClasses = "w-full text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-[1.02]"
      variantClasses = "modern-button text-white px-8 modern-glow hover:scale-[1.02] text-lg"; 
      break;
    case 'tertiary':
      // Estilos del Componente 1 (Descargar Brochure)
      variantClasses = "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800";
      break;
    case 'modern-secondary':
      // Nuevo estilo para el botón de borde (modern-outline)
      baseClasses = "w-full text-white px-4 py-2 rounded-lg font-semibold text-center transition-all duration-300";
      variantClasses = "border border-[#00764e] text-white hover:bg-[#00764e]/20";
      break;  
      case 'white-primary':
        // Botón 1: Fondo blanco, Texto verde
        baseClasses = CtaBaseClasses;
        variantClasses = "bg-white text-[#00764e] hover:bg-gray-100";
        break;

    case 'white-secondary':
        // Botón 2: Borde blanco, hover a fondo blanco
        baseClasses = CtaBaseClasses;
        variantClasses = "border-2 border-white text-white hover:bg-white hover:text-[#00764e]";
        break;
  }

  return (
    <button {...props} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
};

export default Button;