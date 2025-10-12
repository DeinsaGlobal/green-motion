"use client";

import Link from "next/link";

const teslaVehicles = [
  {
    id: 1,
    name: "Tesla Model S",
    price: "$89,990",
    range: "405 millas",
    acceleration: "3.1s 0-60 mph",
    topSpeed: "200 mph",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
    description: "El sedán eléctrico de lujo más avanzado del mundo."
  },
  {
    id: 2,
    name: "Tesla Model 3",
    price: "$38,990",
    range: "358 millas",
    acceleration: "4.2s 0-60 mph",
    topSpeed: "162 mph",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
    description: "El vehículo eléctrico más vendido del mundo."
  },
  {
    id: 3,
    name: "Tesla Model X",
    price: "$99,990",
    range: "348 millas",
    acceleration: "3.8s 0-60 mph",
    topSpeed: "155 mph",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
    description: "SUV eléctrico con puertas Falcon Wing únicas."
  },
  {
    id: 4,
    name: "Tesla Model Y",
    price: "$47,740",
    range: "330 millas",
    acceleration: "4.8s 0-60 mph",
    topSpeed: "135 mph",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
    description: "SUV compacto eléctrico perfecto para familias."
  }
];

export default function TeslaPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 border-b border-[#00764e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-20 w-full">
            <div className="flex justify-start">
              <Link href="/" className="flex items-center gap-3">
                <img src="/Imagenes/Logo.png" alt="Green Motion" className="h-12 w-auto object-contain drop-shadow-md" />
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

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            <span className="bg-gradient-to-r from-[#00764e] to-[#47ba41] bg-clip-text text-transparent">
              Tesla
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre la gama completa de vehículos eléctricos Tesla, la marca que revolucionó la industria automotriz.
          </p>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teslaVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{vehicle.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Precio:</span>
                      <span className="text-[#47ba41] font-bold">{vehicle.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Autonomía:</span>
                      <span className="text-white">{vehicle.range}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">0-60 mph:</span>
                      <span className="text-white">{vehicle.acceleration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Vel. Máx:</span>
                      <span className="text-white">{vehicle.topSpeed}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      href={`/vehiculos/${vehicle.id}`}
                      className="flex-1 modern-button text-white px-4 py-2 rounded-lg font-semibold text-center text-sm"
                    >
                      Ver Detalles
                    </Link>
                    <Link 
                      href="/contacto"
                      className="flex-1 modern-outline px-4 py-2 rounded-lg font-semibold text-center text-sm"
                    >
                      Cotizar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
