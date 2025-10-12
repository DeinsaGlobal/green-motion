"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const vehicles = [
  {
    id: 1,
    name: "Audi e-tron GT",
    brand: "Audi",
    price: "$104,900",
    range: "488 km",
    acceleration: "3.9s 0-100 km/h",
    topSpeed: "245 km/h",
    battery: "93.4 kWh",
    charging: "270 kW DC Fast Charging",
    image: "/Imagenes/Carros/Audi/Audi-1.JPG",
    description: "El Audi e-tron GT combina el diseño deportivo característico de Audi con la tecnología eléctrica más avanzada.",
    features: [
      "Quattro electric AWD",
      "Carga rápida 270 kW",
      "Interior Premium",
      "Matrix LED",
      "Sistema de sonido Bang & Olufsen",
      "Asistente de conducción"
    ],
    specifications: {
      potencia: "530 CV",
      torque: "640 Nm",
      peso: "2,350 kg",
      capacidad: "4 asientos",
      maletero: "405 L",
      ruedas: "19-21 pulgadas"
    }
  },
  {
    id: 2,
    name: "BMW i4 M50",
    brand: "BMW",
    price: "$72,900",
    range: "510 km",
    acceleration: "3.9s 0-100 km/h",
    topSpeed: "225 km/h",
    battery: "83.9 kWh",
    charging: "205 kW DC Fast Charging",
    image: "/Imagenes/Carros/BMW/BMW-1.JPG",
    description: "El BMW i4 M50 es un Gran Coupé totalmente eléctrico que ofrece el rendimiento M característico de BMW con cero emisiones.",
    features: [
      "M Sport Package",
      "xDrive AWD",
      "Curved Display",
      "Harman Kardon Sound",
      "Driving Assistant Pro",
      "Parking Assistant Plus"
    ],
    specifications: {
      potencia: "544 CV",
      torque: "795 Nm",
      peso: "2,290 kg",
      capacidad: "5 pasajeros",
      maletero: "470 L",
      ruedas: "19-20 pulgadas"
    }
  },
  {
    id: 3,
    name: "Honda e:Ny1",
    brand: "Honda",
    price: "$42,900",
    range: "412 km",
    acceleration: "7.6s 0-100 km/h",
    topSpeed: "160 km/h",
    battery: "68.8 kWh",
    charging: "78 kW DC Fast Charging",
    image: "/Imagenes/Carros/Honda/Honda-1.JPG",
    description: "El Honda e:Ny1 es un SUV eléctrico que combina el legendario espíritu de Honda con tecnología de vanguardia.",
    features: [
      "Honda SENSING 360",
      "Pantalla táctil 15.2",
      "Conectividad Honda+",
      "Asientos calefactados",
      "Wireless CarPlay/Android Auto",
      "Cámara multi-ángulo"
    ],
    specifications: {
      potencia: "204 CV",
      torque: "310 Nm",
      peso: "1,900 kg",
      capacidad: "5 pasajeros",
      maletero: "361 L",
      ruedas: "18-19 pulgadas"
    }
  },
  {
    id: 4,
    name: "KIA EV6 GT",
    brand: "KIA",
    price: "$62,900",
    range: "424 km",
    acceleration: "3.5s 0-100 km/h",
    topSpeed: "260 km/h",
    battery: "77.4 kWh",
    charging: "240 kW DC Fast Charging",
    image: "/Imagenes/Carros/KIA/KIA-1.JPG",
    description: "El KIA EV6 GT es un crossover eléctrico de alto rendimiento que redefine la movilidad sostenible.",
    features: [
      "Carga ultra-rápida 800V",
      "AWD GT Performance",
      "Augmented Reality HUD",
      "Meridian Premium Sound",
      "Highway Driving Assist 2",
      "Vehicle-to-Load (V2L)"
    ],
    specifications: {
      potencia: "585 CV",
      torque: "740 Nm",
      peso: "2,200 kg",
      capacidad: "5 pasajeros",
      maletero: "490 L",
      ruedas: "20-21 pulgadas"
    }
  },
  {
    id: 5,
    name: "Ford F-150 Lightning",
    brand: "Ford",
    price: "$55,974",
    range: "370 km",
    acceleration: "4.4s 0-100 km/h",
    topSpeed: "180 km/h",
    battery: "131 kWh",
    charging: "150 kW DC Fast Charging",
    image: "/Imagenes/Carros/Ford/Ford-1.JPG",
    description: "La pickup eléctrica más poderosa de Ford con capacidad de trabajo profesional.",
    features: [
      "Mega Power Frunk",
      "Pro Power Onboard",
      "Ford Co-Pilot360",
      "Ford SYNC 4A",
      "Tracción 4x4 eléctrica",
      "Remolque hasta 4,500 kg"
    ],
    specifications: {
      potencia: "563 CV",
      torque: "1,050 Nm",
      peso: "3,000 kg",
      capacidad: "5 pasajeros",
      maletero: "400 L (frunk)",
      ruedas: "18-22 pulgadas"
    }
  }
];

