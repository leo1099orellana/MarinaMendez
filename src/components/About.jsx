import React from 'react';

export default function About() {
    return (
        <section id="about-me" className='bg-neutral-50 px-6 py-24'>
            <div className='mx-auto max-w-6xl'>
                <div className='items-start gap-12 lg:gap-20 grid grid-cols-1 lg:grid-cols-2'>
                    {/* COLUMNA IZQUIERDA */}
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-2'>
                            <span className='font-bold text-neutral-400 text-sm uppercase tracking-widest'>
                                Perfil Profesional
                            </span>
                            <h2 className='font-serif font-medium text-neutral-900 text-3xl md:text-5xl'>
                                Sobre mi
                            </h2>

                        </div>
                        <div className='flex flex-col gap-6 font-light text-neutral-600 text-lg text-justify leading-relaxed'>
                            <p>
                                Ejecutiva internacional con más de 25 años de experiencia en comunicación estratégica, medios y marketing digital a nivel global. Con doble nacionalidad (España y Argentina), lidero la creación estratégica de campañas mediante plataformas digitales, IA y programática para marcas globales como Diageo, Unilever, Coca‑Cola y Abbott.
                            </p>
                            <p>
                                Mi visión integra el fútbol, la cultura, la educación, el arte y la tecnología como motores de transformación social y desarrollo humano.
                            </p>
                        </div>
                        <div className='pt-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-32 h-32 text-neutral-200/80 rotate-12" aria-hidden="true">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA*/}
                    <div className='flex flex-col gap-6'>

                        {/* TARJETA DE LA CITA*/}
                        <div className='bg-white shadow-sm p-8 border border-neutral-100 rounded-3xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote fill-neutral-100 mb-4 w-8 h-8 text-neutral-300" aria-hidden="true">
                                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                            </svg>
                            <p className="font-light text-neutral-900 text-xl md:text-2xl italic leading-relaxed">
                                "El fútbol es mucho más que un juego: es una escuela de vida. Cada jugador puede ser maestro, cada cancha un aula, y todos juntos, goleadores por la paz."
                            </p>
                        </div>

                        {/* TARJETA HONORIS CAUSA */}
                        <div className='bg-neutral-900 shadow-xl p-8 md:p-10 rounded-3xl text-white'>

                            <div className='flex items-start gap-5 mb-8 pb-8 border-neutral-800 border-b'>
                                <div className='flex justify-center items-center bg-white/10 rounded-full w-14 h-14 text-white shrink-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-7 h-7" aria-hidden="true">
                                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                                        <circle cx="12" cy="8" r="6" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className='mb-1 font-semibold text-xl'>
                                        Honoris causa
                                    </h4>
                                    <p className='text-neutral-400 text-sm uppercase tracking-wide'> Por impacto social y profesional
                                    </p>


                                </div>
                            </div>

                            <div className='flex-gap-4'>

                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check mt-1 w-5 h-5 text-neutral-500 shrink-0" aria-hidden="true">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                            <p className='text-neutral-300 text-sm leading-relaxed'>
                                <strong className='text-white'> Proyectos globales:</strong> Impulsora de "Fútbol con Valores" y "Clásicos por la Paz” desde el Vaticano a nivel global.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check mt-1 w-5 h-5 text-neutral-500 shrink-0" aria-hidden="true">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                <strong className="text-white">Idiomas:</strong> Español, Inglés, Portugués, Italiano.
                            </p>
                        </div>

                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>

    );
}