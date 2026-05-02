import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesOverview from '../components/ServicesOverview';

export const metadata: Metadata = {
  title: 'Privacy Policy | MAKROSYS',
  description: 'Our privacy policy detailing how MAKROSYS collects, uses, and safeguards your personal data.',
  robots: 'noindex, nofollow',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero-title">
              Privacy <span>Policy</span>
            </h1>
            <p className="page-hero-desc">
              Last updated: August 2024. Your privacy is critically important to us.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="container">
          <div className="static-content">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information to provide better services to all our users. When you use our contact forms, we may collect:
            </p>
            <ul>
              <li>Personal identifiers such as your Name, Email Address, and Phone Number.</li>
              <li>Business information such as Company Name and service interests.</li>
              <li>Technical data like IP address, browser type, and navigation metrics via cookies and analytics tools.</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <p>
              We use the information we collect from all our services for the following purposes:
            </p>
            <ul>
              <li>To provide, maintain, and improve our services.</li>
              <li>To communicate with you regarding inquiries, project updates, or marketing insights.</li>
              <li>To measure performance and effectiveness of our own marketing campaigns.</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not share your personal information with companies, organizations, or individuals outside of MAKROSYS except in the following cases:
            </p>
            <ul>
              <li><strong>With your consent:</strong> We will share personal information when we have your explicit permission.</li>
              <li><strong>For external processing:</strong> We provide personal information to our affiliates or other trusted businesses to process it fully in compliance with this Privacy Policy.</li>
              <li><strong>For legal reasons:</strong> If we have a good-faith belief that access, use, preservation, or disclosure of the information is reasonably necessary to meet legal regulations.</li>
            </ul>

            <h2>4. Security</h2>
            <p>
              We are committed to protecting our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We use secure servers, encryption during transit, and strict internal access controls to protect your data.
            </p>

            <h2>5. Cookies and Tracking</h2>
            <p>
              Our website uses cookies, pixels, and similar technologies to enhance user experience and analyze traffic. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2>6. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
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
