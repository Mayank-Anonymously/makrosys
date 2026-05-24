import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactButton from '../components/ContactButton';

export const metadata: Metadata = {
  title: 'Web Development Company Dubai | Offshore Development UAE | Makrosys',
  description:
    'Premium offshore development, CRM Development Dubai, Mobile App Development Dubai, ERP Solutions UAE, SEO Agency Dubai, and AI Automation Dubai for UAE businesses.',
  keywords: [
    'Web Development Company Dubai',
    'CRM Development Dubai',
    'Offshore Development UAE',
    'Dedicated Developers Dubai',
    'Mobile App Development Dubai',
    'ERP Solutions UAE',
    'SEO Agency Dubai',
    'AI Automation Dubai',
  ],
  alternates: {
    canonical: '/dubai',
  },
  openGraph: {
    title: 'Your Offshore Development &amp; CRM Team for Dubai Businesses',
    description:
      'Scale with dedicated developers, CRM systems, automation, ERP, mobile apps, and lead generation built for UAE companies.',
    url: '/dubai',
    type: 'website',
  },
  robots: 'index, follow',
};

const trustIndicators = [
  { label: 'UAE-friendly support', icon: '🇦🇪' },
  { label: 'Fast delivery', icon: '⚡' },
  { label: 'Dedicated project managers', icon: '👤' },
  { label: 'Scalable offshore teams', icon: '📈' },
  { label: 'Long-term support', icon: '🛡️' },
];

const dubaiVideoUrl = 'https://videos.pexels.com/video-files/27607374/12184322_2160_3840_60fps.mp4';

const heroStats = [
  { value: '60%', label: 'Cost Savings', icon: '💰' },
  { value: '50+', label: 'Projects Delivered', icon: '🏗️' },
  { value: '2x', label: 'Faster Delivery', icon: '⚡' },
  { value: '98%', label: 'Client Retention', icon: '🔁' },
];

const services = [
  {
    title: 'Website Development',
    pain: 'Outdated websites lose buyer trust and paid traffic conversions.',
    solution: 'Premium, fast-loading Web Development Company Dubai landing pages, portals, and web apps.',
    outcome: 'Higher conversion rates, cleaner brand perception, and stronger sales pipelines.',
    icon: '💻',
    color: '#FF416C',
  },
  {
    title: 'CRM Solutions',
    pain: 'Leads leak between WhatsApp, calls, spreadsheets, and sales teams.',
    solution: 'CRM Development Dubai workflows with pipelines, reminders, dashboards, and integrations.',
    outcome: 'Better follow-up, clearer accountability, and measurable revenue operations.',
    icon: '🔄',
    color: '#FF4B2B',
  },
  {
    title: 'Mobile App Development',
    pain: 'Customers expect fast mobile experiences and self-service access.',
    solution: 'Mobile App Development Dubai for iOS, Android, internal teams, and customer portals.',
    outcome: 'Improved engagement, repeat usage, and digital service delivery.',
    icon: '📱',
    color: '#FF6B6B',
  },
  {
    title: 'ERP & HRMS',
    pain: 'Operations slow down when finance, HR, inventory, and approvals are disconnected.',
    solution: 'ERP Solutions UAE and HRMS systems tailored to department workflows.',
    outcome: 'Less manual work, cleaner reporting, and faster management decisions.',
    icon: '⚙️',
    color: '#FF416C',
  },
  {
    title: 'AI Automation',
    pain: 'Teams waste hours on repetitive admin, lead sorting, and reporting.',
    solution: 'AI Automation Dubai systems for qualification, routing, summaries, and internal assistants.',
    outcome: 'Faster response times and leaner operating costs without losing control.',
    icon: '🤖',
    color: '#FF4B2B',
  },
  {
    title: 'SEO & Lead Generation',
    pain: 'High ad spend does not convert when tracking, funnels, and SEO are weak.',
    solution: 'SEO Agency Dubai campaigns connected to landing pages, CRM, and analytics.',
    outcome: 'More qualified traffic, better attribution, and lower acquisition waste.',
    icon: '🎯',
    color: '#FF6B6B',
  },
  {
    title: 'Dedicated Developers',
    pain: 'Hiring local engineers is expensive and slows down product timelines.',
    solution: 'Dedicated Developers Dubai support with vetted offshore engineers and project managers.',
    outcome: 'Flexible capacity, lower costs, and dependable delivery momentum.',
    icon: '👨‍💻',
    color: '#FF416C',
  },
];

