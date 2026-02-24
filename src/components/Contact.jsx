import { Divide } from 'lucide-react';
import React from 'react';

export default function Contact() {
    return (
        <section className='px-6 py-12'>
            <div className='relative flex justify-center items-center bg-neutral-900 mx-auto rounded-3xl- max-w-7xl h-[500px] overflow-hidden text-white'>

                {/*CONTENEDOR CENTRAL DE TEXTOS */}
                <div className='z-10 relative px-6 max-w-2xl text-center'>

                    {/*ETIQUETA SUPERIOR */}
                    <span className='block mb-4 text-neutral-400 text-xs uppercase tracking-widest'>
                        (Colaboración & Asesoría)
                    </span>

                    {/*TITULO PRINCIPAL */}
                    <h2 className='mb-6 font-semibold text-4xl md:text-5xl leading-tight'>
                        ¿Estás para crear algo extraordinario?
                    </h2>

                    {/*PARRAFO DESCRIPTIVO */}
                    <p className='mx-auto mb-10 max-w-lg text-neutral-400 text-sm md:text-base'>
                        Conectamos ideas, marcas, tecnología, fútbol y arte para mejorar la rentabilidad, capacitando y potenciando equipos de trabajo, desarrollando la transformación digital, impactando en las audiencias con contenidos/campañas de alta performance y mejorando el mundo.
                    </p>

                    {/*BOTON */}
                    <a
                        href="mailto:marina@rtndigitalhub.com"
                        className="inline-flex items-center gap-2 pb-1 border-white hover:border-neutral-300 border-b hover:text-neutral-300 text-sm transition-colors"
                    >
                        Hablemos
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-up-right w-4 h-4"
                            aria-hidden="true"
                        >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                        </svg>
                    </a>

                </div>
            </div>
            D

        </section>
    )
}