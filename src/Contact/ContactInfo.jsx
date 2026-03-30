import React, { useState } from "react";
import "./ContactInfo.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import bio from "../assets/biodegradable.png";
import recycle from "../assets/recycle-sign.png";
import brand from "../assets/brand.png";
import tamper from "../assets/shield.png"

const servicesList = [
  "Paper Container with Lid",
  "Paper Lunch Box Heat Sealing",
  "Lunch Box",
  "Meal Lunch Box",
  "Noodle Box",
  "Burger Box",
  "Pizza Box",
  "Boat Tray",
];

const ContactInfo = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleServiceChange = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
      setQuantities({ ...quantities, [service]: "5K" });
    }
  };

  const handleQuantityChange = (service, value) => {
    setQuantities({
      ...quantities,
      [service]: value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    phone: e.target.phone.value,
    email: e.target.email.value,
    company: e.target.company.value,
    message: e.target.message.value,
    services: selectedServices.map((service) => ({
      name: service,
      quantity: quantities[service] || "N/A",
    })),
  };

  try {
    const res = await fetch("https://api.nakshatranamahacreations.in/api/boxedguru/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Enquiry sent successfully!");
      e.target.reset();
    } else {
      alert("Failed to send enquiry");
    }
  } catch (err) {
    console.error(err);
    alert("Error sending enquiry");
  }
};

  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-container">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <h2>Get In Touch!</h2>

            <p>
              Looking for eco-friendly packaging solutions for your food
              business? Select the products you are interested in and the
              quantity required. Our team will contact you with the best
              packaging options.
            </p>

            <div className="contact-features">

  <div className="feature-item">
    <img src={bio} alt="Biodegradable" />
    <span>Biodegradable</span>
  </div>

  <div className="feature-item">
    <img src={recycle} alt="Recyclable" />
    <span>Recyclable</span>
  </div>

  <div className="feature-item">
    <img src={brand} alt="Brand Ability" />
    <span>Brand-Ability</span>
  </div>

  <div className="feature-item">
    <img src={tamper} alt="Tamper Proof" />
    <span>Tamper-Proof</span>
  </div>

</div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
  <input name="name" type="text" placeholder="Your Name" required />
  <input name="phone" type="text" placeholder="Your Phone" required />
  <input name="email" type="email" placeholder="Your Email" required />
  <input name="company" type="text" placeholder="Company Name" required />

  <h3>Select Products</h3>

  <div className="product-grids">
    {servicesList.map((service, index) => (
      <div
        key={index}
        className={`products-card ${
          selectedServices.includes(service) ? "active" : ""
        }`}
        onClick={() => handleServiceChange(service)}
      >
        <h4>{service}</h4>

        {selectedServices.includes(service) && (
          <div className="quantity-field">
            <label>Quantity</label>

            <select
              value={quantities[service]}
              onChange={(e) =>
                handleQuantityChange(service, e.target.value)
              }
              onClick={(e) => e.stopPropagation()}
            >
              <option>5K</option>
              <option>10K</option>
              <option>15K</option>
              <option>20K</option>
              <option>25K+</option>
            </select>
          </div>
        )}
      </div>
    ))}
  </div>

  <textarea name="message" placeholder="Your Message"></textarea>

  <button type="submit">Submit</button>
</form>
          </div>
        </div>
      </div>

    {submitted && (
  <div className="contact-popup-overlay">
    <div className="contact-popup">

      <button
        className="popup-close"
        onClick={() => setSubmitted(false)}
      >
        ✕
      </button>

      <h3 className="popup-title">For Further Enquiry Contact</h3>

      <div className="popup-contact-items">

        <div className="popup-contact">
          <FaPhoneAlt className="popup-icon" />
          <span>+91 9900009022</span>
        </div>

        <div className="popup-contact">
          <FaPhoneAlt className="popup-icon" />
          <span>+91 7618783897</span>
        </div>

        {/* <div className="popup-contact">
          <FaEnvelope className="popup-icon" />
          <span>info@theboxed.guru</span>
        </div>

        <div className="popup-contact">
          <FaLocationArrow className="popup-icon" />
          <span>Bangalore, Karnataka. India</span>
        </div> */}

      </div>

    </div>
  </div>
)}
    </>
  );
};

export default ContactInfo;