const challenges = [
  { text: 'High local hiring costs', icon: '💸' },
  { text: 'Slow development agencies', icon: '🐌' },
  { text: 'Lack of automation', icon: '🔧' },
  { text: 'Poor lead management', icon: '📉' },
  { text: 'Scaling difficulties', icon: '📊' },
  { text: 'CRM inefficiencies', icon: '🔗' },
  { text: 'Expensive in-house tech teams', icon: '🏢' },
];

const industries = [
  {
    name: 'Real Estate',
    challenge: 'Brokerage teams need faster lead capture, property portals, WhatsApp follow-up, and agent reporting.',
    solution: 'CRM automation, listing websites, lead routing, call tracking, and dashboards.',
    outcome: 'Shorter response cycles and stronger broker productivity.',
    icon: '🏠',
  },
  {
    name: 'Recruitment',
    challenge: 'Candidate pipelines, client jobs, and recruiter follow-ups become difficult to manage at scale.',
    solution: 'Applicant CRM, job portals, automation, and HRMS integrations.',
    outcome: 'Higher placement velocity and cleaner team accountability.',
    icon: '👥',
  },
  {
    name: 'Logistics',
    challenge: 'Manual dispatch, shipment visibility, and customer updates create operational drag.',
    solution: 'Operations portals, driver apps, ERP workflows, and reporting dashboards.',
    outcome: 'Better visibility, faster coordination, and fewer manual errors.',
    icon: '🚚',
  },
  {
    name: 'Healthcare',
    challenge: 'Clinics need appointment flows, patient communication, and secure admin systems.',
    solution: 'Booking portals, CRM reminders, mobile apps, and clinic automation.',
    outcome: 'Improved patient experience and smoother front-desk operations.',
    icon: '🏥',
  },
  {
    name: 'Ecommerce',
    challenge: 'Growth exposes weak storefronts, inventory workflows, and customer retention systems.',
    solution: 'Custom commerce builds, integrations, marketing automation, and analytics.',
    outcome: 'Faster checkout, stronger retention, and higher repeat sales.',
    icon: '🛒',
  },
  {
    name: 'Hospitality',
    challenge: 'Restaurants and venues need digital ordering, loyalty, reservations, and local visibility.',
    solution: 'Ordering systems, mobile apps, SEO, campaigns, and CRM retention flows.',
    outcome: 'More bookings, repeat visits, and measurable campaign ROI.',
    icon: '🏨',
  },
  {
    name: 'Corporate Businesses',
    challenge: 'Growing teams need dependable internal systems without bloated software spend.',
    solution: 'ERP, HRMS, approval workflows, intranets, and custom automation.',
    outcome: 'Streamlined operations and scalable digital infrastructure.',
    icon: '🏛️',
  },
];

const advantages = [
  { text: 'Save up to 60% costs', icon: '💰', detail: 'vs local UAE hiring' },
  { text: 'Faster deployment', icon: '🚀', detail: '2x speed advantage' },
  { text: 'Dedicated remote developers', icon: '👨‍💻', detail: 'Vetted senior engineers' },
  { text: 'UAE timezone-friendly communication', icon: '🕐', detail: 'Overlap hours daily' },
  { text: 'Monthly support retainers', icon: '🛡️', detail: 'Continuous improvement' },
  { text: 'Flexible scaling', icon: '📈', detail: 'Scale up or down instantly' },
];

