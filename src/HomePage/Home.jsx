import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Home.css";
import { Link } from "react-router-dom";

// ✅ Desktop Images
import bg1 from "../assets/homebg-2.jpeg";
import bg2 from "../assets/homebg-1.jpeg";

// ✅ IMPORTANT: Rename files (NO spaces)
import bg1Mobile from "../assets/frame-188.png";
import bg2Mobile from "../assets/frame-189.png";

const HomeSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div
          className="hero-slide"
          style={{
            backgroundImage: `url(${isMobile ? bg1Mobile : bg1})`,
          }}
        >
          <div className="hero-overlay" />
          <div className="hero-inner">
            <div className="hero-content">
              <h1>
                Smart Packaging That <br />
                Protects <span> Builds Your Brand</span>
              </h1>

              <p>
                Sustainable, tamper-evident packaging solutions
                <br />
                for modern food brands.
              </p>

              <div className="hero-buttons">
                <Link to="/about" className="btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="hero-slides"
          style={{
            backgroundImage: `url(${isMobile ? bg2Mobile : bg2})`,
          }}
        >
          <div className="hero-overlay" />
          <div className="hero-inner">
            <div className="hero-content">
              <h1>
                Packaging Built for <br />
                Brand <span>Durability</span>
              </h1>

              <p>
                Food-grade, eco-friendly packaging designed to perform.
              </p>

              <div className="hero-buttons">
                <Link to="/about" className="btn-primary">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HomeSlider;