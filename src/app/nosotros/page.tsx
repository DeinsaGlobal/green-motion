"use client";

import Link from "next/link";

export default function NosotrosPage() {
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
              <Link href="/nosotros" className="text-white transition">Nosotros</Link>
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
              Nosotros
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos pioneros en la revolución de la movilidad sostenible en Costa Rica. 
            Conectamos a nuestros clientes con las marcas más innovadoras de vehículos eléctricos del mundo.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Nuestra Historia</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Green Motion nació de una visión: transformar el futuro de la movilidad en Costa Rica. 
                Fundada en 2020, nos convertimos en el primer concesionario especializado exclusivamente 
                en vehículos eléctricos de alta gama.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nuestro equipo de expertos combina décadas de experiencia en la industria automotriz 
                con una pasión genuina por la sostenibilidad y la innovación tecnológica.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-3xl font-bold text-[#47ba41] mb-2">500+</h3>
                  <p className="text-gray-300">Vehículos entregados</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-3xl font-bold text-[#47ba41] mb-2">98%</h3>
                  <p className="text-gray-300">Satisfacción del cliente</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop" 
                alt="Green Motion Showroom"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Nuestra Misión</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Acelerar la transición hacia un futuro más sostenible, ofreciendo las mejores 
              opciones de movilidad eléctrica con un servicio excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#00764e] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovación</h3>
              <p className="text-gray-300">
                Siempre a la vanguardia de las últimas tecnologías en vehículos eléctricos.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#00764e] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sostenibilidad</h3>
              <p className="text-gray-300">
                Comprometidos con un futuro más limpio y respetuoso con el medio ambiente.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#00764e] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excelencia</h3>
              <p className="text-gray-300">
                Servicio de primera clase y atención personalizada para cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Nuestro Equipo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expertos apasionados por la movilidad eléctrica, listos para asesorarte 
              en tu próximo vehículo sostenible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">Carlos Rodríguez</h3>
              <p className="text-[#47ba41] mb-4">CEO & Fundador</p>
              <p className="text-gray-300 text-sm">
                15 años de experiencia en la industria automotriz y pionero en vehículos eléctricos.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face" 
                alt="Sales Director"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">María Fernández</h3>
              <p className="text-[#47ba41] mb-4">Directora de Ventas</p>
              <p className="text-gray-300 text-sm">
                Especialista en asesoría personalizada y experiencia del cliente premium.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" 
                alt="Technical Director"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">Roberto Silva</h3>
              <p className="text-[#47ba41] mb-4">Director Técnico</p>
              <p className="text-gray-300 text-sm">
                Ingeniero especializado en sistemas eléctricos y tecnologías de carga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#00764e] to-[#47ba41]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para unirte a la revolución eléctrica?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Descubre por qué más de 500 clientes han elegido Green Motion para su próximo vehículo eléctrico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marcas" className="bg-white text-[#00764e] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Ver Marcas
            </Link>
            <Link href="/contacto" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#00764e] transition">
              Contactar Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
