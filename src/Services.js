import React from "react";
import "./Services.css";

import fertilityImg from "./assets/Fertility treatment packages.jpg";
import surrogacyImg from "./assets/Surrogacy service.jpg";
import medicalImg from "./assets/Medical and diagnostic services.jpg";
import clinicImg from "./assets/Clinic and Hospital partnership.jpg";

const serviceData = [
  {
    title: "Fertility Treatment Packages",
    img: fertilityImg,
    badge: "IUI", // added badge text
    items: [
      "Timed Intercourse",
      "Intrauterine Insemination (IUI)",
      "Gender Selection",
      "Own Cycle IVF",
      "Recipient Cycle IVF with Egg Donor",
      "Embryo Adoption (without Surrogacy)",
      "Embryo Adoption with Surrogacy",
    ],
  },
  {
    title: "Surrogacy Services",
    img: surrogacyImg,
    badge: "Surrogacy",
    items: [
      "Full Surrogacy Program",
      "Legal and medical guidance",
      "Embryo transfer and monitoring",
      "Emotional and psychological support",
    ],
  },
  {
    title: "Medical & Diagnostic Services",
    img: medicalImg,
    badge: "Screening",
    items: [
      "Ultrasound Scans",
      "Laboratory Testing",
      "Pharmacy Services",
      "Sale of Medical Mediums & Consumables (for fertility and general hospitals)",
    ],
  },
  {
    title: "Clinic & Hospital Partnerships",
    img: clinicImg,
    badge: "Collaborative",
    items: [
      "Fertility-focused consumables",
      "General hospital supplies",
      "Collaborative programs with fertility clinics",
      "Ongoing support and consultation",
    ],
  },
];

const Services = () => (
  <section className="services-section" id="services">
    <h2 className="services-heading">Our Services</h2>
    <div className="services-cards">
      {serviceData.map((service, idx) => (
        <div className="service-card" key={idx}>
          <div className="service-image-wrap">
            {/* badge rendered inside image wrapper so it sits on the image */}
            {service.badge && (
              <span className="service-badge" aria-hidden="true">
                {service.badge}
              </span>
            )}
            <img
              src={service.img}
              alt={service.title}
              className="service-image"
            />
          </div>

          <div className="service-body">
            <h3 className="service-title">{service.title}</h3>
            <ul className="service-list">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;