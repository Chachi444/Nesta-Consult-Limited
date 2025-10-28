import React from 'react';
import doctorImg from './assets/doctor2.png';
import spermVideo from './assets/sperm9.mp4'; // Place your sperm video in assets folder
import './About.css';

const About = () => (
  <section className="about-section" id="about">
    <div className="about-bg-video">
      <video autoPlay loop muted playsInline>
        <source src={spermVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="about-content">
      <img src={doctorImg} alt="Doctor at Life-Medical-Diagnostic" className="about-img" />
      <div className="about-text">
        <h2>Our Journey, Your Future</h2>
        <p>
          At Nesta-Consult-Limited (NCL), we believe every journey to parenthood begins with a spark of hope, and we’re here to nurture it into reality. With a spirit of Renewed Hope, we offer a comprehensive range of fertility and reproductive health services tailored to support you at every stage.
        </p>
        <p>
          From advanced treatments like IVF, IUI, and gender selection to specialised programs including surrogacy and embryo adoption, our expert team delivers compassionate, personalized care designed to restore confidence and possibility. Whether you're just beginning your journey or continuing after setbacks, NCL stands as a beacon of hope and healing.
        </p>
        <p>
          Beyond clinical care, NCL supplies high-quality medical consumables and culture mediums to fertility and general hospitals across Nigeria. As a licensed surrogacy firm, we provide complete support under one roof—ultrasound scans, laboratory diagnostics, and pharmacy services—ensuring seamless, trusted care from start to finish.
        </p>
        <p>
          At NCL, we don’t just offer solutions, we renew dreams. Whether you're seeking fertility expertise, diagnostic precision, or reliable medical supplies, we are your one-stop destination for excellence in reproductive healthcare and the promise of a brighter tomorrow.
        </p>
        <a href="#appointment" className="about-cta">Book appointment</a>
      </div>
    </div>
  </section>
);

export default About;