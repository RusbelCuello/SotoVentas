export default function Footer() {
  return (
    <footer className="bg-gray-950 py-8 px-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-white font-bold text-lg tracking-tight"
        >
          Soto<span className="text-red-500">Ventas</span>
        </span>
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} SotoVentas · República Dominicana
        </p>
        <div className="flex gap-5">
          <a
            href="https://wa.me/18298357244"
            target="_blank"
            rel="noreferrer"
            className="text-white/40 hover:text-white text-xs transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/sotoventas_"
            target="_blank"
            rel="noreferrer"
            className="text-white/40 hover:text-white text-xs transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
