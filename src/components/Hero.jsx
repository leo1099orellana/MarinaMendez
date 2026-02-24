import { ArrowDown } from 'lucide-react';
import marinaPapa from '../assets/images/marina_papa.jpg'; 

export default function Hero() {
  return (
    <main className="relative flex-1 flex items-center justify-center pt-24 pb-16 px-8 lg:px-16 min-h-screen">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-12 lg:gap-24 items-center">
        
        <div className="hidden lg:flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <div className="w-[1px] h-24 bg-zinc-200"></div>
            <p className="text-[9px] text-zinc-400 tracking-[0.25em] uppercase [writing-mode:vertical-rl] rotate-180 font-medium">
              Medios & Creatividad
            </p>
          </div>
          <div>
            <p className="text-4xl font-light leading-none tracking-tight">+25</p>
            <p className="text-[8px] text-zinc-400 tracking-widest uppercase mt-2 font-medium">Años de experiencia</p>
          </div>
          <div>
            <p className="text-3xl font-light leading-none tracking-tight">6</p>
            <p className="text-[8px] text-zinc-400 tracking-widest uppercase mt-2 font-medium">Idiomas</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] leading-[0.9] tracking-tighter font-light text-zinc-900">
            Marina <br /> Paula <br /> Mendez
          </h1>
          <p className="mt-8 text-zinc-400 text-sm md:text-base max-w-[400px] font-light leading-relaxed">
            Ejecutiva Internacional de Medios y Creatividad especializada en Fútbol Global y Tecnología con Alma.
          </p>
        </div>

        <div className="w-full max-w-sm mx-auto lg:mx-0">
          <img
            src={marinaPapa}
            alt="Marina Paula Méndez con el Papa"
            className="w-full h-auto object-cover rounded-[1.5rem] aspect-[3/4] shadow-sm"
          />
        </div>

      </div>

      {/* BOTON DESLIZAR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 cursor-pointer hover:text-zinc-900 transition-colors">
        <span className="text-[9px] tracking-[0.2em] uppercase font-bold">Deslizar</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>

    </main>
  );
}