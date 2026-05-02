import React from 'react';

export default function ClientTypes() {
  return (
    <section className="client-types-section section" id="clients">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Who We <span>Partner With</span>
          </h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: '600px' }}>
            We provide specialized technical firepower for organizations that need to scale rapidly.
          </p>
        </div>

        <div className="client-types-grid">
          <div className="client-type-card">
            <div className="client-type-image bg-pinkish">
              <span className="text-4xl">🏢</span>
            </div>
            <h3>US Marketing Agencies</h3>
            <p>
              Full-service, creative, and SEO agencies that want to offer premium web development and app builds without expanding their in-house payroll.
            </p>
          </div>
          
          <div className="client-type-card">
            <div className="client-type-image bg-dark text-white">
              <span className="text-4xl">🚀</span>
            </div>
            <h3>SaaS Startups</h3>
            <p>
              Funded software companies that need to accelerate their product roadmap, build MVP features, or offload maintenance to a reliable offshore team.
            </p>
          </div>
          
          <div className="client-type-card">
            <div className="client-type-image bg-red text-white">
              <span className="text-4xl">🏡</span>
            </div>
            <h3>Real Estate Businesses</h3>
            <p>
              Brokerages and property management firms needing complex property listing portals, IDX integrations, and custom CRM pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
