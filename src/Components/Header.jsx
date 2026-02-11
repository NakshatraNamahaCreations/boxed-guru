import React from "react";
import "./Header.css";
import {
 
  FaEnvelope,
  
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaLocationArrow
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <>
   
      {/* Top Info Bar */}
     <div className="top-bar">
  <div className="container top-bar-content">
    
    {/* Left Info */}
    <div className="top-left">
      <div className="top-item">
        <FaPhoneAlt/>
        <span>+91 9900009022</span>
      </div>

      <div className="top-item">
        <FaEnvelope />
        <span>sandeep@theboxed.guru</span>
      </div>

      <div className="top-item">
       <FaLocationArrow/>
        <span>Bangalore</span>
      </div>
    </div>

    {/* Right Social Icons */}
    <div className="top-social">
      <a href="#"><FaFacebookF /></a>
      <a href="#"><FaInstagram /></a>
      <a href="#"><FaLinkedinIn /></a>
      <a href="#"><FaXTwitter /></a>
    </div>

  </div>
</div>


      {/* Main Header */}
      <header className="main-header">
        <div className="container header-inner">
          {/* Logo */}
          <div className="logo">
            {/* <img src={logo} alt="Packega" /> */}
            <Link to="/" style={{color: "#4F7F00", textDecoration:"none"}}>
            <span>BOXED GURU PACKAGING LLP</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="nav-menu">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <div className="dropdown">
              <span>Services</span>
            </div>
            <div className="dropdown">
              <span>Products</span>
            </div>
          </nav>

          {/* CTA */}
          <a href="/contact" className="contact-btn">
            Contact Us
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
