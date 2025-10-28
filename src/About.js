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
          At Life-Medical-Diagnostic (LMD), we provide a comprehensive range of fertility and reproductive health services designed to support every stage of your path to parenthood. From advanced treatments like IVF, IUI, and gender selection to specialised programs such as surrogacy and embryo adoption, our expert team is committed to delivering compassionate, personalized care.
        </p>
        <p>
          Beyond clinical treatment, LMD is proud to supply high-quality medical consumables and culture mediums to fertility and general hospitals across Nigeria. As a licensed surrogacy firm, we offer complete support under one roof—including ultrasound scans, laboratory diagnostics, and pharmacy services—ensuring seamless, trusted care from start to finish.
        </p>
        <p>
          Whether you're seeking fertility solutions, diagnostic expertise, or reliable medical supplies, LMD is your one-stop destination for excellence in reproductive healthcare.
        </p>
        <a href="#appointment" className="about-cta">Book appointment</a>
      </div>
    </div>
  </section>
);

export default About;