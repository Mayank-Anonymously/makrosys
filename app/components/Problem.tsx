import React from 'react';

export default function Problem() {
  return (
    <section className="problem-section section bg-off-white" id="problem">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            The <span>Agency Growth Trap</span>
          </h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: '700px' }}>
            Marketing agencies hit a wall when they lack reliable technical execution.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">💸</div>
            <h3>Hiring US Developers is Expensive</h3>
            <p>
              In-house senior developers in the US demand $120K-$180K+ salaries, crushing your profit margins before the project even starts.
            </p>
          </div>
          
          <div className="problem-card">
            <div className="problem-icon">📈</div>
            <h3>Scaling Delivery is Painful</h3>
            <p>
              Client workloads are unpredictable. You either have too many developers sitting idle on the bench, or not enough talent to deliver when you land a huge account.
            </p>
          </div>
          
          <div className="problem-card">
            <div className="problem-icon">🚪</div>
            <h3>Losing Clients to Tech Gaps</h3>
            <p>
              When a client asks for a custom app or complex CRM integration, you shouldn't have to say "we don't do that" and watch them walk to a full-service competitor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
