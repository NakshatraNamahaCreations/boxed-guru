import React from "react";
import "./CompareSection.css";

const CompareSection = () => {
  return (
    <section className="ps-section">
      <div className="ps-container">
        <span className="ps-kicker" data-aos="fade-up">STATEMENT</span>
        <h2 className="ps-heading" data-aos="fade-up">Problem Statement</h2>

        <div className="ps-grid">
          {/* PROBLEM */}
          <div className="ps-card ps-problem">
            <h3 className="ps-title">The Problem</h3>

            <p>
              80% of plastic packaging is not recycled, leading to significant
              environmental damage. Plastic food containers contain phthalates,
              which are linked to chronic diseases like diabetes, infertility,
              ADHD, and reduced IQ in children.
            </p>

            <p>
              Consumer Reports have found high levels of these chemicals in food.
              Single-use plastic packaging causes:
            </p>

            <ul>
              <li>Long-term environmental pollution</li>
              <li>Marine life damage</li>
              <li>Health risks from microplastics</li>
              <li>Uncertainty in plastic grade used in manufacturing</li>
            </ul>
          </div>

          {/* SOLUTION */}
          <div className="ps-card ps-solution">
            <h3 className="ps-title">Solution</h3>

            <p>
              Our sustainable custom packaging is made from 100% virgin paper
              board products that are safe, responsible, and future-ready.
            </p>

            <ul>
              <li>Tamper-Proof</li>
              <li>Custom Branding</li>
              <li>Food-Grade Certified</li>
              <li>100% Recyclable</li>
              <li>Biodegradable</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
