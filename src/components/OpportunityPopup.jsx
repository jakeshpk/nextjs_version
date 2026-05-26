'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const opportunities = [
    {
        src: '/images/hiring-electrician.jpg',
        alt: 'Hiring Electricians - V4 Building Solutions, Kunnamkulam/Thrissur. KSEB licensed electrical contractor jobs in Kerala.',
        title: 'Electricians Wanted',
    },
    {
        src: '/images/hiring-draftsperson.jpg',
        alt: 'Hiring Female Draftsperson - V4 Building Solutions, Kunnamkulam/Thrissur. AutoCAD electrical and plumbing drafting jobs.',
        title: 'Draftsperson Wanted',
    },
];

export default function OpportunityPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenClosed, setHasBeenClosed] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTabHovered, setIsTabHovered] = useState(false);

    // Show popup after a delay on first visit (per session)
    useEffect(() => {
        const wasClosed = sessionStorage.getItem('v4bs-opportunities-closed');
        if (wasClosed) {
            setHasBeenClosed(true);
            return;
        }
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    // Auto-rotate images every 5 seconds when open
    useEffect(() => {
        if (!isOpen) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % opportunities.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        setIsOpen(false);
        setHasBeenClosed(true);
        sessionStorage.setItem('v4bs-opportunities-closed', 'true');
    }, []);

    const handleTabHover = useCallback(() => {
        setIsTabHovered(true);
        setIsOpen(true);
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape' && isOpen) handleClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, handleClose]);

    return (
        <>
            {/* ── Left-edge "We're Hiring" tab (visible when popup is closed) ── */}
            {hasBeenClosed && !isOpen && (
                <div
                    onMouseEnter={handleTabHover}
                    onClick={handleTabHover}
                    className="fixed left-0 top-1/2 -translate-y-1/2 z-40 cursor-pointer group"
                    aria-label="Open job opportunities"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleTabHover()}
                >
                    <div
                        className="flex items-center gap-1 bg-gradient-to-b from-amber-500 to-amber-600 text-white py-4 px-2 rounded-r-xl shadow-lg shadow-amber-500/30 transition-all duration-300 group-hover:px-3 group-hover:shadow-xl group-hover:shadow-amber-500/40"
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                    >
                        <span className="text-sm font-bold tracking-wider">🔥 We&apos;re Hiring!</span>
                    </div>
                </div>
            )}

            {/* ── Backdrop ── */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-400 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* ── Popup Panel ── */}
            <div
                className={`fixed left-0 top-0 h-full z-50 flex items-center p-4 transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Job Opportunities"
            >
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-[320px] sm:w-[380px] max-h-[90vh] relative flex flex-col">
                    {/* Header bar */}
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-3 flex items-center justify-between flex-shrink-0">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <h3 className="text-white text-sm font-bold tracking-wide uppercase">
                                Opportunities
                            </h3>
                        </div>
                        <button
                            onClick={handleClose}
                            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition text-xs"
                            aria-label="Close opportunities popup"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Image carousel */}
                    <div className="relative overflow-hidden flex-1">
                        <div
                            className="flex transition-transform duration-500 ease-in-out h-full"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {opportunities.map((opp, i) => (
                                <div
                                    key={i}
                                    className="min-w-full relative"
                                    style={{ aspectRatio: '3/4' }}
                                >
                                    <Image
                                        src={opp.src}
                                        alt={opp.alt}
                                        fill
                                        sizes="(max-width: 640px) 320px, 380px"
                                        className="object-contain"
                                        quality={85}
                                        priority={i === 0}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation footer */}
                    <div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-t border-slate-100 flex-shrink-0">
                        {/* Dots */}
                        <div className="flex gap-2">
                            {opportunities.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex
                                            ? 'w-6 bg-amber-500'
                                            : 'w-2 bg-slate-300 hover:bg-slate-400'
                                        }`}
                                    aria-label={`View opportunity ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Counter */}
                        <span className="text-xs text-slate-400 font-medium">
                            {currentIndex + 1} / {opportunities.length}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
