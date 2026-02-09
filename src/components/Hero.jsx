'use client';

import Image from 'next/image';

export default function Hero({ onContactClick, onServiceClick }) {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center py-20 lg:py-0 overflow-hidden">
            <div className="absolute inset-0 hero-bg"></div>
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white"></div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6 pt-20 lg:pt-0">
                    <div className="flex flex-wrap gap-2 reveal" style={{ animationDelay: '0.1s' }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-[10px] font-bold uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span> India & Middle East Experts
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest">
                            <i className="fas fa-award"></i> Chartered Engineer (Electrical)
                        </div>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900 reveal" style={{ animationDelay: '0.2s' }}>
                        Engineering <br /><span className="text-gradient">Perfection</span>
                    </h1>
                    <p className="text-lg text-slate-900 max-w-md reveal" style={{ animationDelay: '0.3s' }}>
                        Chartered Engineer (Electrical) & Licensed KSEB Class B Contractors delivering premium
                        Electrical, Plumbing, and BIM solutions with a 98.7% success rate across 50+ certified projects.
                    </p>
                    <div className="flex flex-wrap gap-4 reveal" style={{ animationDelay: '0.4s' }}>
                        <button onClick={onContactClick} className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition duration-300">
                            Get a Quote
                        </button>
                        <button onClick={() => onServiceClick('visualization')} className="px-8 py-4 glass-panel text-slate-800 rounded-full font-medium hover:bg-white transition duration-300">
                            View Work
                        </button>
                        <button onClick={() => onServiceClick('chartered')} className="px-8 py-4 glass-panel text-slate-800 rounded-full font-medium border-amber-200 hover:bg-amber-50 transition duration-300">
                            Chartered Services
                        </button>
                    </div>
                </div>

                {/* Right Stats (Floating Glass Cards) */}
                <div className="relative h-[400px] lg:h-[600px] w-full hidden lg:block reveal" style={{ animationDelay: '0.5s' }}>
                    <div className="absolute top-1/4 right-10 w-64 glass-card-strong p-6 rounded-2xl animate-float z-20">
                        <div className="flex justify-between items-start mb-4">
                            <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                                <i className="fas fa-stamp text-xl"></i>
                            </div>
                            <span className="text-amber-600 font-bold bg-amber-50 px-2 py-1 rounded text-[10px]">Govt Recognized</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">Chartered Engineer</h3>
                        <p className="text-sm text-slate-500">Institution of Engineers (India)</p>
                    </div>
                    <div className="absolute bottom-1/4 left-10 w-56 glass-card-strong p-6 rounded-2xl animate-float z-10" style={{ animationDelay: '-3s' }}>
                        <div className="mb-4 bg-sky-100 w-12 h-12 rounded-xl flex items-center justify-center text-sky-600">
                            <i className="fas fa-building text-xl"></i>
                        </div>
                        <h3 className="text-4xl font-bold text-slate-800 mb-1">50+</h3>
                        <p className="text-sm text-slate-500">Completed Projects</p>
                        <p className="text-xs text-slate-400 mt-2">India</p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>
                </div>

                {/* Mobile Stats */}
                <div className="lg:hidden grid grid-cols-2 gap-4">
                    <div className="glass-panel p-4 rounded-xl text-center">
                        <h3 className="text-2xl font-bold text-slate-800">98.7%</h3>
                        <p className="text-xs text-slate-500">Success Rate</p>
                    </div>
                    <div className="glass-panel p-4 rounded-xl text-center">
                        <h3 className="text-2xl font-bold text-slate-800">50+</h3>
                        <p className="text-xs text-slate-500">Projects Done</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
