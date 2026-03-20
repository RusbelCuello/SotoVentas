export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-gray-950" />

      {/* Línea izquierda */}
      <div className="absolute left-0 inset-y-0 w-1 bg-red-600" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-red-500 text-xs font-semibold tracking-[0.35em] uppercase mb-6">
          Baní, República Dominicana
        </p>

        <h1
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-white text-5xl sm:text-7xl font-black leading-[1.05] mb-6"
        >
          Tu próximo hogar
          <br />
          <span className="text-red-500">te está esperando.</span>
        </h1>

        <p className="text-white/50 text-base sm:text-lg max-w-md mx-auto mb-10 font-medium">
          Casas y apartamentos en las mejores ubicaciones de Baní, Provincia
          Peravia.
        </p>

        {/* BOTONES */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Ver propiedades */}
          <a
            href="#propiedades"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-105 tracking-wide"
          >
            Ver Propiedades
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/18298357244"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Brillo */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Icono */}
            <span className="relative flex items-center justify-center w-7 h-7 bg-green-500 rounded-full shrink-0 shadow-lg shadow-green-500/30">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
            </span>

            {/* Texto */}
            <span className="relative flex flex-col items-start leading-tight">
              <span className="text-white/60 text-[10px] uppercase tracking-widest">
                Escríbenos
              </span>
              <span className="font-bold text-sm">829-835-7244</span>
            </span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-3 gap-6 max-w-sm mx-auto">
          {[
            { n: "50+", l: "Propiedades" },
            { n: "5★", l: "Reputación" },
            { n: "24/7", l: "Disponible" },
          ].map((s) => (
            <div key={s.l}>
              <p
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white text-2xl font-bold"
              >
                {s.n}
              </p>
              <p className="text-white/40 text-xs mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20 animate-bounce" />
      </div>
    </section>
  );
}
