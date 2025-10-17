"use client";

import Link from "next/link";

const brands = [
  {
    name: "Tesla",
    description: "Líder mundial en vehículos eléctricos de alta gama",
    models: ["Model S", "Model 3", "Model X", "Model Y"],
    href: "/marcas/tesla",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Tesla-Logo.png",
    featured: true
  },
  {
    name: "Ford",
    description: "Tradición americana en la era eléctrica",
    models: ["Mustang Mach-E", "F-150 Lightning", "E-Transit"],
    href: "/marcas/ford",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Ford-Logo.png", //cambiar a blanco y negro https://www.citypng.com/public/uploads/preview/ford-white-logo-hd-png-701751694714008czcyqdalxp.png
    featured: true
  },
  {
    name: "Audi",
    description: "Lujo alemán con tecnología eléctrica de vanguardia",
    models: ["e-tron GT", "Q4 e-tron", "e-tron Sportback"],
    href: "/marcas/audi",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Audi-Logo.png",
    featured: true
  },
  {
    name: "BMW",
    description: "Deportividad y elegancia en versión eléctrica",
    models: ["iX", "i4", "iX3", "i3"],
    href: "/marcas/bmw",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    featured: true
  },
  {
    name: "Honda",
    description: "Confiabilidad japonesa con innovación eléctrica",
    models: ["e", "CR-V Hybrid", "Accord Hybrid"],
    href: "/marcas/honda",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Honda-Logo.png",
    featured: false
  },
  {
    name: "BYD",
    description: "Tecnología china líder en baterías y vehículos eléctricos",
    models: ["Han EV", "Tang EV", "Song Plus EV"],
    href: "/marcas/byd",
    logo: "https://logos-world.net/wp-content/uploads/2023/02/BYD-Logo.png",
    featured: false
  },
  {
    name: "KIA",
    description: "Diseño innovador y tecnología avanzada",
    models: ["EV6", "Niro EV", "Soul EV"],
    href: "/marcas/kia",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Kia-Logo.png",
    featured: false
  }
];

export default function MarcasPage() {
  const featuredBrands = brands.filter(brand => brand.featured);
  const otherBrands = brands.filter(brand => !brand.featured);

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
              <Link href="/marcas" className="text-white transition">Marcas</Link>
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
            Nuestras <span className="bg-gradient-to-r from-[#00764e] to-[#47ba41] bg-clip-text text-transparent">Marcas</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre las marcas más innovadoras de vehículos eléctricos del mundo. 
            Cada una representa la excelencia en tecnología, diseño y sostenibilidad.
          </p>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Marcas Destacadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBrands.map((brand) => (
              <Link key={brand.name} href={brand.href} className="group">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="mb-6">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="h-16 w-auto mx-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{brand.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{brand.description}</p>
                    <div className="space-y-1">
                      {brand.models.slice(0, 3).map((model, index) => (
                        <div key={index} className="text-xs text-gray-400">
                          {model}
                        </div>
                      ))}
                      {brand.models.length > 3 && (
                        <div className="text-xs text-[#47ba41]">
                          +{brand.models.length - 3} más
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Brands */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Otras Marcas Disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherBrands.map((brand) => (
              <Link key={brand.name} href={brand.href} className="group">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{brand.name}</h3>
                      <p className="text-gray-300 text-sm mb-2">{brand.description}</p>
                      <div className="text-xs text-gray-400">
                        {brand.models.slice(0, 2).join(", ")}
                        {brand.models.length > 2 && ` +${brand.models.length - 2} más`}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#00764e] to-[#47ba41]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nuestros expertos pueden ayudarte a encontrar el vehículo eléctrico perfecto para tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-[#00764e] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Consulta Personalizada
            </Link>
            <Link href="/contacto" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#00764e] transition">
              Agendar Test Drive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
