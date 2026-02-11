import React from "react";
import "./MovingText.css";
import {  FaAward, FaRecycle, FaSeedling, FaTemperatureHigh } from "react-icons/fa";

const MovingText = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <span>
        <FaSeedling/>  BIODEGRADABLE • <FaRecycle/> RECYCLEABLE •
        <FaAward/>  BRAND ABILITY • <FaTemperatureHigh/> TAMPER-PROOF •
        </span>
        <span>
         <FaSeedling/>   BIODEGRADABLE • <FaRecycle/> RECYCLEABLE •
          <FaAward/> BRAND ABILITY • <FaTemperatureHigh/> TAMPER-PROOF •
        </span>
        <span>
        <FaSeedling/>    BIODEGRADABLE • <FaRecycle/> RECYCLEABLE •
        <FaAward/>   BRAND ABILITY • <FaTemperatureHigh/> TAMPER-PROOF •
        </span>
        <span>
         <FaSeedling/>   BIODEGRADABLE • <FaRecycle/> RECYCLEABLE •
        <FaAward/>   BRAND ABILITY •  <FaTemperatureHigh/>TAMPER-PROOF •
        </span>
         <span>
         <FaSeedling/>   BIODEGRADABLE • <FaRecycle/> RECYCLEABLE •
         <FaAward/>  BRAND ABILITY •  <FaTemperatureHigh/>TAMPER-PROOF •
        </span>
      </div>
    </div>
  );
};

export default MovingText;
