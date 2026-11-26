'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServicePages from '@/components/ServicePages';
import Projects from '@/components/Projects';
import OpportunityPopup from '@/components/OpportunityPopup';
import WebsiteHeader from './WebsiteHeader';
import './WebsiteHome.css';

const priorities = [
 { id: 'electrical', label: 'Electrical Contracting & Design Consultancy', short: 'Electrical Contracting & Design Consultancy', text: 'Licensed KSEB Class B (150kW) contractors. Complete electrical system design, load calculation, and installation.', image: '/images/projects/Electrical Panel Installaion.jpg', alt: 'V4 electrical panel installation', tag: 'Design & Contracting' },
 { id: 'bim', label: 'Design Training', short: 'Design Training', text: 'Compliance checks and professional training in industry-standard software like AutoCAD and Revit.', tag: 'Architectural & MEP', image: '/images/projects/Bahuleyan DINING1.png', alt: 'Architectural interior visualization with stairs and dining area' },
 { id: 'visualization', label: 'Architectural Visualization', short: 'Visualization', text: 'High-fidelity 3D modeling. We utilize 3ds Max, Lumion, V-Ray, and Corona to bring blueprints to life.', image: '/images/projects/Nimal Front View.jpg', alt: 'V4 contemporary villa architectural visualization', tag: '3D Modeling & Rendering' },
 { id: 'it', label: 'Web Development', short: 'Web Development', text: 'Bridging construction with technology. Custom AppSheet development, websites, and Python.', tag: 'IT Solutions' },
];
const supporting = [
 ['chartered', 'Chartered Engineer', 'Authorized technical certification, load auditing, and safety sign-offs recognized by Govt bodies and banks.'],
 ['plumbing', 'Plumbing Solutions', 'Advanced plumbing design and execution. Sustainable water management systems and piping layouts.'],
 ['cad2bim', 'CAD to BIM Conversion', 'Transforming legacy 2D CAD drawings and PDFs into intelligent, data-rich 3D Revit models (LOD 100-500).'],
 ['testing', 'Electrical Testing', 'Megger testing, Earth pit audits, and load identification to ensure safety and code compliance.'],
];
export default function WebsiteHome({ initialView = null, preview = false }) {
 const [view, setView] = useState(initialView);
 const [contact, setContact] = useState(false);
 function navigate(id) { setView(id); window.scrollTo({ top: 0 }); }
 return <div className="v4-preview">
  {preview && <div className="pv-review">DESIGN PREVIEW <span>V4 Building Solutions</span><Link href="/">View main website ↗</Link></div>}
  <WebsiteHeader
   onNavigate={navigate}
   onServices={() => {
    navigate(null);
    setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 50);
   }}
   onContact={() => setContact(true)}
   mobileServices={priorities}
  />
  {view ? <div className="pv-detail">{view === 'projects' ? <Projects onBack={() => navigate(null)} onContactClick={() => setContact(true)} /> : <ServicePages activeService={view} onBack={() => navigate(null)} onContactClick={() => setContact(true)} />}</div> : <main>
   <section className="pv-hero">
    <div className="pv-hero-copy"><p className="pv-eyebrow"><span /> India & Middle East Experts</p><p className="pv-hero-focus">ELECTRICAL CONTRACTING & DESIGN CONSULTANCY</p><h1>Engineering<br /><em>Perfection.</em></h1><p className="pv-intro">Chartered Engineer (Electrical) & Licensed KSEB Class B Contractors delivering premium Electrical, Plumbing, and BIM solutions with a 98.7% success rate across 50+ certified projects.</p><div className="pv-actions"><button className="pv-button pv-lime" onClick={() => setContact(true)}>Get a Quote <span>↗</span></button><button className="pv-text-link" onClick={() => navigate('projects')}>View Work <span>↗</span></button></div><button className="pv-credential" onClick={() => navigate('chartered')}><span className="pv-seal">✧</span><span>Chartered Engineer (Electrical)<small>Institution of Engineers (India) · Govt Recognized</small></span><span>↗</span></button></div>
    <div className="pv-hero-image"><Image src="/images/projects/Nimal Front View.jpg" alt="Contemporary villa architectural visualization by V4 Building Solutions" fill priority sizes="(max-width: 760px) 100vw, 52vw" /><div className="pv-image-label"><span>V4 BUILDING SOLUTIONS</span><span>Design. Detail. Deliver.</span></div><div className="pv-image-caption"><span>ARCHITECTURAL VISUALIZATION</span><strong>Modern Villa</strong><button onClick={() => navigate('visualization')} aria-label="Explore architectural visualization">↗</button></div></div>
   </section>
   <nav className="pv-priorities" aria-label="Our four focus areas">{priorities.map((p,i) => <button key={p.id} onClick={() => navigate(p.id)}><span>0{i+1}</span><strong>{p.short}</strong><span>↗</span></button>)}</nav>
   <div className="pv-trust"><p>Why choose<br /><strong>V4 Building Solutions</strong></p><div><strong>50<span>+</span></strong><span>Completed Projects · India</span></div><div><strong>98.7<span>%</span></strong><span>Success Rate</span></div><div><strong>Class B</strong><span>Licensed KSEB Contractors</span></div></div>
   <section className="pv-expertise" id="services"><div className="pv-section-heading"><div><p className="pv-eyebrow">01 / OUR EXPERTISE</p><h2>Our Expertise</h2></div><p>We provide end-to-end building solutions, covering every stage from conceptual planning and architectural blueprint development to complete on-site execution.</p></div>
    <div className="pv-service-grid">{priorities.map((p,i) => <button key={p.id} className={`pv-service pv-service-${p.id}`} onClick={() => navigate(p.id)}><div className="pv-service-visual">{p.image ? <Image src={p.image} alt={p.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /> : <div className="pv-web-art" aria-hidden="true"><div className="pv-browser-dots">● ● ● <span>V4 / DIGITAL</span></div><div className="pv-browser-body"><span>&lt; / &gt;</span><div /><div /><div /></div></div>}<span className="pv-number">0{i+1}</span></div><div className="pv-service-copy"><p className="pv-eyebrow">{p.tag}</p><h3>{p.label}</h3><p>{p.text}</p><span className="pv-service-cta">{p.id === 'visualization' ? 'View Gallery' : 'Learn More'} <span>↗</span></span></div></button>)}</div>
    <div className="pv-supporting">{supporting.map(([id,title,text]) => <button key={id} onClick={() => navigate(id)}><h3>{title} <span>↗</span></h3><p>{text}</p></button>)}</div>
   </section>
   <div id="projects" className="pv-existing"><Gallery /><Testimonials /></div>
   <section className="pv-contact-strip"><div><p className="pv-eyebrow">V4 BUILDING SOLUTIONS</p><h2>Have a Project in Mind?</h2></div><button className="pv-button pv-lime" onClick={() => setContact(true)}>Get a Quote <span>↗</span></button></section>
  </main>}
  <Footer /><ContactModal isOpen={contact} onClose={() => setContact(false)} /><WhatsAppButton /><OpportunityPopup />
 </div>;
}
