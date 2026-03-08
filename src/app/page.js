'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServicePages from '@/components/ServicePages';
import Projects from '@/components/Projects';

export default function Home() {
    const [activeService, setActiveService] = useState(null);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    const handleServiceClick = (serviceId) => {
        setActiveService(serviceId);
        setShowProjects(false);
        window.scrollTo(0, 0);
    };

    const handleHomeClick = () => {
        setActiveService(null);
        setShowProjects(false);
        window.scrollTo(0, 0);
    };

    const handleProjectsClick = () => {
        setShowProjects(true);
        setActiveService(null);
        window.scrollTo(0, 0);
    };

    const handleContactClick = () => {
        setIsContactOpen(true);
    };

    return (
        <>
            <Header
                onServiceClick={handleServiceClick}
                onHomeClick={handleHomeClick}
                onContactClick={handleContactClick}
                onProjectsClick={handleProjectsClick}
            />

            {showProjects ? (
                <Projects
                    onBack={handleHomeClick}
                    onContactClick={handleContactClick}
                />
            ) : activeService ? (
                <ServicePages
                    activeService={activeService}
                    onBack={handleHomeClick}
                    onContactClick={handleContactClick}
                />
            ) : (
                <main id="view-home" className="block">
                    <Hero
                        onContactClick={handleContactClick}
                        onServiceClick={handleServiceClick}
                    />
                    <Services onServiceClick={handleServiceClick} />
                    <Gallery />
                    <Testimonials />
                </main>
            )}

            <Footer />
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <WhatsAppButton />
        </>
    );
}
