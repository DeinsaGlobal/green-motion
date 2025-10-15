'use client';
import React from "react";
import Link from "next/link";
import LogoImage from "../atoms/logoImage";
import NavigationIcon from "../atoms/navigationIcon";


interface SecondaryBrandCardProps {
  logoSrc: string;
  name: string;
  href: string;
}

const SecondaryBrandCard: React.FC<SecondaryBrandCardProps> = ({ logoSrc, name, href }) => {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 
      p-4 rounded-xl transition-all duration-300 border border-zinc-800 hover:border-[#47ba41]"
    >
      {/* Sección izquierda: Logo + Nombre */}
      <div className="flex items-center gap-3">
        <LogoImage src={logoSrc} alt={name} size="small" />
        <span className="text-white text-lg font-semibold group-hover:text-[#47ba41] transition-colors">
          {name}
        </span>
      </div>

      {/* Ícono de navegación */}
      <NavigationIcon className="text-gray-500 group-hover:text-[#47ba41] transition-colors" />
    </Link>
  );
};

export default SecondaryBrandCard;
