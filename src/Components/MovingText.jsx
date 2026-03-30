import React from "react";
import "./MovingText.css";
import { FaStar } from "react-icons/fa";

const reviews = [
  "Boxed Guru Packaging delivers industry-grade biodegradable packaging without compromising durability.",
  "Our transition to sustainable packaging was seamless thanks to Boxed Guru Packaging.",
  "High-performance eco-friendly packaging tailored for modern brands.",
  "Boxed Guru Packaging's compostable solutions perfectly align with our sustainability goals.",
  "Outstanding biodegradable packaging with a premium brand finish."
];

const MovingText = () => {
  return (
    <div className="review-marquee-wrapper">
      
      {/* Static Left Label */}
      {/* <div className="review-label">
        CLIENT REVIEWS
      </div> */}

      {/* Moving Reviews */}
      <div className="review-marquee">
        <div className="review-track">
          {[...reviews, ...reviews].map((review, index) => (
            <span key={index}>
              <FaStar className="star-icon" /> {review} •
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MovingText;