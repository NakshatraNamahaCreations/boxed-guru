import React from "react";
import Slider from "react-slick";
import "./ClientReview.css";

const reviews = [
  {
    name: "Mohit Sharma",
    role: "Restaurant Owner",
    text:
      "BoxGuru’s packaging quality is outstanding. The tamper-proof design has increased customer trust and reduced complaints.",
  },
  {
    name: "Ananya Rao",
    role: "Cloud Kitchen Founder",
    text:
      "Eco-friendly, sturdy, and premium looking. Our customers instantly noticed the difference.",
  },
  {
    name: "Vikram Patel",
    role: "Food Delivery Partner",
    text:
      "Heat-sealable boxes completely solved leakage issues. Presentation stays perfect.",
  },
  {
    name: "Neha Kulkarni",
    role: "Cafe Owner",
    text:
      "BoxGuru packaging elevated our brand image. Customers associate us with quality now.",
  },
];

export default function ClientReview() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  return (
    <section className="premium-reviews">
      <div className="premium-container">

        {/* HEADER */}
        <div className="premium-header">
          <span className="premium-tag">CLIENT LOVE</span>
          <h2>
            What Food Brands Say About Us
          </h2>
          <p>
            From cloud kitchens to national food chains, BoxedGuru is trusted for
            safe, sustainable, and premium packaging solutions.
          </p>
        </div>

        {/* SLIDER */}
        <Slider {...settings} className="premium-slider">
          {reviews.map((item, index) => (
            <div key={index} className="premium-slide">
              <div className="premium-card">
                <div className="quote-mark">“</div>

                <p className="premium-text">{item.text}</p>

                <div className="premium-user">
                  <div className="premium-avatar">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
}
