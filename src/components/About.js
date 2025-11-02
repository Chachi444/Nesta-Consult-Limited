import React from 'react';
import './About.css';
import Nesta from '../assets/Nesta.png';

export default function About() {
  return (
    <section id="about" className="ncl-about ncl-about--stacked" aria-labelledby="about-title">
      <div className="ncl-about__inner">
        <div className="ncl-about__card">
          {/* image on top */}
          <div className="ncl-about__media">
            <img src={Nesta} alt="Doctor with baby" className="ncl-about__image ncl-about__image--featured" />
          </div>

          {/* content below */}
          <div className="ncl-about__content">
            <h2 id="about-title" className="ncl-about__title">Who We Are</h2>

            <p className="ncl-about__lead">
              Nesta Consult Limited is a trusted fertility and surrogacy consultancy dedicated to helping individuals and couples achieve their dream of parenthood.
            </p>

            <p className="ncl-about__text">
              We provide a wide range of fertility and reproductive services, combining medical expertise with compassionate care to make your journey easier and more fulfilling.
              With a commitment to excellence and empathy, we partner with top fertility professionals to deliver tailored solutions that meet your unique needs.
            </p>

            <div className="ncl-about__actions">
              {/* plain anchor — full page navigation to /about-full */}
              <a className="btn btn--pill" href="/about-full.html" aria-label="Read More">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
