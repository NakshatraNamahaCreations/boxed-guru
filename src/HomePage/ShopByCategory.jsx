import React, { useEffect } from "react";
import Slider from "react-slick";
import "./ShopByCategory.css";

import bowl from "../assets/category-1.png";
import tamper from "../assets/category-2.png";
import lunch from "../assets/category-5.png";
import meal from "../assets/category-4.png";
import noodle from "../assets/category-3.png";
import burger from "../assets/category-6.png";
import pizza from "../assets/category-7.png";
import tray from "../assets/category-8.png";

const categories = [
  { title: "Bowls", image: bowl, bg: "#fdecea" },
  { title: "Tamper Proof Box", image: tamper, bg: "#e9fbf2" },
  { title: "Lunch Box", image: lunch, bg: "#fff1dc" },
  { title: "Meal Box", image: meal, bg: "#eaf5ff" },
  { title: "Chinese Box", image: noodle, bg: "#f6ebf7" },
  { title: "Burger Box", image: burger, bg: "#f3edf9" },
  { title: "Pizza Box", image: pizza, bg: "#fdecea" },
  { title: "Boat Tray", image: tray, bg: "#e9fbf2" },
];

const ShopByCategory = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  // 🔑 This ensures ONLY 3 dots are visible (prev + active + next)
  useEffect(() => {
    const updateDots = () => {
      const dots = document.querySelectorAll(".slick-dots li");
      dots.forEach((d) => d.classList.remove("prev-dot"));

      const active = document.querySelector(".slick-dots li.slick-active");
      if (active && active.previousElementSibling) {
        active.previousElementSibling.classList.add("prev-dot");
      }
    };

    updateDots();
    const interval = setInterval(updateDots, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="category-circle-section">
      <div className="category-circle-container">
        <span className="category-kicker">CATEGORIES</span>
        <h2 className="category-head">Shop by Category</h2>

        <Slider {...settings}>
          {categories.map((item, index) => (
            <div key={index} className="category-circle-slide">
              <div
                className="category-circle"
                style={{
                  backgroundColor: item.bg,
                  color: item.bg, // required for border color
                }}
              >
                <img src={item.image} alt={item.title} />
              </div>
              <h4 className="category-circle-title">{item.title}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ShopByCategory;
