import react, {useRef, useEffect} from 'react';
import Papa from '../assets/images/papa-atletico.jpg';
import Huracan from '../assets/images/Huracan.jpg';
import Chiqui from '../assets/images/Chiqui.jpg';
import Diego from '../assets/images/diego-armando.jpg';

export default function Press() {
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
            
        }, 3500);

        return () => clearInterval(intervalo);
    }, []);

    const noticias = [
         {
            id: 1,
            titulo: "“El Atlético de Madrid se une a los Clásicos por la Paz”",
            descripcion: "Participación junto al Papa Francisco e impulso de la integración social.",
            etiqueta: "ATLÉTICO DE MADRID",
            fecha: "19 Nov 2015",
            imagen: Papa, 
            link: "https://www.atleticodemadrid.com/noticias/el-atletico-de-madrid-se-une-a-futbol-por-la-paz"
        },
        {
            id: 2,
            titulo: "Primera conferencia “Cultura Huracán” con CONMEBOL",
            descripcion: "Oradora junto a Presidente Conmebol en capacitación para prensa.",
            etiqueta: Huracan,
            fecha: "20 Nov 2020",
            imagen: Huracan, 
            link: "https://cahuracan.com/noticias/primera-conferencia-cultura-huracan-con-conmebol"
        },
        {
            id: 3,
            titulo: "Acuerdo de colaboración con la AFA",
            descripcion: "Convenio centrado en cultura de paz, capacitación y difusión deportiva.",
            etiqueta: Chiqui,
            fecha: "29 Ago 2017",
            imagen: Chiqui, 
            link: "https://www.afa.com.ar/6397/posts/acuerdo-de-colaboracion"
        },
        {
            id: 4,
            titulo: "Proyecto Educativo: “Armando a Diego Maradona”",
            descripcion: "Vincula la historia de los países a la vida de ídolos deportivos e idiomas.",
            etiqueta: "EDUCACIÓN & CULTURA",
            fecha: "Especial",
            imagen: Diego, 
            link: "https://revistametasentidos.com.ar/secciones/diegologias/armando-a-diego-maradona/"
        }
    ];
        
    return (
        <section id="press" className="bg-white px-6 py-24">
            <div className="mx-auto max-w-7xl">
                
                {/* ENCABEZADO */}
                <div className="mb-16 text-center">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <span className="bg-neutral-900 rounded-full w-1.5 h-1.5"></span>
                        <span className="font-semibold text-neutral-500 text-xs uppercase tracking-wide">
                            Prensa
                        </span>
                    </div>
                    <h2 className="text-neutral-900 text-4xl md:text-5xl">
                        Notas Destacadas
                    </h2>
                </div>

                {/* CARRUSEL*/}
                <div 
                    ref={carruselRef}
                    className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                >
                    {noticias.map((nota) => (
                        <div 
                            key={nota.id} 
                            className="min-w-[300px] md:min-w-[350px] snap-center h-auto"
                        >
                            <a 
                                href={nota.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group block bg-neutral-50 hover:shadow-lg p-3 rounded-2xl h-full transition-shadow duration-300"
                            >
                                <div className="relative bg-neutral-200 mb-6 rounded-xl aspect-[3/2] overflow-hidden">
                                    <img 
                                        alt={nota.titulo} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-neutral-300" 
                                        src={nota.imagen} 
                                    />
                                    <div className="top-2 right-2 absolute bg-white/80 p-1.5 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4 text-black" aria-hidden="true">
                                            <path d="M15 3h6v6" />
                                            <path d="M10 14 21 3" />
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="px-2 pb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="bg-neutral-900 px-2 py-0.5 rounded font-bold text-[10px] text-white uppercase tracking-wider">
                                            {nota.etiqueta}
                                        </span>
                                        <span className="font-medium text-neutral-400 text-xs">
                                            {nota.fecha}
                                        </span>
                                    </div>
                                    <h3 className="mb-2 font-medium text-neutral-900 group-hover:text-blue-900 text-lg leading-snug transition-colors">
                                        {nota.titulo}
                                    </h3>
                                    <p className="mt-2 text-neutral-500 text-sm">
                                        {nota.descripcion}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}


    
