import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactButton from '../components/ContactButton';

export const metadata: Metadata = {
  title: 'About Makrosys | Offshore Tech Partner for US Agencies',
  description: 'Makrosys Solutions is an offshore technical development partner specializing in web apps, mobile apps, and custom CRM integrations for US-based agencies and startups.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero-title">
              About <span>Makrosys</span>
            </h1>
            <p className="page-hero-desc">
              We are a specialized offshore engineering team dedicated to helping US marketing agencies and SaaS startups scale their technical delivery without the overhead of local hiring.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mb-5">
          <div className="static-content">
            <h2>Our Mission</h2>
            <p>
              Our mission is simple: to be the most reliable offshore technical partner for US-based businesses. We bridge the gap between expensive domestic engineering talent and low-quality overseas outsourcing by providing high-end, dedicated teams that integrate seamlessly into your existing workflows.
            </p>

            <h3>Why We Started</h3>
            <p>
              Makrosys was founded by technical leaders who saw a recurring problem: US marketing agencies were losing lucrative deals because they lacked the in-house technical talent to execute complex web applications and CRM integrations. Hiring locally was too expensive, and traditional outsourcing led to communication breakdowns and poor code quality.
            </p>
            <p>
              We built Makrosys to be the "silent tech team" for these agencies. We handle the heavy lifting of development—React, Next.js, React Native, HubSpot, and AWS—so that founders and agency owners can focus on what they do best: closing deals and scaling their revenue.
            </p>

            <h3>Our Engineering Expertise</h3>
            <p>
              We don't build generic WordPress sites. We specialize in complex, scalable technology:
            </p>
            <ul>
              <li><strong>Web Applications:</strong> Enterprise-grade React and Next.js platforms.</li>
              <li><strong>Mobile Applications:</strong> High-performance iOS and Android apps using React Native.</li>
              <li><strong>CRM &amp; Automation:</strong> Custom API middleware and integrations for HubSpot, Salesforce, and Zoho.</li>
              <li><strong>Cloud Infrastructure:</strong> Scalable AWS and Serverless architecture.</li>
            </ul>

            <h3>Long-Term Partnership Philosophy</h3>
            <p>
              We are not interested in one-off, transactional projects. We believe in building long-term, white-label partnerships. When you hire Makrosys, you aren't just hiring a contractor; you are bolting on an entire engineering department to your agency. We use your emails, sign your NDAs, and operate entirely behind the scenes to make you look like a full-service technical powerhouse.
            </p>
            
            <div className="mt-5 text-center">
              <ContactButton className="btn btn-primary">
                Explore Partnership Opportunities
              </ContactButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
