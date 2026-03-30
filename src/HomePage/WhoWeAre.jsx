import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const isMobile = window.innerWidth <= 768;

  const getAOS = (delay) =>
    !isMobile
      ? {
          "data-aos": "fade-up",
          "data-aos-delay": delay,
        }
      : {};

  return (
    <section className="who-section">
      <div className="who-wrapper">

        <div className="who-header">
          <span className="who-badge">WHO WE ARE</span>
          <h2 className="who-title">
            Sustainable Packaging <br />
            Built for the Future
          </h2>
        </div>

        <div className="who-content-grid">

          {/* LEFT */}
          <div className="who-text">
            <p className="who-lead">
              <strong>Boxed Guru Packaging LLP</strong> is a next-generation
              sustainable food packaging manufacturer committed to eliminating
              single-use plastics.
            </p>

            <p>
              Our products are engineered using{" "}
              <strong>100% virgin food-grade paperboard</strong>.
            </p>

            <p>
              We believe packaging should protect people, brands, and the planet.
            </p>

            <div className="who-quote">
              Shaping a greener future — one box at a time.
            </div>
          </div>

          {/* RIGHT */}
          <div className="who-highlights">

            <div className="who-point" {...getAOS(0)}>
              <span>01</span>
              <p>Plastic-free, recyclable & biodegradable materials</p>
            </div>

            <div className="who-point" {...getAOS(120)}>
              <span>02</span>
              <p>Tamper-evident designs for food safety & trust</p>
            </div>

            <div className="who-point" {...getAOS(240)}>
              <span>03</span>
              <p>Heat-sealable packaging built for delivery</p>
            </div>

            <div className="who-point" {...getAOS(360)}>
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