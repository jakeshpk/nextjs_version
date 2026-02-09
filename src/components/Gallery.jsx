'use client';

import { useRef } from 'react';
import Image from 'next/image';

export default function Gallery() {
    const carouselRef = useRef(null);

    const projects = [
        {
            file: "L1.jpg",
            title: "Living Detail",
            type: "Interior",
            alt: "Living Room interior design with premium finishes by V4 Building Solutions Thrissur Kerala"
        },
        {
            file: "Nimal Front View.jpg",
            title: "Modern Villa",
            type: "Exterior",
            alt: "3D exterior visualization of contemporary two-story villa in Kerala by V4 Building Solutions"
        },
        {
            file: "wash area_L.jpg",
            title: "Wash Area",
            type: "Interior",
            alt: "Elegant wash area and utility room design with modern plumbing solutions Kunnamkulam"
        },
        {
            file: "kitchen 2.jpg",
            title: "Kitchen",
            type: "Interior",
            alt: "Elegant Kitchen Area design with modern accessorires and solutions Kunnamkulam"
        },
        {
            file: "Living Room_1_R1.jpg",
            title: "Living Room",
            type: "Interior",
            alt: "Luxurious living room 3D interior visualization with contemporary design Kerala"
        },
        {
            file: "07.jpg",
            title: "Exterior View",
            type: "Exterior",
            alt: "Stunning 3D exterior architectural visualization of residential project Thrissur"
        },
        {
            file: "living L1.jpg",
            title: "Living Design",
            type: "Interior",
            alt: "Spacious living area interior design with premium lighting and finishes Kerala"
        },
        {
            file: "Upper_Living.jpg",
            title: "Upper Living",
            type: "Interior",
            alt: "Upper floor living space 3D render with modern interior design Thrissur Kerala"
        }
    ];

    const scrollLeft = () => {
        carouselRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
    };

    return (
        <section id="projects-section" className="py-20 bg-slate-100/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-200/[0.2] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-800">Project Gallery</h2>
                        <p className="text-slate-500">3D Interiors, Exteriors & Finished Works</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={scrollLeft}
                            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-slate-700 hover:bg-sky-500 hover:text-white transition"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-slate-700 hover:bg-sky-500 hover:text-white transition"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <div className="relative group">
                    <div ref={carouselRef} className="carousel-container flex gap-6 overflow-x-auto pb-8 snap-x">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="min-w-[300px] md:min-w-[400px] h-[300px] rounded-2xl overflow-hidden relative group/card snap-center shadow-sm border border-white/50 flex-shrink-0"
                            >
                                <Image
                                    src={`/images/projects/${project.file}`}
                                    alt={project.alt}
                                    fill
                                    className="object-cover transition duration-700 group-hover/card:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                                    <span className="text-sky-400 text-xs font-bold uppercase tracking-wider">{project.type}</span>
                                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-100/50 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}
