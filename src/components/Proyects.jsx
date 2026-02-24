import React, { useRef, useEffect } from "react";

import Scholas from '../assets/images/scholas.jpg';
import Paz from '../assets/images/paz.jpg';
import Diego from '../assets/images/diego.jpg';
import Futbol from '../assets/images/futbol-zoom.jpg';
import OIP from '../assets/images/OIP.jpg';

export default function Projects() {
    
    const carruselRef = useRef(null);

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (carruselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carruselRef.current;
                
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    carruselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    carruselRef.current.scrollBy({ left: 350, behavior: "smooth" });
                }
            }
        }, 3000); 

        return () => clearInterval(intervalo);
    }, []);

    const proyectos = [
        {
            id: 1,
            titulo: "Una Bella Jugada: Homenaje a René Houseman",
            descripcion: "Intervención artística y muralismo en Parque Patricios para resignificar la historia de un ídolo popular.",
            etiqueta: "Arte & Comunidad",
            imagen: Scholas, 
            tieneVideo: true,
            linkVideo: "https://youtu.be/9EwViCrVHb4" 
        },
        {
            id: 2,
            titulo: "Fútbol con Valores",
            descripcion: "Programa internacional de educación y ética deportiva.",
            etiqueta: "Desarrollo Humano",
            imagen: Diego,
            tieneVideo: false,
            linkVideo: ""
        },
        {
            id: 3,
            titulo: "Clásicos por la Paz",
            descripcion: "Eventos globales con el respaldo de CONMEBOL, AFA, LaLiga y autoridades del Vaticano.",
            etiqueta: "Impacto Social",
            imagen: Paz, 
            tieneVideo: false,
            linkVideo: ""
        },
        {
            id: 4,
            titulo: "Profesionalización del Fútbol",
            descripcion: "Impulsando estándares, visibilidad y desarrollo integral en el fútbol femenino y masculino.",
            etiqueta: "Igualdad & Desarrollo",
            imagen: Futbol, 
            tieneVideo: false,
            linkVideo: ""
        },
        {
            id: 5,
            titulo: "Videoconferencia Papa Francisco & Google",
            descripcion: "Primer video conferencia de un Papa con niños y niñas de todo el mundo.",
            etiqueta: "Tecnología & Fe",
            imagen: OIP,
            tieneVideo: true,
            linkVideo: "https://youtu.be/9EwViCrVHb4"
        }
    ];

    return (
        <section id="projects" className="bg-neutral-50 px-6 py-24">
            <div className="mx-auto max-w-7xl">

                <div className="mb-16 text-center">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <span className="bg-neutral-900 rounded-full w-1.5 h-1.5"></span>
                        <span className="font-semibold text-neutral-500 text-xs uppercase tracking-wide">
                            Portafolio
                        </span>
                    </div>
                    <h2 className="text-neutral-900 text-4xl md:text-5xl">
                        Proyectos Insignia
                    </h2>
                </div>

                <div 
                    ref={carruselRef} 
                    className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                >
                    {proyectos.map((proyecto) => (
                        <div
                            key={proyecto.id}
                            className="group min-w-[300px] md:min-w-[350px] snap-center"
                        >
                            <a 
                                href={proyecto.tieneVideo ? proyecto.linkVideo : "#"} 
                                target={proyecto.tieneVideo ? "_blank" : "_self"}
                                rel="noreferrer"
                                className="relative bg-neutral-200 mb-4 rounded-2xl aspect-square overflow-hidden block cursor-pointer"
                            >
                                <img
                                    alt={proyecto.titulo}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bg-neutral-300"
                                    src={proyecto.imagen}
                                />

                                {proyecto.tieneVideo && (
                                    <div className="absolute inset-0 flex justify-center items-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                                        <div className="flex justify-center items-center bg-neutral-900/50 group-hover:bg-neutral-900 backdrop-blur-sm rounded-full w-14 h-14 text-white group-hover:scale-110 transition-all duration-300 transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play ml-1 w-5 h-5" aria-hidden="true">
                                                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                <div className="bottom-4 left-4 absolute flex gap-2">
                                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-md font-bold text-[10px] uppercase tracking-wider text-black">
                                        {proyecto.etiqueta}
                                    </span>
                                </div>
                            </a>

                            <div className="flex flex-col gap-1 pr-4">
                                <h3 className="font-medium text-neutral-900 text-lg leading-tight">
                                    {proyecto.titulo}
                                </h3>
                                <p className="text-neutral-500 text-sm">
                                    {proyecto.descripcion}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}