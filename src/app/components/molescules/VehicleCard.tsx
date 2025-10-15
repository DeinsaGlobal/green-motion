import React from 'react';
import Image from 'next/image';
import Heading from "../atoms/heading";
import KeyValueItem from "../atoms/keyValueItem";
import Button from "../atoms/button";

interface VehicleCardProps {
  image: string;
  name: string;
  specs: {
    range: string;
    acceleration: string;
    speed: string;
  };
}

const VehicleCard: React.FC<VehicleCardProps> = ({ image, name, specs }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden p-6 flex flex-col items-center gap-4 shadow-lg hover:shadow-[#47ba41]/30 transition-all duration-300">
      <div className="relative w-full h-56">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>

      <Heading level="h3" variant="modern">
        {name}
      </Heading>

      <div className="w-full space-y-2">
        <KeyValueItem label="Autonomía" value={`${specs.range} km`} />
        <KeyValueItem label="Aceleración" value={`${specs.acceleration}`} />
        <KeyValueItem label="Velocidad Máx." value={`${specs.speed}`} />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
        <Button variant="modern-secondary">Ver Detalles</Button>
        <Button variant="modern-primary">Cotizar</Button>
      </div>
    </div>
  );
};

export default VehicleCard;
