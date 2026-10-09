'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogHeader() {
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

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <div className={`glass-panel mx-4 mt-4 rounded-2xl px-6 py-4 flex items-center justify-between ${isScrolled ? 'bg-white/80 shadow-md' : 'bg-white/65'}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-20 h-20 flex items-center justify-center">
            <Image src="/V4_Logo.jpg" alt="V4 Logo" width={80} height={80} priority className="logo-icon" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg tracking-wide text-slate-800">V4 BUILDING SOLUTIONS</span>
            <span className="text-[10px] uppercase tracking-wider text-sky-600 font-semibold">
              KSEB Class B Licensed | Chartered Engineer (Electrical)
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav aria-label="Blog navigation" className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium text-sky-600 transition">
            Blog
          </Link>
          <Link href="/" className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-full transition shadow-lg shadow-slate-900/20">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-slate-800 text-xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div aria-label="Mobile navigation" aria-hidden={!isMobileMenuOpen} className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transform transition-transform duration-300 flex flex-col pt-24 px-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link href="/" onClick={() => { if (isMobileMenuOpen) toggleMenu(); }} className="text-xl text-left font-medium py-4 border-b border-slate-100">Home</Link>
        <Link href="/blog" onClick={() => { if (isMobileMenuOpen) toggleMenu(); }} className="text-xl text-left font-medium py-4 border-b border-slate-100 text-sky-600">Blog</Link>
        <Link href="/" onClick={() => { if (isMobileMenuOpen) toggleMenu(); }} className="text-xl font-medium py-4">Contact Us</Link>
        <button onClick={toggleMenu} className="absolute top-8 right-8 text-2xl text-slate-800">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </header>
  );
}
