import { ArrowUpRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center py-4 px-6 md:py-8 md:px-12">

      <header className="max-w-7xl w-full flex justify-between items-center">

        <div className="font-bold text-lg md:text-xl z-10">
          <h1>Marina Mendez</h1>
        </div>
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 lg:gap-8 text-sm lg:text-base font-medium text-zinc-500">
          <a href="#sobre-mi" className="hover:text-zinc-900 transition-colors">Sobre mi</a>
          <a href="#proyectos" className="hover:text-zinc-900 transition-colors">Proyectos</a>
          <a href="#prensa" className="hover:text-zinc-900 transition-colors">Prensa</a>
          <a href="#social" className="hover:text-zinc-900 transition-colors">Social</a>
          <a href="#contacto" className="hover:text-zinc-900 transition-colors">Contacto</a>
        </nav>

        <div className="z-10">
          <a href="#hablemos" className="flex items-center gap-1 text-sm md:text-base font-bold border-b-[1.5px] border-zinc-900 pb-0.5 hover:opacity-60 transition-opacity">
            Hablemos <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </header>

    </header>
  );
}