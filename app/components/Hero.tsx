import Link from 'next/link';
import ContactButton from './ContactButton';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            🤝 Trusted Offshore Tech Partner
          </div>
          <h1 className="hero-title">
            Your Offshore Development &amp; CRM Team —{' '}
            <span>Built for US Agencies</span>
          </h1>
          <p className="hero-desc">
            Scale delivery, cut costs, and keep clients happy — without hiring in-house developers. We become your silent tech team so you can focus on growth.
          </p>
          <div className="hero-buttons">
            <ContactButton className="btn btn-primary">
              Book a Strategy Call →
            </ContactButton>
            <Link href="/for-agencies" className="btn btn-outline">
              Become a Partner
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-grid">
            <div className="hero-stat-card">
              <div className="hero-stat-icon">💰</div>
              <div className="hero-stat-value">60%</div>
              <div className="hero-stat-label">Cost Savings vs US Hiring</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-icon">⚡</div>
              <div className="hero-stat-value">2x</div>
              <div className="hero-stat-label">Faster Delivery</div>
            </div>
            <div className="hero-stat-card accent">
              <div className="hero-stat-icon">🏗️</div>
              <div className="hero-stat-value">50+</div>
              <div className="hero-stat-label">Projects Delivered</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-icon">🔁</div>
              <div className="hero-stat-value">98%</div>
              <div className="hero-stat-label">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
