import React from 'react';
import './Stats.css';

const ITEMS = [
  { value: '50', label: 'Successful IVFs' },
  { value: '80', label: 'Donors Recruited' },
  { value: '100', label: 'Surrogate Inseminated' },
  { value: '10', label: 'Stars reviews by clients' },
];

export default function Stats() {
  return (
    <section className="ncl-stats" aria-label="Key statistics">
      <div className="ncl-stats__inner">
        {ITEMS.map((it, i) => (
          <div className="ncl-stat-card" key={i}>
            <div className="ncl-stat-card__value">{it.value}</div>
            <div className="ncl-stat-card__label">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
