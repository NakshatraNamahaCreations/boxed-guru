import React from "react";
import Slider from "react-slick";
import "./ClientTalks.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rohit Mehta",
    role: "Founder, CloudKitchen Co.",
    feedback:
      "Boxed Guru’s tamper-evident packaging helped us gain immediate customer trust. The quality and sustainability are unmatched.",
  },
  {
    name: "Ananya Sharma",
    role: "Operations Head, FoodVerse",
    feedback:
      "Switching to Boxed Guru reduced our plastic usage drastically without compromising on durability or presentation.",
  },
  {
    name: "Karan Patel",
    role: "Brand Manager, Urban Eats",
    feedback:
      "Our customers noticed the difference instantly. The packaging speaks quality and responsibility.",
  },
];

const ClientTalks = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
  <section className="client-talks">
  <div className="client-container">

    {/* LEFT CONTENT */}
    <div className="client-left">
      <span className="client-kicker">CLIENT TALKS</span>
      <h2 className="client-head">What Our Clients Say</h2>

      <p className="client-intro">
        Real feedback from brands that trust our sustainable,
        tamper-evident packaging solutions.
      </p>

    </div>

    {/* RIGHT SLIDER */}
    <div className="client-right">
      <Slider {...settings} className="client-slider">
        {testimonials.map((item, index) => (
          <div className="client-slide" key={index}>
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />

              <p className="testimonial-text">
                {item.feedback}
              </p>

              <div className="client-info">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

  </div>
</section>

  );
};

export default ClientTalks;
