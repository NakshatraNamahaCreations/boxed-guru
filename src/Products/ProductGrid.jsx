import React from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import product1 from "../assets/pro-1.png";
import product2 from "../assets/pro2.png";
import product3 from "../assets/pro3.png";
import product4 from "../assets/pro4.png";
import product5 from "../assets/pro5.png";
import product6 from "../assets/burgerbox1.png";
import product7 from "../assets/pro6.png";
import product8 from "../assets/boat_2.png";
import { useEffect } from "react";
import bowl_1 from "../assets/bowl_1.png";
import bowl_2 from "../assets/bowl_2.png"
import bowl_3 from "../assets/bowl_3.png";
import bowl_4 from "../assets/bowl_4.png";
import boat_1 from "../assets/boattray_1.png";
import boat_2 from "../assets/boattray.png";
import boat_3 from "../assets/boat_2.png";
import boat_4 from "../assets/boat_3.png"
import tamper1 from "../assets/tamperproof-1.png"
import tamper2 from "../assets/tamperproof2.png"
import tamper3 from "../assets/tamperproof-1.png"
import tamper4 from "../assets/tamperproof2.png"
import tamper5 from "../assets/tamperproof-1.png"
import tamper6 from "../assets/tamperproof2.png"
import lunch1 from "../assets/lunch_1.png";
import lunch2 from "../assets/lunch_4.png";
import lunch3 from "../assets/lunch_6.png";
import lunch4 from "../assets/lunch_2.png";
import lunch5 from "../assets/lunch_5.png";
import lunch6 from "../assets/lunch_7.png"
import meal1 from "../assets/meal-lunch.png";
import meal2 from "../assets/meal_2.png";
import meal3 from "../assets/meal_4.png";
import meal4 from "../assets/meal_3.png";
import noodle2 from "../assets/noodle_1.png"
import noodle1 from "../assets/noodle_3.png"
import noodle3 from "../assets/noodle_2.png"
import burger1 from "../assets/burger1.png"
import pizza1 from "../assets/pizza1.png";
import pizza2 from "../assets/pizza2.png"
import bwl1 from "../assets/bwl_1.png";
import bwl2 from "../assets/bwl_2.png";
import bwl3 from "../assets/bwl_3.png";
import bwl4 from "../assets/bwl_4.png";
import bwl5 from "../assets/bwl_5.png";
import bwl6 from "../assets/bwl_6.png";
import bwl7 from "../assets/bwl_7.png";
import bwl8 from "../assets/bwl_8.png";
import bwl9 from "../assets/bwl_9.png";
import bwl10 from "../assets/bwl_10.png";

