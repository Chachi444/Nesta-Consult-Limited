import React, { useState } from "react";
import faqImg from "./assets/Couple.jpg";
import couple2Bg from "./assets/couple 2.jpg";
import "./Faq.css";

const faqData = [
  {
    question: "What is fertility treatment?",
    answer:
      "Fertility treatment helps individuals or couples conceive a child. Our clinic offers various treatments, including IVF, IUI, and egg/sperm donation.",
  },
  {
    question: "What is IVF?",
    answer:
      "IVF (In Vitro Fertilization) involves fertilizing an egg with sperm outside the body. Our team will guide you through the process.",
  },
  {
    question: "How long does IVF take?",
    answer: "Typically, an IVF cycle takes 4-6 weeks from start to finish.",
  },
  {
    question: "What is IUI?",
    answer:
      "IUI (Intrauterine Insemination) involves inserting sperm directly into the uterus during ovulation.",
  },
  {
    question: "Do you offer egg or sperm donation?",
    answer:
      "Yes, we have a pool of screened donors. We can discuss the process and options with you.",
  },
  {
    question: "How much does fertility treatment cost?",
    answer:
      "Costs vary depending on the treatment. We offer financing options and can help you understand your insurance coverage.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we work with several insurance providers. Please contact us to confirm your coverage.",
  },
  {
    question: "What are the success rates of your clinic?",
    answer:
      "Our success rates are competitive with national averages. We'd be happy to discuss our rates with you during a consultation.",
  },
  {
    question: "Do you offer counseling or emotional support?",
    answer:
      "Yes, we have a team of counselors and support groups to help you navigate the emotional aspects of fertility treatment.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="faq-section"
      id="faq"
      style={{ backgroundImage: `url(${couple2Bg})` }}
    >
      <h2 className="faq-heading">Frequently Asked Questions (FAQs)</h2>
      <div className="faq-container">
        <div className="faq-img-wrap">
          <img src={faqImg} alt="FAQ" className="faq-img" />
        </div>
        <div className="faq-list">
          {faqData.map((item, idx) => (
            <div
              className={`faq-item${openIndex === idx ? " open" : ""}`}
              key={idx}
            >
              <button
                className="faq-question"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{item.question}</span>
                <span className="faq-arrow">
                  {openIndex === idx ? "▼" : "▶"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
