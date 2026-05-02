import Image from 'next/image';
import Link from 'next/link';
import ContactButton from './ContactButton';
export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src="/images/logo.png" alt="MAKROSYS Solutions" width={180} height={42} style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain' }} />
            </div>
            <p>
              We are an offshore technical development partner specializing in web apps, mobile apps, and custom CRM integrations for US-based agencies and startups.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="LinkedIn">in</a>
              <a href="#" className="footer-social" aria-label="Twitter">𝕏</a>
              <a href="#" className="footer-social" aria-label="Instagram">📷</a>
              <a href="#" className="footer-social" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link href="/#services">Web Development</Link></li>
              <li><Link href="/#services">App Development</Link></li>
              <li><Link href="/#services">CRM Integration</Link></li>
              <li><Link href="/#services">Automation</Link></li>
              <li><Link href="/#partnership">White-Label</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/for-agencies">For Agencies</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li>
                <ContactButton 
                  className="" 
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)', padding: 0, cursor: 'pointer', fontSize: '0.95rem' }}
                >
                  Contact
                </ContactButton>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="tel:8082012995">📞 8082012995</a></li>
              <li><a href="mailto:hr@makrosyssolutions.com">✉️ hr@makrosyssolutions.com</a></li>
              <li><span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>📍 B-2047 ZARA ROSSA, Sector 112, Bajghera, Palam Vihar (Gurgaon), Palam Vihar, Gurgaon- 122017, Haryana</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 MAKROSYS. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
