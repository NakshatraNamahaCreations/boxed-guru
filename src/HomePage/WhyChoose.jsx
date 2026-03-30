import React from "react";
import "./WhyChoose.css";
import {
  FaThumbsUp,
  FaHeadset,
  FaLeaf,
  FaShieldAlt,
} from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-content">
          <span className="why-kicker">WHY BOXED GURU PACKAGING?</span>

          <h2>
            Why Boxed Guru <br /> Packaging?
          </h2>

          <p className="why-highlight">
            A one-of-a-kind tamper-evident and 100% sustainable food delivery
            product solution.
          </p>

          <p>
            In the hustle and bustle of modern life, convenience often comes at
            the expense of the environment and of health. Today, the food
            delivery industry struggles with two extremely pressing issues —
            the fear of <strong>tampering</strong> and the overwhelming amount
            of <strong>plastic waste</strong> generated.
          </p>

          <p>
            At <strong>Boxed Guru Packaging</strong>, we believe that it doesn’t have to be
            that way. Our journey began with a simple realization — that the
            food delivery industry needs to take a step towards a safe and
            sustainable overhaul.
          </p>
        </div>

        {/* RIGHT FEATURE BOXES */}
        <div className="why-features">

          <div className="why-feature premium" data-aos="fade-left" data-aos-delay="0">
            <span className="icon">
              <FaThumbsUp />
            </span>
            <div>
              <h4>Premium Quality</h4>
              <p>High-quality, food-grade certified packaging you can trust.</p>
            </div>
          </div>

          <div className="why-feature support" data-aos="fade-right" data-aos-delay="120">
            <span className="icon">
              <FaHeadset />
            </span>
            <div>
              <h4>Reliable Support</h4>
              <p>Committed assistance to support your packaging needs.</p>
            </div>
          </div>

          <div className="why-feature eco" data-aos="fade-left" data-aos-delay="240">
            <span className="icon">
              <FaLeaf />
            </span>
            <div>
              <h4>100% Sustainable</h4>
              <p>Recyclable, biodegradable, and plastic-free solutions.</p>
            </div>
          </div>

          <div className="why-feature security" data-aos="fade-right" data-aos-delay="360">
            <span className="icon">
              <FaShieldAlt />
            </span>
            <div>
              <h4>Tamper Evident</h4>
              <p>Designed to ensure food safety and customer confidence.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
