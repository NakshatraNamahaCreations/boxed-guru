import React from "react";
import "./AboutIntro.css";
import abtimg from "../assets/box-guru-7.png"

const AboutIntro = () => {
  return (
    <section className="aboutLuxury">

      <div className="container aboutLuxuryGrid">

        {/* LEFT CONTENT */}
        <div className="aboutLuxuryContent">
          <span className="aboutLabel">WHO WE ARE</span>

          <h2>
            Packaging that protects your product
            <br /> and represents your brand.
          </h2>

          <p>
            Boxed Guru Packaging delivers packaging solutions designed for durability,
            presentation, and real-world performance. Our focus is on creating
            packaging that supports product safety while improving how brands
            are experienced by customers.
          </p>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="aboutLuxuryImageWrapper">
          <div className="imageBorder"></div>

          <img
            src={abtimg}
            alt="Packaging Process"
            className="aboutLuxuryImage"
          />

          {/* Floating Card */}
          <div className="floatingCard" data-aos="fade-up">
            <h4>Excellence in Packaging</h4>
            <p>Precision. Quality. Reliability.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;
