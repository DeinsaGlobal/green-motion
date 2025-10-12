"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState("featured");
  const [currentIndex, setCurrentIndex] = useState(0);

  const vehicles = [
    {
      id: 1,
      brand: "Tesla",
      name: "Model 3 AWD R19",
      price: "$48,490",
      range: "341 millas",
      acceleration: "4.2s 0-60 mph",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
      description: "El sedán eléctrico más vendido del mundo con tracción integral.",
      featured: false
    },
    {
      id: 2,
      brand: "Tesla",
      name: "Model Y RWD",
      price: "$43,990",
      range: "260 millas",
      acceleration: "6.6s 0-60 mph",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
      description: "SUV compacto eléctrico perfecto para familias.",
      featured: false
    },
    {
      id: 3,
      brand: "Tesla",
      name: "Model Y 2025 RWD",
      price: "$44,990",
      range: "270 millas",
      acceleration: "6.5s 0-60 mph",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
      description: "La versión más reciente del Model Y con mejoras tecnológicas.",
      featured: false
    },
    {
      id: 4,
      brand: "Tesla",
      name: "Cybertruck",
      price: "$60,990",
      range: "340 millas",
      acceleration: "6.5s 0-60 mph",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
      description: "La pickup eléctrica más revolucionaria del futuro.",
      featured: false
    },
    {
      id: 5,
      brand: "Ford",
      name: "F-150 Lightning",
      price: "$55,974",
      range: "230 millas",
      acceleration: "4.4s 0-60 mph",
      image: "/Imagenes/Carros/Ford/Ford-3.JPG",
      description: "La pickup eléctrica más poderosa de Ford.",
      featured: false
    },
    {
      id: 6,
      brand: "Audi",
      name: "Q4 e-tron",
      price: "$49,800",
      range: "265 millas",
      acceleration: "6.0s 0-60 mph",
      image: "/Imagenes/Carros/Audi/Audi-3.JPG",
      description: "SUV eléctrico de lujo con tecnología Audi.",
      featured: true
    },
    {
      id: 7,
      brand: "BMW",
      name: "iX1",
      price: "$52,000",
      range: "272 millas",
      acceleration: "5.6s 0-60 mph",
      image: "/Imagenes/Carros/BMW/BMW-2.JPG",
      description: "SUV compacto eléctrico con el lujo BMW.",
      featured: true
    },
    {
      id: 8,
      brand: "Honda",
      name: "e:NS1",
      price: "$35,000",
      range: "250 millas",
      acceleration: "8.0s 0-60 mph",
      image: "/Imagenes/Carros/Honda/Honda-1.JPG",
      description: "SUV eléctrico Honda con confiabilidad japonesa.",
      featured: false
    },
    {
      id: 9,
      brand: "BYD",
      name: "Seagull",
      price: "$9,000",
      range: "186 millas",
      acceleration: "9.0s 0-60 mph",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
      description: "El vehículo eléctrico más asequible del mercado.",
      featured: false
    },
    {
      id: 10,
      brand: "KIA",
      name: "EV5 Air",
      price: "$45,000",
      range: "310 millas",
      acceleration: "7.5s 0-60 mph",
      image: "/Imagenes/Carros/KIA/KIA-1.JPG",
      description: "SUV eléctrico KIA con diseño innovador.",
      featured: true
    }
  ];

  // Filtrar vehículos según la selección
  const filteredVehicles = selectedBrand === "featured" 
    ? vehicles.filter(v => v.featured)  // Estado inicial: solo destacados
    : selectedBrand === "all"
    ? vehicles  // Ver Todos: mostrar TODOS los vehículos
    : vehicles.filter(v => v.brand.toLowerCase() === selectedBrand);  // Marca específica

  const maxVisible = 3;
  const totalPages = filteredVehicles.length;
  const currentVehicles = filteredVehicles.slice(currentIndex, currentIndex + maxVisible);

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredVehicles.length - maxVisible);
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, filteredVehicles.length - maxVisible);
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  // Reset carrusel cuando cambia la marca
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedBrand]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="animate-pulse-neon">
          <img 
            src="/Imagenes/Logo.png" 
            alt="Green Motion" 
            className="w-32 h-32 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black animate-reveal">
      {/* Navbar de lujo premium */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 border-b border-[#00764e]">
        <div className="">
          <div className="grid grid-cols-3 items-center h-20 w-full">
            <div className="flex justify-start">
              <Link href="/" className="flex items-center gap-3">
                <img 
                  src="/Imagenes/Logo.png" 
                  alt="Green Motion" 
                  className="h-12 w-auto object-contain drop-shadow-md"
                />
              </Link>
            </div>
            
            <div className="hidden md:flex gap-8 items-center justify-center">
              <span className="text-[#D1D5DB]">Inicio</span>
              <span className="text-[#D1D5DB]">Marcas</span>
              <span className="text-[#D1D5DB]">Nosotros</span>
              <span className="text-[#D1D5DB]">Contacto</span>
            </div>
            
            <div className="flex justify-end">
              <button className="modern-button text-white px-6 py-3 rounded-lg font-semibold modern-glow">
                Cotizar
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section con imagen de carro */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image 
            src="/Imagenes/Fondo.JPG" 
            alt="Fondo Green Motion" 
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        
        {/* Overlay gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

        {/* Contenido */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white hero-text">
            El Futuro
            <span className="block bg-gradient-to-r from-[#00764e] to-[#47ba41] bg-clip-text text-transparent green-text">
              es Eléctrico
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-light hero-text">
            Descubre las marcas más exclusivas de vehículos eléctricos. 
            <span className="text-[#47ba41] font-medium">Lujo, potencia y sostenibilidad</span> en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="modern-button text-white px-8 py-4 rounded-lg font-bold text-lg modern-glow">
              Explorar Modelos
            </button>
            <button className="modern-outline px-8 py-4 rounded-lg font-semibold text-lg">
              Agendar Test Drive
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Sección de Marcas */}
      <section className="py-12 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Nuestras <span className="text-[#47ba41]">Marcas</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Tesla */}
            <button 
              className={`transition-all duration-300 hover:scale-110 ${
                selectedBrand === "tesla" 
                  ? "opacity-100 drop-shadow-2xl" 
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setSelectedBrand("tesla")}
              title="Tesla"
            >
              <img 
                src="/Imagenes/Logos/logo-tesla.png" 
                alt="Tesla" 
                className="h-16 w-auto object-contain"
              />
            </button>

            {/* Ford */}
            <button 
              className={`transition-all duration-300 hover:scale-110 ${
                selectedBrand === "ford" 
                  ? "opacity-100 drop-shadow-2xl" 
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setSelectedBrand("ford")}
              title="Ford"
            >
              <img 
                src="/Imagenes/Logos/logo-ford.png" 
                alt="Ford" 
                className="h-16 w-auto object-contain"
              />
            </button>

            {/* Audi */}
            <button 
              className={`transition-all duration-300 hover:scale-110 ${
                selectedBrand === "audi" 
                  ? "opacity-100 drop-shadow-2xl" 
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setSelectedBrand("audi")}
              title="Audi"
            >
              <img 
                src="/Imagenes/Logos/logo-audi.png" 
                alt="Audi" 
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </button>

            {/* BMW */}
            <button 
              className={`transition-all duration-300 hover:scale-110 ${
                selectedBrand === "bmw" 
                  ? "opacity-100 drop-shadow-2xl" 
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setSelectedBrand("bmw")}
              title="BMW"
            >
              <img 
                src="/Imagenes/Logos/logo-bmw.png" 
                alt="BMW" 
                className="h-16 w-auto object-contain"
              />
            </button>

            {/* Honda */}
            <button 
              className={`transition-all duration-300 hover:scale-110 ${
                selectedBrand === "honda" 
                  ? "opacity-100 drop-shadow-2xl" 
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setSelectedBrand("honda")}
              title="Honda"
            >
              <img 
                src="/Imagenes/Logos/logo-honda.png" 
                alt="Honda" 
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </button>

            {/* BYD */}
            <button 
              className={`transition-all duration-300 hover:scale-110 ${
                selectedBrand === "byd" 
                  ? "opacity-100 drop-shadow-2xl" 
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setSelectedBrand("byd")}
              title="BYD"
            >
              <img 
                src="/Imagenes/Logos/logo-byd.png" 
                alt="BYD" 
                className="h-16 w-auto object-contain"
              />
            </button>

            {/* KIA */}
            <button 
              className={`transition-all duration-300 hover:scale-110 ${
                selectedBrand === "kia" 
                  ? "opacity-100 drop-shadow-2xl" 
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setSelectedBrand("kia")}
              title="KIA"
            >
              <img 
                src="/Imagenes/Logos/logo-kia.png" 
                alt="KIA" 
                className="h-16 w-auto object-contain"
              />
            </button>
          </div>
          
          {/* Segunda fila con botón Todos */}
          <div className="flex justify-center mt-6">
            <button 
              className={`transition-all duration-300 rounded-lg px-6 py-2 text-sm font-semibold ${selectedBrand === "all" ? "bg-[#47ba41] text-white" : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"}`}
              onClick={() => setSelectedBrand("all")}
            >
              Ver Todos los Vehículos
            </button>
          </div>

          {/* Línea Verde con Degradado */}
          <div className="h-1 bg-gradient-to-r from-[#00764e] via-[#47ba41] to-[#289b8f] mt-8"></div>
        </div>
      </section>

      {/* Sección de Vehículos */}
      <section className="py-12 bg-gradient-to-b from-black via-[#00764e]/30 to-[#47ba41]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            {selectedBrand === "featured" 
              ? "Vehículos " 
              : selectedBrand === "all" 
              ? "Todos los " 
              : vehicles.find(v => v.brand.toLowerCase() === selectedBrand)?.brand + " "} 
            <span className="text-[#47ba41]">{selectedBrand === "all" ? "Vehículos" : "Destacados"}</span>
          </h2>
          
          {/* Carrusel con flechas */}
          <div className="relative">
            {/* Flecha izquierda */}
            {filteredVehicles.length > maxVisible && (
              <button
                onClick={prevSlide}
                className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Flecha derecha */}
            {filteredVehicles.length > maxVisible && (
              <button
                onClick={nextSlide}
                className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Carrusel de vehículos */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: filteredVehicles.length > maxVisible 
                    ? `translateX(calc(-${currentIndex} * (${100 / maxVisible}% + 32px)))` 
                    : 'translateX(0%)' 
                }}
              >
                {filteredVehicles.map((vehicle, index) => (
                  <div key={vehicle.id} className="bg-black/80 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-black/90 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-[#47ba41]/20 flex flex-col flex-shrink-0" style={{ width: `calc((100% - ${(maxVisible - 1) * 32}px) / ${maxVisible})` }}>
                    <div className="relative h-72 overflow-hidden">
                      <Image 
                        src={vehicle.image} 
                        alt={`${vehicle.brand} ${vehicle.name}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-[#00764e] text-white px-4 py-2 rounded-full text-sm font-semibold">{vehicle.brand}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <h3 className="text-2xl font-bold text-white mb-3">{vehicle.name}</h3>
                        <Link 
                          href={`/vehiculos/${vehicle.id}`}
                          className="block w-full modern-button text-white px-6 py-3 rounded-lg font-semibold text-center"
                        >
                          Ver Detalles
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores de página */}
            {filteredVehicles.length > maxVisible && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: Math.max(1, filteredVehicles.length - maxVisible + 1) }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === i 
                        ? 'bg-[#47ba41]' 
                        : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12 border-t border-[#00764e]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Columna 1 - Sobre Nosotros */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Green Motion</h3>
              <p className="text-sm text-gray-400 mb-4">
                Tu concesionario de vehículos eléctricos de confianza. Comprometidos con un futuro sostenible.
              </p>
              <img 
                src="/Imagenes/Logo.png" 
                alt="Green Motion Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Columna 2 - Enlaces Rápidos */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-[#47ba41] transition-colors">Inicio</a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#47ba41] transition-colors">Marcas</a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#47ba41] transition-colors">Nosotros</a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#47ba41] transition-colors">Contacto</a>
                </li>
              </ul>
            </div>

            {/* Columna 3 - Contacto */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#47ba41]">📍</span>
                  <span>Av. Principal 123, Ciudad</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#47ba41]">📞</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#47ba41]">✉️</span>
                  <span>info@greenmotion.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#47ba41]">⏰</span>
                  <span>Lun - Vie: 9:00 - 18:00</span>
                </li>
              </ul>
            </div>

            {/* Columna 4 - Redes Sociales */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#47ba41] rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#47ba41] rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#47ba41] rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#47ba41] rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">📷</span>
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-white text-sm font-semibold mb-2">Newsletter</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Tu email"
                    className="flex-1 bg-gray-800 text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#47ba41]"
                  />
                  <button className="bg-[#47ba41] hover:bg-[#00764e] text-white px-4 py-2 rounded text-sm transition-colors">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Línea separadora */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#00764e] to-transparent my-8"></div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 Green Motion. Todos los derechos reservados.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-[#47ba41] transition-colors">Política de Privacidad</a>
              {" | "}
              <a href="#" className="hover:text-[#47ba41] transition-colors">Términos y Condiciones</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Fin: solo pantalla principal */}
    </div>
  );
}