import React from "react";
import { FaClipboardList, FaCogs, FaBoxOpen, FaTruck } from "react-icons/fa";
import "./HowWeWork.css";

const processData = [
  {
    icon: <FaClipboardList />,
    title: "Choose your products",
    desc: "We understand product requirements, dimensions, and usage to recommend suitable packaging solutions.",
     colorClass: "pastel-peach",
  },
  {
    icon: <FaCogs />,
    title: "Manufacture process",
    desc: "Under this Material selection, printing, box formation with quality checks at every stages.",
     colorClass: "pastel-lavender",
  },
  {
    icon: <FaBoxOpen />,
    title: "Quality Check",
    desc: "Each product is verified to ensure strength, finish, and quality.",
    colorClass: "pastel-blue"
  },
  {
    icon: <FaTruck />,
    title: "Ready For Delivery",
    desc: "Packaging is prepared and delivered on time to support uninterrupted business operations.",
    colorClass:"pastel-sand"
  },
];

const HowWeWork = () => {
  return (
    <section className="boxedProcess">
      <div className="container">

        <div className="processHeader">
          <span>OUR PROCESS</span>
          <h2>How We Work</h2>
        </div>

        <div className="processWrapper">
          {processData.map((item, index) => (
            <div className="processCard" key={index}>
             <div className={`processIcon ${item.colorClass}`}>
  {item.icon}
</div>

              <span className="stepNumber">0{index + 1}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork
