import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesOverview from '../components/ServicesOverview';

export const metadata: Metadata = {
  title: 'Terms & Conditions | MAKROSYS',
  description: 'Read the terms and conditions for using the MAKROSYS website and our digital marketing services.',
  robots: 'noindex, nofollow', // Usually legal pages can be indexed, but boilerplate often noindexed for SEO sanity.
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero-title">
              Terms & <span>Conditions</span>
            </h1>
            <p className="page-hero-desc">
              Last updated: August 2024. Please read these terms carefully before using our website or services.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="container">
          <div className="static-content">
            <h2>1. Introduction</h2>
            <p>
              Welcome to MAKROSYS. These Terms and Conditions govern your use of our website located at makrosyssolutions.com and form a legally binding agreement between you and MAKROSYS Solutions. By accessing this website, we assume you accept these terms and conditions.
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, MAKROSYS and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>

            <h2>3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
              <li>Publishing any Website material in any other media without prior consent.</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
              <li>Using this Website in any way that is or may be damaging to this Website.</li>
              <li>Using this Website in any way that impacts user access to this Website.</li>
            </ul>

            <h2>4. Service Agreements</h2>
            <p>
              Any marketing, development, or consulting services engaged with MAKROSYS are subject to separate Master Service Agreements (MSAs) or Statements of Work (SOW). The terms within those specific contracts will supersede any conflicting terms found on this public website.
            </p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
              This Website is provided "as is," with all faults, and MAKROSYS express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall MAKROSYS, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website.
            </p>

            <h2>7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of Haryana, India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <ServicesOverview />
      </main>
      <Footer />
    </>
  );
}
