import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: "Web Development",
      desc: "Fast, scalable, and responsive web applications built using React, Next.js, and modern JavaScript frameworks.",
      icon: "💻"
    },
    {
      title: "App Development",
      desc: "Native and cross-platform mobile applications for iOS and Android that deliver premium user experiences.",
      icon: "📱"
    },
    {
      title: "CRM Integration",
      desc: "Custom API integrations for HubSpot, Zoho, Salesforce, and custom CRM builds to streamline operations.",
      icon: "🔄"
    },
    {
      title: "Automation & Workflows",
      desc: "Automate repetitive agency and client tasks by connecting APIs, webhooks, and third-party software.",
      icon: "⚙️"
    },
    {
      title: "White-Label Development",
      desc: "Dedicated engineering teams that work completely under your agency's branding and emails.",
      icon: "👻"
    }
  ];

  return (
    <section className="services-new-section section bg-light" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Core <span>Technical Services</span>
          </h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: '600px' }}>
            We specialize exclusively in high-end development and CRM integrations.
          </p>
        </div>

        <div className="services-new-grid">
          {servicesList.map((service, index) => (
            <div className="service-new-card" key={index}>
              <div className="service-new-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
