import React, { useState } from "react";
import "./CertificateSection.css";
import iso from "../assets/iso.jpeg";
import fssai from "../assets/fssai.jpg";
import gmp from "../assets/gmp_1.jpg";

const certificates = [
  {
    id: 1,
    title: "ISO 9001 Certification",
    image: iso,
  },
  {
    id: 2,
    title: "fssai license",
    image: fssai,
  },
  {
    id: 4,
    title: "Good Manufacturing Process",
    image: gmp,
  },
];

const CertificateSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="certificate-section">
      <div className="certificate-container">

        <div className="certificate-header">
          <h2>Our Certifications</h2>
          <p>
            We maintain the highest industry standards through verified
            certifications and quality assurance processes.
          </p>
        </div>

      <div className="certificate-grid">
  {certificates.map((cert, index) => (
    <div
      key={cert.id}
      className="certificate-card title-only"
      onClick={() => openLightbox(index)}
    >
      <h4>{cert.title}</h4>
    </div>
  ))}
</div>

        {/* LIGHTBOX */}
        {selectedIndex !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            
            <span className="close-btn" onClick={closeLightbox}>✕</span>

            <button className="prev-btn" onClick={showPrev}>❮</button>

            <img
              src={certificates[selectedIndex].image}
              alt="preview"
              className="lightbox-img"
            />

            <button className="next-btn" onClick={showNext}>❯</button>

          </div>
        )}

      </div>
    </section>
  );
};

export default CertificateSection;