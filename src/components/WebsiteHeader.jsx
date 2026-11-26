'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WebsiteHeader({ onNavigate, onServices, onContact, mobileServices = [] }) {
 const [menuOpen, setMenuOpen] = useState(false);
 const closeMenu = () => setMenuOpen(false);

 const items = [
  { label: 'Home', href: '/', action: onNavigate && (() => onNavigate(null)) },
  { label: 'Projects', href: '/#projects', action: onNavigate && (() => onNavigate('projects')) },
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '/#services', action: onServices },
  { label: 'Contact Us', href: '/#contact', action: onContact, contact: true },
 ];

 function renderItem(item, mobile = false) {
  const className = !mobile && item.contact ? 'pv-button pv-dark' : undefined;
  const label = <>{item.label}{!mobile && item.contact && <span aria-hidden="true">↗</span>}</>;
  if (!item.action) {
   return <Link key={item.label} href={item.href} className={className} onClick={closeMenu}>{label}</Link>;
  }
  return <button key={item.label} type="button" className={className} onClick={() => {
   closeMenu();
   item.action();
  }}>{label}</button>;
 }

 const brand = <><Image src="/V4_Logo.jpg" alt="" width={52} height={52} /><span>V4 BUILDING SOLUTIONS<small>KSEB Class B Licensed | Chartered Engineer (Electrical)</small></span></>;
 const mobileItems = mobileServices.length
  ? [...items.slice(0, 3), ...mobileServices.map(service => ({ label: service.label, action: () => onNavigate(service.id) })), items[4]]
  : items;

 return <>
  <header className="pv-header">
   {onNavigate
    ? <button className="pv-brand" type="button" onClick={() => { closeMenu(); onNavigate(null); }} aria-label="V4 Building Solutions home">{brand}</button>
    : <Link className="pv-brand" href="/" aria-label="V4 Building Solutions home">{brand}</Link>}
   <nav aria-label="Main navigation">{items.map(item => renderItem(item))}</nav>
   <button className="pv-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="pv-mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close ✕' : 'Menu ☰'}</button>
  </header>
  <div id="pv-mobile-nav">
   {menuOpen && <nav className="pv-mobile-nav" aria-label="Mobile navigation">{mobileItems.map(item => renderItem(item, true))}</nav>}
  </div>
 </>;
}
