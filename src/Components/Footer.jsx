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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP INFO BAR */}
      <div className="footer-top">
        <div className="footer-top-inner">

          

          {/* SUPPORT */}
          <div className="footer-info">
            <div className="info-icon"><FaPhoneAlt /></div>
            <div>
              <span>24/7 Support</span>
              {/* <p>+91 9900009022</p>
              <p>+91 7618783897</p> */}
              <p>info@theboxed.guru</p>
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
              <p>Monday – Saturday</p>
              <p>9:00 AM – 11:30 PM</p>
            </div>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* LINKS SECTION */}
      <div className="footer-links">
         <div className="footer-brand">
            <h3>Boxed Guru Packaging LLP</h3>
            <div className="footer-socials">
              <a href="#" ><FaFacebookF style={{position:"relative", top:"10px", left:"14px"}}/></a>
              <a href="#"><FaInstagram style={{position:"relative", top:"10px", left:"14px"}}/></a>
              <a href="#"><FaLinkedinIn style={{position:"relative", top:"10px", left:"14px"}}/></a>
              
            </div>
          </div>

        <div className="footer-links-inner">

          {/* LOGO + SOCIAL */}
         
          <div>
            <h4>Information</h4>
            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div>
            <h4>Company</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            {/* <Link to="/gallery">Gallery</Link> */}
            {/* <Link to="/certificates">Certificates</Link> */}
            <Link to="/products">Products</Link>
            <Link to="/contact-us">Contact</Link>
          </div>

          <div>
            <h4>Products</h4>
            <Link to="/products#paper-lunch-box" style={{color:"#a8cfc2"}}>Heat Sealable Boxes</Link>
            <Link to="/product#paper-contianer-round" style={{color:"#a8cfc2"}}>Paper Bowls</Link>
            <Link to="/products#lunch-box" style={{color:"#a8cfc2"}}>Paper Lunch Box Heat Sealing</Link>
            <Link to="/products#meal-lunch-box" style={{color:"#a8cfc2"}}>Meal Lunch Box</Link>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Boxed Guru Packaging. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
