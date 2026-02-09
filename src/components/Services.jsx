'use client';

import Image from 'next/image';

export default function Services({ onServiceClick }) {
    const services = [
        {
            id: 'chartered',
            title: 'Chartered Engineer',
            description: 'Authorized technical certification, load auditing, and safety sign-offs recognized by Govt bodies and banks.',
            icon: 'fa-stamp',
            gradient: 'from-amber-400 to-orange-600',
            shadow: 'shadow-orange-500/20',
            hoverColor: 'text-amber-600',
            cta: 'Legal Certification',
            featured: true,
            borderClass: 'border-amber-100 bg-amber-50/30'
        },
        {
            id: 'electrical',
            title: 'Electrical Contracting',
            description: 'Licensed KSEB Class B (150kW) contractors. Complete electrical system design, load calculation, and installation.',
            icon: 'fa-bolt',
            gradient: 'from-yellow-400 to-orange-500',
            shadow: 'shadow-orange-500/20',
            hoverColor: 'text-orange-500',
            cta: 'Learn More'
        },
        {
            id: 'plumbing',
            title: 'Plumbing Solutions',
            description: 'Advanced plumbing design and execution. Sustainable water management systems and piping layouts.',
            icon: 'fa-tint',
            gradient: 'from-cyan-400 to-blue-500',
            shadow: 'shadow-blue-500/20',
            hoverColor: 'text-blue-500',
            cta: 'Learn More'
        },
        {
            id: 'bim',
            title: 'BIM & Training',
            description: 'Compliance checks and professional training in industry-standard software like AutoCAD and Revit.',
            icon: 'fa-layer-group',
            gradient: 'from-purple-400 to-indigo-500',
            shadow: 'shadow-indigo-500/20',
            hoverColor: 'text-indigo-500',
            cta: 'Learn More'
        },
        {
            id: 'cad2bim',
            title: 'CAD to BIM Conversion',
            description: 'Transforming legacy 2D CAD drawings and PDFs into intelligent, data-rich 3D Revit models (LOD 100-500).',
            icon: 'fa-drafting-compass',
            gradient: 'from-teal-400 to-cyan-500',
            shadow: 'shadow-cyan-500/20',
            hoverColor: 'text-cyan-600',
            cta: 'Learn More'
        },
        {
            id: 'it',
            title: 'IT Solutions',
            description: 'Bridging construction with technology. Custom AppSheet development, websites, and Python.',
            icon: 'fa-code',
            gradient: 'from-emerald-400 to-green-500',
            shadow: 'shadow-green-500/20',
            hoverColor: 'text-green-500',
            cta: 'Learn More'
        }
    ];

    return (
        <section className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Expertise</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        We provide end-to-end building solutions, covering every stage from conceptual planning and architectural blueprint development to complete on-site execution.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => onServiceClick(service.id)}
                            className={`text-left glass-panel p-8 rounded-3xl hover:translate-y-[-5px] transition-transform duration-300 group ${service.borderClass || ''}`}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-2xl mb-6 shadow-lg ${service.shadow}`}>
                                <i className={`fas ${service.icon}`}></i>
                            </div>
                            <h3 className={`text-xl font-bold text-slate-800 mb-3 group-hover:${service.hoverColor} transition-colors`}>
                                {service.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
                            <span className={`text-xs font-bold ${service.hoverColor} uppercase tracking-wider`}>
                                {service.cta} <i className="fas fa-arrow-right ml-1"></i>
                            </span>
                        </button>
                    ))}

                    {/* Visualization - Wide Card */}
                    <button
                        onClick={() => onServiceClick('visualization')}
                        className="text-left glass-panel p-8 rounded-3xl hover:translate-y-[-5px] transition-transform duration-300 group col-span-1 md:col-span-2 lg:col-span-2 bg-white/40"
                    >
                        <div className="flex flex-col md:flex-row gap-6 items-center h-full">
                            <div className="flex-1">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-rose-500/20">
                                    <i className="fas fa-vr-cardboard"></i>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-rose-500 transition-colors">
                                    Architectural Visualization
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                    High-fidelity 3D modeling. We utilize 3ds Max, Lumion, V-Ray, and Corona to bring blueprints to life.
                                </p>
                                <span className="text-rose-500 font-bold text-sm hover:underline">
                                    View Gallery <i className="fas fa-arrow-right ml-1"></i>
                                </span>
                            </div>
                            <div className="flex-1 w-full h-48 rounded-xl overflow-hidden relative">
                                <Image
                                    src="/images/Nimal Front View.jpg"
                                    alt="Interior Design"
                                    fill
                                    className="object-cover hover:scale-110 transition duration-700"
                                />
                            </div>
                        </div>
                    </button>

                    {/* Electrical Testing */}
                    <button
                        onClick={() => onServiceClick('testing')}
                        className="text-left glass-panel p-8 rounded-3xl hover:translate-y-[-5px] transition-transform duration-300 group border-red-50 hover:bg-red-50/20"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-red-500/20">
                            <i className="fas fa-clipboard-check"></i>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors">
                            Electrical Testing
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                            Megger testing, Earth pit audits, and load identification to ensure safety and code compliance.
                        </p>
                        <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                            Book Audit <i className="fas fa-arrow-right ml-1"></i>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
