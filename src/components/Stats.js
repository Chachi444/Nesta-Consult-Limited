import React, { useEffect, useState } from 'react';
import './Stats.css';

const ITEMS = [
  { value: '50', label: 'Successful IVFs' },
  { value: '80', label: 'Donors Recruited' },
  { value: '100', label: 'Surrogate Inseminated' },
  { value: '10', label: 'Stars reviews by clients' },
];

function AnimatedNumber({ value, duration = 900 }) {
  const target = Number(value) || 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let rafId;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress; // linear; replace with easing if desired
      const current = Math.floor(eased * target);
      setCount(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    setCount(0);
    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return <span aria-live="polite" aria-atomic="true">{count}</span>;
}

export default function Stats() {
  return (
    <section className="ncl-stats" aria-label="Key statistics">
      <div className="ncl-stats__inner">
        {ITEMS.map((it, i) => (
          <div className="ncl-stat-card" key={i}>
            <div className="ncl-stat-card__value">
              <AnimatedNumber value={it.value} duration={900} />
            </div>
            <div className="ncl-stat-card__label">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
