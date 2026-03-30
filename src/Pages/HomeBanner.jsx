import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import "./HomeBanner.css";
import boximg from "../assets/box-guru2.png"
import boximg2 from "../assets/box-guru6.png"
import Link from "react-router-dom";

const HomeBanner = () => {
  const settings = {
    dots: true,
    arrows: false,
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
        <div className="hero-slide">
          <div className="hero-inner">
            {/* LEFT CONTENT */}
            <div className="hero-content">
              <h1>
                Smart Packaging That Protects<br />
                <span> Builds Your Brand</span>
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus nec ullamcorper mattis.
              </p>

              <div className="hero-buttons">
                <a href="#" className="btn-primary">Learn More</a>

                <button className="btn-video">
                  Discover Products <FaArrowRight/>
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE PLACEHOLDER */}
            <div className="hero-image-space">
              <img src={boximg}/>
            </div>
          </div>
        </div>

        {/* Slide 2 (Duplicate for demo) */}
        <div className="hero-slide">
          <div className="hero-inner">
            <div className="hero-content">
              <h1>
               Packaging Built for Brand and  <br />
                <span>Durability</span>
              </h1>

              <p>
                Sustainable packaging solutions designed for modern brands.
              </p>

              <div className="hero-buttons">
                <Link to="/about" className="btn-primary">Explore More</Link>
              </div>
            </div>

            <div className="hero-image-space">
                <img src={boximg2}/>
                </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HomeBanner;
