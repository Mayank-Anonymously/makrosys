import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import ContactButton from '../components/ContactButton';

export const metadata: Metadata = {
  title: 'For Agencies | Makrosys Solutions',
  description: 'Scale your marketing agency with Makrosys. We provide white-label development, CRM integration, and dedicated offshore tech teams so you can focus on selling and client strategy.',
  robots: 'index, follow',
};

const agencyFaqs = [
  {
    question: "How does the white-label partnership work?",
    answer: "We operate completely behind the scenes. We can use your agency email addresses, join your Slack/Teams channels, and attend client calls as your 'internal' development team. Your clients never need to know we exist."
  },
  {
    question: "Do you have minimum project sizes or commitments?",
    answer: "No. We can start with a single pilot project (like a landing page or CRM integration) to prove our quality. From there, we can scale to a dedicated monthly retainer as your volume grows."
  },
  {
    question: "Where is your development team located?",
    answer: "Our core development and engineering team is based in our offshore hubs, but our project managers work in overlapping US time zones to ensure seamless daily communication with your team."
  },
  {
    question: "Who owns the code and intellectual property?",
    answer: "You and your clients do. Upon project completion and payment, 100% of the IP, code repositories, and assets are transferred to your agency."
  }
];

export default function ForAgenciesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Agency Hero */}
        <section className="agency-hero">
          <div className="container">
            <div className="hero-badge">🚀 The Ultimate Agency Partner</div>
            <h1 className="agency-hero-title">
              You Sell. <span>We Build.</span>
            </h1>
            <p className="agency-hero-desc">
              Stop losing deals because you lack in-house technical talent. We provide US agencies with reliable, white-label development and CRM integration teams at a fraction of local hiring costs.
            </p>
            <div className="hero-buttons" style={{ justifyContent: 'center' }}>
              <ContactButton className="btn btn-primary">
                Partner With Us →
              </ContactButton>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="agency-benefits section">
          <div className="container">
            <h2 className="section-title text-center">
              Why Agencies <span>Partner With Us</span>
            </h2>
            <p className="section-subtitle">
              We eliminate the friction of technical execution so you can focus on strategy, sales, and account management.
            </p>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">💸</div>
                <h3>Increase Your Margins</h3>
                <p>US developers cost $120k+ per year. Our offshore model gives you top-tier engineering talent at a 60% lower cost, immediately increasing your agency profitability.</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <h3>Scale on Demand</h3>
                <p>Landed a massive client? Don't panic hire. We can spin up a dedicated team of React developers or Salesforce experts within 48 hours to handle the overflow.</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">👻</div>
                <h3>100% White-Label</h3>
                <p>We sign NDAs and work completely under your brand. We are happy to use your email addresses and project management tools. To your clients, we are your team.</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">🛡️</div>
                <h3>Zero Hiring Risk</h3>
                <p>No recruiting fees, no payroll taxes, no severance packages. You only pay for the development hours or dedicated resources you actually need.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="agency-process section bg-light">
          <div className="container">
            <div className="process-wrapper">
              <div className="process-content">
                <h2 className="section-title text-left">
                  How the <span>Partnership Works</span>
                </h2>
                <p className="process-desc">
                  We've streamlined our collaboration process specifically for fast-moving marketing and creative agencies.
                </p>
                
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">01</div>
                    <div className="step-text">
                      <h4>Discovery &amp; Scoping</h4>
                      <p>You send us the design files (Figma/Adobe) or CRM requirements. We provide a guaranteed fixed-price quote and timeline within 24 hours.</p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">02</div>
                    <div className="step-text">
                      <h4>Development &amp; Staging</h4>
                      <p>Our team builds the project while providing regular updates via Slack or Asana. You have full visibility into our staging environments.</p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">03</div>
                    <div className="step-text">
                      <h4>Launch &amp; Support</h4>
                      <p>We handle the technical deployment and QA. Once live, we offer 30 days of bug-free warranty and ongoing maintenance retainers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ faqs={agencyFaqs} title="Partnership FAQs" />

      </main>
      <Footer />
    </>
  );
}
