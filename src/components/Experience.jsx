import React from 'react';
import river from '../assets/images/river.jpg'; 
import milan from '../assets/images/milan.jpg';

export default function Experience() {
  return (
    <section id="trayectoria" className="mx-auto px-6 py-32 max-w-7xl">
      
      {/* ENCABEZADO DE SECION */}
      <div className="gap-12 grid grid-cols-1 lg:grid-cols-12 mb-20">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-neutral-900 rounded-full w-2 h-2"></span>
            <span className="font-semibold text-neutral-500 text-sm uppercase tracking-wide">
              Trayectoria
            </span>
          </div>
          <h2 className="font-normal text-neutral-900 text-4xl md:text-5xl leading-tight">
            Camino Profesional
          </h2>
        </div>
        
        <div className="flex flex-col justify-end items-start lg:items-end lg:col-span-8">
          <p className="max-w-md text-neutral-500">
            Más de 25 años liderando proyectos que unen el deporte, la comunicación y los valores humanos en un escenario global.
          </p>
          <a href="mailto:marina@rtndigitalhub.com" className="mt-4 text-sm decoration-neutral-300 hover:decoration-black underline underline-offset-4 transition-all">
            Solicitar CV Completo ↗
          </a>
        </div>
      </div>

      {/* LISTA DE EXPERIENCIAS */}
      <div className="flex flex-col">
        
        {/* ITEM 1 */}
        <div className="group py-10 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-neutral-50 transition-colors px-4 -mx-4 rounded-xl">
          <div className="md:col-span-4">
            <h4 className="font-medium text-neutral-900 text-lg leading-snug transition-transform group-hover:translate-x-2 duration-300">
              River Plate, La Liga, Organizaciones Globales
            </h4>
            <p className="mt-1 font-mono text-neutral-400 text-sm">Actualidad</p>
          </div>
          <div className="md:col-span-5">
            <p className="text-neutral-600 text-sm leading-relaxed">
              Asesoría a clubes y organizaciones deportivas en ejes comerciales, educativos, sociales y comunicacionales. Impulsando la profesionalización del fútbol femenino y masculino.
            </p>
            <p className="mt-2 text-neutral-400 text-xs uppercase">
              Board Advisory & Consultoría — Internacional
            </p>
          </div>
          <div className="flex flex-wrap justify-start md:justify-end gap-2 md:col-span-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium border bg-neutral-900 text-white border-neutral-900">Estrategia</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium border bg-neutral-900 text-white border-neutral-900">Fútbol</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium border bg-neutral-900 text-white border-neutral-900">Gestión</span>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="group py-10 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-neutral-50 transition-colors px-4 -mx-4 rounded-xl">
          <div className="md:col-span-4">
            <h4 className="font-medium text-neutral-900 text-lg leading-snug transition-transform group-hover:translate-x-2 duration-300">
              Diageo, Unilever, Coca‑Cola, Abbott
            </h4>
            <p className="mt-1 font-mono text-neutral-400 text-sm">Trayectoria - Destacada</p>
          </div>
          <div className="md:col-span-5">
            <p className="text-neutral-600 text-sm leading-relaxed">
              Liderazgo internacional en comunicación estratégica, medios, creatividad y gestión de proyectos globales. Alianzas estratégicas con Meta, TikTok, Google y X.
            </p>
            <p className="mt-2 text-neutral-400 text-xs uppercase">
              Liderazgo en Campañas Globales — Global
            </p>
          </div>
          <div className="flex flex-wrap justify-start md:justify-end gap-2 md:col-span-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium border bg-neutral-100 text-neutral-600 border-neutral-100">Marketing</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium border bg-neutral-100 text-neutral-600 border-neutral-100">Alianzas Digitales</span>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="group py-10 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-neutral-50 transition-colors px-4 -mx-4 rounded-xl">
          <div className="md:col-span-4">
            <h4 className="font-medium text-neutral-900 text-lg leading-snug transition-transform group-hover:translate-x-2 duration-300">
              Rutgers, UBA, ITBA, UnTref, UnLa, UB
            </h4>
            <p className="mt-1 font-mono text-neutral-400 text-sm">Académico - Grado/Posgrado</p>
          </div>
          <div className="md:col-span-5">
            <p className="text-neutral-600 text-sm leading-relaxed">
              Docente universitaria de grado y posgrado en instituciones prestigiosas, formando a las próximas generaciones de comunicadores.
            </p>
            <p className="mt-2 text-neutral-400 text-xs uppercase">
              Docente Universitaria — USA / Argentina
            </p>
          </div>
          <div className="flex flex-wrap justify-start md:justify-end gap-2 md:col-span-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium border bg-neutral-100 text-neutral-600 border-neutral-100">Educación</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium border bg-neutral-100 text-neutral-600 border-neutral-100">Mentoria</span>
          </div>
        </div>

        {/* ITEM 4  */}
        <div className="group py-10 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-neutral-50 transition-colors px-4 -mx-4 rounded-xl border-b">
          <div className="md:col-span-4">
            <h4 className="font-medium text-neutral-900 text-lg leading-snug transition-transform group-hover:translate-x-2 duration-300">
              Vaticano / Clásicos por la Paz
            </h4>
            <p className="mt-1 font-mono text-neutral-400 text-sm">Hito - Social</p>
          </div>
          <div className="md:col-span-5">
            <p className="text-neutral-600 text-sm leading-relaxed">
              Creadora del evento global Clásicos por la Paz con el respaldo de CONMEBOL, AFA, LaLiga y autoridades del Vaticano. Organización de videconferencias con el Papa.
            </p>
            <p className="mt-2 text-neutral-400 text-xs uppercase">
              Fundadora & Organizadora — Global
            </p>
          </div>
          <div className="flex flex-wrap justify-start md:justify-end gap-2 md:col-span-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium border bg-neutral-100 text-neutral-600 border-neutral-100">Impacto Social</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium border bg-neutral-100 text-neutral-600 border-neutral-100">Paz</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium border bg-neutral-100 text-neutral-600 border-neutral-100">Eventos</span>
          </div>
          
          {/* GALERIA */}
          <div className="gap-4 grid grid-cols-2 md:grid-cols-4 md:col-span-12 mt-8">
            <div className="bg-neutral-200 rounded-xl aspect-square overflow-hidden">
              <img className="w-full h-full object-cover" alt="Trabajo en Vaticano" src={river}/>
            </div>
            <div className="bg-neutral-200 rounded-xl aspect-square overflow-hidden">
              <img className="w-full h-full object-cover" alt="Fútbol por la Paz" src={milan} />
            </div>
            <div className="flex items-center col-span-2 bg-neutral-50 p-6 rounded-xl">
              <p className="text-neutral-500 text-sm leading-relaxed">
                "Integrando clubes legendarios como AC Milan, Boca Juniors y River Plate para promover valores universales."
              </p>
              <div className="flex justify-center items-center bg-neutral-900 ml-auto rounded-full w-12 h-12 text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-5 h-5" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}