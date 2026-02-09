'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ onServiceClick, onHomeClick, onContactClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  const handleServiceClick = (service) => {
    onServiceClick(service);
    if (isMobileMenuOpen) toggleMenu();
  };

  const handleHomeClick = () => {
    onHomeClick();
    if (isMobileMenuOpen) toggleMenu();
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <div className={`glass-panel mx-4 mt-4 rounded-2xl px-6 py-4 flex items-center justify-between ${isScrolled ? 'bg-white/80 shadow-md' : 'bg-white/65'}`}>
        {/* Logo */}
        <button onClick={handleHomeClick} className="flex items-center gap-2 z-50">
          <div className="w-20 h-20 flex items-center justify-center">
            <Image src="/V4_Logo.jpg" alt="V4 Logo" width={80} height={80} className="logo-icon" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg tracking-wide text-slate-800">V4 BUILDING SOLUTIONS</span>
            <span className="text-[10px] uppercase tracking-wider text-sky-600 font-semibold">
              KSEB Class B Licensed | Chartered Engineer (Electrical)
            </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={handleHomeClick} className="text-sm font-medium text-slate-600 hover:text-sky-600 transition">
            Home
          </button>

          {/* Mega Menu Trigger */}
          <div className="group relative">
            <button className="text-sm font-medium text-slate-600 group-hover:text-sky-600 transition flex items-center gap-1 py-4">
              Services <i className="fas fa-chevron-down text-xs opacity-50 group-hover:rotate-180 transition-transform"></i>
            </button>

            {/* Mega Menu Content */}
            <div className="mega-menu absolute top-full right-0 translate-x-1/4 w-[600px] max-w-[90vw] glass-card-strong rounded-2xl p-6 opacity-0 invisible -translate-y-4 transition-all duration-300 shadow-xl mt-2 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Core Engineering</h4>
                <button onClick={() => handleServiceClick('chartered')} className="w-full text-left block p-3 rounded-xl hover:bg-amber-50 transition group/item mb-2 border border-amber-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                      <i className="fas fa-stamp"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Chartered Engineer</h5>
                      <p className="text-xs text-slate-500">Legal Certification & Audits</p>
                    </div>
                  </div>
                </button>
                <button onClick={() => handleServiceClick('electrical')} className="w-full text-left block p-3 rounded-xl hover:bg-sky-50 transition group/item mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Electrical</h5>
                      <p className="text-xs text-slate-500">Design & Contracting</p>
                    </div>
                  </div>
                </button>
                <button onClick={() => handleServiceClick('plumbing')} className="w-full text-left block p-3 rounded-xl hover:bg-sky-50 transition group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
                      <i className="fas fa-faucet"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Plumbing</h5>
                      <p className="text-xs text-slate-500">Design & Execution</p>
                    </div>
                  </div>
                </button>
                <button onClick={() => handleServiceClick('testing')} className="w-full text-left block p-3 rounded-xl hover:bg-red-50 transition group/item mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                      <i className="fas fa-clipboard-check"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800">Electrical Testing</h5>
                      <p className="text-xs text-slate-500">Safety & Load Audits</p>
                    </div>
                  </div>
                </button>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Digital & Design</h4>
                <button onClick={() => handleServiceClick('bim')} className="w-full text-left block p-3 rounded-xl hover:bg-indigo-50 transition group/item mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                      <i className="fas fa-cube"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800">BIM & Training</h5>
                      <p className="text-xs text-slate-500">Revit, Navisworks, AutoCAD</p>
                    </div>
                  </div>
                </button>
                <button onClick={() => handleServiceClick('it')} className="w-full text-left block p-3 rounded-xl hover:bg-emerald-50 transition group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800">IT Solutions</h5>
                      <p className="text-xs text-slate-500">AppSheet, Python, Web</p>
                    </div>
                  </div>
                </button>
                <button onClick={() => handleServiceClick('cad2bim')} className="w-full text-left block p-3 rounded-xl hover:bg-emerald-50 transition group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <i className="fas fa-code"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800">CAD to BIM</h5>
                      <p className="text-xs text-slate-500">AutoCAD, Revit, Navisworks</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-span-2 border-t border-slate-100 pt-4 mt-2">
                <button onClick={() => handleServiceClick('visualization')} className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition">
                  <span className="font-semibold text-slate-700">Architectural Visualization</span>
                  <i className="fas fa-arrow-right text-slate-400"></i>
                </button>
              </div>
            </div>
          </div>

          <button onClick={onContactClick} className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-full transition shadow-lg shadow-slate-900/20">
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-slate-800 text-xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transform transition-transform duration-300 flex flex-col pt-24 px-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={handleHomeClick} className="text-xl text-left font-medium py-4 border-b border-slate-100">Home</button>
        <div className="py-4 border-b border-slate-100">
          <span className="text-slate-400 text-xs uppercase tracking-wider">Services</span>
          <button onClick={() => handleServiceClick('chartered')} className="block w-full text-left mt-3 text-lg font-bold text-amber-600">
            <i className="fas fa-stamp mr-2"></i>Chartered Engineer
          </button>
          <button onClick={() => handleServiceClick('electrical')} className="block w-full text-left mt-3 text-lg text-slate-800">Electrical</button>
          <button onClick={() => handleServiceClick('plumbing')} className="block w-full text-left mt-2 text-lg text-slate-800">Plumbing</button>
          <button onClick={() => handleServiceClick('bim')} className="block w-full text-left mt-2 text-lg text-slate-800">BIM & Training</button>
          <button onClick={() => handleServiceClick('cad2bim')} className="block w-full text-left mt-2 text-lg text-slate-800">CAD 2 BIM</button>
          <button onClick={() => handleServiceClick('visualization')} className="block w-full text-left mt-2 text-lg text-slate-800">Visualization</button>
          <button onClick={() => handleServiceClick('it')} className="block w-full text-left mt-2 text-lg text-slate-800">IT Solutions</button>
          <button onClick={() => handleServiceClick('testing')} className="block w-full text-left mt-2 text-lg text-slate-800">Electrical Testing</button>
        </div>
        <button onClick={() => { onContactClick(); toggleMenu(); }} className="text-xl font-medium py-4">Contact Us</button>
        <button onClick={toggleMenu} className="absolute top-8 right-8 text-2xl text-slate-800">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </header>
  );
}
