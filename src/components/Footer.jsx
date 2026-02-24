import React from "react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-neutral-50 pt-20">

            <div className="px-6 pb-24 text-center">
                <h2 className="mb-4 font-medium text-neutral-900 text-3xl md:text-4xl">
                    Conectemos

                </h2>
                <p className="mx-auto mb-8 max-w-md text-neutral-500 text-sm">
                    Siempre entusiasmada por colaborar en proyectos innovadores. Ya sea que estés comenzando o busques refinar una estrategia global.
                </p>
            </div>
            <div className="flex justify-center gap-6">
                <a href="mailto:marina@rtndigitalhub.com" className="inline-flex items-center gap-1 hover:opacity-70 pb-0.5 vorder-black border-b font-semibold text-sm transition-opacity">

                    Enviar email
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4" aria-hidden="true">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                    </svg>
                </a>
            </div>
            {/* LINK Y COPYRIHT */}
            <div className="bg-neutral-900 px-6 py-16 text-white">
                <div className="flex md:flex-row flex-col justify-between imtes-center gap-8 mx-auto max-w7xl">
                    {/*NAVEGACION*/}
                    <div className="flex gap-6 font-medium text-neutral-400 text-xs">
                        <a href="#" className="hover:text-white transition-colors">Inicio</a>
                        <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
                        <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
                        <a href="#contact" className="hover:text-white transition-colors">Prensa</a>

                    </div>
                    {/*REDES SOCIALES */}
                    <div className="flex items-center gap-6">
                        <a href="https://www.linkedin.com/in/marinamendez/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-5 h-5" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@MarinaMendez22" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube w-5 h-5" aria-hidden="true">
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                <path d="m10 15 5-3-5-3z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/marinamendez22" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-5 h-5" aria-hidden="true">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </a>
                        <a href="https://x.com/marinamendez" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter w-5 h-5" aria-hidden="true">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                        </a>
                    </div>
                    {/* EMAIL A LA DERECHAS */}
                    <div className="flex flex-col items-center md:items-end gap-1">
                        <a href="mailto:marina@rtndigitalhub.com" className="font-light hover">marina@rtndigitalhub.com </a>

                    </div>
                </div>
                {/* DERECHO ED AUTOR */}
                <div className="flex justify-between items-center mx-auto mt-12 pt-8 border-white/10 border-t max-w-7xl text-[10px] text-neutral-500 uppercase tracking-widest">
                    <span>© 2026 Marina Paula Méndez</span>
                    <span>Todos los derechos reservados</span>
                </div>
            </div>

        </footer >
    )
}