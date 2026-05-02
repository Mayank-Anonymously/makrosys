'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import ServicesOverview from '../components/ServicesOverview';

export default function ContactPage() {
  const contactFaqs = [
    {
      question: "How quickly will someone get back to me?",
      answer: "We guarantee a response from one of our growth strategists within 24 business hours of your inquiry."
    },
    {
      question: "What should I prepare for our first call?",
      answer: "It's helpful to have a general idea of your current marketing budget, your primary growth bottlenecks, and any historical data (like GA4 or ad account access) ready for discussion."
    },
    {
      question: "Do you offer free audits?",
      answer: "Yes. For qualified leads, we provide a comprehensive technical and performance audit at no cost to demonstrate exactly where we can add value."
    }
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero-badge">📬 Get In Touch</div>
            <h1 className="contact-hero-title">
              Let&apos;s Start a <span>Conversation</span>
            </h1>
            <p className="contact-hero-desc">
              Ready to unlock predictable revenue growth? Reach out to us and let&apos;s discuss how we can help your business scale.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              {/* Info Side */}
              <div className="contact-info">
                <h2 className="contact-info-title">Contact Information</h2>
                <p className="contact-info-desc">
                  Fill out the form or reach us directly. We respond within 24 hours.
                </p>

                <div className="contact-cards">
                  <div className="contact-card">
                    <div className="contact-card-icon">📞</div>
                    <div>
                      <div className="contact-card-label">Phone</div>
                      <a href="tel:8082012995" className="contact-card-value">8082012995</a>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="contact-card-icon">✉️</div>
                    <div>
                      <div className="contact-card-label">Email</div>
                      <a href="mailto:hr@makrosyssolutions.com" className="contact-card-value">hr@makrosyssolutions.com</a>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="contact-card-icon">📍</div>
                    <div>
                      <div className="contact-card-label">Office Address</div>
                      <span className="contact-card-value">
                        B-2047 ZARA ROSSA, Sector 112, Bajghera,<br />
                        Palam Vihar (Gurgaon), Palam Vihar,<br />
                        Gurgaon- 122017, Haryana
                      </span>
                    </div>
                  </div>

                  <div className="contact-card">
                    <div className="contact-card-icon">🕐</div>
                    <div>
                      <div className="contact-card-label">Business Hours</div>
                      <span className="contact-card-value">Mon – Fri: 9:00 AM – 6:00 PM IST</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="contact-socials">
                  <h4>Follow Us</h4>
                  <div className="contact-social-icons">
                    <a href="#" className="contact-social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" className="contact-social-icon" aria-label="Twitter">𝕏</a>
                    <a href="#" className="contact-social-icon" aria-label="Instagram">📷</a>
                    <a href="#" className="contact-social-icon" aria-label="YouTube">▶</a>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Send us a message</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="performance-marketing">Performance Marketing</option>
                      <option value="seo">SEO &amp; Content</option>
                      <option value="social-media">Social Media Marketing</option>
                      <option value="paid-ads">Paid Advertising</option>
                      <option value="analytics">Analytics &amp; CRO</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project and goals..."
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </button>
                  
                  {submitStatus.type && (
                    <div style={{
                      marginTop: '16px',
                      padding: '12px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      backgroundColor: submitStatus.type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                      color: submitStatus.type === 'success' ? '#2e7d32' : '#d32f2f',
                      border: `1px solid ${submitStatus.type === 'success' ? '#4caf50' : '#f44336'}`
                    }}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="contact-map">
              <h3 className="contact-map-title">Find Us</h3>
              <div className="contact-map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8!2d76.95!3d28.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI2JzI0LjAiTiA3NsKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MAKROSYS Office Location"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <ServicesOverview />

        {/* FAQs */}
        <FAQ faqs={contactFaqs} title="Contact FAQs" />
      </main>
      <Footer />
    </>
  );
}
