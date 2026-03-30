import React from "react";
import { Link } from "react-router-dom";
import "./AbtBanner.css";

const AbtBanner = () => {
  return (
    <section className="abt-slider">
      <div className="abt-slide">
        <div className="abt-overlay" />

        <div className="abt-inner">
          <div className="abt-content">

           

            <h1>About Us</h1>
             {/* Breadcrumbs */}
            <div className="abt-breadcrumbs">
              <Link to="/">Home</Link>
              <span className="separator">|</span>
              <span className="active">About Us</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AbtBanner;
