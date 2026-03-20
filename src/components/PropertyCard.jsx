import { useState } from "react";

const PHONE = "18298357244";

export default function PropertyCard({ property, delay = 0 }) {
  const [photo, setPhoto] = useState(0);

  const goWA = () => {
    const msg = encodeURIComponent(
      `Hola, me interesa la propiedad *${property.titulo}* (${property.precio}) en ${property.ubicacion}. ¿Puede darme más información?`,
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  return (
    <div
      className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer group"
      onClick={goWA}
    >
      {/* Foto */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={property.fotos[photo]}
          alt={property.titulo}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "https://placehold.co/800x500?text=SotoVentas";
          }}
        />

        {/* Precio */}
        <span className="absolute top-3 left-3 bg-white text-gray-900 font-bold text-xs px-3 py-1 rounded-full shadow-sm">
          {property.precio}
        </span>

        {/* Dots fotos */}
        {property.fotos.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {property.fotos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setPhoto(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === photo ? "w-4 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-semibold text-sm">
            Consultar por WhatsApp →
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-gray-400 text-xs mb-1 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
          {property.ubicacion}
        </p>

        <h3 className="font-semibold text-gray-900 text-base mb-1 group-hover:text-red-600 transition-colors">
          {property.titulo}
        </h3>

        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
          {property.descripcion}
        </p>

        <div className="flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3">
          <span>{property.habitaciones} hab.</span>
          <span>{property.banos} baños</span>
          <span>{property.metros} m²</span>
        </div>
      </div>
    </div>
  );
}
