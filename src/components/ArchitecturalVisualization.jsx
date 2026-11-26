'use client';
import { useState } from 'react';
import Image from 'next/image';
import projects from '@/data/visualizationProjects.json';
import styles from './ArchitecturalVisualization.module.css';

const portfolios = [
 {
  title: 'Bahuleyan Residence',
  image: '/images/projects/Bahuleyan DINING1.png',
  alt: 'Bahuleyan residence dining area and staircase visualization',
  href: '/portfolios/bahuleyan-residence',

 },
 {
  title: 'Ummer Residence',
  image: '/images/projects/ummer-kottol-living-room.png',
  alt: 'Ummer residence living room visualization in Kottol',
  href: '/portfolios/ummer-residence',

 },
];

function matchesCategory(project, category) {
 return category === 'All' || project.category === category ||
  (project.additionalCategories ?? []).includes(category);
}

export default function ArchitecturalVisualization({ onBack, onContactClick }) {
 const [filter, setFilter] = useState('All');
 const visible = projects.filter(project => matchesCategory(project, filter));
 return <main className={styles.page}>
  <div className={styles.breadcrumb}><button onClick={onBack}>← Back to Home</button><span>V4 / ARCHITECTURAL VISUALIZATION</span></div>
  <section className={styles.hero}>
   <div className={styles.heroCopy}><p className={styles.eyebrow}>3D MODELING & RENDERING</p><h1>Architectural<br /><em>Visualization.</em></h1><h2>Photorealistic Rendering</h2><p className={styles.description}>Visualize your dream project before the first brick is laid. We combine sophisticated rendering tools with advanced AI technologies to deliver precise rendering and photorealistic finishes for stunning interior and exterior 3D walkthroughs.</p><div className={styles.actions}><a href="#viz-portfolio" className={styles.primary}>View Portfolio <span>↓</span></a><a href="#viz-gallery">View Gallery</a><button onClick={onContactClick}>Get a Quote ↗</button></div><div className={styles.tools}><span>AI Render Engine</span></div></div>
   <figure className={styles.heroImage}><Image src="/images/projects/shifana-palakkad.png" alt={projects[0].alt} fill priority sizes="(max-width: 800px) 100vw, 58vw" /><figcaption><span>EXTERIOR / PALAKKAD</span><strong>Shifana Palakkad</strong></figcaption></figure>
  </section>
  <section id="viz-portfolio" className={styles.portfolio} aria-labelledby="viz-portfolio-title">
   <div className={styles.sectionTitle}>
    <h2 id="viz-portfolio-title">Portfolio</h2>
    <p>Interior design presentations prepared for our clients.</p>
   </div>
   <div className={styles.grid}>
    {portfolios.map(({ title, image, alt, href }) => (
     <article className={styles.portfolioCard} key={href}>
      <a className={styles.portfolioLink} href={href} target="_blank" rel="noopener noreferrer"
         aria-label={`Open ${title} portfolio in a new tab`}>
       <div className={styles.portfolioImage}>
        <Image src={image} alt={alt} fill sizes="(max-width: 800px) 100vw, 45vw" />
       </div>
       <div className={styles.portfolioDetails}>
        <h3>{title}</h3>
        <div><span>View portfolio ↗</span></div>
       </div>
      </a>
     </article>
    ))}
   </div>
  </section>

  <section id="viz-gallery" className={styles.gallery} aria-labelledby="viz-gallery-title"><div className={styles.sectionTitle}><div><p className={styles.eyebrow}>01 / SELECTED VISUALIZATIONS</p><h2 id="viz-gallery-title">Gallery Highlight</h2></div><p>Interiors. Exteriors. Commercial spaces.</p></div><div className={styles.filters} aria-label="Filter visualizations">{['All', 'Exterior', 'Interior', 'Commercial'].map(category => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}<span>{projects.filter(p => matchesCategory(p, category)).length}</span></button>)}</div><p className={styles.srOnly} role="status">{visible.length} visualizations shown</p><div className={styles.grid}>{visible.map(project => <figure key={project.file} className={styles.card}><a href={`/images/projects/${encodeURIComponent(project.file)}`} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${project.title}`}><div className={styles.image}><Image src={`/images/projects/${project.file}`} alt={project.alt} fill sizes="(max-width: 800px) 100vw, 50vw" /><span className={styles.expand}>↗</span></div></a><figcaption><h3>{project.title}</h3><span>{project.category}</span></figcaption></figure>)}</div></section>
  <section className={styles.tour} aria-labelledby="viz-tour-title"><div className={styles.sectionTitle}><div><p className={styles.eyebrow}>02 / STEP INSIDE</p><h2 id="viz-tour-title">Virtual Tour</h2></div><p>Experience our finished projects in 360° VR.</p></div><div className={styles.tourFrame}><iframe title="V4 Building Solutions interactive 360-degree project tour" src="https://momento360.com/e/u/14116185ac8f4341b73dee39d4cf12a5?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true" loading="lazy" allowFullScreen allow="accelerometer; magnetometer; gyroscope" /><span>360° / Interactive View</span></div></section>
  <section className={styles.contact}><div><p className={styles.eyebrow}>V4 BUILDING SOLUTIONS</p><h2>Have a Project in Mind?</h2></div><button className={styles.primary} onClick={onContactClick}>Get a Quote <span>↗</span></button></section>
 </main>;
}
