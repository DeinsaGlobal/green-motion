"use client";

import ProfileCard from "../components/molecules/profileCard";

export default function PruebaPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-white mb-8">
        Página de Prueba
      </h1>

      <ProfileCard
        imageSrc="/Imagenes/Logo.png"
        alt="José Zepeda"
        name="José Francisco Zepeda Luna"
        role="Project Manager - R&D"
        description="Probando la integración de componentes atómicos en la vista de prueba. Esta página sirve para validar estilos y props."
      />
    </main>
  );
}
