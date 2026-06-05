import React from 'react';
import ContactButton from './ContactButton';

export default function Solution() {
  return (
    <section className="solution-section section" id="solution">
      <div className="container">
        <div className="solution-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div className="solution-content">
            <h2 className="section-title text-left">
              Your Premium <span>Technology Extension</span>
            </h2>
            <p className="section-subtitle text-left">
              We operate as your dedicated engineering arm, combining offshore cost-efficiency with high-trust enterprise execution.
            </p>
            
            <ul className="solution-list">
              <li>
                <strong>Dedicated Offshore Developers:</strong> Access vetted React, Next.js, mobile, and CRM engineers at up to 60% lower operational costs.
              </li>
              <li>
                <strong>Timezone-Friendly Communication:</strong> Daily overlapping windows for standups, reviews, and messaging. We respond at Dubai speed.
              </li>
              <li>
                <strong>Enterprise NDA &amp; SLAs:</strong> Secure code repositories, confidential white-label agreements, and dependable monthly support.
              </li>
            </ul>
            
            <div className="mt-4">
              <ContactButton className="btn btn-primary">
                Let&apos;s Scale Your Operations →
              </ContactButton>
            </div>
          </div>
          
          <div className="solution-visual">
            <div className="solution-image-placeholder" style={{ background: 'linear-gradient(135deg, rgba(255, 65, 108, 0.05) 0%, rgba(255, 75, 43, 0.08) 100%)', border: '1px solid rgba(255, 65, 108, 0.15)', borderRadius: '24px', padding: '40px', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '120px', height: '120px', borderRadius: '50%', background: 'var(--gradient-primary)', opacity: 0.1, filter: 'blur(20px)' }} />
              <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '150px', height: '150px', borderRadius: '50%', background: 'var(--gradient-primary)', opacity: 0.08, filter: 'blur(30px)' }} />
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', zIndex: 1 }}>
                <div style={{ padding: '20px', borderRadius: '20px', background: '#ffffff', boxShadow: 'var(--shadow-lg)', textAlign: 'center', minWidth: '130px' }}>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>🇦🇪</span>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)' }}>Dubai</strong>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Business Desk</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', animation: 'pulse 2s infinite' }}>⚡</span>
                  <div style={{ width: '80px', height: '2px', background: 'var(--gradient-primary)', position: 'relative', margin: '8px 0' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-dark)', position: 'absolute', top: '-3px', left: '0', animation: 'slideRight 2s infinite linear' }} />
                  </div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>Timezone Lock</span>
                </div>

                <div style={{ padding: '20px', borderRadius: '20px', background: '#ffffff', boxShadow: 'var(--shadow-lg)', textAlign: 'center', minWidth: '130px' }}>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>💻</span>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)' }}>Offshore</strong>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Delivery Hub</span>
                </div>
              </div>

              <div style={{ marginTop: '30px', textAlign: 'center', zIndex: 1 }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '1rem' }}>Seamless B2B Delivery</strong>
                <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: '4px' }}>Secure repositories, white-label sprints, and direct WhatsApp updates</span>
              </div>
              
              <style>{`
                @keyframes slideRight {
                  0% { left: 0%; }
                  50% { left: 90%; }
                  100% { left: 0%; }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