const caseStudies = [
  {
    title: 'CRM automation for a Dubai recruitment agency',
    before: 'Leads and candidates were managed across spreadsheets and WhatsApp chats.',
    after: 'Centralized CRM, recruiter dashboards, automated follow-up, and client reporting.',
    metric: '42% faster candidate follow-up',
    roi: '31% more qualified interviews booked',
    icon: '👥',
    accent: '#FF416C',
  },
  {
    title: 'Ecommerce scaling system',
    before: 'A growing store struggled with slow pages, manual order handling, and weak tracking.',
    after: 'Optimized storefront, integrated inventory workflows, and automated retention campaigns.',
    metric: '2.4x faster page experience',
    roi: '28% uplift in checkout conversion',
    icon: '🛒',
    accent: '#FF4B2B',
  },
  {
    title: 'Lead generation automation',
    before: 'Ad leads arrived quickly but sales response and attribution were inconsistent.',
    after: 'Landing pages, CRM routing, WhatsApp alerts, and campaign dashboards.',
    metric: '63% faster first response',
    roi: '22% lower wasted ad spend',
    icon: '🎯',
    accent: '#FF6B6B',
  },
  {
    title: 'HRMS implementation',
    before: 'HR teams handled attendance, leave, and approvals through email chains.',
    after: 'Custom HRMS with employee self-service, approvals, and leadership reports.',
    metric: '18 hours saved weekly',
    roi: 'Cleaner compliance and HR visibility',
    icon: '⚙️',
    accent: '#FF416C',
  },
  {
    title: 'Mobile app success story',
    before: 'A service company relied on calls for bookings and customer updates.',
    after: 'Customer mobile app, admin console, booking flow, and notification engine.',
    metric: '35% more repeat bookings',
    roi: 'Higher customer retention within 90 days',
    icon: '📱',
    accent: '#FF4B2B',
  },
];

const testimonials = [
  {
    quote:
      'Makrosys gave us a dedicated offshore team that felt like our internal product department. Our CRM, website, and automation roadmap finally moved at Dubai speed.',
    name: 'Omar Al Mansoori',
    role: 'Managing Director, GulfStone Properties',
    initials: 'OA',
  },
  {
    quote:
      'We needed dependable delivery without the cost of hiring locally. Their project manager, developers, and QA process gave us enterprise-level confidence.',
    name: 'Nadia Rahman',
    role: 'Founder, TalentBridge UAE',
    initials: 'NR',
  },
  {
    quote:
      'The team connected our lead funnels, WhatsApp workflows, and dashboards. We now know exactly where our inquiries come from and who owns each follow-up.',
    name: 'Khalid Saeed',
    role: 'Operations Partner, Marina Commerce Group',
    initials: 'KS',
  },
];

const processSteps = [
  {
    title: 'Discovery Call',
    desc: 'We understand your business, audience, systems, and revenue bottlenecks.',
    icon: '🔍',
  },
  {
    title: 'Strategy Planning',
    desc: 'We define the roadmap, team structure, tools, integrations, and timelines.',
    icon: '📋',
  },
  {
    title: 'Development & Execution',
    desc: 'Our developers, designers, automation experts, and PMs execute in sprints.',
    icon: '⚡',
  },
  {
    title: 'Testing & QA',
    desc: 'We test performance, responsiveness, CRM flows, forms, analytics, and integrations.',
    icon: '✅',
  },
  {
    title: 'Launch & Support',
    desc: 'We deploy, monitor, optimize, and support your systems through retainers.',
    icon: '🚀',
  },
];

const faqs = [
  {
    question: 'Do you work with Dubai companies?',
    answer:
      'Yes. We support Dubai and UAE businesses with offshore development teams, CRM systems, automation, mobile apps, SEO, and long-term technical retainers.',
  },
  {
    question: 'Can we hire dedicated developers?',
    answer:
      'Yes. You can hire dedicated developers for frontend, backend, mobile, CRM, automation, QA, and full-stack delivery with project management included.',
  },
  {
    question: 'How fast can projects start?',
    answer:
      'Most discovery calls can be followed by a scoped roadmap within 24 to 48 hours. Dedicated teams can usually start quickly after requirements and access are confirmed.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. We offer monthly support retainers, monitoring, bug fixing, feature improvements, analytics, and continuous automation enhancements.',
  },
  {
    question: 'Do you sign NDA agreements?',
    answer:
      'Yes. We can sign NDA agreements and work confidentially as a silent offshore tech team for Dubai businesses and agencies.',
  },
  {
    question: 'Can you work with UAE time zones?',
    answer:
      'Yes. Our project managers maintain UAE-friendly communication windows for planning, reviews, standups, and urgent launch support.',
  },
];

