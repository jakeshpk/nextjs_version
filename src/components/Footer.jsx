'use client';

import Image from 'next/image';

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-900 text-white py-20 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-20 h-20 flex items-center justify-center">
                                <Image src="/V4_Logo.jpg" alt="V4 Logo" width={80} height={80} className="logo-icon" />
                            </div>
                            <span className="font-bold text-2xl">V4 Building Solutions</span>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/5">
                                <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Visit Us</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        1st Floor, Vibins Complex, Calicut Road<br />
                                        Parempadam, Kunnamkulam, Thrissur, 680503
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/5">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Call Us</h4>
                                    <p className="text-slate-400 text-sm">+91 4885 298455, +91 9746 011 785</p>
                                    <p className="text-slate-400 text-sm">v4buildingsolutions@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/5">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Business Hours</h4>
                                    <p className="text-slate-400 text-sm">Mon - Sat: 9:00 AM – 5:30 PM</p>
                                    <p className="text-slate-500 text-xs">Sunday: Holiday</p>
                                </div>
                            </div>

                            <div className="mt-10 pt-6 border-t border-white/10">
                                <h4 className="font-bold text-lg mb-4 text-sky-400">Connect With Us</h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61566564854807"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="social-icon-dark"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/v4buildingsolutions/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="social-icon-dark"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/v4bimtraining/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram BIM Training"
                                        className="social-icon-dark"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-white/5 p-2 rounded-2xl border border-white/10 h-full min-h-[300px] relative overflow-hidden group">
                        <iframe
                            src="https://maps.google.com/maps?q=10.667136104471176,76.07593621007899&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '12px', filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>

                        {/* Location Overlay */}
                        <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur text-white text-xs p-3 rounded-xl border border-white/10 shadow-xl">
                            <div className="font-bold text-sky-400 mb-1">V4 Building Solutions</div>
                            <div className="text-slate-300 mb-2">1st Floor, Vibins Complex</div>
                            <a
                                href="https://maps.app.goo.gl/7KmYJ1zrMajG7gRs6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-sky-600 hover:bg-sky-500 text-white py-1.5 px-3 rounded transition text-[10px] font-bold uppercase tracking-wide"
                            >
                                <i className="fas fa-map-marked-alt mr-1"></i> Open in Maps
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 text-center text-slate-500 text-sm">
                    © 2025 V4 Building Solutions. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
