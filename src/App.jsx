import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import About from './About/About';

function App() {
  
useEffect(() => {
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: false,   // animation happens only once
  });
}, []);


  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
