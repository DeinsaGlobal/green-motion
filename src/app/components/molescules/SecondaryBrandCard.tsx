import React from 'react';
import Link from 'next/link';
import LogoImage from "../atoms/logoImage";
import NavigationIcon from "../atoms/navigationIcon";

interface BrandCardProps {
  logoSrc: string;
  name: string;
  href: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ logoSrc, name, href }) => {
  return (
    <Link href={href} className="group flex items-center justify-between bg-zinc-900/60 border border-zinc-800 hover:border-[#00ff88] rounded-xl px-6 py-4 transition-all duration-300 hover:bg-zinc-900 shadow-md hover:shadow-[0_0_15px_#00ff88]/30">
      <div className="flex items-center gap-4">
        <LogoImage src={logoSrc} alt={name} size="small" />
        <span className="text-white text-lg font-semibold tracking-wide group-hover:text-[#00ff88] transition-colors"> {name} </span>
      </div>

      <NavigationIcon />
    </Link>
  );
};

export default BrandCard;
