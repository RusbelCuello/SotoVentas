import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Bloquea el scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Propiedades", href: "#propiedades" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-white shadow-sm py-3 border-b border-gray-100"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-5xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled || open ? "text-gray-900" : "text-white"
            }`}
          >
            Soto<span className="text-red-600">Ventas</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/18298357244"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Botón móvil */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                open
                  ? "w-6 bg-gray-900 rotate-45 translate-y-2"
                  : `w-6 ${scrolled ? "bg-gray-900" : "bg-white"}`
              }`}
            />
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                open
                  ? "opacity-0 w-0"
                  : `w-4 ${scrolled ? "bg-gray-900" : "bg-white"}`
              }`}
            />
            <span
              className={`block h-0.5 rounded-full transition-all duration-300 ${
                open
                  ? "w-6 bg-gray-900 -rotate-45 -translate-y-2"
                  : `w-6 ${scrolled ? "bg-gray-900" : "bg-white"}`
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-white" />

        <div className="relative h-full flex flex-col items-center justify-center gap-2 px-8">
          {/* Links */}
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`w-full text-center text-4xl font-black text-gray-900 py-4 border-b border-gray-100 
              hover:text-red-600 transition-all duration-300 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                fontFamily: "'Playfair Display', serif",
                transitionDelay: open ? `${i * 80}ms` : "0ms",
              }}
            >
              {l.label}
            </a>
          ))}

          {/* WhatsApp */}
          <a
            href="https://wa.me/18298357244"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className={`mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl 
            text-center text-sm tracking-widest uppercase transition-all duration-300 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? "240ms" : "0ms" }}
          >
            📲 WhatsApp
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/sotoventas_"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className={`w-full border border-gray-200 text-gray-500 font-semibold py-3.5 rounded-2xl 
            text-center text-sm tracking-widest uppercase transition-all duration-300 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? "300ms" : "0ms" }}
          >
            📸 @sotoventas_
          </a>

          {/* Teléfono */}
          <p
            className={`mt-6 text-gray-300 text-sm font-medium tracking-wider transition-all duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: open ? "360ms" : "0ms" }}
          >
            829-835-7244
          </p>
        </div>
      </div>
    </>
  );
}
