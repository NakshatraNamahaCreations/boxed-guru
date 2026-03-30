import React from "react";
import { Link } from "react-router-dom";
import "./ProductBanner.css";

const ProductBanner = () => {
  return (
    <section className="pdt-slider">
      <div className="pdt-slide">
        <div className="pdt-overlay" />

        <div className="pdt-inner">
          <div className="pdt-content">

           

            <h1>Our Products</h1>
             {/* Breadcrumbs */}
            <div className="pdt-breadcrumbs">
              <Link to="/">Home</Link>
              <span className="separator">|</span>
              <span className="active">Our Products</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