export default function DubaiLandingPage() {
  return (
    <>
      <Navbar />
      <main className="dubai-page">
        {/* ===== HERO ===== */}
        <section className="dubai-hero">
          <div className="dubai-skyline" aria-hidden="true" />
          <div className="container dubai-hero-grid">
            <div className="dubai-hero-copy">
              <span className="dubai-eyebrow">Silent offshore tech team for Dubai businesses and agencies</span>
              <h1>Your Offshore Development &amp; CRM Team &mdash; Built for Dubai Businesses</h1>
              <p>
                Scale faster with cost-effective developers, automation systems, CRM solutions, and
                enterprise-grade technology tailored for UAE companies.
              </p>
              <div className="dubai-hero-actions">
                <ContactButton className="btn btn-primary">Book Free Consultation</ContactButton>
                <a className="btn btn-outline dubai-outline-btn" href="https://wa.me/918082012995?text=Hi%20Makrosys%2C%20I%20want%20to%20discuss%20a%20Dubai%20technology%20project." target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="dubai-trust-row">
                {trustIndicators.map((item) => (
                  <span key={item.label}>
                    <span className="dubai-trust-icon">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="dubai-hero-visual" aria-label="CRM dashboard preview for Dubai business operations">

              <div className="dubai-dashboard-card main">
                <div className="dubai-dashboard-top">
                  <Image src="/images/logo.png" alt="Makrosys Solutions" width={130} height={31} />
                  <span>Dubai CRM Ops</span>
                </div>
                <div className="dubai-chart-bars">
                  <span style={{ height: '46%' }} />
                  <span style={{ height: '72%' }} />
                  <span style={{ height: '54%' }} />
                  <span style={{ height: '88%' }} />
                  <span style={{ height: '66%' }} />
                  <span style={{ height: '94%' }} />
                </div>
                <div className="dubai-dashboard-metrics">
                  <div><strong>+38%</strong><span>Lead conversion</span></div>
                  <div><strong>60%</strong><span>Cost savings</span></div>
                  <div><strong>24h</strong><span>Delivery rhythm</span></div>
                </div>
              </div>
              <div className="dubai-dashboard-card floating one">
                <span>Qualified UAE leads</span>
                <strong>1,284</strong>
              </div>
              <div className="dubai-dashboard-card floating two">
                <span>Automation saved</span>
                <strong>86 hrs/mo</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HERO STATS STRIP ===== */}
        <section className="dubai-stats-strip">
          <div className="container">
            <div className="dubai-stats-grid">
              {heroStats.map((stat) => (
                <div className="dubai-stat-item" key={stat.label}>
                  <div className="dubai-stat-icon-wrap">{stat.icon}</div>
                  <div className="dubai-stat-value">{stat.value}</div>
                  <div className="dubai-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className="dubai-section dubai-services" id="services">
          <div className="container">
            <div className="dubai-section-heading">
              <span className="dubai-eyebrow">Enterprise service stack</span>
              <h2>Technology, CRM, automation, and growth systems for <span className="dubai-gradient-text">UAE companies</span></h2>
              <p>
                From Web Development Company Dubai projects to AI Automation Dubai workflows, we
                build the systems that help business owners scale without heavy local hiring.
              </p>
            </div>
            <div className="dubai-service-grid">
              {services.map((service, index) => (
                <article className="dubai-service-card" key={service.title}>
                  <div className="dubai-card-graphic">
                    <div className="dubai-service-icon-wrap">
                      <span className="dubai-service-emoji">{service.icon}</span>
                    </div>
                    <span className="dubai-service-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="dubai-service-pain"><strong>Challenge:</strong> {service.pain}</p>
                  <p>{service.solution}</p>
                  <div className="dubai-outcome-chip">
                    <span className="dubai-outcome-icon">✓</span>
                    {service.outcome}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CHALLENGES ===== */}
        <section className="dubai-section dubai-challenges">
          <div className="container dubai-two-column">
            <div>
              <span className="dubai-eyebrow">Dubai business challenges</span>
              <h2>High-growth companies need speed without bloated technical overhead.</h2>
              <p>
                Dubai teams move fast, but local hiring costs, disconnected tools, and slow
                delivery partners can make digital transformation expensive. Makrosys becomes the
                silent offshore extension that builds, automates, integrates, and supports your
                business systems.
              </p>
              <div className="dubai-hero-actions" style={{ marginTop: '32px' }}>
                <ContactButton className="btn btn-primary">Solve These Challenges</ContactButton>
              </div>
            </div>
            <div className="dubai-challenge-panel">
              {challenges.map((challenge) => (
                <div key={challenge.text} className="dubai-challenge-item">
                  <span className="dubai-challenge-icon">{challenge.icon}</span>
                  <span>{challenge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INDUSTRIES ===== */}
        <section className="dubai-section">
          <div className="container">
            <div className="dubai-section-heading">
              <span className="dubai-eyebrow">Industry solutions</span>
              <h2>Built around how Dubai industries actually sell, operate, and <span className="dubai-gradient-text">scale</span>.</h2>
            </div>
            <div className="dubai-industry-grid">
              {industries.map((industry) => (
                <article className="dubai-industry-card" key={industry.name}>
                  <div className="dubai-industry-icon">{industry.icon}</div>
                  <h3>{industry.name}</h3>
                  <p><strong>Challenge:</strong> {industry.challenge}</p>
                  <p><strong>Technology:</strong> {industry.solution}</p>
                  <div className="dubai-industry-outcome">
                    <span className="dubai-outcome-icon">↗</span>
                    {industry.outcome}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== OFFSHORE ADVANTAGE ===== */}
        <section className="dubai-section dubai-advantage">
          <div className="container dubai-two-column">
            <div>
              <span className="dubai-eyebrow">Offshore development advantage</span>
              <h2>Enterprise delivery capacity without enterprise hiring pressure.</h2>
              <p>
                Offshore Development UAE support gives Dubai businesses access to reliable
                engineering, CRM, automation, SEO, and product execution while keeping monthly
                budgets flexible.
              </p>
            </div>
            <div className="dubai-comparison">
              {advantages.map((advantage) => (
                <div key={advantage.text} className="dubai-advantage-item">
                  <div className="dubai-advantage-icon">{advantage.icon}</div>
                  <div>
                    <span className="dubai-advantage-label">Included</span>
                    <strong>{advantage.text}</strong>
                    <span className="dubai-advantage-detail">{advantage.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CASE STUDIES ===== */}
        <section className="dubai-section">
          <div className="container">
            <div className="dubai-section-heading">
              <span className="dubai-eyebrow">Dubai-focused proof</span>
              <h2>Realistic delivery outcomes for CRM, ecommerce, HRMS, apps, and <span className="dubai-gradient-text">automation</span>.</h2>
            </div>
            <div className="dubai-case-grid">
              {caseStudies.map((study) => (
                <article className="dubai-case-card" key={study.title}>
                  <div className="dubai-case-icon">{study.icon}</div>
                  <h3>{study.title}</h3>
                  <p><strong>Before:</strong> {study.before}</p>
                  <p><strong>After:</strong> {study.after}</p>
                  <div className="dubai-case-metrics">
                    <span className="dubai-metric-highlight">
                      <span className="dubai-metric-arrow">↑</span>
                      {study.metric}
                    </span>
                    <span>{study.roi}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="dubai-section dubai-testimonials">
          <div className="container">
            <div className="dubai-section-heading">
              <span className="dubai-eyebrow">Executive confidence</span>
              <h2>Trusted by UAE-style businesses that need discreet, reliable execution.</h2>
            </div>
            <div className="dubai-testimonial-grid">
              {testimonials.map((testimonial) => (
                <article className="dubai-testimonial-card" key={testimonial.name}>
                  <div className="dubai-quote-mark">&ldquo;</div>
                  <p>{testimonial.quote}</p>
                  <div className="dubai-testimonial-author">
                    <div className="dubai-avatar">{testimonial.initials}</div>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section className="dubai-section">
          <div className="container">
            <div className="dubai-section-heading">
              <span className="dubai-eyebrow">Process</span>
              <h2>A clear path from discovery to <span className="dubai-gradient-text">supported launch</span>.</h2>
            </div>
            <div className="dubai-process-timeline">
              {processSteps.map((step, index) => (
                <div className="dubai-process-step" key={step.title}>
                  <div className="dubai-process-connector">
                    <div className="dubai-process-dot">
                      <span>{step.icon}</span>
                    </div>
                    {index < processSteps.length - 1 && <div className="dubai-process-line" />}
                  </div>
                  <div className="dubai-process-content">
                    <span className="dubai-process-number">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONSULTATION / CALENDLY ===== */}
        <section className="dubai-section dubai-calendar-section" id="consultation">
          <div className="container dubai-conversion-grid">
            <div className="dubai-consultation-card">
              <span className="dubai-eyebrow">Lead capture</span>
              <h3>Use the existing Makrosys consultation form</h3>
              <p>
                Keep one lead flow across the site. The consultation button opens the existing
                Makrosys lead form, so Dubai inquiries use the same CRM-ready submission path,
                service selector, and email notification system.
              </p>
              <div className="dubai-consultation-features">
                <div className="dubai-consult-feature">
                  <span>📋</span> CRM-ready lead form
                </div>
                <div className="dubai-consult-feature">
                  <span>📧</span> Instant email notification
                </div>
                <div className="dubai-consult-feature">
                  <span>🔒</span> Secure & confidential
                </div>
              </div>
              <div className="dubai-hero-actions">
                <ContactButton className="btn btn-primary">Open Lead Form</ContactButton>
                <a className="btn btn-outline dubai-outline-btn" href="https://wa.me/918082012995?text=Hi%20Makrosys%2C%20I%20want%20to%20book%20a%20Dubai%20consultation." target="_blank" rel="noopener noreferrer">
                  WhatsApp Instead
                </a>
              </div>
            </div>
            <div className="dubai-calendly-card">
              <span className="dubai-eyebrow">Calendly integration</span>
              <h3>Prefer to schedule directly?</h3>
              <p>
                Choose a UAE-friendly slot for a strategy call. We can review your CRM, website,
                app, ERP, SEO, or automation priorities on the call.
              </p>
              <iframe
                title="Schedule a Dubai technology consultation"
                src="https://calendly.com/makrosys-solutions/free-consultation?hide_gdpr_banner=1"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="dubai-section dubai-faq">
          <div className="container">
            <div className="dubai-section-heading">
              <span className="dubai-eyebrow">FAQ</span>
              <h2>Common questions from Dubai founders, owners, and agencies.</h2>
            </div>
            <div className="dubai-faq-grid">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="dubai-final-cta">
          <div className="container">
            <span className="dubai-eyebrow">Build with Makrosys</span>
            <h2>Build Your Dubai Tech Team Today</h2>
            <p>
              Scale your business with dedicated offshore experts, automation, and
              enterprise-grade solutions.
            </p>
            <div className="dubai-cta-stats">
              <div className="dubai-cta-stat"><strong>60%</strong><span>Cost Savings</span></div>
              <div className="dubai-cta-stat-divider" />
              <div className="dubai-cta-stat"><strong>50+</strong><span>Projects</span></div>
              <div className="dubai-cta-stat-divider" />
              <div className="dubai-cta-stat"><strong>98%</strong><span>Retention</span></div>
            </div>
            <div className="dubai-hero-actions">
              <ContactButton className="btn btn-primary">Schedule Free Consultation</ContactButton>
              <a className="btn btn-outline dubai-outline-btn" href="https://wa.me/918082012995?text=Hi%20Makrosys%2C%20I%20want%20to%20build%20a%20Dubai%20tech%20team." target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        <Link
          className="dubai-whatsapp-sticky"
          href="https://wa.me/918082012995?text=Hi%20Makrosys%2C%20I%20am%20interested%20in%20your%20Dubai%20offshore%20development%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Makrosys on WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          WhatsApp
        </Link>
      </main>
      <Footer />
    </>
  );
}
