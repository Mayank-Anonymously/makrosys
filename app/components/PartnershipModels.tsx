import React from 'react';
import ContactButton from './ContactButton';

export default function PartnershipModels() {
  return (
    <section className="partnership-models section bg-light" id="partnership">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Flexible <span>Partnership Models</span>
          </h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: '700px' }}>
            We adapt to how you do business. Choose the engagement model that fits your agency's scale and cash flow.
          </p>
        </div>

        <div className="models-grid">
          <div className="model-card">
            <h3>White-Label Project</h3>
            <p className="model-desc">
              Fixed-price, scope-based development. You get a guaranteed quote, you mark it up, and sell it to your client.
            </p>
            <ul className="model-features">
              <li>✓ Guaranteed fixed cost</li>
              <li>✓ Timeline commitments</li>
              <li>✓ Complete IP transfer</li>
            </ul>
          </div>
          
          <div className="model-card highlight">
            <div className="popular-badge">Most Popular for Agencies</div>
            <h3>Monthly Dedicated Team</h3>
            <p className="model-desc">
              Hire 1 to 10+ full-time developers exclusively for your agency at a flat monthly rate. Scale up or down instantly.
            </p>
            <ul className="model-features">
              <li>✓ Fraction of US salaries</li>
              <li>✓ Direct Slack communication</li>
              <li>✓ Dedicated project manager</li>
            </ul>
            <div className="mt-6 text-center">
              <ContactButton className="btn btn-primary" style={{ width: '100%' }}>
                Inquire Rates
              </ContactButton>
            </div>
          </div>
          
          <div className="model-card">
            <h3>Revenue Share</h3>
            <p className="model-desc">
              Don't want to manage the client project? Refer the deal to us, and earn a recurring commission for the lifetime of the project.
            </p>
            <ul className="model-features">
              <li>✓ Zero execution risk</li>
              <li>✓ 10-15% lifetime commission</li>
              <li>✓ We handle client communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
