import React from "react";
import "./FeatureSection.css";

import lowMinImg from "../assets/biodegradable.png";
import sustainableImg from "../assets/recycle-sign.png";
import customImg from "../assets/brand.png";
import quickImg from "../assets/shield.png";

export default function FeaturesSection() {
  const features = [
    {
      image: lowMinImg,
      title: "Biodegradable",
      animation: "fade-up",
    },
    {
      image: sustainableImg,
      title: "Recyclable",
      animation: "fade-down",
    },
    {
      image: customImg,
      title: "Brand-Ability",
      animation: "zoom-in",
    },
    {
      image: quickImg,
      title: "Tamper-Proof",
      animation: "flip-up",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((item, index) => (
          <div
            className="feature-card"
            key={index}
            data-aos={item.animation}
            data-aos-delay={index * 120}
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
          >
            <div className="feature-image">
              <img src={item.image} alt={item.title} />
            </div>
            <p className="feature-title">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
