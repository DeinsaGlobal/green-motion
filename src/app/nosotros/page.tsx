"use client";

import Link from "next/link";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 border-b border-[#00764e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Link href="/" className="text-[#D1D5DB] hover:text-white transition">
                Inicio
              </Link>
              <Link href="/marcas" className="text-[#D1D5DB] hover:text-white transition">
                Marcas
              </Link>
              <Link href="/nosotros" className="text-white transition">
                Nosotros
              </Link>
              <Link href="/contacto" className="text-[#D1D5DB] hover:text-white transition">
                Contacto
              </Link>
            </div>

            <div className="flex justify-end">
              <Link
                href="/contacto"
                className="modern-button text-white px-6 py-3 rounded-lg font-semibold modern-glow"
              >
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

      {/* Historia con línea del tiempo a la derecha */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Historia a la izquierda */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Nuestra Historia</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Green Motion es un distribuidor líder en Costa Rica especializado en la venta e importación de vehículos eléctricos.
                Ofrecemos modelos exclusivos con entrega inmediata, respaldo técnico y asesoría personalizada.
                Nuestra propuesta combina sostenibilidad, innovación y servicio de alta calidad.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fundada en 2020, Green Motion inició su misión de transformar la movilidad en Costa Rica
                y hoy cuenta con presencia regional en Guatemala, Ciudad de México y Monterrey,
                consolidándose como pionera multimarcas en movilidad eléctrica.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 text-center">
                  <h3 className="text-3xl font-bold text-[#47ba41] mb-2">500+</h3>
                  <p className="text-gray-300">Vehículos entregados</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 text-center">
                  <h3 className="text-3xl font-bold text-[#47ba41] mb-2">98%</h3>
                  <p className="text-gray-300">Satisfacción del cliente</p>
                </div>
              </div>
            </div>

            {/* Línea del tiempo a la derecha */}
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-8">Línea del Tiempo</h2>
              <div className="relative pl-6">
                <div className="absolute left-2 top-0 w-1 bg-[#00764e] h-full rounded-full"></div>
                {[
                  { year: "2020", text: "Fundación de Green Motion en Costa Rica." },
                  { year: "2021", text: "Expansión del portafolio de vehículos eléctricos premium." },
                  { year: "2022", text: "Inicio de operaciones en Guatemala." },
                  { year: "2023", text: "Apertura de sedes en Ciudad de México y Monterrey." },
                  { year: "2025", text: "Consolidación como pioneros regionales multimarcas EV." },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-start mb-8 transition-transform duration-500 hover:scale-[1.02]"
                  >
                    <div className="w-4 h-4 bg-[#47ba41] rounded-full mt-1.5 z-10 relative left-[0.3rem]" />
                    <div className="ml-8">
                      <h4 className="text-lg font-semibold text-[#47ba41]">{item.year}</h4>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Misión y Visión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#47ba41] mb-4">Nuestra Misión</h3>
              <p className="text-gray-300 leading-relaxed">
                Impulsar la movilidad sostenible en Costa Rica, México y Guatemala mediante la comercialización
                de vehículos eléctricos premium, confiables y eficientes. Ser la marca referente en movilidad eléctrica
                en la región, reconocida por su innovación, servicio y compromiso ambiental.
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#47ba41] mb-4">Nuestra Visión</h3>
              <p className="text-gray-300 leading-relaxed">
                Consolidarnos como el dealer #1 en vehículos eléctricos en Costa Rica, México y Guatemala.
                Expandir la red de clientes corporativos y flotas sostenibles, y fortalecer nuestro servicio postventa
                y fidelización de clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Sostenibilidad",
              "Transparencia",
              "Innovación",
              "Servicio al Cliente",
              "Compromiso Social",
            ].map((valor) => (
              <div
                key={valor}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center"
              >
                <h3 className="text-xl font-semibold text-[#47ba41]">{valor}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Nuestro Equipo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contamos con un equipo internacional comprometido con la innovación,
              el servicio de excelencia y la movilidad sostenible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                nombre: "Jorge Iván Velásquez Yanez",
                cargo: "Managing Partner",
                img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
              },
              {
                nombre: "Lucía Shum Tsang",
                cargo: "Managing Partner",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
              },
              {
                nombre: "Samuel Bronstein",
                cargo: "Operations Manager",
                img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop&crop=face",
              },
              {
                nombre: "Max Santamaría",
                cargo: "Head of Sales & Expansion",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
              },
            ].map((miembro) => (
              <div
                key={miembro.nombre}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-[1.03] transition-transform duration-300"
              >
                <img
                  src={miembro.img}
                  alt={miembro.nombre}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-white mb-2">{miembro.nombre}</h3>
                <p className="text-[#47ba41] mb-4">{miembro.cargo}</p>
              </div>
            ))}
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
            <Link
              href="/marcas"
              className="bg-white text-[#00764e] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Ver Marcas
            </Link>
            <Link
              href="/contacto"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#00764e] transition"
            >
              Contactar Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#00764e] py-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-[#47ba41] font-semibold">Green Motion</span>. 
          Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