export default function VehicleDetailPage() {
  const params = useParams();
  const vehicleId = parseInt(params.id as string);
  const vehicle = vehicles.find(v => v.id === vehicleId);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Vehículo no encontrado</h1>
          <Link href="/marcas" className="modern-button text-white px-6 py-3 rounded-lg font-semibold">
            Ver Marcas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 border-b border-[#00764e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-20 w-full">
            <div className="flex justify-start">
              <Link href="/" className="flex items-center gap-3">
                <Image 
                  src="/Imagenes/Logo.png" 
                  alt="Green Motion" 
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain drop-shadow-md"
                  priority
                />
              </Link>
            </div>
            
            <div className="hidden md:flex gap-8 items-center justify-center">
              <Link href="/" className="text-[#D1D5DB] hover:text-white transition">Inicio</Link>
              <Link href="/marcas" className="text-[#D1D5DB] hover:text-white transition">Marcas</Link>
              <Link href="/nosotros" className="text-[#D1D5DB] hover:text-white transition">Nosotros</Link>
              <Link href="/contacto" className="text-[#D1D5DB] hover:text-white transition">Contacto</Link>
            </div>
            
            <div className="flex justify-end">
              <Link href="/contacto" className="modern-button text-white px-6 py-3 rounded-lg font-semibold modern-glow">
                Cotizar
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="pt-20 relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src={vehicle.image} 
            alt={vehicle.name}
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-4 text-white">
                  {vehicle.name}
                </h1>
                <p className="text-2xl text-[#47ba41] font-bold mb-6">{vehicle.price}</p>
                <p className="text-xl text-gray-300 mb-8">{vehicle.description}</p>
                <div className="flex gap-4">
                  <Link href="/contacto" className="modern-button text-white px-8 py-4 rounded-lg font-bold text-lg">
                    Solicitar Cotización
                  </Link>
                  <Link href="/contacto" className="modern-outline px-8 py-4 rounded-lg font-semibold text-lg">
                    Agendar Test Drive
                  </Link>
                </div>
              </div>
              
              <div className="bg-black/70 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Especificaciones Clave</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Autonomía:</span>
                    <span className="text-white font-semibold">{vehicle.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">0-60 mph:</span>
                    <span className="text-white font-semibold">{vehicle.acceleration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Vel. Máxima:</span>
                    <span className="text-white font-semibold">{vehicle.topSpeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Batería:</span>
                    <span className="text-white font-semibold">{vehicle.battery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Carga:</span>
                    <span className="text-white font-semibold">{vehicle.charging}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Características Destacadas</h3>
              <ul className="space-y-3">
                {vehicle.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#47ba41] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Especificaciones Técnicas</h3>
              <div className="space-y-4">
                {Object.entries(vehicle.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400 capitalize">{key}:</span>
                    <span className="text-white font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
