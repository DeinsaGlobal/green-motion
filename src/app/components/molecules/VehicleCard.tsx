'use client';
import React from 'react';
import Image from 'next/image';
import Heading from "../atoms/heading";
import KeyValueItem from "../atoms/keyValueItem";
import Button from "../atoms/button";

interface VehicleSpecs {
  range: string;
  acceleration: string;
  topSpeed: string;
}

interface VehicleCardProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
  specs: VehicleSpecs;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ name, imageSrc, imageAlt, specs }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6 gap-4 hover:scale-[1.02] transition-transform duration-300">
      <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <Heading level="h3" variant="modern" className="mt-4">
        {name}
      </Heading>

      <div className="w-full flex flex-col gap-2 text-sm md:text-base">
        <KeyValueItem label="Autonomía" value={specs.range} valueColor="primary" showDivider />
        <KeyValueItem label="Aceleración" value={specs.acceleration} valueColor="primary" showDivider />
        <KeyValueItem label="Velocidad Máxima" value={specs.topSpeed} valueColor="primary" />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
        <Button variant="modern-secondary">Ver Detalles</Button>
        <Button variant="modern-primary">Cotizar</Button>
      </div>
    </div>
  );
};

export default VehicleCard;

