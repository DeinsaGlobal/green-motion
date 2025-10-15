"use client";

import React from "react";
import Link from "next/link";
import LogoImage from "../atoms/logoImage";
import Heading from "../atoms/heading";
import Text from "../atoms/text";

interface FeaturedBrandCardProps {
  logoSrc: string;
  name: string;
  description: string;
  href: string;
}

const FeaturedBrandCard: React.FC<FeaturedBrandCardProps> = ({
  logoSrc,
  name,
  description,
  href,
}) => {
  return (
    <Link
      href={href}
      className="group block bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-[#47ba41]
                 rounded-2xl p-8 transition-all duration-300 transform hover:scale-[1.02]"
    >
      <div className="flex justify-center mb-6">
        <LogoImage src={logoSrc} alt={name} size="medium" />
      </div>

      <Heading level="h3" variant="modern" className="text-center mb-3">
        {name}
      </Heading>

      <Text variant="body" className="text-center text-gray-400">
        {description}
      </Text>
    </Link>
  );
};

export default FeaturedBrandCard;
