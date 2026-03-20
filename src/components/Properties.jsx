import PropertyCard from "./PropertyCard";
import { properties } from "../data/properties";

export default function Properties() {
  return (
    <section id="propiedades" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5">
        <div className="mb-14">
          <p className="text-red-600 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Disponibles ahora
          </p>

          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl sm:text-5xl font-black text-gray-900"
          >
            Propiedades
          </h2>

          <p className="text-gray-400 mt-3 max-w-md">
            Toca cualquier tarjeta para contactarnos por WhatsApp y recibir toda
            la información.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p, i) => (
            <PropertyCard key={p.id} property={p} delay={i * 80} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm mb-4">
            ¿No encuentras lo que buscas?
          </p>

          <a
            href="https://wa.me/18298357244?text=Hola%2C%20estoy%20buscando%20una%20propiedad%20y%20quisiera%20orientaci%C3%B3n."
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-105"
          >
            Háblanos directamente
          </a>
        </div>
      </div>
    </section>
  );
}
