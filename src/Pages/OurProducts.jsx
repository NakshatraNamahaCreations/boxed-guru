import React from "react";
import "./OurProducts.css";
import product1 from "../assets/box-guru3.png"
import product2 from "../assets/box-guru-4.png"
import product3 from "../assets/box-guru-5.png"

const products = [
  {
    title: "Heat Sealable Food Boxes",
    desc: [
      "Tamper-proof to safeguard customer trust",
      "Shows customers you care for their meals",
      "Protects your brand reputation",
      "Differentiates your brand from competitors",
      "Stops condensation and keeps food fresh",
    ],
    tag: "Tamper Proof",
    image: product1,
    color: "#C6A36F",
  },
  {
    title: "Paper Bowls",
    desc: [
      "Tamper-Proof & Lid option available",
      "Shows customers you care for their meals",
      "Differentiates your brand from competitors by unmatched branding",
      "Used for Ice-cream to Gravy's",
    ],
    tag: "Eco Friendly",
    image: product2,
    color: "#6FA6B9",
  },
  {
    title: "Inter-Locking Products",
    desc: [
      "Biodegradable",
      "Recyclable",
      "Brand-ability",
      "Tamper-proof",
    ],
    tag: "Biodegradable",
    image: product3,
    color: "#B94A48",
  },
];

const OurProducts = () => {
  return (
    <section className="products-section">
        <div className="products-header">
  <div className="products-heading">
    <span className="products-kicker" data-aos="fade-up">PRODUCTS</span>
    <h2 data-aos="fade-up">Our Products</h2>
  </div>

  <p data-aos="fade-up">
    Thoughtfully designed packaging solutions that balance sustainability,
    strength, and brand appeal.
  </p>
</div>


      <div className="products-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
           <div className="product-media">
  <img src={item.image} alt={item.title} />
</div>


            <div className="product-content">
              <span
                className="product-tag"
                style={{ backgroundColor: item.color }}
              >
                {item.tag}
              </span>

              <h3>{item.title}</h3>
              <ul className="product-list">
  {item.desc.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>


              <button className="product-btn">View Range →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
