'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'For Agencies', href: '/for-agencies' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="navbar-logo">
          <Image src="/images/logo.png" alt="MAKROSYS Solutions" width={180} height={42} style={{ objectFit: 'contain' }} />
        </Link>

        <ul className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mobile-cta-item">
            <button 
              className="btn btn-primary navbar-cta" 
              onClick={() => {
                setMobileOpen(false);
                window.dispatchEvent(new Event('open-contact-popup'));
              }}
            >
              Book a Strategy Call
            </button>
          </li>
        </ul>

        <button 
          className="btn btn-primary navbar-cta desktop-cta"
          onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}
        >
          Book a Strategy Call
        </button>

        <button
          className={`navbar-hamburger ${mobileOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
