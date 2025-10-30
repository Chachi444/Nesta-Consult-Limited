import React from 'react';
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
  return (
    <section className="ncl-testimonials" aria-label="Testimonials">
      <div className="ncl-testimonials__inner">
        <h3 className="ncl-testimonials__title">Testimonials</h3>
        <div className="ncl-testimonials__list">
          {TESTIMONIALS.map((t, i) => (
            <figure className="ncl-testimonial" key={i}>
              <blockquote className="ncl-testimonial__quote">“{t.quote}”</blockquote>
              <figcaption className="ncl-testimonial__author">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
