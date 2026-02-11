import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="who-section">
      <div className="who-wrapper">

        {/* TOP BADGE */}
        <div className="who-header">
          <span className="who-badge">WHO WE ARE</span>
          <h2 className="who-title">
            Sustainable Packaging <br />
            Built for the Future
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="who-content-grid">

          {/* LEFT CONTENT */}
          <div className="who-text">
            <p className="who-lead">
              <strong>Boxed Guru Packaging LLP</strong> is a next-generation
              sustainable food packaging manufacturer committed to eliminating
              single-use plastics from modern food delivery ecosystems.
            </p>

            <p>
              Our products are engineered using{" "}
              <strong>100% virgin food-grade paperboard</strong>, ensuring
              hygiene, durability, and performance — while remaining
              environmentally responsible.
            </p>

            <p>
              We believe packaging should do more than protect food. It should
              protect people, brands, and the planet.
            </p>

              {/* QUOTE */}
        <div className="who-quote">
          Shaping a greener future — one box at a time.
        </div>
          </div>

          {/* RIGHT HIGHLIGHTS */}
          <div className="who-highlights">
           <div className="who-point" data-aos="fade-up" data-aos-delay="0">
  <span>01</span>
  <p>Plastic-free, recyclable & biodegradable materials</p>
</div>

<div className="who-point" data-aos="fade-up" data-aos-delay="120">
  <span>02</span>
  <p>Tamper-evident designs for food safety & trust</p>
</div>

<div className="who-point" data-aos="fade-up" data-aos-delay="240">
  <span>03</span>
  <p>Heat-sealable packaging built for delivery & takeaway</p>
</div>

<div className="who-point" data-aos="fade-up" data-aos-delay="360">
  <span>04</span>
  <p>Custom branding that elevates your food experience</p>
</div>

          </div>

        </div>

      

      </div>
    </section>
  );
};

export default WhoWeAre;
