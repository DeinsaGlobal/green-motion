export default function Home() {
  const cars = [
    {
      id: 1,
      name: "EcoSport GT",
      description: "El equilibrio perfecto entre rendimiento y eficiencia",
      price: "$45,990",
      range: "520 km",
      acceleration: "0-100 km/h en 4.2s",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop",
      features: ["Autopilot", "Carga Rápida", "Sistema Premium"]
    },
    {
      id: 2,
      name: "Urban E-Motion",
      description: "Diseñado para la ciudad moderna y sostenible",
      price: "$32,990",
      range: "380 km",
      acceleration: "0-100 km/h en 6.8s",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop",
      features: ["Compacto", "Parking Asistido", "Eco-Mode"]
    },
    {
      id: 3,
      name: "PowerDrive X",
      description: "Máxima potencia para los más exigentes",
      price: "$68,990",
      range: "650 km",
      acceleration: "0-100 km/h en 2.9s",
      image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&h=500&fit=crop",
      features: ["Ludicrous Mode", "AWD", "Interior Luxury"]
    },
    {
      id: 4,
      name: "Family SUV-E",
      description: "Espacio y confort para toda la familia",
      price: "$54,990",
      range: "480 km",
      acceleration: "0-100 km/h en 5.5s",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop",
      features: ["7 Asientos", "Techo Panorámico", "Sistema Safety+"]
    },
    {
      id: 5,
      name: "Sport Coupe E",
      description: "Elegancia y deportividad en estado puro",
      price: "$58,990",
      range: "500 km",
      acceleration: "0-100 km/h en 3.8s",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop",
      features: ["Diseño Aerodinámico", "Suspensión Deportiva", "Sound System"]
    },
    {
      id: 6,
      name: "EcoVan Pro",
      description: "La solución perfecta para negocios sostenibles",
      price: "$42,990",
      range: "420 km",
      acceleration: "0-100 km/h en 7.2s",
      image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&h=500&fit=crop",
      features: ["Gran Capacidad", "Bajo Mantenimiento", "Fleet Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-zinc-900/80 backdrop-blur-md z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Green Motion
              </span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#inicio" className="text-zinc-300 hover:text-emerald-400 transition-colors">Inicio</a>
              <a href="#modelos" className="text-zinc-300 hover:text-emerald-400 transition-colors">Modelos</a>
              <a href="#contacto" className="text-zinc-300 hover:text-emerald-400 transition-colors">Contacto</a>
            </div>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105">
              Cotizar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              El Futuro es Eléctrico
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto">
              Descubre una nueva era de movilidad sostenible con nuestros autos eléctricos de última generación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-emerald-500/50">
                Explorar Modelos
              </button>
              <button className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-4 rounded-full font-semibold text-lg transition-all">
                Agendar Test Drive
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Carga Ultrarrápida</h3>
              <p className="text-zinc-400">Carga del 0% al 80% en solo 25 minutos con nuestros supercargadores</p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cero Emisiones</h3>
              <p className="text-zinc-400">100% eléctrico, 100% sostenible. Cuida el planeta mientras conduces</p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tecnología Avanzada</h3>
              <p className="text-zinc-400">Sistema de conducción autónoma y actualizaciones over-the-air</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section id="modelos" className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nuestros Modelos</h2>
            <p className="text-xl text-zinc-400">Encuentra el auto eléctrico perfecto para ti</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-all hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="relative h-56 bg-zinc-800 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-1 rounded-full font-semibold">
                    {car.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{car.name}</h3>
                  <p className="text-zinc-400 mb-4">{car.description}</p>
                  
                  <div className="flex gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-emerald-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>{car.range}</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span>{car.acceleration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.map((feature, index) => (
                      <span key={index} className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-lg font-semibold transition-all hover:scale-105">
                    Más Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">15,000+</div>
              <div className="text-zinc-400">Autos Vendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-zinc-400">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-zinc-400">Puntos de Carga</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-zinc-400">Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-zinc-900 border-t border-zinc-800 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  Green Motion
                </span>
              </div>
              <p className="text-zinc-400 mb-6">
                Liderando el futuro de la movilidad eléctrica con innovación, sostenibilidad y excelencia.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-zinc-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-emerald-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Av. Innovación 1234<br />Ciudad Sostenible, CP 12345</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+52 (55) 1234-5678</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@greenmotion.com</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">Test Drive</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">Financiamiento</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">Puntos de Carga</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">Servicio Técnico</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">Garantías</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-zinc-800 pt-8 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-white font-bold text-lg mb-2">Suscríbete a nuestro Newsletter</h3>
              <p className="text-zinc-400 mb-4">Recibe las últimas novedades y ofertas exclusivas</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                />
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500">
            <p>&copy; 2025 Green Motion. Todos los derechos reservados. | Hecho con 💚 para un futuro sostenible</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
