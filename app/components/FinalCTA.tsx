import React from 'react';
import ContactButton from './ContactButton';

export default function FinalCTA() {
  return (
    <section className="final-cta-section" id="cta">
      <div className="container">
        <div className="final-cta-inner bg-dark text-white text-center">
          <h2>Ready to Scale Your Agency?</h2>
          <p>
            Stop losing out on revenue because you lack in-house technical talent. Partner with Makrosys and start saying "yes" to bigger deals today.
          </p>
          <div className="final-cta-buttons">
            <ContactButton className="btn btn-primary">
              Book a Partnership Call →
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}
