import Link from "next/link";
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  variant: 'neon' | 'dark'; // 'neon' para C1, 'dark' para C2
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, active = false, variant }) => {
  const baseClasses = "transition";
  let variantClasses = "";
  
  if (variant === 'neon') {
    // Estilos del Componente 1 ('Volver al inicio')
    variantClasses = "text-[#00ff88] hover:underline hover:text-[#00d4ff]";
  } else if (variant === 'dark') {
    // Estilos del Componente 2 (Links del Header)
    variantClasses = active ? "text-white font-semibold" : "text-[#D1D5DB] hover:text-white";
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
};

export default NavLink;