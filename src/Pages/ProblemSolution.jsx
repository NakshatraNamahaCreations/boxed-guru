import React from "react";
import "./ProblemSolution.css";
import {
  FaExclamationTriangle,
  FaLeaf,
  FaRecycle,
  FaShieldAlt,
  FaPenNib,
  FaCheckCircle,
} from "react-icons/fa";
import plastic from "../assets/box-guru-8.png"
import paper from "../assets/box-guru-9.png"

const ProblemSolution = () => {
  return (
    <section className="ps-section">
      <div className="ps-container">

        {/* LEFT — PROBLEM */}
       <div className="ps-card problem">

  {/* IMAGE AT TOP */}
  <div className="ps-card-image">
    <img src={plastic} alt="Plastic Packaging Problem" />
  </div>

  <span className="ps-kicker danger">
    <FaExclamationTriangle /> The Problem
  </span>

  <h2>Plastic Packaging Is Costing Us More Than We Realize</h2>

  <p>
    Single-use plastic packaging is causing long-term damage to our
    environment, health, and food safety. Most plastic food containers
    are neither recyclable nor transparent in material quality.
  </p>

  <ul className="ps-list">
    <li>80% of plastic packaging is not recycled</li>
    <li>Long-term environmental pollution</li>
    <li>Marine life damage</li>
    <li>Health risks from microplastics & chemicals</li>
    <li>Unclear plastic grades used in food packaging</li>
  </ul>

</div>


        {/* RIGHT — SOLUTION */}
       <div className="ps-card solution">

  <div className="ps-card-image">
    <img src={paper} alt="Paper Packaging Solution" />
  </div>

  <span className="ps-kicker success">
    <FaCheckCircle /> Our Solution
  </span>

  <h2>Sustainable, Tamper-Proof Paper Packaging</h2>

  <p>
    Boxed Guru offers custom food packaging made from 100% virgin
    paperboard — designed to protect food, build trust, and eliminate
    plastic waste.
  </p>

  <ul className="ps-feature-list">
    <li><FaShieldAlt /> Tamper-Proof Packaging</li>
    <li><FaPenNib /> Custom Branding</li>
    <li><FaLeaf /> Food-Grade Materials</li>
    <li><FaRecycle /> 100% Recyclable</li>
    <li><FaLeaf /> Biodegradable</li>
  </ul>

</div>

      </div>
    </section>
  );
};

export default ProblemSolution;
