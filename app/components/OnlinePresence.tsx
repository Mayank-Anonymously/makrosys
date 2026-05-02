export default function OnlinePresence() {
  const cards = [
    {
      icon: '🌐',
      title: 'Increase your visibility & organic search rankings',
      description: 'Dominate search results with proven SEO strategies that drive sustainable organic traffic.',
    },
    {
      icon: '🤝',
      title: 'Reach potential customers faster with paid media',
      description: 'Targeted ad campaigns across Google, Meta, and LinkedIn that deliver qualified leads at scale.',
    },
    {
      icon: '📱',
      title: 'Build social media into a high-ROI growth channel',
      description: 'Transform your social presence into a revenue-generating engine through strategic content and community management.',
    },
  ];

  return (
    <section className="presence section" id="services">
      <div className="container">
        <div className="presence-box">
          <div className="presence-header">
            <h2>Increase your website traffic and online presence</h2>
            <p>
              Our comprehensive digital strategies are designed to amplify your brand across all channels, turning online visibility into measurable business outcomes.
            </p>
          </div>

          <div className="presence-cards">
            {cards.map((card, index) => (
              <div key={index} className="presence-card">
                <div className="presence-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
