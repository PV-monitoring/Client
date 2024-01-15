import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products_dashboard from './components/Products_dashboard';
import Products_mobileapp from './components/Products_mobileapp';
import Pricing from './components/Pricing';

function App() {
  return (
      <div >
       <Navbar/>
       <Hero/>
       <Products_dashboard/>
       <Products_mobileapp/>
       <Pricing/>
      </div> 
  );
}

export default App;
