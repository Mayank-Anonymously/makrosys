'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: string;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const numericEnd = parseInt(end.replace(/[^0-9]/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let current = 0;
          const step = Math.ceil(numericEnd / 60);
          const timer = setInterval(() => {
            current += step;
            if (current >= numericEnd) {
              current = numericEnd;
              clearInterval(timer);
            }
            setCount(current);
          }, 20);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericEnd]);

  return (
    <div ref={ref} className="stat-number">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export default function RevenueGrowth() {
  const stats = [
    { value: '100', suffix: '%', label: 'Client Retention Rate' },
    { value: '100', prefix: '$', suffix: 'K+', label: 'Revenue Generated' },
    { value: '20', suffix: '%', label: 'Avg. Conversion Boost' },
    { value: '1', suffix: 'B+', label: 'Ad Impressions Managed' },
  ];

  const categories = ['Google Ads', 'Meta Ads', 'SEO', 'Content Marketing', 'Email Marketing'];

  return (
    <section className="revenue section" id="revenue">
      <div className="container">
        <h2 className="section-title">
          Discover How Marketing Fuels{' '}
          <span>Revenue Growth</span>
        </h2>
        <p className="section-subtitle">
          Beyond just clicks and views — our marketing creates meaningful connections that translate to sustainable business growth.
        </p>

        <a href="#" className="revenue-link">
          Explore Our Case Studies →
        </a>

        <div className="revenue-categories">
          {categories.map((cat, i) => (
            <span key={i} className={`revenue-category ${i === 0 ? 'active' : ''}`}>
              {cat}
            </span>
          ))}
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
              />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
