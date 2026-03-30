import React from "react";
import "./ShopByCategory.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import bowl from "../assets/category-1.png";
import tamper from "../assets/tamper-box.png";
import lunch from "../assets/boxlunch.png";
import meal from "../assets/category-5.png";
import noodle from "../assets/category-3.png";
import burger from "../assets/category-6.png";
import pizza from "../assets/pizzabox.png";
import tray from "../assets/boattray.png";

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
  return (
    <section className="category-circle-section">
      <div className="category-circle-container">
        <span className="category-kicker">CATEGORIES</span>
        <h2 className="category-head">Shop by Category</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1400: { slidesPerView: 6 },
          }}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="category-circle-slide">
                <div
                  className="category-circle"
                  style={{
                    backgroundColor: item.bg,
                    color: item.bg,
                  }}
                >
                  <img src={item.image} alt={item.title} />
                </div>
                <h4 className="category-circle-title">{item.title}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShopByCategory;