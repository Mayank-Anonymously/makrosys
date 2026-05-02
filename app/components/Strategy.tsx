export default function Strategy() {
  const strategies = [
    {
      icon: '🌐',
      title: 'Drive Website Traffic',
      description: 'Drive high-quality, targeted traffic to your website through SEO, paid ads, and content marketing that converts visitors into customers.',
      tags: ['SEO', 'PPC', 'Content Marketing'],
    },
    {
      icon: '📊',
      title: 'Create & Manage Powerful Campaigns',
      description: 'Build aggressive lead-gen and display advertising campaigns across Google, Meta, LinkedIn — optimized for performance and ROAS.',
      tags: ['Google Ads', 'Meta Ads', 'LinkedIn'],
    },
    {
      icon: '📈',
      title: 'Collect, Analyze & Optimize',
      description: 'Leverage real-time analytics and A/B testing to make data-driven decisions. Continuously refine your strategy for maximum ROI.',
      tags: ['Analytics', 'A/B Testing', 'CRO'],
    },
  ];

  return (
    <section className="strategy section" id="strategy">
      <div className="container">
        <h2 className="section-title">
          Our Strategy to <span>Drive Your Revenue</span> Forward
        </h2>
        <p className="section-subtitle">
          At MAKROSYS, we craft custom performance marketing strategies that are powered by data, driven by results.
        </p>

        <div className="strategy-grid">
          {strategies.map((item, index) => (
            <div key={index} className="strategy-card">
              <div className="strategy-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="strategy-tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="strategy-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
