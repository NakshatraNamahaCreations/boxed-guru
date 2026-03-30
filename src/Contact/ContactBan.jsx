import React from "react";
import { Link } from "react-router-dom";
import "./ContactBan.css";

const ContactBan = () => {
  return (
    <section className="cnt-slider">
      <div className="cnt-slide">
        <div className="cnt-overlay" />

        <div className="cnt-inner">
          <div className="cnt-content">

           

            <h1>Contact Us</h1>
             {/* Breadcrumbs */}
            <div className="cnt-breadcrumbs">
              <Link to="/">Home</Link>
              <span className="separator">|</span>
              <span className="active">Contact Us</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBan;
