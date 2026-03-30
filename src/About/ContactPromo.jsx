import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./ContactPromo.css";
import promoimg from "../assets/box-guru2.png"

const ContactPromo = () => {
  return (
    <section className="boxedContactPromo">

      <div className="contactOverlay"></div>

      <div className="container contactGrid">

        {/* LEFT IMAGE */}
        <div className="contactImage">
          <img
            src={promoimg}
            alt="Packaging Contact"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="contactContent">
          <h2>
            Didn’t Find Your Packaging Requirement?
            <br /> Contact Boxed Guru Packaging
          </h2>
      <div className="contactDivider"></div>
          <p>
            Our team helps businesses choose the right packaging solutions
            based on product type, strength requirements, and delivery needs.
            Get in touch with us for customized packaging support.
          </p>

        
{/* 
          <div className="contactCards">

            <div className="contactCard">
              <div className="contactIcon">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Call Us</h4>
                <span>+91 9900009022</span>
              </div>
            </div>

            <div className="contactCard dark">
              <div className="contactIcon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email Us</h4>
                <span>sandeep@theboxed.guru</span>
              </div>
            </div>

          </div> */}

        </div>

      </div>
    </section>
  );
};

export default ContactPromo;
