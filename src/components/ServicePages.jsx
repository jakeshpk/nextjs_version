'use client';

import Image from 'next/image';

export default function ServicePages({ activeService, onBack, onContactClick }) {
    if (!activeService) return null;

    const services = {
        chartered: {
            title: 'Chartered Engineer Services',
            subtitle: 'Professional Certification & Technical Audits',
            headerClass: 'service-header-ce',
            icon: 'fa-stamp',
            iconBg: 'bg-amber-500',
            content: (
                <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div className="glass-panel p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Legally Recognized Certification</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                V4 Building Solutions is led by a Chartered Engineer (Electrical) certified by the
                                <strong> Institution of Engineers (India)</strong>. We are legally authorized to issue
                                certified technical documents accepted by government departments, banks, and private authorities.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-4 bg-white/50 rounded-2xl border border-amber-100">
                                    <h4 className="font-bold text-amber-700 mb-2">Technical Audits</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Load Calculation Certification</li>
                                        <li>• Energy Efficiency Audits</li>
                                        <li>• Safety Compliance Reports</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-white/50 rounded-2xl border border-amber-100">
                                    <h4 className="font-bold text-amber-700 mb-2">Project Valuation</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Machinery & Plant Valuation</li>
                                        <li>• Technical Feasibility Reports</li>
                                        <li>• Bank Documentation Sign-off</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl border-t-4 border-amber-500">
                            <h4 className="text-xl font-bold mb-2">Certification Request</h4>
                            <p className="text-sm text-slate-400 mb-6">Need a Chartered Engineer's seal for your project documents?</p>
                            <button onClick={onContactClick} className="block w-full text-center py-3 bg-amber-500 text-slate-900 font-bold rounded-xl hover:bg-amber-400 transition">
                                Request Review
                            </button>
                        </div>
                    </div>
                </div>
            )
        },
        electrical: {
            title: 'Electrical Contracting',
            subtitle: 'Class B Licensed (150kW)',
            headerClass: 'service-header-electrical',
            icon: 'fa-bolt',
            iconBg: 'bg-yellow-500',
            content: (
                <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div className="glass-panel p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Comprehensive Electrical Solutions</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                At V4 Building Solutions, we specialize in high-capacity electrical infrastructure for
                                commercial and residential complexes. Holding a KSEB Class B license, we are authorized to
                                handle projects up to 150kW.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {['Load Calculation', 'Electrical Designing', 'Safety Audits', 'Cabling & Networking'].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <i className="fas fa-check-circle text-yellow-500 mt-1"></i>
                                        <div>
                                            <h4 className="font-semibold">{item}</h4>
                                            <p className="text-xs text-slate-500">Professional execution</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <h4 className="text-xl font-bold mb-2">Need an Estimate?</h4>
                            <p className="text-sm text-slate-400 mb-6">Get a detailed quote for your electrical requirements.</p>
                            <button onClick={onContactClick} className="block w-full text-center py-3 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-400 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            )
        },
        plumbing: {
            title: 'Plumbing Solutions',
            subtitle: 'Design & Execution',
            headerClass: 'service-header-plumbing',
            icon: 'fa-tint',
            iconBg: 'bg-blue-500',
            content: (
                <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div className="glass-panel p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Sustainable Water Management</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                From complex drainage systems in high-rise buildings to luxury sanitary fittings in villas,
                                our plumbing division ensures leak-proof, efficient, and long-lasting installations.
                            </p>
                            <ul className="space-y-4">
                                {['MEP Layout Designing', 'Fixing Plumbing Fixtures', 'Annual Maintenance Contract'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-white/60">
                                        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                            <i className="fas fa-check"></i>
                                        </span>
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <h4 className="text-xl font-bold mb-2">Consultation</h4>
                            <p className="text-sm text-slate-400 mb-6">Discuss your plumbing layout with our experts.</p>
                            <button onClick={onContactClick} className="block w-full text-center py-3 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-400 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            )
        },
        bim: {
            title: 'BIM & Training',
            subtitle: 'Compliance & Education',
            headerClass: 'service-header-bim',
            icon: 'fa-cube',
            iconBg: 'bg-indigo-500',
            content: (
                <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div className="glass-panel p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Building Information Modeling</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                V4 BIM Training provides top-tier BIM compliance services ensuring your projects meet
                                international standards. We offer specialized training programs in leading construction software.
                            </p>
                            <h4 className="font-bold text-lg text-slate-800 mb-4">Software Stack</h4>
                            <div className="flex flex-wrap gap-3">
                                {['AutoCAD', 'Revit MEP', 'Navisworks', 'Primavera', 'SketchUp', '3ds Max', 'Lumion', 'V-Ray', 'Corona'].map((sw, i) => (
                                    <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600">
                                        {sw}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <h4 className="text-xl font-bold mb-2">Join Training</h4>
                            <p className="text-sm text-slate-400 mb-6">Enroll in our certified BIM training courses.</p>
                            <button onClick={onContactClick} className="block w-full text-center py-3 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-400 transition">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            )
        },
        cad2bim: {
            title: 'CAD to BIM Conversion',
            subtitle: 'Digitize. Model. Optimize.',
            headerClass: 'service-header-cad2bim',
            icon: 'fa-code',
            iconBg: 'bg-teal-500',
            content: (
                <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div className="glass-panel p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">From 2D Drawings to Intelligent 3D Models</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We specialize in converting legacy CAD files, PDF drawings, and hand sketches into accurate
                                BIM models using Autodesk Revit. Essential for renovation projects and facility management.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {['PDF/CAD to Revit', 'Scan to BIM', 'Clash Detection', 'As-Built Modeling'].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <i className="fas fa-check-circle text-teal-500 mt-1"></i>
                                        <div>
                                            <h4 className="font-semibold">{item}</h4>
                                            <p className="text-xs text-slate-500">LOD 100 to LOD 500</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <h4 className="text-xl font-bold mb-2">Digitize Your Assets</h4>
                            <p className="text-sm text-slate-400 mb-6">Upgrade your 2D archives to 3D models today.</p>
                            <button onClick={onContactClick} className="block w-full text-center py-3 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-400 transition">
                                Request Quote
                            </button>
                        </div>
                    </div>
                </div>
            )
        },
        it: {
            title: 'IT Solutions',
            subtitle: 'Development & Training',
            headerClass: 'service-header-it',
            icon: 'fa-laptop-code',
            iconBg: 'bg-emerald-500',
            content: (
                <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div className="glass-panel p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Digital Transformation</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We bridge the gap between traditional engineering and modern technology. Our IT wing focuses
                                on business automation and developer training.
                            </p>
                            <div className="grid gap-4">
                                {[
                                    { title: 'Google AppSheet Development', desc: 'Custom no-code apps for inventory and reporting' },
                                    { title: 'Static Web Development', desc: 'Fast, secure portfolios for construction firms' },
                                    { title: 'Python Training', desc: 'From basics to automation scripts for engineers' }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 border-l-4 border-emerald-500 bg-white/50 rounded-r-xl">
                                        <h4 className="font-bold text-emerald-700">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <h4 className="text-xl font-bold mb-2">Build Your App</h4>
                            <p className="text-sm text-slate-400 mb-6">Automate your workflow with AppSheet.</p>
                            <button onClick={onContactClick} className="block w-full text-center py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-400 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            )
        },
        visualization: {
            title: 'Architectural Viz',
            subtitle: '3D Modeling & Rendering',
            headerClass: 'service-header-viz',
            icon: 'fa-vr-cardboard',
            iconBg: 'bg-rose-500',
            content: (
                <div className="container mx-auto px-6 py-12">
                    <div className="glass-panel p-8 rounded-3xl mb-12">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Photorealistic Rendering</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Visualize your dream project before the first brick is laid. We use industry-leading render
                            engines like V-Ray, Corona, and Lumion to create stunning interior and exterior 3D walkthroughs.
                        </p>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-6">Gallery Highlight</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {['L1.jpg', 'wash area_L.jpg', 'Living Room_1_R1.jpg', '07.jpg', 'living L1.jpg', 'Upper_Living.jpg'].map((img, i) => (
                            <div key={i} className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={`/images/${img}`}
                                    alt={`Work ${i + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition duration-500"
                                />
                            </div>
                        ))}
                    </div>

                    <section className="py-10">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">Virtual Tour</h2>
                            <p className="text-slate-500">Experience our finished projects in 360° VR.</p>
                        </div>
                        <div className="glass-panel p-4 rounded-3xl overflow-hidden shadow-2xl border border-white/50 relative">
                            <iframe
                                src="https://momento360.com/e/u/14116185ac8f4341b73dee39d4cf12a5?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
                                width="100%"
                                height="500px"
                                frameBorder="0"
                                className="relative z-10 rounded-2xl w-full h-[400px] md:h-[600px] shadow-inner"
                                allowFullScreen
                                allow="accelerometer; magnetometer; gyroscope"
                            ></iframe>
                            <div className="absolute bottom-6 right-6 z-20 pointer-events-none">
                                <span className="bg-black/50 backdrop-blur text-white text-xs px-3 py-1 rounded-full border border-white/20">
                                    <i className="fas fa-vr-cardboard mr-1"></i> Interactive View
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            )
        },
        testing: {
            title: 'Electrical Testing & Audits',
            subtitle: 'Professional Safety Verification & System Health Checks',
            headerClass: 'service-header-testing',
            icon: 'fa-microchip',
            iconBg: 'bg-red-500',
            content: (
                <div className="container mx-auto px-6 py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="glass-panel p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Testing Framework</h3>
                                <div className="space-y-6">
                                    {[
                                        { icon: 'fa-bolt', title: '1. Megger (Insulation) Testing', desc: 'Verification of insulation resistance in cables and equipment.' },
                                        { icon: 'fa-mountain', title: '2. Earth Pit', desc: 'Measuring earth electrode resistance for fault current discharge.' },
                                        { icon: 'fa-search', title: '3. Comprehensive Physical Inspection', desc: 'Detailed visual audit of DBs, panels, wiring integrity.' },
                                        { icon: 'fa-tachometer-alt', title: '4. Existing Load Identification', desc: 'Analyzing actual power consumption vs. connected load.' },
                                        { icon: 'fa-plug', title: '5. Physical Appliance Health Test', desc: 'Safety testing of home and industrial appliances.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/50 border border-slate-100">
                                            <div className="text-red-500 text-2xl"><i className={`fas ${item.icon}`}></i></div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">{item.title}</h4>
                                                <p className="text-sm text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-slate-900 text-white p-8 rounded-3xl border-t-4 border-red-500">
                                <h4 className="text-xl font-bold mb-4">Request a Safety Audit</h4>
                                <p className="text-sm text-slate-400 mb-6">Ensure your building's electrical safety and KSEB compliance today.</p>
                                <a
                                    href="https://wa.me/919746011785?text=I%20need%20an%20Electrical%20Testing%20Audit"
                                    className="block w-full text-center py-4 bg-red-500 hover:bg-red-400 text-white font-bold rounded-2xl transition"
                                >
                                    <i className="fab fa-whatsapp mr-2"></i> Book Testing
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    };

    const service = services[activeService];
    if (!service) return null;

    return (
        <div className="pt-20 min-h-screen bg-slate-50 fade-in">
            <div className="container mx-auto px-6 py-6">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition"
                >
                    <i className="fas fa-arrow-left"></i> Back to Home
                </button>
            </div>

            {/* Header */}
            <div className={`h-[300px] w-full ${service.headerClass} bg-cover bg-center relative flex items-center justify-center`}>
                <div className="text-center text-white z-10">
                    <div className={`w-16 h-16 mx-auto ${service.iconBg} rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-xl`}>
                        <i className={`fas ${service.icon}`}></i>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
                    <p className="opacity-90 mt-2">{service.subtitle}</p>
                </div>
            </div>

            {/* Content */}
            {service.content}
        </div>
    );
}
