'use client';

import Image from 'next/image';
import ContactButton from './ContactButton';

const trustIndicators = [
  { label: 'UAE-friendly support', icon: '🇦🇪' },
  { label: 'Fast delivery', icon: '⚡' },
  { label: 'Dedicated project managers', icon: '👤' },
  { label: 'Secure NDA agreements', icon: '🛡️' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner dubai-hero-grid">
        <div className="hero-content dubai-hero-copy">
          <div className="hero-badge">
            🇦🇪 Premium Dubai Tech Partner
          </div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Your Offshore Development &amp; CRM Team —{' '}
            <span>Built for Dubai Businesses</span>
          </h1>
          <p className="hero-desc" style={{ maxWidth: '580px', fontSize: 'clamp(1.02rem, 1.4vw, 1.18rem)', lineHeight: 1.75 }}>
            Scale your UAE business with dedicated developers, enterprise automation, CRM systems, and high-performance technology solutions.
          </p>
          <div className="hero-buttons">
            <ContactButton className="btn btn-primary">
              Book Free Consultation →
            </ContactButton>
            <a 
              href="https://wa.me/918082012995?text=Hi%20Makrosys%2C%20I%20want%20to%20discuss%20a%20Dubai%20technology%20project." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
          <div className="dubai-trust-row" style={{ marginTop: '24px' }}>
            {trustIndicators.map((item) => (
              <span key={item.label} style={{ fontSize: '0.78rem', fontWeight: 700, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.06)', color: 'var(--text-primary)', padding: '6px 12px', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="dubai-hero-visual" aria-label="CRM dashboard preview for Dubai business operations" style={{ width: '100%' }}>
          <div className="dubai-dashboard-card main">
            <div className="dubai-dashboard-top">
              <Image src="/images/logo.png" alt="Makrosys Solutions" width={130} height={31} />
              <span>Dubai CRM Ops</span>
            </div>
            <div className="dubai-chart-bars">
              <span style={{ height: '46%' }} />
              <span style={{ height: '72%' }} />
              <span style={{ height: '54%' }} />
              <span style={{ height: '88%' }} />
              <span style={{ height: '66%' }} />
              <span style={{ height: '94%' }} />
            </div>
            <div className="dubai-dashboard-metrics">
              <div><strong>+38%</strong><span>Lead conversion</span></div>
              <div><strong>60%</strong><span>Cost savings</span></div>
              <div><strong>24h</strong><span>Delivery rhythm</span></div>
            </div>
          </div>
          <div className="dubai-dashboard-card floating one">
            <span>Qualified UAE leads</span>
            <strong>1,284</strong>
          </div>
          <div className="dubai-dashboard-card floating two">
            <span>Automation saved</span>
            <strong>86 hrs/mo</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
