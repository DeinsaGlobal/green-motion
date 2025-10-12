"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    marca: "",
    modelo: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("¡Gracias por tu interés! Te contactaremos pronto.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <Link href="/contacto" className="text-white transition">Contacto</Link>
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
              Contacto
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Listo para dar el siguiente paso hacia la movilidad sostenible? Contáctanos para una cotización personalizada.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Solicita tu Cotización</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Nombre Completo *</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Marca de Interés</label>
                    <select
                      name="marca"
                      value={formData.marca}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition"
                    >
                      <option value="">Seleccionar marca</option>
                      <option value="tesla">Tesla</option>
                      <option value="ford">Ford</option>
                      <option value="audi">Audi</option>
                      <option value="bmw">BMW</option>
                      <option value="honda">Honda</option>
                      <option value="byd">BYD</option>
                      <option value="kia">KIA</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Modelo</label>
                    <input
                      type="text"
                      name="modelo"
                      value={formData.modelo}
                      onChange={handleChange}
                      placeholder="Ej: Model S, e-Tron, etc."
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Mensaje Adicional</label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos más sobre tus necesidades..."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full modern-button text-white px-8 py-4 rounded-lg font-bold text-lg modern-glow"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00764e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                      <p className="text-gray-300">San José, Costa Rica</p>
                      <p className="text-gray-300">Zona de lujo, cerca del centro</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00764e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Teléfono</h4>
                      <p className="text-gray-300">+506 2222-0000</p>
                      <p className="text-gray-300">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00764e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">info@greenmotion.cr</p>
                      <p className="text-gray-300">ventas@greenmotion.cr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">¿Por qué elegir Green Motion?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#47ba41] rounded-full mr-3"></span>
                    Asesoría personalizada por expertos
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#47ba41] rounded-full mr-3"></span>
                    Financiamiento flexible disponible
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#47ba41] rounded-full mr-3"></span>
                    Servicio post-venta especializado
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#47ba41] rounded-full mr-3"></span>
                    Test drives gratuitos
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#47ba41] rounded-full mr-3"></span>
                    Garantía extendida disponible
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
