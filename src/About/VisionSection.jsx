import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import "./VisionSection.css";

const VisionSection = () => {
  return (
    <section className="boxedMVSection">
      <div className="container boxedMVWrapper">

        {/* LEFT CARDS */}
        <div className="mvLeft">

          <div className="mvCard dark">
            <div className="mvIcon">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become a trusted packaging partner delivering
              innovative and reliable packaging solutions.
            </p>
          </div>

          <div className="mvCard green">
            <div className="mvIcon">
              <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>
              To create packaging that combines durability,
              presentation, and operational efficiency.
            </p>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="mvRight" >
          <h2 data-aos="fade-up">
            Excellence In Printing <br />
            And Packaging
          </h2>
  <div className="mvDivider"></div>
          <p data-aos="fade-up">
            At Boxed Guru Packaging, packaging is designed to protect products,
            strengthen brand identity, and ensure consistency across
            production and delivery. Our focus remains on quality,
            precision, and long-term partnerships.
          </p>

        
        </div>

      </div>
    </section>
  );
};

export default VisionSection;
