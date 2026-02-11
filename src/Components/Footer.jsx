import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP INFO BAR */}
      <div className="footer-top">
        <div className="footer-top-inner">

          {/* LOGO + SOCIAL */}
          <div className="footer-brand">
            <h3>BoxGuru</h3>
            <div className="footer-socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="footer-info">
            <div className="info-icon"><FaPhoneAlt /></div>
            <div>
              <span>24/7 Support</span>
              <p>+91 9900009022</p>
              <p>hello@boxguru.com</p>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="footer-info">
            <div className="info-icon"><FaMapMarkerAlt /></div>
            <div>
              <span>Find our office</span>
              <p>Bangalore, Karnataka</p>
              <p>India</p>
            </div>
          </div>

          {/* HOURS */}
          <div className="footer-info">
            <div className="info-icon"><FaClock /></div>
            <div>
              <span>Opening hours</span>
              <p>Monday – Sunday</p>
              <p>9:00 AM – 11:30 PM</p>
            </div>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* LINKS SECTION */}
      <div className="footer-links">
        <div className="footer-links-inner">

          <div>
            <h4>Information</h4>
            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h4>Products</h4>
            <a href="#">Heat Sealable Boxes</a>
            <a href="#">Paper Bowls</a>
            <a href="#">Interlocking Products</a>
            <a href="#">Custom Packing</a>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} BoxGuru Packaging. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
