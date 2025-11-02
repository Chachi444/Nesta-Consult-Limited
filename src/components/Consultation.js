import React from 'react';
import './Consultation.css';

const ITEMS = [
  {
    title: 'Comprehensive fertility assessment',
    desc: 'Discussion of your reproductive history and relevant tests.'
  },
  {
    title: 'One-on-one counseling',
    desc: 'To understand your goals and concerns in a confidential setting.'
  },
  {
    title: 'Tailored recommendations',
    desc: 'Clear guidance on the best fertility treatment options for your situation.'
  },
  {
    title: 'Clear treatment plan & cost breakdown',
    desc: 'Understand timelines, next steps and expected costs.'
  },
  {
    title: 'Continuous support',
    desc: 'Emotional and medical support throughout your journey with NCL.'
  }
];

// Small decorative SVG icons (aria-hidden because title text is provided)
const ICONS = [
  // assessment / clipboard
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="7" y="3" width="10" height="4" rx="1.2" fill="currentColor" />
    <rect x="6" y="8" width="12" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
    <path d="M9 12h6M9 15h6" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
  </svg>,

  // counseling / person
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="3" fill="currentColor" />
    <path d="M5 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
  </svg>,

  // recommendations / lightbulb
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 18h6M10 22h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M12 3a6 6 0 00-4 10v1a2 2 0 002 2h4a2 2 0 002-2v-1a6 6 0 00-4-10z" stroke="currentColor" strokeWidth="1.4" fill="none" />
  </svg>,

  // plan / document
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 3h8l4 4v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" fill="none" />
    <path d="M12 3v5h5" stroke="currentColor" strokeWidth="1.4" fill="none" />
    <path d="M9 13h6M9 16h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>,

  // support / heart + hand
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s-6-4.35-8-6.5A5 5 0 1112 7a5 5 0 018 7.5C18 16.65 12 21 12 21z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M3 21s3-2 6-2h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
  </svg>
];

export default function Consultation() {
  return (
    <section id="consultation" className="ncl-consultation" aria-labelledby="consultation-title">
      <div className="ncl-consultation__inner">
        <h2 id="consultation-title" className="ncl-consultation__title">
          <span className="ncl-consultation__title-icon" aria-hidden="true">
            {/* small handshake icon */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 12l5-5 4 4 4-4 5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          What to Expect at Your First Consultation
        </h2>

        <div className="ncl-consultation__grid" role="list">
          {ITEMS.map((it, idx) => (
            <article
              className="ncl-consultation__card"
              key={idx}
              role="listitem"
              aria-label={it.title}
            >
              <div className="ncl-consultation__accent" aria-hidden="true" />
              <div className="ncl-consultation__meta">
                <span className="ncl-consultation__icon" aria-hidden="true" style={{ color: 'white' }}>
                  {ICONS[idx] || ICONS[0]}
                </span>
                {/* number removed */}
              </div>

              <div className="ncl-consultation__content">
                <h3 className="ncl-consultation__card-title">{it.title}</h3>
                <p className="ncl-consultation__card-desc">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
