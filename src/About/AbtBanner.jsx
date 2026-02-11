import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import "./AbtBanner.css";


const AbtBanner = () => {
 
  return (
    <section className="abt-slider">
        {/* Slide 1 */}
        <div
          className="abt-slide"
        >
          <div className="abt-overlay" />
          <div className="abt-inner">
            <div className="abt-content">
                {/* <h1>
                    Smart Packaging That <br/> Protects 
                     <span> Builds Your <br/>Brand</span>
                </h1>

                <p>
                    Sustainable, tamper-evident packaging solutions<br/> for modern food
                    brands.
                </p> */}

              {/* <div className="abt-buttons">
                <a href="#" className="btn-primary">Learn More</a>
                <button className="btn-video">
                  Discover Products <FaArrowRight />
                </button>
              </div> */}
            </div>
          </div>
        </div>
    </section>
  );
};

export default AbtBanner;
