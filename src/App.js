import './App.css';
import React from 'react'
import GLOBE from "vanta/dist/vanta.globe.min";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
// import Dreamspark from './components/Dreamspark';
import Members from './components/Members';
import Events from './components/Events';
import ContactUs from './components/ContactUs'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


class App extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
  }

  



  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }


    render(){
    return(
    <BrowserRouter basename='mstc-website-23'>
      <ScrollToTop />
      <div id="parent" ref={this.vantaRef} className='min-h-screen'>
      <Navbar className="z-2"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
    )
  }
}


export default App;