const products = [
  {
    id:"paper-container-round",
    title: "Paper Container with Lid (Round) (Heat Sealable)",
    sizes: [
  { capacity: "250ml", carton: "1000", images:[bowl_1, bowl_2, bwl1, bwl2] },
  { capacity: "350ml", carton: "1000", images: [bowl_3, bwl3, bwl9, bwl5] },
  { capacity: "500ml", carton: "1000", images: [bowl_4, bwl6, bwl7, bwl8] },
   
],
maq: "10000",

    rawMaterial: "Virgin Paper and Kraft",
    coating:"Bio Degradable",
    heatSealing: "Yes",
    customization:"Yes",
    usages: "Gravy,Soups,Cut Fruit,Ice creams Etc. (Gravy and Semi Gravy Foods)",
    image: product1,
    color: "#F3E9D8", // pastel beige
  },
  {
    id:"paper-lunch-box",
    title: "Paper Lunch Box Heat Sealing",
     sizes: [
  { capacity: "500ml", carton: "400" , images:[tamper1, tamper4]},
  { capacity: "750ml", carton: "300", images: [tamper2, tamper5]},
  { capacity: "1000ml", carton: "300", images: [tamper3, tamper6] }
],
maq: "10000",
    rawMaterial: "Virgin Paper and Kraft",
    coating:"Bio Degradable",
    heatSealing: "Yes",
    customization:"Yes",
    usages: "Biryani, Fried Rice, Kababs, Pasta, Noodles, Starters, Salads Etc. (Semi Gravy to Solid Foods)",
    image: product2,
    color: "#E6F1F6", // pastel blue
  },
  {
    id:"lunch-box",
    title: "Lunch Box",
    sizes: [
  { capacity: "500ml", carton: "1000", images:[lunch1, lunch4] },
  { capacity: "750ml", carton: "1000", images:[lunch2, lunch5] },
  { capacity: "1000ml", carton: "1000", images:[lunch3, lunch6] }
],
maq: "10000",
    rawMaterial: "Virgin Paper and Kraft",
    coating:"Bio Degradable",
    heatSealing: "No",
    customization:"Yes",
    usages: "Biryani, Fried Rice, Kababs, Noodles, Starters, Salads, Sweets, Fries Etc. ( Solid Foods to Semi Solid)",
    image: product3,
    color: "#F6E3E1", // pastel rose
  },
  {
    id:"meal-lunch-box",
    title: "Meal Lunch Box",
   sizes: [
  { capacity: "750ml", carton: "1000", images:[meal1] },
  { capacity: "1300ml", carton: "1000", images:[meal3] },
  { capacity: "2000ml", carton: "1000", images:[meal4] }
],
maq: "10000",
    rawMaterial: "Virgin Paper and Kraft",
    coating:"Bio Degradable",
    heatSealing: "No",
    customization:"Yes",
    usages: "Biryani, Fried Rice, Kababs, Noodles, Starters, Salads, Sweets, Fries Etc. ( Solid Foods to Semi Solid)",
    image: product4,
    color: "#F5EFD9", // pastel sand
  },
  {
    id:"noodle-box",
    title: "Noodle Box",
     sizes: [
  { capacity: "500ml", carton: "1000", images:[noodle2, noodle3] },
  { capacity: "750ml", carton: "1000", images:[noodle1] },
  { capacity: "900ml", carton: "1000", images:[product5] }
],
maq:" 10000",
    rawMaterial: "Virgin Paper and Kraft",
    coating:"Bio Degradable",
    heatSealing: "No",
    customization:"Yes",
    usages: "Semi Dry Chinese Starters, Noodles, Fried Rice Etc ( Solid Foods to Semi Solid)",
    image: product5,
    color: "#EAF4F2", // pastel mint
  },
  {
    id:"burger-box",
    title: "Burger Box",
     sizes: [
  { capacity: "Regular", carton: "500", images: [product6] },
  { capacity: "Large", carton: "500", images:[burger1] },
],
maq: "10000",
    rawMaterial: "Virgin Paper and Kraft",
    coating:"Bio Degradable",
    heatSealing: "No",
    customization:"Yes",
    usages: "Regular Burger, Large Burger",
    image: product6,
    color: "#F9E6EC", // pastel blush
  },
  {
    id:"pizza-box",
    title: "Pizza Box",
     sizes: [
  { capacity: "8 inch", carton: "1000", images:[product7] },
  { capacity: "10 inch", carton: "1000", images:[pizza1] },
  { capacity: "12 inch", carton: "1000", images:[pizza2] },
],
maq: "10000",
    rawMaterial: "Virgin Paper and Kraft",
    coating:"Bio Degradable",
    heatSealing: "No",
    customization:"Yes",
    usages: "Personal Pizza, Medium Pizza, Large Pizza",
    image: product7,
    color: "#FFF1DB", // pastel peach
  },
  {
    id:"boat-tray",
    title: "Boat Tray",
    sizes: [
  { capacity: "500ml", carton: "1000",images:[boat_4] },
  { capacity: "650ml", carton: "1000",images:[product8] },
  { capacity: "750ml", carton: "1000", images:[boat_2] },
  { capacity: "900ml", carton: "1000",images:[boat_1] },
],
maq: "10000",
    rawMaterial: "Virgin Paper and Kraft",
    coating:"Bio Degradable",
    heatSealing: "No",
    customization:"Yes",
    usages: "Fries, Kababs, Sweets, Nachos, Rolls Etc",
    image: product8,
    color: "#E9F2F1", // pastel aqua
  },
];

const ProductGrid = () => {
    useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "auto" });
      }, 200);
    }
  }
}, []);

  return (
    <div className="product-grid-container">
      
      {/* <h2 className="grid-title">Our Products</h2> */}

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
