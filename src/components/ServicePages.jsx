'use client';

import Image from 'next/image';
import ArchitecturalVisualization from './ArchitecturalVisualization';
import BimTraining from './BimTraining';
import ElectricalServices from './ElectricalServices';
import ItSolutions from './ItSolutions';

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

    if (activeService === 'visualization') return <ArchitecturalVisualization onBack={onBack} onContactClick={onContactClick} />;

    if (activeService === 'bim') return <BimTraining onBack={onBack} onContactClick={onContactClick} />;

    if (activeService === 'electrical') return <ElectricalServices onBack={onBack} onContactClick={onContactClick} />;

    if (activeService === 'it') return <ItSolutions onBack={onBack} onContactClick={onContactClick} />;

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
