import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import promoImg from "../assets/promo-4.png";

import product1 from "../assets/bowl-1.png";
import product2 from "../assets/tamper-box.png";
import product3 from "../assets/boxlunch.png";
import product4 from "../assets/category-5.png";
import product5 from "../assets/noodle-box.png";
import product6 from "../assets/burgerbox1.png";
import product7 from "../assets/pizzabox.png";
import product8 from "../assets/boattray.png";

const products = [
  {
    id: "paper-container-round",
    title: "Paper Container with Lid (Round)",
    qnty: "250ml, 350ml, 500ml",
    image: product1,
    color: "#F3E9D8",
  },
  {
    id:"paper-lunch-box",
    title: "Paper Lunch Box Heat Sealing",
    qnty: "500ml, 750ml, 1000ml",
    image: product2,
    color: "#E6F1F6",
  },
  {
    id:"lunch-box",
    title: "Lunch Box",
    qnty: "500ml, 750ml, 1000ml",
    image: product3,
    color: "#F6E3E1",
  },
  {
    id:"meal-lunch-box",
    title: "Meal Lunch Box",
    qnty: "750ml, 1300ml, 2000ml",
    image: product4,
    color: "#F5EFD9",
  },
  {
    id: "noodle-box",
    title: "Noodle Box",
    qnty: "500ml, 750ml, 900ml",
    image: product5,
    color: "#EAF4F2",
  },
  {
    id: "burger-box",
    title: "Burger Box",
    qnty: "Regular, Large",
    image: product6,
    color: "#F9E6EC",
  },
  {
    id:"pizza-box",
    title: "Pizza Box",
    qnty: "8 inch, 10 inch, 12 inch",
    image: product7,
    color: "#FFF1DB",
  },
  {
    id:"boat-tray",
    title: "Boat Tray",
    qnty: "500ml, 650ml, 750ml, 900ml",
    image: product8,
    color: "#E9F2F1",
  },
];

const Products = () => {
  return (
    <section className="products-section">
      <div className="product-header">
        <span className="products-kicker">PRODUCTS</span>
        <h2>Our Packaging Range</h2>
      </div>

      <div className="products-layout">

        {/* LEFT PROMO */}
        <div className="products-promo">
          <img src={promoImg} alt="Promo" />
        </div>

        {/* RIGHT SWIPER */}
        <div className="products-carousel">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="product-card-new">
                  <div className="product-image-wrap">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div
                    className="product-info"
                    style={{ backgroundColor: item.color }}
                  >
                    <h3>{item.title}</h3>
                    <p>Capacity: [{item.qnty}]</p>
                    <Link to={`/products#${item.id}`} className="enquire-btn">
                      Know More →
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Products;