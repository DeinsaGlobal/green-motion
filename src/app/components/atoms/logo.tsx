import Link from "next/link";
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative">
        {/* Fondo con blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
        {/* Ícono de Rayo (SVG) */}
        <div className="relative w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-xl flex items-center justify-center">
          <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
      {/* Texto del Logotipo */}
      <span className="text-3xl font-black bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#b744ff] bg-clip-text text-transparent neon-text">
        GREEN MOTION
      </span>
    </Link>
  );
};

export default Logo;