import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import About from './About/About';
import Products from './Products/Products';
import Contact from './Contact/Contact';
import ScrollToTop from './Components/ScrollToTop';
import Gallery from './Gallery/Gallery';
import BackToTop from './Components/BackToTop';
import WhatsAppButton from './Components/WhatsAppBtn';
import Certificates from './Certificates/Certificates';

function App() {
  
useEffect(() => {
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
    disable: () => window.innerWidth <= 768, // ✅ best practice
  });
}, []);


  return (
    <>
      <Router>
        <BackToTop/>
        <WhatsAppButton/>
        <Header/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/certificates' element={<Certificates/>}/>
          {/* <Route path='/gallery' element={<Gallery/>}/> */}
          <Route path='/contact-us' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
