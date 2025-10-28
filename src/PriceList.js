import React, { useState } from 'react';
import './PriceList.css';

const PriceList = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const pricePackages = [
    {
      id: 'iui-without-donor',
      title: "Intrauterine Insemination (IUI) Package without Sperm donor",
      items: [
        { name: "Consultation, registration, and professional charges for the entire IUI process", price: "₦100,000" },
        { name: "Comprehensive assessments", price: "₦100,000" },
        { name: "Medications", price: "₦300,000" }
      ],
      total: "₦500,000"
    },
    {
      id: 'iui-with-donor',
      title: "Intrauterine Insemination (IUI) Package with Sperm donor",
      items: [
        { name: "Consultation, registration, and professional charges for the entire IUI process", price: "₦100,000" },
        { name: "Comprehensive assessments", price: "₦100,000" },
        { name: "Medications", price: "₦300,000" }
      ],
      total: "₦600,000"
    },
    {
      id: 'embryo-adoption-with-surrogacy',
      title: "Embryo Adoption (With Surrogacy)",
      items: [
        { name: "Relocation", price: "₦100,000" },
        { name: "Maternity Gown", price: "₦100,000" },
        { name: "Transportation (₦10,000 × 10 months)", price: "₦100,000" },
        { name: "Electricity (₦10,000 × 10 months)", price: "₦100,000" },
        { name: "Antenatal and Postnatal (₦20,000 × 10 months)", price: "₦200,000" },
        { name: "All Utensils Needed", price: "₦200,000", subtitle: "Bucket, duvet, curtains, spoons, plates, and much more" },
        { name: "Assessment", price: "₦200,000" },
        { name: "Monthly Allowance (₦50,000 × 10 months)", price: "₦500,000" },
        { name: "Legal Documentation", price: "₦500,000" },
        { name: "Caesarean Session", price: "₦500,000" },
        { name: "Professional Charges", price: "₦500,000" },
        { name: "Accommodation", price: "₦500,000" },
        { name: "Embryo Adoption (utilizing pre-formed embryos from donor sperm and eggs)", price: "₦1,500,000" },
        { name: "Surrogate Mother Compensation", price: "₦2,000,000" }
      ],
      total: "₦7,000,000"
    },
    {
      id: 'embryo-adoption-without-surrogacy',
      title: "Embryo Adoption (Without Surrogacy)",
      items: [
        { name: "Embryo adoption (utilizing pre-formed embryos from donor sperm and eggs)", price: "₦1,500,000" },
        { name: "Medications", price: "₦1,000,000" },
        { name: "Professional charges", price: "₦1,000,000" }
      ],
      total: "₦3,500,000"
    },
    {
      id: 'own-cycle-package',
      title: "OWN CYCLE PACKAGE",
      items: [
        { name: "Consultation and registration for the entire IVF process", price: "₦200,000" },
        { name: "All Comprehensive assessments for the wife", price: "₦200,000" },
        { name: "Follicular tracking and monitoring", price: "₦200,000" },
        { name: "Professional charges", price: "₦600,000" },
        { name: "Medications, culture media, and consumables used", price: "₦2,000,000" }
      ],
      total: "₦3,200,000"
    },
    {
      id: 'recipient-cycle-egg-donor',
      title: "RECIPIENT CYCLE PACKAGE WITH JUST EGG DONOR",
      items: [
        { name: "Consultation and registration for the entire IVF process", price: "₦200,000" },
        { name: "All Comprehensive assessments for the wife", price: "₦200,000" },
        { name: "Follicular tracking and monitoring", price: "₦200,000" },
        { name: "Egg donor fee", price: "₦200,000" },
        { name: "Professional charges", price: "₦600,000" },
        { name: "Medications, culture media, and consumables used", price: "₦2,000,000" }
      ],
      total: "₦3,400,000"
    },
    {
      id: 'recipient-cycle-egg-sperm-donor',
      title: "RECIPIENT CYCLE PACKAGE WITH EGG AND SPERM DONOR",
      items: [
        { name: "Consultation and registration for the entire IVF process", price: "₦200,000" },
        { name: "All Comprehensive assessments for the wife", price: "₦200,000" },
        { name: "Follicular tracking and monitoring", price: "₦200,000" },
        { name: "Sperm donor", price: "₦100,000" },
        { name: "Egg donor fee", price: "₦200,000" },
        { name: "Professional charges", price: "₦600,000" },
        { name: "Medications, culture media, and consumables used", price: "₦2,000,000" }
      ],
      total: "₦3,500,000"
    },
    {
      id: 'gestational-surrogacy',
      title: "Gestational surrogacy",
      items: [
        { name: "Relocation", price: "₦100,000" },
        { name: "Maternity Gown", price: "₦100,000" },
        { name: "Transportation (₦10,000 × 10 months)", price: "₦100,000" },
        { name: "Electricity (₦10,000 × 10 months)", price: "₦100,000" },
        { name: "Antenatal and Postnatal (₦20,000 × 10 months)", price: "₦200,000" },
        { name: "All Utensils Needed", price: "₦200,000", subtitle: "Bucket, duvet, curtains, spoons, plates, and much more" },
        { name: "Assessment", price: "₦200,000" },
        { name: "Monthly Allowance (₦50,000 × 10 months)", price: "₦500,000" },
        { name: "Legal Documentation", price: "₦500,000" },
        { name: "Caesarean Session", price: "₦500,000" },
        { name: "Professional Charges", price: "₦500,000" },
        { name: "Accommodation", price: "₦500,000" },
        { name: "Surrogate Mother Compensation", price: "₦2,000,000" }
      ],
      total: "₦5,500,000"
    },
    {
      id: 'gestational-surrogacy-with-ivf',
      title: "Gestational surrogacy with IVF",
      items: [
        { name: "Relocation", price: "₦100,000" },
        { name: "Maternity Gown", price: "₦100,000" },
        { name: "Transportation (₦10,000 × 10 months)", price: "₦100,000" },
        { name: "Electricity (₦10,000 × 10 months)", price: "₦100,000" },
        { name: "Antenatal and Postnatal (₦20,000 × 10 months)", price: "₦200,000" },
        { name: "All Utensils Needed", price: "₦200,000", subtitle: "Bucket, duvet, curtains, spoons, plates, and much more" },
        { name: "Assessment", price: "₦200,000" },
        { name: "Monthly Allowance (₦50,000 × 10 months)", price: "₦500,000" },
        { name: "Legal Documentation", price: "₦500,000" },
        { name: "Caesarean Session", price: "₦500,000" },
        { name: "Professional Charges", price: "₦500,000" },
        { name: "Accommodation", price: "₦500,000" },
        { name: "Surrogate Mother Compensation", price: "₦2,000,000" },
        { name: "Recipient IVF", price: "₦3,500,000" }
      ],
      total: "₦9,000,000"
    },
    {
      id: 'traditional-surrogacy',
      title: "Traditional surrogacy",
      items: [
        { name: "Relocation", price: "₦100,000" },
        { name: "Maternity Gown", price: "₦100,000" },
        { name: "Transportation (₦10,000 × 10 months)", price: "₦100,000" },
        { name: "Electricity (₦10,000 × 10 months)", price: "₦100,000" },
        { name: "Antenatal and Postnatal (₦20,000 × 10 months)", price: "₦200,000" },
        { name: "All Utensils Needed", price: "₦200,000", subtitle: "Bucket, duvet, curtains, spoons, plates, and much more" },
        { name: "Assessment", price: "₦200,000" },
        { name: "Monthly Allowance (₦50,000 × 10 months)", price: "₦500,000" },
        { name: "Legal Documentation", price: "₦500,000" },
        { name: "Caesarean Session", price: "₦500,000" },
        { name: "Accommodation", price: "₦500,000" },
        { name: "IUI", price: "₦500,000" },
        { name: "Professional charges", price: "₦500,000" },
        { name: "Post natal care", price: "₦500,000" },
        { name: "Surrogate Mother Compensation", price: "₦2,000,000" }
      ],
      total: "₦7,000,000"
    }
  ];

  const handleCardClick = (packageId) => {
    setExpandedCard(expandedCard === packageId ? null : packageId);
  };

  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pricelist-section" id="pricelist">
      <h2 className="pricelist-heading">Our Pricing Packages</h2>
      <div className="pricelist-cards">
        {pricePackages.map((pkg, index) => (
          <div key={index} className={`price-card ${expandedCard === pkg.id ? 'expanded' : ''}`}>
            <div onClick={() => handleCardClick(pkg.id)} style={{ cursor: 'pointer' }}>
              <h3 className="price-card-title">{pkg.title}</h3>
              <div className="price-total">
                <strong>{pkg.total}</strong>
              </div>
              <div className="expand-indicator">
                {expandedCard === pkg.id ? '−' : '+'}
              </div>
            </div>
            
            {expandedCard === pkg.id && (
              <div className="price-breakdown-expanded">
                <h4>Package Breakdown</h4>
                <div className="breakdown-items">
                  {pkg.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="breakdown-item">
                      <span className="item-name">
                        {item.name}
                        {item.subtitle && <small className="item-subtitle">{item.subtitle}</small>}
                      </span>
                      <span className="item-price">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="action-buttons">
                  <button onClick={scrollToAppointment} className="book-appointment-btn">
                    Book Appointment
                  </button>
                  <button onClick={scrollToContact} className="contact-btn">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceList;
