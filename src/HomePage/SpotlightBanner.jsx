import React from "react";
import "./SpotlightBanner.css";
import { useNavigate } from "react-router-dom";

const SpotlightBanner = () => {

    const navigate = useNavigate();
  return (
    <section className="spotlight-banner">
      {/* <div className="spotlight-content">

        <span className="banner-tag">NEW PRODUCT</span>

        <h1 className="banner-title">
          Heat Sealing <span>Lunch Boxes</span>
        </h1>

        <p className="banner-text">
          Secure, leak-proof food packaging designed for restaurants,
          cloud kitchens and takeaway services. Keep every meal fresh,
          hygienic and tamper-proof.
        </p>

        <div className="banner-features">
          <span>Leak Proof</span>
          <span>Tamper Proof</span>
          <span>Food Safe</span>
        </div>

        <div className="banner-buttons">
          <button className="btn-outline" onClick={()=> navigate("/products")}>Explore Products</button>
        </div>

      </div> */}
    </section>
  );
};

export default SpotlightBanner;