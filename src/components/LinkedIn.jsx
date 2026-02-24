import React, { useRef, useEffect } from "react";

// IMPORTANTE: Asegurate de tener estas imágenes en tu carpeta
import perfilImg from '../assets/images/marina.jpg';
import linkedin1 from '../assets/images/linkedin-1.jpg';
import linkedin2 from '../assets/images/linkedin-2.jpg';
import linkedin3 from '../assets/images/linkedin-3.jpg';
import linkedin4 from '../assets/images/linkedin-4.jpg';
import linkedin5 from '../assets/images/linkedin-5.jpg';
import linkedin6 from '../assets/images/linkedin-6.jpg';
import linkedin7 from '../assets/images/linkedin-7.jpg';
import linkedin8 from '../assets/images/linkedin-8.jpg';


export default function LinkedIn() {
    const carruselRef = useRef(null);

    
    useEffect(() => {
        const intervalo = setInterval(() => {
            if (carruselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carruselRef.current;
                
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    carruselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    carruselRef.current.scrollBy({ left: 410, behavior: "smooth" }); // 410px por el ancho de estas tarjetas
                }
            }
        }, 4000); 

        return () => clearInterval(intervalo);
    }, []);

    const publicaciones = [
        {
            id: 1,
            tiempo: "5 años",
            imagen: linkedin1,
            likes: 15,
            comentarios: 2,
            link: "https://www.linkedin.com/feed/update/urn:li:activity:6787478614167326720/",
            texto: (
                <>
                    Gracias por la oportunidad de seguir logrando un imposible tras otro a pesar de la pandemia, trabajando en silencio, aprendiendo y compartiendo en equipo experiencias profesionales internacionales con los mejores del mundo... 
                    <br/><br/>
                    <span className="font-semibold text-[#0a66c2]">#sports #sportsbiz #soccer #futbol</span>
                </>
            )
        },
        {
            id: 2,
            tiempo: "2 meses",
            imagen: linkedin2,
            likes: 15,
            comentarios: 3,
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7382160657338601473/",
            texto: (
                <>
                    Esta semana tuve el privilegio de participar en <span className="font-semibold text-[#0a66c2]">#Argenthink</span>, la 34.ª Jornada Anual de la Asociación Cristiana de Dirigentes de Empresa. La Jornada renovó mis energías y confirmó que no estamos solos...
                </>
            )
        },
        {
            id: 3,
            tiempo: "1 año",
            imagen: linkedin3,
            likes: 15,
            comentarios: 0,
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7158296613906481152/",
            texto: (
                <>
                    Celebrar la vida siempre, en todas partes. Digital Factory Summit Latin América. Gracias México 🇲🇽
                    <br/><br/>
                    <span className="font-semibold text-[#0a66c2]">Diageo | Grupo Televisa | Omnicom Media Group</span>
                </>
            )
        },
        {
            id: 4,
            tiempo: "2 años",
            imagen: linkedin4,
            likes: 16,
            comentarios: 0,
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7064789897051537408/",
            texto: (
                <>
                    We work hard, make continuous efforts, and face challenges together. We keep humble, strong, and simple. All we get is love. One team. One dream. More to come soon. Stay tuned, my friends!
                    <br/><br/>
                    <span className="font-semibold text-[#0a66c2]">#work #love #celebrate #media #global</span>
                </>
            )
        },
        {
            id: 5,
            tiempo: "3 años",
            imagen: linkedin5,
            likes: 11,
            comentarios: 5,
            link: "https://www.linkedin.com/feed/update/urn:li:activity:6989011361754169344/",
            texto: (
                <>
                    Pasamos por WEF Argentina 2022 en Ministerio de Relaciones Exteriores para difundir el Proyecto Armando a Diego Maradona. Este proyecto logró que muchos chicos y chicas mejoren habilidades de lecto-escritura...
                </>
            )
        },
        {
            id: 6,
            tiempo: "3 años",
            imagen: linkedin6,
            likes: 7,
            comentarios: 0,
            link: "https://www.linkedin.com/feed/update/urn:li:activity:6898033964498378752/",
            texto: (
                <>
                    Do you know why I love football/soccer? Football is like life: you need to focus on your position. Each one must add to the team with their talent. Enjoy your passion and celebrate life!
                    <br/><br/>
                    <span className="font-semibold text-[#0a66c2]">#football #talent #team #soccer</span>
                </>
            )
        },
        {
            id: 7,
            tiempo: "4 años",
            imagen: linkedin7,
            likes: 9,
            comentarios: 2,
            link: "https://www.linkedin.com/feed/update/urn:li:activity:6787478614167326720/",
            texto: (
                <>
                    Recibimos el Premio Emprendedor Solidario del Foro Ecuménico y la Fundación Internacional Jorge Luis Borges por nuestros trabajos "Abrigar es Abrazar" y "Medias perdidas" junto a todo el fútbol argentino.
                </>
            )
        },
        {
            id: 8,
            tiempo: "5 años",
            imagen: linkedin8,
            likes: 26,
            comentarios: 2,
            link: "https://www.linkedin.com/feed/update/urn:li:activity:6743306769142960128/",
            texto: (
                <>
                    <span className="font-semibold text-[#0a66c2]">#English</span> | Thank you Victoria Tolosa Paz, Head of the Federal Council for Social Policies in Argentina for watching, listening and committing yourself to building bridges and opportunities.
                </>
            )
        }
    ];

    return (
        <section id="linkedin" className="relative bg-neutral-50 px-4 md:px-6 py-12 md:py-24 overflow-visible font-sans">
            <div className="z-10 relative mx-auto max-w-7xl">
                
                
                <div className="flex md:flex-row flex-col justify-between items-center md:items-end gap-6 mb-10 md:mb-16 md:text-left text-center">
                    <div className="w-full md:w-auto">
                        <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-8 h-8 text-[#0a66c2]" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span className="font-semibold text-[#0a66c2] text-sm uppercase tracking-wide">
                                Actividad Reciente
                            </span>
                        </div>
                        <h2 className="font-semibold text-neutral-900 text-3xl md:text-5xl leading-tight">
                            Mis últimas publicaciones
                        </h2>
                    </div>
                    
                    <a href="https://www.linkedin.com/in/marinamendez/" target="_blank" rel="noopener noreferrer" className="group flex justify-center items-center gap-2 bg-white hover:bg-neutral-50 px-5 py-2.5 border border-[#0a66c2] rounded-full w-full md:w-auto font-semibold text-[#0a66c2] transition-all">
                        <span>Ver todo en LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                        </svg>
                    </a>
                </div>

             
                <div 
                    ref={carruselRef}
                    className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                >
                    {publicaciones.map((post) => (
                        <div key={post.id} className="min-w-[320px] md:min-w-[410px] snap-center h-auto">
                            
                            <div className="relative flex flex-col bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-neutral-200/60 rounded-xl h-full overflow-hidden text-left transition-shadow duration-300">
                                
                                
                                <div className="flex gap-3 p-4 pb-2">
                                    <img alt="Marina Paula Méndez" className="border border-neutral-100 rounded-full w-12 h-12 object-cover" src={perfilImg} />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-semibold text-[14px] text-neutral-900 truncate leading-snug">
                                                Marina Paula Méndez
                                            </h3>
                                            <button className="hover:bg-neutral-100 p-1 rounded-full text-neutral-500 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis w-5 h-5" aria-hidden="true">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="19" cy="12" r="1" />
                                                    <circle cx="5" cy="12" r="1" />
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="text-[12px] text-neutral-500 truncate leading-snug">
                                            Global CEO/CMO | Innovation, AI & Marketing
                                        </p>
                                        <div className="flex items-center gap-1 mt-0.5 text-[12px] text-neutral-400 leading-snug">
                                            <span>{post.tiempo}</span>
                                            <span>•</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3" aria-hidden="true">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                                <path d="M2 12h20" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                              
                                <div className="px-4 py-2">
                                    <div className="mb-1 text-[14px] text-neutral-900 break-words line-clamp-3 leading-normal">
                                        {post.texto}
                                    </div>
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="focus:outline-none font-semibold text-[14px] text-neutral-500 hover:text-[#0a66c2] hover:underline transition-colors">
                                        ...ver más
                                    </a>
                                </div>

                                
                                <div className="mt-2">
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="block bg-neutral-100 focus:outline-none w-full aspect-[1.91/1] overflow-hidden">
                                        <img alt="Post media" className="hover:opacity-95 w-full h-full object-cover transition-opacity bg-neutral-200" src={post.imagen} />
                                    </a>
                                </div>

                                
                                <div className="flex justify-between items-center mt-auto px-4 py-2 border-neutral-100 border-b text-[12px] text-neutral-500">
                                    <div className="flex items-center gap-1">
                                        <img alt="Like" className="w-4 h-4" src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" />
                                        <img alt="Love" className="-ml-1 w-4 h-4" src="https://static.licdn.com/aero-v1/sc/h/b1dl5jk88euc7e9ri50xy5qo8" />
                                        <span className="ml-1 hover:text-[#0a66c2] hover:underline cursor-pointer">
                                            {post.likes}
                                        </span>
                                    </div>
                                    <div className="hover:text-[#0a66c2] hover:underline cursor-pointer">
                                        {post.comentarios} comentarios
                                    </div>
                                </div>

                                
                                <div className="flex justify-between px-1 py-1">
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex flex-1 justify-center items-center gap-1.5 hover:bg-neutral-100 py-3 rounded-md font-semibold text-[14px] text-neutral-600 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up w-5 h-5" aria-hidden="true"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                                        <span className="hidden sm:block">Recomendar</span>
                                    </a>
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex flex-1 justify-center items-center gap-1.5 hover:bg-neutral-100 py-3 rounded-md font-semibold text-[14px] text-neutral-600 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-5 h-5" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>
                                        <span className="hidden sm:block">Comentar</span>
                                    </a>
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex flex-1 justify-center items-center gap-1.5 hover:bg-neutral-100 py-3 rounded-md font-semibold text-[14px] text-neutral-600 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 lucide-share-2 w-5 h-5" aria-hidden="true"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                        <span className="hidden sm:block">Compartir</span>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}