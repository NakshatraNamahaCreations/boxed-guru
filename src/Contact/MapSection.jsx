import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <div className="map-wrapper">
      <iframe
        title="location-map"
        src="https://www.google.com/maps?q=London+Eye&output=embed"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapSection;
