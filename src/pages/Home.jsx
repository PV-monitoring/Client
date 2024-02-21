import Hero from "../components/Hero";
import Products_dashboard from "../components/Products_dashboard";
import Products_mobileapp from "../components/Products_mobileapp";
import Pricing from "../components/Pricing";
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";

import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products_dashboard/>
      <Products_mobileapp/>
      <Pricing/>
      <Footer />
    </div>
  )
}

export default Home;