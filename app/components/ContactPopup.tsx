'use client';

import { useState, useEffect } from 'react';

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when open
    };
    window.addEventListener('open-contact-popup', handleOpen);
    return () => window.removeEventListener('open-contact-popup', handleOpen);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    // Optional: clear form on close
    // setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    // setSubmitStatus({ type: null, message: '' });
  };

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
        // Optional: auto-close after success
        // setTimeout(closePopup, 3000);
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-popup-overlay" onClick={closePopup}>
      <div className="contact-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="contact-popup-close" onClick={closePopup} aria-label="Close modal">
          &times;
        </button>
        <div className="contact-form-wrapper" style={{ padding: '32px', boxShadow: 'none' }}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a message</h3>
            <p className="contact-form-desc">Fill out the form below and we will get back to you within 24 hours.</p>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="popup-name">Full Name *</label>
                <input
                  type="text"
                  id="popup-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="popup-email">Work Email *</label>
                <input
                  type="email"
                  id="popup-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="popup-phone">Phone Number</label>
                <input
                  type="tel"
                  id="popup-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="popup-company">Company Name</label>
                <input
                  type="text"
                  id="popup-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Inc."
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="popup-service">Interested Service</label>
              <select
                id="popup-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service...</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="CRM Integration">CRM Integration</option>
                <option value="White-Label Partnership">White-Label Partnership</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="popup-message">How can we help? *</label>
              <textarea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project, timeline, and goals..."
                rows={4}
              />
            </div>

            <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting} style={{ width: '100%' }}>
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
    </div>
  );
}
