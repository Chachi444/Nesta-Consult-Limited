import React, { useEffect, useRef, useState } from 'react';
import './carousel.css';
import one from '../assets/one.jpg';
import Two from '../assets/Two.jpg';
import Three from '../assets/Three.jpg';

const SLIDES = [
  {
    bg: one,
    title: 'Renewed Hope Begins Here',
    text: 'Your journey to parenthood deserves expert care, compassion, and unwavering support.'
  },
  {
    bg: Two,
    title: 'Advanced Fertility Solutions',
    text: 'From IVF to surrogacy, we tailor every step to your unique path.'
  },
  {
    bg: Three,
    title: "We Don’t Just Offer Solutions.",
    text: 'We Renew Dreams. At NCL, every heartbeat of hope matters.'
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const INTERVAL = 5000;

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startAuto() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex(i => (i + 1) % SLIDES.length);
    }, INTERVAL);
  }

  // smooth-scroll handler for hash links (no-op if using router)
  function handleAnchorClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <section className="ncl-carousel" aria-roledescription="carousel" aria-live="polite">
      <div className="ncl-carousel__slides">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`ncl-slide ${i === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${s.bg})` }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}`}
          >
            <div className="ncl-slide__content">
              <div className="ncl-slide__brand">Nesta Consult Limited</div>
              <h2 className="ncl-slide__title"><strong>{s.title}</strong></h2>
              <p className="ncl-slide__text">{s.text}</p>

              <div className="ncl-slide__actions">
                <a
                  className="btn btn--primary"
                  href="#about"
                  onClick={handleAnchorClick}
                >
                  Read more
                </a>
                <a
                  className="btn btn--outline"
                  href="#appointment"
                  onClick={handleAnchorClick}
                >
                  Book appointment
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
