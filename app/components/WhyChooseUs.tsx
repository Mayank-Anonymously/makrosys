import React from 'react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Cost-Effective Execution",
      desc: "Save up to 60% compared to US hiring without sacrificing code quality or engineering standards."
    },
    {
      title: "Fast Turnaround",
      desc: "Our agile teams are ready to deploy instantly. We overlap with US time zones to ensure continuous delivery."
    },
    {
      title: "Dedicated Support",
      desc: "You get a dedicated technical project manager who acts as your single point of contact for daily updates."
    },
    {
      title: "Scalable Teams",
      desc: "Need 1 developer today and 5 next month? We scale our resources up or down based on your project volume."
    },
    {
      title: "Transparent Communication",
      desc: "No black boxes. We use Slack, Jira, and regular staging environment pushes so you always know what's happening."
    }
  ];

  return (
    <section className="why-choose-section section bg-off-white" id="why-us">
      <div className="container">
        <div className="why-choose-inner">
          <div className="why-choose-content">
            <h2 className="section-title text-left">
              Why Agencies <span>Choose Makrosys</span>
            </h2>
            <p className="section-subtitle text-left">
              Outsourcing often gets a bad reputation because of poor communication and low quality. We built our model entirely around solving those exact problems for US B2B clients.
            </p>
            
            <div className="reasons-list">
              {reasons.map((reason, idx) => (
                <div className="reason-item" key={idx}>
                  <div className="reason-icon">✓</div>
                  <div>
                    <h4>{reason.title}</h4>
                    <p>{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="why-choose-visual">
            <div className="metrics-box">
              <div className="metric-row">
                <span className="metric-number">98%</span>
                <span className="metric-text">Client Retention Rate</span>
              </div>
              <div className="metric-row">
                <span className="metric-number">50+</span>
                <span className="metric-text">Enterprise Projects Delivered</span>
              </div>
              <div className="metric-row">
                <span className="metric-number">3</span>
                <span className="metric-text">US Time Zones Covered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
