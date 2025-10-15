import React from "react";
import Logo from "../atoms/logo";
import NavLink from "../atoms/navLink";
import Button from "../atoms/button";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900/80 backdrop-blur-md flex items-center justify-between px-10 py-4 z-50 border-b border-zinc-800">
      <Logo />

      <div className="flex items-center gap-8">
        <NavLink href="/" variant="dark" active>Inicio</NavLink>
        <NavLink href="/marcas" variant="dark">Marcas</NavLink>
        <NavLink href="/servicios" variant="dark">Servicios</NavLink>
        <NavLink href="/contacto" variant="dark">Contacto</NavLink>
      </div>

      <div className="hidden md:block">
        <Button variant="modern-primary">Cotizar</Button>
      </div>
    </nav>
  );
};

export default Navbar;

