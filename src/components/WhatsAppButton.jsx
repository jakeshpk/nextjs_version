'use client';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/919746011785"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
            aria-label="Contact on WhatsApp"
        >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
            <i className="fab fa-whatsapp text-3xl relative z-10"></i>
            <span className="absolute right-16 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
                Chat with us
            </span>
        </a>
    );
}
