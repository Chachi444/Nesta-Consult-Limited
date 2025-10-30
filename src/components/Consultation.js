import React from 'react';
import './Consultation.css';

const ITEMS = [
  {
    title: 'Comprehensive fertility assessment',
    desc: 'discussion of your reproductive history and relevant tests.'
  },
  {
    title: 'One-on-one counseling',
    desc: 'to understand your goals and concerns in a confidential setting.'
  },
  {
    title: 'Tailored recommendations',
    desc: 'clear guidance on the best fertility treatment options for your situation.'
  },
  {
    title: 'Clear treatment plan & cost breakdown',
    desc: 'understand timelines, next steps and expected costs.'
  },
  {
    title: 'Continuous support',
    desc: 'emotional and medical support throughout your journey with NCL.'
  }
];

export default function Consultation() {
  return (
    <section id="consultation" className="ncl-consultation" aria-labelledby="consultation-title">
      <div className="ncl-consultation__inner">
        <h2 id="consultation-title" className="ncl-consultation__title">
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
              <div className="ncl-consultation__badge" aria-hidden="true">{idx + 1}</div>
              <div className="ncl-consultation__content">
                <h3 className="ncl-consultation__card-title">{it.title}</h3>
                <p className="ncl-consultation__card-desc">— {it.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Read More removed from consultation — About component handles full navigation */}
      </div>
    </section>
  );
}
