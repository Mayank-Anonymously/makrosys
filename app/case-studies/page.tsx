import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactButton from '../components/ContactButton';

export const metadata: Metadata = {
  title: 'Case Studies | Makrosys Solutions',
  description: 'See how we have helped US agencies and businesses scale their delivery through white-label development and complex CRM integrations.',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "project-headless",
      title: "Headless E-Commerce Migration",
      clientType: "US E-commerce Marketing Agency",
      challenge: "The agency's largest client needed to migrate from a sluggish monolithic Magento build to a high-performance headless Shopify storefront. The agency's in-house team was highly skilled in Shopify Liquid but lacked the React and Next.js expertise required to build a custom storefront.",
      solution: "Makrosys deployed a dedicated team of 2 Senior Next.js developers and 1 QA engineer under a white-label agreement. We integrated Shopify's Storefront API with a Next.js frontend, implemented Algolia for lightning-fast search, and built a custom CMS bridge using Sanity.io so the client's marketing team could manage content effortlessly.",
      results: [
        "42% increase in mobile conversion rate.",
        "Page load times dropped from 4.2s to 0.8s.",
        "Agency retained a $60k+ client without having to hire a full-time US-based Next.js engineer."
      ],
      tags: ["Next.js", "Shopify API", "Sanity CMS", "White-Label"]
    },
    {
      id: "project-crm",
      title: "Automated B2B Lead Routing System",
      clientType: "Enterprise Real Estate Brokerage",
      challenge: "The brokerage was spending $20,000/month on LinkedIn ads but suffering a 12-hour delay in lead response times. Leads were sitting in a spreadsheet before being manually routed to agents, causing a massive drop-off in conversions. They needed a complex, automated pipeline.",
      solution: "Our CRM engineering team built a custom middleware using Node.js that intercepted incoming webhooks from LinkedIn and Facebook Ads. We integrated this middleware directly into their HubSpot CRM. Leads were automatically enriched using Clearbit, scored based on property intent, and instantly routed to the nearest available agent via SMS (Twilio).",
      results: [
        "Lead response time plummeted from 12 hours to under 3 minutes.",
        "Agent follow-up rate increased by 85%.",
        "$2.4M in closed pipeline attributed directly to the new automation flow within the first quarter."
      ],
      tags: ["HubSpot CRM", "Node.js", "Twilio API", "Automation"]
    },
    {
      id: "project-platform",
      title: "Scalable Property Management Portal",
      clientType: "SaaS PropTech Startup",
      challenge: "A rapidly growing startup needed to scale their MVP property management platform. The initial codebase was unscalable and struggling to handle the onboarding of 10,000+ new property listings. They had runway, but US engineering salaries would have exhausted their funding before reaching Series A.",
      solution: "Makrosys provided a continuous monthly dedicated team (1 Tech Lead, 3 React Developers, 2 Node.js Backend Engineers). We completely refactored their database architecture, migrated their infrastructure to AWS Serverless to handle traffic spikes, and built a dynamic frontend capable of rendering massive datasets without lag.",
      results: [
        "Successfully scaled the platform to handle 50,000+ concurrent listings.",
        "Reduced server infrastructure costs by 35% through AWS optimization.",
        "Saved the startup approximately $450,000 in annual engineering payroll, extending their runway by 8 months."
      ],
      tags: ["React", "AWS Serverless", "Node.js", "Dedicated Team"]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero-title">
              Our <span>Track Record</span>
            </h1>
            <p className="page-hero-desc">
              We don't just write code; we solve complex business bottlenecks. Explore how our offshore engineering teams have delivered measurable ROI for agencies and startups.
            </p>
          </div>
        </section>

        <section className="case-studies-list section bg-off-white">
          <div className="container" style={{ maxWidth: '900px' }}>
            {caseStudies.map((study, idx) => (
              <div className="detailed-case-study" key={study.id}>
                <div className="study-meta">
                  <span className="study-client-type">{study.clientType}</span>
                </div>
                <h2>{study.title}</h2>
                
                <div className="study-tags">
                  {study.tags.map(tag => (
                    <span key={tag} className="study-tag">{tag}</span>
                  ))}
                </div>

                <div className="study-content-grid">
                  <div className="study-content-block">
                    <h4>The Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>
                  <div className="study-content-block">
                    <h4>The Solution</h4>
                    <p>{study.solution}</p>
                  </div>
                </div>

                <div className="study-results-block">
                  <h4>The Impact</h4>
                  <ul>
                    {study.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
                
                {idx !== caseStudies.length - 1 && <hr className="study-divider" />}
              </div>
            ))}
          </div>
        </section>

        <section className="final-cta-section section">
          <div className="container">
            <div className="final-cta-inner bg-dark text-white text-center">
              <h2>Need Results Like These?</h2>
              <p>
                Let's discuss how our technical expertise can help your agency or startup scale effortlessly.
              </p>
              <div className="final-cta-buttons">
                <ContactButton className="btn btn-primary">
                  Book a Strategy Call →
                </ContactButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
