import React, { useState, useEffect } from "react";
import "./GalleryGrid.css";

import img1 from "../assets/gal1.png";
import img2 from "../assets/gal2.png";
import img3 from "../assets/gal23.png";
import img4 from "../assets/gal24.png";
import img5 from "../assets/gal26.png";
import img6 from "../assets/gal25.jpeg";
import img7 from "../assets/gal27.png";
import img8 from "../assets/gal28.png";
import img9 from "../assets/gal29.png";
import img10 from "../assets/gal30.png";
import img11 from "../assets/gal32.png";
import img12 from "../assets/gal4.png";
import img13 from "../assets/gal49.png";
import img14 from "../assets/gal3.png";
import img15 from "../assets/gal33.png";
import img16 from "../assets/gal35.jpeg";
import img17 from "../assets/burger-box.jpeg";
import img19 from "../assets/gal34.jpeg";
import img20 from "../assets/gal7.jpeg";
import img21 from "../assets/gal36.jpeg";
import img22 from "../assets/gal6.png";
import img23 from "../assets/gal11.png";
import img24 from "../assets/gal38.png";
import img25 from "../assets/gal39.png";
import img26 from "../assets/gal37.jpeg";
import img27 from "../assets/gal12.jpeg";
import img28 from "../assets/gal10.jpeg";
import img29 from "../assets/gal13.jpeg";
import img30 from "../assets/gal14.jpeg";
import img31 from "../assets/gal41.jpeg";
import img32 from "../assets/gal42.png";
import img33 from "../assets/gal43.jpeg";
import img34 from "../assets/gal44.jpeg";
import img35 from "../assets/gal16.jpeg";
import img36 from "../assets/gal15.jpeg";
import img37 from "../assets/gal-40.png";
import img38 from "../assets/gal48.png";
import img39 from "../assets/gal46.png";
import img40 from "../assets/gal45.png";
import img41 from "../assets/gal47.png";
import img42 from "../assets/gal18.png";
import img43 from "../assets/gal17.png";
// import img44 from "../assets/gal50.jpeg";
// import img45 from "../assets/gal21.jpeg";
// import img46 from "../assets/gal20.jpeg";

const images = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
  { id: 13, src: img13 },
  { id: 14, src: img14 },
  { id: 15, src: img15 },
  { id: 16, src: img16 },
  { id: 17, src: img17 },
  { id: 19, src: img19 },
  { id: 20, src: img20 },
  { id: 21, src: img21 },
  { id: 22, src: img22 },
  { id: 23, src: img23 },
  { id: 24, src: img24 },
  { id: 25, src: img25 },
  { id: 26, src: img26 },
  { id: 27, src: img27 },
  { id: 28, src: img28 },
  { id: 29, src: img29 },
  { id: 30, src: img30 },
  { id: 31, src: img31 },
  { id: 32, src: img32 },
  { id: 33, src: img33 },
  { id: 34, src: img34 },
  { id: 35, src: img35 },
  { id: 36, src: img36 },
  { id: 37, src: img37 },
  { id: 38, src: img38 },
  { id: 39, src: img39 },
  { id: 40, src: img40 },
  { id: 41, src: img41 },
  { id: 42, src: img42 },
  { id: 43, src: img43 },
  // { id: 44, src: img44 },
  // { id: 45, src: img45 },
  // { id: 46, src: img46 },
];

const GalleryGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openImage = (index) => {
    setActiveIndex(index);
  };

  const closeImage = () => {
    setActiveIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  /* Keyboard support */
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">Our Packaging Gallery</h2>

      <div className="masonry-grid">
        {images.map((img, index) => (
          <div
            key={img.id}
            className="masonry-item"
            onClick={() => openImage(index)}
          >
            <img src={img.src} alt="gallery" />
            <div className="overlay">
              <span className="plus">+</span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="lightbox" onClick={closeImage}>
          <button className="close-btn" onClick={closeImage}>
            ✕
          </button>

          <button className="nav-btn prev" onClick={prevImage}>
            ‹
          </button>

          <img
            src={images[activeIndex].src}
            alt="preview"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="nav-btn next" onClick={nextImage}>
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
