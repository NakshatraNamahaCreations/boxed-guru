import React from "react";
import "./WhyChooseUs.css";
import { FaShieldAlt, FaLeaf, FaHeadset, FaTruck } from "react-icons/fa";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import imgbox from "../assets/box-guru-7.png"

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-left">
         <div className="why-header">
  <div className="why-heading">
    <span className="why-kicker">WHY CHOOSE US</span>
    <h2>Why Choose Us</h2>
  </div>

  
</div>


          <div className="why-points">
            <div className="why-point premium">
              <div className="icon-wrap">
                <FaTemperatureArrowUp />
              </div>
              <div>
                <h4>Tamper-Evident by Design</h4>
                <p>One-of-a-kind tamper-evident packaging that protects food integrity</p>
                <p>Builds customer trust by clearly preventing unauthorized access</p>
              </div>
            </div>

            <div className="why-point support">
              <div className="icon-wrap">
                <FaLeaf />
              </div>
              <div>
                <h4>100% Sustainable & Eco-Responsible</h4>
                <p>Designed to reduce environmental impact</p>
                <p>Eliminates excessive plastic waste from food delivery</p>
                <p>Made with sustainability at the core, not as an afterthought</p>
              </div>
            </div>

            <div className="why-point eco">
              <div className="icon-wrap">
                <FaTruck />
              </div>
              <div>
                <h4>Built for Modern Food Delivery</h4>
                <p>Created specifically for today’s fast-paced food delivery ecosystem</p>
                <p>Balances convenience with safety, hygiene, and quality</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SPACE */}
        <div className="why-image-space">
            <img src={imgbox} style={{width: "600px", height: "270px", objectFit:"cover"}}/>
  <p className="why-desc overlay">
    Switch to eco-friendly packaging with expert guidance that helps your brand
    stay sustainable, reliable, and future-ready.
  </p>
</div>


      </div>
    </section>
  );
};

export default WhyChooseUs;
