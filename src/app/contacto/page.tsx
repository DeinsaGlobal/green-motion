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
    mensaje: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key as keyof typeof formData] === "") newErrors[key] = true;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 4000);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        marca: "",
        modelo: "",
        mensaje: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Mensaje de éxito */}
      {successMessage && (
        <div className="fixed top-6 right-6 bg-[#00764e] text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-500 animate-fade-in z-50">
          ✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.
        </div>
      )}

      {/* Header */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-40 border-b border-[#00764e]">
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
              <Link
                href="/"
                className="text-[#D1D5DB] hover:text-white transition"
              >
                Inicio
              </Link>
              <Link
                href="/marcas"
                className="text-[#D1D5DB] hover:text-white transition"
              >
                Marcas
              </Link>
              <Link
                href="/nosotros"
                className="text-[#D1D5DB] hover:text-white transition"
              >
                Nosotros
              </Link>
              <Link href="/contacto" className="text-white transition">
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
              Contacto
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Listo para dar el siguiente paso hacia la movilidad sostenible?
            Contáctanos para una cotización personalizada.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Solicita tu Cotización
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800 border ${
                        errors.nombre ? "border-red-500" : "border-gray-600"
                      } rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition`}
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
                      className={`w-full px-4 py-3 bg-gray-800 border ${
                        errors.telefono ? "border-red-500" : "border-gray-600"
                      } rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition`}
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
                    className={`w-full px-4 py-3 bg-gray-800 border ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    } rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition`}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">
                      Marca de Interés
                    </label>
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
                  <label className="block text-gray-300 mb-2">
                    Mensaje Adicional
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos más sobre tus necesidades..."
                    className={`w-full px-4 py-3 bg-gray-800 border ${
                      errors.mensaje ? "border-red-500" : "border-gray-600"
                    } rounded-lg text-white focus:border-[#47ba41] focus:outline-none transition resize-none`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full modern-button text-white px-8 py-4 rounded-lg font-bold text-lg modern-glow"
                >
                  Enviar Solicitud
                </button>

                {/* Mensaje de privacidad */}
                <p className="text-sm text-gray-400 text-center mt-4">
                  Al enviar este formulario, aceptas nuestra{" "}
                  <Link
                    href="/politica-privacidad"
                    className="text-[#47ba41] hover:underline"
                  >
                    Política de Privacidad
                  </Link>.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00764e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Ubicación
                      </h4>
                      <p className="text-gray-300">San José, Costa Rica</p>
                      <p className="text-gray-300">
                        Zona de lujo, cerca del centro
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00764e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Teléfono
                      </h4>
                      <p className="text-gray-300">+506 2222-0000</p>
                      <p className="text-gray-300">
                        Lunes a Viernes: 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00764e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
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

              {/* Mapa */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ubícanos fácilmente
                </h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.035457947221!2d-84.0907241!3d9.9280692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e35c1c3a2ab1%3A0xb1a5b9e1f3dfcb4!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1709856541234"
                  width="100%"
                  height="300"
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg border border-gray-700"
                ></iframe>
              </div>

              {/* Razones para elegir */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  ¿Por qué elegir Green Motion?
                </h3>
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

          {/* Botones de contacto rápido */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
            <a
              href="https://wa.me/50688880000"
              target="_blank"
              className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.72 11.72 0 0012 0C5.37 0 0 5.37 0 12c0 2.13.55 4.2 1.6 6.03L0 24l6.2-1.62A11.85 11.85 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 21.54a9.5 9.5 0 01-4.85-1.32l-.35-.2-3.69.97.99-3.59-.23-.37A9.55 9.55 0 1121.55 12c0 5.27-4.28 9.54-9.55 9.54z" />
                <path d="M17.46 14.54l-2.48-.72a.58.58 0 00-.58.15l-.98 1a8.26 8.26 0 01-3.62-3.62l1-1a.58.58 0 00.15-.58l-.72-2.48a.58.58 0 00-.55-.4h-.97a1.17 1.17 0 00-1.17 1.18 9.9 9.9 0 009.9 9.9 1.17 1.17 0 001.18-1.18v-.97a.58.58 0 00-.41-.55z" />
              </svg>
              WhatsApp
            </a>

            <a
              href="mailto:info@greenmotion.cr"
              className="bg-[#00764e] hover:bg-[#04985f] text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
