import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="main-header">
        <div className="container header-inner">

          {/* Logo */}
          <div className="logo">
            <Link to="/" className="logo-text">
              BOXED GURU PACKAGING LLP
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="nav-menu">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            {/* <Link to="/certificates">Our Certifications</Link> */}
            <Link to="/products">Products</Link>
          </nav>

          {/* CTA */}
          <Link to="/contact-us" className="contact-btn">
            Contact Us
          </Link>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          
          <FaTimes onClick={() => setMenuOpen(false)} />
        </div>

        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        {/* <Link to="/certificates" onClick={() => setMenuOpen(false)}>Certifications</Link> */}
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>

       <Link 
  to="/contact-us" 
  className="mobile-contact-btn"
  onClick={() => setMenuOpen(false)}
>
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default Header;