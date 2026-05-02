import React from 'react';
import Link from 'next/link';

export default function CaseStudiesPreview() {
  const caseStudies = [
    {
      clientType: "E-commerce Agency",
      problem: "Client needed a high-performance headless Shopify storefront, but the agency lacked Next.js expertise.",
      solution: "White-labeled Next.js + Shopify Storefront API development over 6 weeks.",
      results: "42% increase in mobile conversion rate; agency retained a $50k+ client.",
      icon: "🛒"
    },
    {
      clientType: "B2B Real Estate Firm",
      problem: "Manual lead routing was causing a 12-hour delay in response times, losing deals.",
      solution: "Custom HubSpot CRM integration with automated lead scoring and SMS routing.",
      results: "Lead response time dropped from 12 hours to 3 minutes.",
      icon: "🏢"
    }
  ];

  return (
    <section className="case-studies-preview section" id="case-studies">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Proven <span>Results</span>
          </h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: '600px' }}>
            Real metrics from technical partnerships we've executed for our clients.
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study, idx) => (
            <div className="case-study-card" key={idx}>
              <div className="case-study-header">
                <span className="case-study-icon">{study.icon}</span>
                <span className="case-study-client">{study.clientType}</span>
              </div>
              <div className="case-study-body">
                <div className="study-item">
                  <strong>The Problem:</strong>
                  <p>{study.problem}</p>
                </div>
                <div className="study-item">
                  <strong>The Solution:</strong>
                  <p>{study.solution}</p>
                </div>
                <div className="study-item highlight">
                  <strong>The Results:</strong>
                  <p>{study.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn btn-outline">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
