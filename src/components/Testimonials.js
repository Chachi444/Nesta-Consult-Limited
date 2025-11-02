import React, { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote: "Nesta Consult gave us hope when we had almost given up. Their care and professionalism changed our story.",
    author: "Titilope & Tunde A."
  },
  {
    quote: "From the first consultation, we knew we were in safe hands. Today, we are proud parents!",
    author: "Chidinma & Obinna O."
  },
  {
    quote: "The team treated us like family. Their support made the whole process stress-free.",
    author: "Grace M."
  },
  {
    quote: "Professional, kind, and patient — Nesta Consult truly delivers on their promise.",
    author: "Fatima U."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth <= 767 ? 3 : 1);
  const timerRef = useRef(null);
  const INTERVAL = 4000;

  // handle responsive slides per view
  useEffect(() => {
    function onResize() {
      const spv = window.innerWidth <= 767 ? 3 : 1;
      setSlidesPerView(spv);
      // clamp index if needed when switching to mobile/desktop
      if (spv === 3) {
        const maxStart = Math.max(0, TESTIMONIALS.length - spv);
        if (index > maxStart) setIndex(0);
      } else {
        // desktop single view - keep index within range
        if (index >= TESTIMONIALS.length) setIndex(0);
      }
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // auto-advance behavior: for desktop (1) advance one slide, for mobile (3) advance sliding window
  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex(prev => {
        if (slidesPerView === 1) {
          return (prev + 1) % TESTIMONIALS.length;
        } else {
          const maxStart = Math.max(0, TESTIMONIALS.length - slidesPerView);
          const next = prev + 1;
          return next > maxStart ? 0 : next;
        }
      });
    }, INTERVAL);

    return () => clearInterval(timerRef.current);
  }, [slidesPerView]);

  function goTo(i) {
    // for mobile jump to starting index of window if i is a page index; here we treat i as slide index
    if (slidesPerView === 1) {
      setIndex(i % TESTIMONIALS.length);
    } else {
      // ensure i is in range as starting index for window; clamp to maxStart
      const maxStart = Math.max(0, TESTIMONIALS.length - slidesPerView);
      const start = Math.min(Math.max(0, i), maxStart);
      setIndex(start);
    }
    // restart timer
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex(prev => {
        if (slidesPerView === 1) {
          return (prev + 1) % TESTIMONIALS.length;
        } else {
          const maxStart = Math.max(0, TESTIMONIALS.length - slidesPerView);
          const next = prev + 1;
          return next > maxStart ? 0 : next;
        }
      });
    }, INTERVAL);
  }

  // compute track transform only when slidesPerView > 1
  const trackStyle = slidesPerView > 1
    ? { transform: `translateX(-${(index * 100) / slidesPerView}%)` }
    : undefined;

  return (
    <section className="ncl-testimonials" aria-label="Testimonials">
      <div className="ncl-testimonials__inner">
        <h3 className="ncl-testimonials__eyebrow">OUR TESTIMONIAL</h3>
        <h2 className="ncl-testimonials__heading">What our clients are saying!</h2>

        <div className="ncl-testimonials__viewport" aria-live="polite">
          {/* track: on mobile (slidesPerView>1) acts as flex strip; on desktop CSS keeps stacked fade */}
          <div
            className="ncl-testimonials__track"
            style={trackStyle}
          >
            {TESTIMONIALS.map((t, i) => (
              <figure
                className={`ncl-testimonial ${slidesPerView === 1 ? (i === index ? 'active' : '') : ''}`}
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${TESTIMONIALS.length}`}
              >
                <h4 className="ncl-testimonial__author">{t.author}</h4>
                <div className="ncl-testimonial__stars">★★★★★</div>
                <blockquote className="ncl-testimonial__quote">“{t.quote}”</blockquote>
                {/* removed duplicate bottom author */}
              </figure>
            ))}
          </div>
        </div>

        <div className="ncl-testimonials__dots" role="tablist" aria-label="Testimonials navigation">
          {TESTIMONIALS.map((_, p) => {
            // determine active for dots: desktop uses index equality, mobile active if dot falls within visible window
            let active = false;
            if (slidesPerView === 1) {
              active = (p === index);
            } else {
              const start = index;
              const end = index + slidesPerView - 1;
              active = (p >= start && p <= end);
            }
            return (
              <button
                key={p}
                type="button"
                className={`ncl-dot ${active ? 'active' : ''}`}
                onClick={() => goTo(p)}
                aria-label={`Go to testimonial ${p + 1}`}
                aria-pressed={active}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
