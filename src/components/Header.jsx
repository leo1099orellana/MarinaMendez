import { ArrowUpRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center py-8 px-8 lg:px-16 absolute top-0 z-50 bg-white/80 backdrop-blur-sm">

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-12 lg:gap-24 items-center">


        <div className="font-bold text-xl">
          <h1>Marina Mendez</h1>
        </div>

        <nav className="hidden md:flex justify-start lg:justify-center gap-8 text-base font-medium text-zinc-500">
          <a href="#sobre-mi" className="hover:text-zinc-900 transition-colors">Sobre mi</a>
          <a href="#proyectos" className="hover:text-zinc-900 transition-colors">Proyectos</a>
          <a href="#prensa" className="hover:text-zinc-900 transition-colors">Prensa</a>
          <a href="#social" className="hover:text-zinc-900 transition-colors">Social</a>
          <a href="#contacto" className="hover:text-zinc-900 transition-colors">Contacto</a>
        </nav>

        <div className="flex justify-start lg:justify-end">
          <a href="#hablemos" className="flex items-center gap-1 text-base font-bold border-b-[1.5px] border-zinc-900 pb-0.5 hover:opacity-60 transition-opacity">
            Hablemos <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </div>

      </div>

    </header>
  );
}