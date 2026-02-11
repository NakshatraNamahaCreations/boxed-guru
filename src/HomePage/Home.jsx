import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

import bg1 from "../assets/homebg-1.jpeg";
import bg2 from "../assets/homebg-1.jpeg";

const HomeSlider = () => {
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
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="hero-overlay" />
          <div className="hero-inner">
            <div className="hero-content">
                <h1>
                    Smart Packaging That <br/> Protects 
                     <span> Builds Your <br/>Brand</span>
                </h1>

                <p>
                    Sustainable, tamper-evident packaging solutions<br/> for modern food
                    brands.
                </p>

              <div className="hero-buttons">
                <a href="#" className="btn-primary">Learn More</a>
                {/* <button className="btn-video">
                  Discover Products <FaArrowRight />
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="hero-slides"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="hero-overlay" />
          <div className="hero-inner">
            <div className="hero-content">
              <h1>
                Packaging Built for <br /> Brand  
                <span> Durability</span>
              </h1>

              <p>
                Food-grade, eco-friendly packaging designed to perform.
              </p>

              <div className="hero-buttons">
                <a href="#" className="btn-primary">Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HomeSlider;
