'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "V4 delivered the 150KW electrical contract ahead of schedule and with zero issues. Their attention to KSEB compliance was excellent—a true professional firm.",
            name: "Mr. Mohammed Hashim",
            role: "Owner, H.S Towers, Perumpilavu",
            initials: "MH"
        },
        {
            quote: "The BIM training was top-notch. Our team is now fully proficient in Revit and Navisworks, significantly improving our project efficiency in the Kerala.",
            name: "Ar. Jack C",
            role: "Consultant, Thrissur",
            initials: "JC"
        },
        {
            quote: "V4 Building Solutions is synonymous with trust. We have undertaken several projects together, and their execution in both electrical and plumbing domains has always been flawless.",
            name: "Mr. Nithin P.D",
            role: "MD, Philia Engineering and Construction LLP",
            initials: "NP"
        },
        {
            quote: "The 3D architectural visualizations for our new residence were breathtaking and instrumental. It helped us construction completion quickly.",
            name: "Mrs. Dincy Anoop",
            role: "Residence Owner, Kunnamkulam",
            initials: "DA"
        },
        {
            quote: "From the stunning 3D exterior visualization to the precision of the electrical and plumbing diagrams, V4 Building Solutions delivered excellence.",
            name: "Mr. Anand Thomas",
            role: "Residence Owner, Vadakkekkad",
            initials: "AT"
        },
        {
            quote: "The BIM Training I got from V4BS was outstanding. They navigate the class through field application and necessity of the tool in very interactive style.",
            name: "Mr. Fasil Mohammed",
            role: "Student, Vadakkekkad",
            initials: "FM"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section id="testimonials" className="py-20 bg-white/70">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-3xl font-bold mb-12">Client Stories</h2>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 w-full p-4">
                                <div className="glass-panel p-8 rounded-2xl h-full shadow-lg border border-white/50 transform hover:scale-[1.01] transition duration-300 max-w-3xl mx-auto">
                                    <i className="fas fa-quote-left text-2xl text-sky-500 mb-4"></i>
                                    <p className="text-lg italic text-slate-700 mb-6">"{testimonial.quote}"</p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-sky-200 rounded-full mr-4 flex items-center justify-center text-sky-700 font-bold">
                                            {testimonial.initials}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800">{testimonial.name}</p>
                                            <p className="text-sm text-slate-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition duration-300 ${index === currentIndex ? 'bg-sky-500 scale-110' : 'bg-slate-300 hover:bg-sky-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
