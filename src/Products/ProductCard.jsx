import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import './ProductGrid.css'

const ProductCard = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setSelectedImageIndex(0);
  };

const images =
  selectedSize?.images && selectedSize.images.length > 0
    ? selectedSize.images
    : [product.image];

// Group images into slides of 2
const slides = [];
for (let i = 0; i < images.length; i += 2) {
  slides.push(images.slice(i, i + 2));
}

  const nextImage = () => {
  setSelectedImageIndex((prev) =>
    prev === slides.length - 1 ? 0 : prev + 1
  );
};

const prevImage = () => {
  setSelectedImageIndex((prev) =>
    prev === 0 ? slides.length - 1 : prev - 1
  );
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("https://api.nakshatranamahacreations.in/api/boxedguru/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Enquiry sent successfully!");
      e.target.reset();
      setShowPopup(false);
    } else {
      alert("Failed to send enquiry");
    }
  } catch (err) {
    console.error(err);
    alert("Error sending enquiry");
  }
};

 useEffect(() => {
  if (slides.length <= 1 || isPaused) return;

  const interval = setInterval(() => {
    setSelectedImageIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, [slides, selectedSize, isPaused]);

  return (
    <>
      <div
        id={product.id}
        className="product-showcase"
        style={{ background: product.color }}
      >
        <div className="product-showcase-inner">

          {/* IMAGE CHANGES HERE */}
   <div className="product-hero">

  <div
    className="slider-container"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
  >
    <div className="slider-slide">
      {slides[selectedImageIndex].map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${product.title}-${index}`}
          className="slider-image"
        />
      ))}
    </div>

    {slides.length > 1 && (
      <>
        <button className="slider-btn left" onClick={prevImage}>
          <FiArrowLeft />
        </button>
        <button className="slider-btn right" onClick={nextImage}>
          <FiArrowRight />
        </button>
      </>
    )}
  </div>

  {/* ✅ THUMBNAILS NOW BELOW IMAGE */}
  <div className="thumbnail-wrapper">
    {images.map((img, index) => {
      const slideIndex = Math.floor(index / 2);

      return (
        <img
          key={index}
          src={img}
          alt={`thumb-${index}`}
          className={`thumbnail ${
            slideIndex === selectedImageIndex ? "active-thumb" : ""
          }`}
          onClick={() => setSelectedImageIndex(slideIndex)}
        />
      );
    })}
  </div>

</div>  

          {/* CONTENT */}
          <div className="product-info">
            <h3>{product.title}</h3>
            <div className="divider"></div>

            <label className="label">Capacity & Carton</label>

            <div className="capacity-chips">
              {product.sizes?.map((item, i) => (
                <div
                  key={i}
                  className={`chip ${
                    selectedSize?.capacity === item.capacity
                      ? "active-chip"
                      : ""
                  }`}
                  onClick={() => handleSizeChange(item)}
                >
                  {item.capacity}
                  <span>{item.carton}</span>
                </div>
              ))}
            </div>

            <div className="maq-block">
  <label>Minimum Order Quantity</label>
  <span className="maq-value">{product.maq}</span>
</div>

            <div className="spec-list">
              <div>
                <label>Raw Material</label>
                <p>{product.rawMaterial}</p>
              </div>

              <div>
                <label>Coating</label>
                <p>{product.coating}</p>
              </div>

              <div>
                <label>Heat Sealing</label>
                <p>{product.heatSealing}</p>
              </div>

              <div>
                <label>Customization</label>
                <p>{product.customization}</p>
              </div>
            </div>

            <div className="usage-block">
              <label>Usages</label>
              <p>{product.usages}</p>
            </div>

            {/* ENQUIRE BUTTON */}
            <div className="enquiry-btn-wrap">
              <button
                className="enquire-btn"
                onClick={() => setShowPopup(true)}
              >
                Enquire Now <FiArrowRight/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP FORM */}
      {showPopup && (
        <div
          className="enquiry-modal"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="enquiry-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            <h3>Enquiry for {product.title}</h3>

           <form onSubmit={handleSubmit}>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    required
  />

  {/* Hidden Product Name */}
  <input
    type="hidden"
    name="productName"
    value={product.title}
  />

  {/* Capacity Dropdown */}
  <select name="selectedCapacity" required>
    <option value="">Select Capacity</option>
    {product.sizes?.map((item, i) => (
      <option key={i} value={item.capacity}>
        {item.capacity} ({item.carton})
      </option>
    ))}
  </select>

  <button type="submit" className="submit-btn">
    Submit Enquiry
  </button>
</form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
