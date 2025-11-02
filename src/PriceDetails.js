import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PriceDetails.css';

const PriceDetails = () => {
  const { packageId } = useParams();
  const navigate = useNavigate(); 

  const pricePackages = {
    'iui-without-donor': {
      title: "Intrauterine Insemination (IUI) Package without Sperm donor",
      items: [
        { name: "Consultation, registration, and professional charges for the entire IUI process", price: "₦100,000" },
        { name: "Comprehensive assessments", price: "₦100,000" },
        { name: "Medications", price: "₦300,000" }
      ],
      total: "₦500,000"
    },
    'iui-with-donor': {
      title: "Intrauterine Insemination (IUI) Package with Sperm donor",
      items: [
        { name: "Consultation, registration, and professional charges for the entire IUI process", price: "₦100,000" },
        { name: "Comprehensive assessments", price: "₦100,000" },
        { name: "Medications", price: "₦300,000" }
      ],
      total: "₦600,000"
    },
    'embryo-adoption-with-surrogacy': {
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
    // ...existing code for other packages...
  };

  const packageData = pricePackages[packageId];

  if (!packageData) {
    return (
      <div className="price-details-container">
        <div className="price-details-content">
          <h1>Package not found</h1>
          <button onClick={() => navigate(-1)} className="back-button">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="price-details-container">
      <div className="price-details-content">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back to Pricing
        </button>
        
        <h1 className="package-title">{packageData.title}</h1>
        
        <div className="price-breakdown">
          <h2>Package Breakdown</h2>
          <div className="breakdown-items">
            {packageData.items.map((item, index) => (
              <div key={index} className="breakdown-item">
                <span className="item-name">
                  {item.name}
                  {item.subtitle && <small className="item-subtitle">{item.subtitle}</small>}
                </span>
                <span className="item-price">{item.price}</span>
              </div>
            ))}
          </div>
          
          <div className="total-section">
            <h3>Total: {packageData.total}</h3>
          </div>
          
          <div className="action-buttons">
            <button 
              onClick={() => navigate('/#appointment')} 
              className="book-appointment-btn"
            >
              Book Appointment
            </button>
            <button 
              onClick={() => navigate('/#contact')} 
              className="contact-btn"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
