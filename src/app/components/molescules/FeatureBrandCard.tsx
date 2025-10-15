import React from 'react';
import Link from 'next/link';
import LogoImage from "../atoms/logoImage";
import Heading from  "../atoms/heading";

interface FeatureBrandCardProps {
  logoSrc: string;
  name: string;
  description: string;
  href: string;
}

const FeatureBrandCard: React.FC<FeatureBrandCardProps> = ({ logoSrc, name, description, href }) => {
  return (
    <Link href={href} className="group block bg-zinc-900/60 border border-zinc-800 hover:border-[#00ff88] rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-900 shadow-lg hover:shadow-[0_0_20px_#00ff88]/40">
      <div className="flex justify-center mb-6">
        <LogoImage src={logoSrc} alt={name} size="medium" />
      </div>

      <Heading level="h3" variant="neon" className="text-center">
        {name}
      </Heading>

      <p className="text-gray-300 text-center mt-3 leading-relaxed"> {description} </p>
    </Link>
  );
};

export default FeatureBrandCard;
