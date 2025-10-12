"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cars } from "../../data/carsData";

export default function CarDetail() {
  const params = useParams();
  const router = useRouter();
  const carId = params.id as string;
  
  const car = cars.find(c => c.id === carId);

  if (!car) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Auto no encontrado</h1>
          <Link href="/" className="text-[#00ff88] hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-[#00ff88]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#b744ff] bg-clip-text text-transparent neon-text">
                GREEN MOTION
              </span>
            </Link>
            <button onClick={() => router.back()} className="text-gray-400 hover:text-[#00ff88] transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section con imagen grande */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden mb-8 h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <Image 
              src={car.image} 
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <div className="inline-block bg-gradient-to-r from-[#00ff88] to-[#00d4ff] px-4 py-2 rounded-full mb-4 neon-glow">
                <span className="text-black font-bold">{car.brand}</span>
              </div>
              <h1 className="text-6xl font-black text-white mb-2 neon-text">{car.model}</h1>
              <p className="text-2xl text-[#00ff88] font-bold">{car.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Información Principal */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Columna izquierda - Descripción y características */}
            <div className="lg:col-span-2 space-y-8">
              {/* Descripción */}
              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
                  Descripción
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">{car.description}</p>
              </div>

              {/* Especificaciones Técnicas */}
              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
                  Especificaciones Técnicas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: "⚡", label: "Autonomía", value: car.range },
                    { icon: "🚀", label: "Aceleración", value: car.acceleration },
                    { icon: "⏱️", label: "Velocidad Máxima", value: car.topSpeed },
                    { icon: "🔋", label: "Batería", value: car.battery },
                    { icon: "⚙️", label: "Carga", value: car.charging },
                    { icon: "💪", label: "Potencia", value: car.specs.power },
                    { icon: "🔧", label: "Torque", value: car.specs.torque },
                    { icon: "👥", label: "Asientos", value: car.specs.seats.toString() },
                    { icon: "📦", label: "Maletero", value: car.specs.cargo },
                    { icon: "⚖️", label: "Peso", value: car.specs.weight },
                  ].map((spec, index) => (
                    <div key={index} className="flex items-center gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-[#00ff88]/30 transition-all">
                      <div className="text-3xl">{spec.icon}</div>
                      <div>
                        <div className="text-sm text-gray-500">{spec.label}</div>
                        <div className="text-lg font-bold text-white">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                  <div className="text-sm text-gray-500 mb-2">Dimensiones</div>
                  <div className="text-lg font-bold text-white">{car.specs.dimensions}</div>
                </div>
              </div>

              {/* Características Premium */}
              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
                  Características Premium
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-[#00ff88]/30 transition-all group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center group-hover:from-[#00ff88]/30 group-hover:to-[#00d4ff]/30 transition-all">
                        <svg className="w-5 h-5 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha - CTA y Stats */}
            <div className="space-y-6">
              {/* Card de Cotización */}
              <div className="sticky top-24 bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">{car.price}</div>
                  <div className="text-gray-400">Precio desde</div>
                </div>

                <div className="space-y-4">
                  <button className="relative group w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform w-full">
                      Cotizar Ahora
                    </div>
                  </button>

                  <button className="w-full border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88]/10 py-4 rounded-xl font-bold transition-all">
                    Agendar Test Drive
                  </button>

                  <button className="w-full bg-zinc-900 text-white hover:bg-zinc-800 py-4 rounded-xl font-bold transition-all border border-zinc-800">
                    Descargar Brochure
                  </button>
                </div>

                <div className="pt-6 border-t border-zinc-800 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">Garantía 5 años / 100,000 km</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">Financiamiento disponible</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">Entrega inmediata</span>
                  </div>
                </div>
              </div>

              {/* Stats Rápidas */}
              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Stats Rápidas</h3>
                {[
                  { label: "Año", value: car.year },
                  { label: "Tipo", value: "100% Eléctrico" },
                  { label: "Tracción", value: "AWD" },
                  { label: "Emisiones", value: "0 g/km" }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-zinc-800 last:border-0">
                    <span className="text-gray-400">{stat.label}</span>
                    <span className="text-white font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelos Relacionados */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            También te puede interesar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars
              .filter(c => c.brandId === car.brandId && c.id !== car.id)
              .slice(0, 3)
              .map((relatedCar) => (
                <Link 
                  key={relatedCar.id} 
                  href={`/cars/${relatedCar.id}`}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  <div className="relative bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-900 group-hover:border-[#00ff88] transition-all">
                    <div className="relative h-48 bg-zinc-900 overflow-hidden">
                      <Image 
                        src={relatedCar.image} 
                        alt={`${relatedCar.brand} ${relatedCar.model}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        quality={80}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{relatedCar.model}</h3>
                      <p className="text-[#00ff88] font-bold mb-3">{relatedCar.price}</p>
                      <div className="flex gap-4 text-sm text-gray-400">
                        <span>{relatedCar.range}</span>
                        <span>•</span>
                        <span>{relatedCar.acceleration.replace('0-100 km/h en ', '')}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Green Motion. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

