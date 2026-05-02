import React from 'react';
import ContactButton from './ContactButton';

export default function Solution() {
  return (
    <section className="solution-section section" id="solution">
      <div className="container">
        <div className="solution-inner">
          <div className="solution-content">
            <h2 className="section-title text-left">
              Your <span>Silent Tech Team</span>
            </h2>
            <p className="section-subtitle text-left">
              We operate completely behind the scenes as your dedicated development arm. You close the deals, we build the technology.
            </p>
            
            <ul className="solution-list">
              <li>
                <strong>Offshore Tech Team:</strong> Access elite React, Next.js, and Mobile App developers at a fraction of US rates.
              </li>
              <li>
                <strong>White-Label Execution:</strong> We sign NDAs, use your email addresses, and operate under your agency's brand.
              </li>
              <li>
                <strong>Reliable Long-Term Collaborator:</strong> We don't just finish projects and disappear. We provide ongoing support and maintenance.
              </li>
            </ul>
            
            <div className="mt-4">
              <ContactButton className="btn btn-primary">
                Let&apos;s Scale Together →
              </ContactButton>
            </div>
          </div>
          
          <div className="solution-visual">
            <div className="solution-image-placeholder">
              <div className="placeholder-content">
                <span className="text-4xl mb-4 block">🤝</span>
                <span className="font-bold">White-Label Partnership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
