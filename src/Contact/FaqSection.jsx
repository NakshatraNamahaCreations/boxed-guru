import React, { useState } from "react";
import "./FaqSection.css";

const faqData = [
  {
    question: "What makes organic packaging better than plastic packaging?",
    answer:
      "Organic packaging is made from renewable and recyclable materials such as virgin paperboard and kraft paper. Unlike plastic packaging, it reduces environmental pollution, avoids harmful chemicals, and helps businesses move toward sustainable operations while maintaining food safety and durability.",
  },
  {
    question: "Is your packaging biodegradable and recyclable?",
    answer:
      "Our packaging products are designed to be recyclable and biodegradable under proper disposal conditions. This helps reduce landfill waste and supports environmentally responsible packaging practices.",
  },
  {
    question: "Are heat-sealable and tamper-proof options available?",
    answer:
      "Yes. Many of our packaging solutions include heat-sealable and tamper-evident options, ensuring food safety during delivery and helping build customer trust.",
  },
  {
    question: "Does eco-friendly packaging affect food freshness?",
    answer: "No. Properly designed paper-based packaging helps manage moisture and condensation while maintaining food freshness, especially for takeaway and delivery meals."
  }
];

const FaqSection = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-container">

       

        {/* RIGHT SIDE CONTENT */}
        <div className="faq-right">
          <h2>Frequently Asked Questions</h2>

<p>
  At Boxed Guru Packaging, we help food businesses transition from plastic to
  eco-friendly packaging without compromising food safety, quality, or
  branding. Below are some common questions from restaurants, cloud kitchens,
  and food delivery brands looking to adopt sustainable packaging solutions.
</p>

<ul>
  <li>Eco-friendly and food-grade packaging solutions</li>
  <li>Biodegradable, recyclable, and plastic-free alternatives</li>
  <li>Custom branding and tamper-proof packaging options</li>
</ul>

        </div>

         {/* LEFT SIDE ACCORDION */}
        <div className="faq-left">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${active === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span>{active === index ? "−" : "+"}</span>
              </div>

              {active === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
