
import React from 'react';

const testimonials = [
  {
    name: "Sarah Mitchell",
    handle: "CEO, TechFlow Logistics",
    text: "Hemos automatizado todo nuestro flujo de trabajo de procesamiento de pedidos. Lo que solía llevar a mi equipo 25 horas a la semana ahora funciona automáticamente. Hemos procesado más de 10.000 pedidos sin añadir una sola persona al equipo.",
    img: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Chen",
    handle: "Fundador, Coaching de Rendimiento Máximo",
    text: "El sistema de IA maneja toda la incorporación, programación y seguimiento de mis clientes. Pasé de pasar 15 horas a la semana en administración a cero. Ahora puedo concentrarme en el entrenamiento y hemos duplicado nuestra capacidad de clientes.",
    img: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Jennifer Rodríguez",
    handle: "Propietario, Summit Marketing Group",
    text: "Construimos un sistema de contenido personalizado que genera, programas y publicaciones para todos nuestros clientes. Reducir nuestro tiempo de producción de contenido en un 60% y aumentar la calidad de la salida. Nuestros clientes están viendo un compromiso 3 veces mejor.",
    img: "https://i.pravatar.cc/150?u=jennifer"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 px-6 max-w-[1400px] mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          Impulsando <span className="bg-gradient-to-r from-blue-400 via-primary to-purple-400 bg-clip-text text-transparent">empresas de alto crecimiento</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="relative group bg-[#0a0a0b] border border-white/5 rounded-[2.5rem] p-10 md:p-12 hover:border-primary/20 transition-all duration-500 overflow-hidden">
            {/* Icono de comillas decorativo en el fondo */}
            <div className="absolute top-8 right-8 text-white/5 select-none pointer-events-none">
              <svg className="w-20 h-20 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017V21H5.017Z" />
              </svg>
            </div>

            <div className="flex items-center gap-5 mb-10 relative z-10">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full border-2 border-white/10 object-cover shadow-2xl" />
              <div className="flex flex-col">
                <p className="font-black text-xl text-white tracking-tight">{t.name}</p>
                <p className="text-blue-400/80 text-sm font-bold tracking-wide">{t.handle}</p>
              </div>
            </div>

            <p className="text-white/60 text-lg md:text-xl font-light italic leading-relaxed relative z-10">
              "{t.text}"
            </p>

            {/* Brillo sutil al hacer hover */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 blur-[80px] group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
