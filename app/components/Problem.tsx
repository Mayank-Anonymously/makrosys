import React from 'react';

export default function Problem() {
  return (
    <section className="problem-section section bg-off-white" id="problem">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            The <span>UAE Growth Bottlenecks</span>
          </h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: '700px' }}>
            High-growth companies and agencies in Dubai hit a wall when their technology and CRM workflows fail to keep pace.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">💸</div>
            <h3>Local UAE Hiring is Expensive</h3>
            <p>
              Hiring in-house senior engineers and CRM specialists in Dubai is slow and commands premium salaries, visa costs, and office overheads, crushing your operational margins.
            </p>
          </div>
          
          <div className="problem-card">
            <div className="problem-icon">🐌</div>
            <h3>Slow Delivery Cycles</h3>
            <p>
              Traditional regional dev agencies move at a sluggish pace. Projects drag on for months, delaying critical product launches and sales cycles that should be executed in weeks.
            </p>
          </div>
          
          <div className="problem-card">
            <div className="problem-icon">📉</div>
            <h3>CRM Leakage &amp; Weak Follow-up</h3>
            <p>
              Valuable advertising leads slip through the cracks when WhatsApp inquiries, phone calls, and forms are managed in disjointed spreadsheets instead of an automated pipeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
