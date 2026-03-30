import React from "react";
import { Link } from "react-router-dom";
import "./GalleryBan.css";

const GalleryBan = () => {
  return (
    <section className="gal-slider">
      <div className="gal-slide">
        <div className="gal-overlay" />

        <div className="gal-inner">
          <div className="gal-content">

           

            <h1>Gallery</h1>
             {/* Breadcrumbs */}
            <div className="gal-breadcrumbs">
              <Link to="/">Home</Link>
              <span className="separator">|</span>
              <span className="active">Gallery</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryBan;
