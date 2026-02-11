import React from "react";
import Slider from "react-slick";
import "./Products.css";

import promoImg from "../assets/promo-img.jpeg";

import product1 from "../assets/product-1.png";
import product2 from "../assets/category-5.png";
import product3 from "../assets/category-4.png";
import product4 from "../assets/product-4.png";
import product5 from "../assets/category-3.png";
import product6 from "../assets/category-6.png";
import product7 from "../assets/category-7.png";
import product8 from "../assets/category8.png";

const products = [
  {
    title: "Paper Container with Lid (Round)",
    qnty: "250ml, 350ml, 500ml",
    image: product1,
    color: "#F3E9D8", // pastel beige
  },
  {
    title: "Paper Lunch Box Heat Sealing",
    qnty: "500ml, 750ml, 1000ml",
    image: product2,
    color: "#E6F1F6", // pastel blue
  },
  {
    title: "Lunch Box",
    qnty: "500ml, 750ml, 1000ml",
    image: product3,
    color: "#F6E3E1", // pastel rose
  },
  {
    title: "Meal Lunch Box",
    qnty: "750ml, 1300ml, 2000ml",
    image: product4,
    color: "#F5EFD9", // pastel sand
  },
  {
    title: "Noodle Box",
    qnty: "500ml, 750ml, 900ml",
    image: product5,
    color: "#EAF4F2", // pastel mint
  },
  {
    title: "Burger Box",
    qnty: "Regular, Large",
    image: product6,
    color: "#F9E6EC", // pastel blush
  },
  {
    title: "Pizza Box",
    qnty: "8 inch, 10 inch, 12 inch",
    image: product7,
    color: "#FFF1DB", // pastel peach
  },
  {
    title: "Boat Tray",
    qnty: "500ml, 650ml, 750ml, 900ml",
    image: product8,
    color: "#E9F2F1", // pastel aqua
  },
];


const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

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
          {/* <div className="promo-overlay">
            <span>Special Offer</span>
            <h3>Eco Friendly Packaging</h3>
            <button>Enquire Now →</button>
          </div> */}
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="products-carousel">
          <Slider {...sliderSettings} className="products-slider">
            {products.map((item, index) => (
              <div className="product-slide" key={index}>
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
                    <button className="enquire-btn">
                      Enquire Now →
                    </button>
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

export default Products;
