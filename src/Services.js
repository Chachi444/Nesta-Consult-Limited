import React from "react";
import "./Services.css";
import ivfBg from "./assets/ivf.png"; // Make sure this path matches your asset

const serviceData = [
  {
    title: "Fertility Treatment Packages",
    icon: "🌱",
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
    icon: "👶",
    items: [
      "Full Surrogacy Program",
      "Legal and medical guidance",
      "Embryo transfer and monitoring",
      "Emotional and psychological support",
    ],
  },
  {
    title: "Medical & Diagnostic Services",
    icon: "🏥",
    items: [
      "Ultrasound Scans",
      "Laboratory Testing",
      "Pharmacy Services",
      "Sale of Medical Mediums & Consumables (for fertility and general hospitals)",
    ],
  },
  {
    title: "Clinic & Hospital Partnerships",
    icon: "🧡",
    items: [
      "Fertility-focused consumables",
      "General hospital supplies",
      "Collaborative programs with fertility clinics",
      "Ongoing support and consultation",
    ],
  },
];

const Services = () => (
  <section
    className="services-section"
    style={{
      background: `linear-gradient(rgba(255, 248, 240, 0.92), rgba(255, 248, 240, 0.92)), url(${ivfBg}) center/cover no-repeat`,
    }}
    id="services"
  >
    <h2 className="services-heading">Our Services</h2>
    <div className="services-cards">
      {serviceData.map((service, idx) => (
        <div className="service-card" key={idx}>
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <ul>
            {service.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Services;