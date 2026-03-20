import { useState } from "react";

const PHONE = "18298357244";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const send = () => {
    if (!form.nombre || !form.mensaje) {
      alert("Por favor escribe tu nombre y mensaje.");
      return;
    }
    const text = `Hola, soy *${form.nombre}*${form.telefono ? ` — Tel: ${form.telefono}` : ""}.\n\n${form.mensaje}`;
    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors bg-white";

  return (
    <section id="contacto" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-xl mx-auto px-5">
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-red-600 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Estamos para ti
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl sm:text-5xl font-black text-gray-900"
          >
            Contáctanos
          </h2>
          <p className="text-gray-400 mt-3">
            Tu mensaje llegará directo a nuestro WhatsApp.
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
              Nombre *
            </label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={onChange}
              placeholder="Tu nombre completo"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={onChange}
              placeholder="829-000-0000"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
              Mensaje *
            </label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={onChange}
              rows={5}
              placeholder="¿Qué tipo de propiedad estás buscando?"
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            onClick={send}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl text-sm transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.520.149-.174.198-.298.298-.497.099-.198.050-.371-.025-.520-.075-.149-.669-1.612-.916-2.207" />
            </svg>
            Enviar por WhatsApp
          </button>
        </div>

        {/* BOTONES */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/18298357244"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden flex flex-col items-start gap-3 bg-gray-950 hover:bg-green-600 border border-gray-800 hover:border-green-500 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="text-white font-bold text-sm">WhatsApp</span>
            <span className="text-gray-400 text-xs">829-835-7244</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/sotoventas_"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden flex flex-col items-start gap-3 bg-gray-950 hover:bg-pink-600 border border-gray-800 hover:border-pink-500 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="text-white font-bold text-sm">Instagram</span>
            <span className="text-gray-400 text-xs">@sotoventas_</span>
          </a>
        </div>
      </div>
    </section>
  );
}
