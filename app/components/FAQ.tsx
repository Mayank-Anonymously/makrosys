'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQItem[], title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Safe split for highlighting last word
  const words = title.split(' ');
  const lastWord = words.length > 1 ? words.pop() : '';
  const firstPart = words.join(' ');

  return (
    <section className="faq-section section" id="faqs">
      <div className="container">
        <h2 className="section-title">
          {firstPart} <span>{lastWord}</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to know about partnering with us.
        </p>
        
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
