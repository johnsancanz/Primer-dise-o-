
import React from 'react';

const testimonials = [
  {
    name: "Dr. Julián Vance",
    handle: "Director Médico",
    text: "GrowMED transformó el trayecto de nuestros pacientes. Nuestras citas en línea se triplicaron en los primeros 60 días tras el lanzamiento del nuevo portal.",
    img: "https://i.pravatar.cc/150?u=vance"
  },
  {
    name: "Sara Jenkins",
    handle: "Directora de Clínica",
    text: "El asistente de IA ahora maneja el 80% de nuestras consultas de recepción. Es como tener tres empleados extra que nunca duermen.",
    img: "https://i.pravatar.cc/150?u=jenkins"
  },
  {
    name: "Dr. Amit Sharma",
    handle: "Práctica Privada",
    text: "Era escéptico sobre la IA en el crecimiento de la salud, pero la analítica de diagnóstico me demostró lo contrario. Muy recomendado.",
    img: "https://i.pravatar.cc/150?u=sharma"
  },
  {
    name: "Dra. Emily Bloom",
    handle: "Líder de Centro Quirúrgico",
    text: "Limpio, profesional e increíblemente efectivo. GrowMED es el único socio en el que confiamos para nuestra expansión digital.",
    img: "https://i.pravatar.cc/150?u=bloom"
  },
  {
    name: "Mark Whittaker",
    handle: "Administrador de Hospital",
    text: "El proceso de integración fue impecable. Escalamos a tres nuevas ubicaciones usando su infraestructura digital.",
    img: "https://i.pravatar.cc/150?u=mark"
  },
  {
    name: "Dra. Lisa Wong",
    handle: "Especialista Pediátrica",
    text: "Nuestros puntajes de satisfacción del paciente se dispararon tras introducir la plataforma de experiencia del paciente de GrowMED.",
    img: "https://i.pravatar.cc/150?u=lisa"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-48 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-28">
        <h2 className="font-black mb-8 tracking-tighter">Éxito Verificado.</h2>
        <p className="text-2xl text-white/30 font-light max-w-2xl mx-auto">Resultados entregados a instituciones médicas de clase mundial.</p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {testimonials.map((t, i) => (
          <div key={i} className="break-inside-avoid bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-10 hover:border-primary/20 transition-all group">
            <div className="flex items-center gap-5 mb-8">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-2xl border-2 border-primary/20 object-cover" />
              <div>
                <p className="font-black text-lg">{t.name}</p>
                <p className="text-primary text-sm font-bold uppercase tracking-wider">{t.handle}</p>
              </div>
            </div>
            <p className="text-white/50 text-xl font-light italic leading-relaxed mb-8">"{t.text}"</p>
            <div className="flex gap-1.5 text-primary">
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
