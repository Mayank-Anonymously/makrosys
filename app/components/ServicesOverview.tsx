import Link from 'next/link';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom React and Next.js applications engineered for scale and high performance.',
      icon: '💻',
      link: '/#services'
    },
    {
      title: 'App Development',
      description: 'Premium iOS and Android mobile applications built with React Native and Flutter.',
      icon: '📱',
      link: '/#services'
    },
    {
      title: 'CRM Integration',
      description: 'Custom middleware and API connections for HubSpot, Zoho, and Salesforce.',
      icon: '🔄',
      link: '/#services'
    },
    {
      title: 'Automation',
      description: 'Workflow automation and API-driven systems to eliminate agency bottlenecks.',
      icon: '⚙️',
      link: '/#services'
    },
    {
      title: 'White-Label Dev',
      description: 'Dedicated offshore engineering teams that operate under your brand and emails.',
      icon: '👻',
      link: '/#services'
    }
  ];

  return (
    <section className="services-overview section bg-light" id="services">
      <div className="container">
        <h2 className="section-title">
          Explore Our <span>Services</span>
        </h2>
        <p className="section-subtitle">
          Comprehensive digital solutions engineered to scale up operations and drive measurable revenue growth.
        </p>
        
        <div className="services-overview-grid">
          {services.map((svc, i) => (
            <div key={i} className="service-card">
              <div className="service-card-icon">{svc.icon}</div>
              <h3 className="service-card-title">{svc.title}</h3>
              <p className="service-card-desc">{svc.description}</p>
              <Link href={svc.link} className="service-card-link">
                Discuss Strategy →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
